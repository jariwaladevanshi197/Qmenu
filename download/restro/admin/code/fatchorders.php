<?php
if (isset($_SERVER['HTTP_REFERER'])) {
    require '../../../connect.php';
    session_start();
    $restroid = $_SESSION['megausersession'];
    
    $filter = isset($_POST['filter']) ? $_POST['filter'] : 'pending';
    $search = isset($_POST['search']) ? $_POST['search'] : '';
    $sort = isset($_POST['sort']) ? $_POST['sort'] : 'desc';
    
    // New Advanced Filters
    $dateFrom = isset($_POST['dateFrom']) ? $_POST['dateFrom'] : '';
    $dateTo = isset($_POST['dateTo']) ? $_POST['dateTo'] : '';
    $tableId = isset($_POST['tableId']) ? $_POST['tableId'] : '';
    
    $pendingFile = '../json/preorder_' . $restroid . '.json';
    $completedFile = '../json/finalorder_' . $restroid . '.json';
    
    $allOrders = array();
    
    // Load Pending Orders
    if (($filter == 'pending' || $filter == 'all' || $filter == 'on_process') && file_exists($pendingFile)) {
        $pData = json_decode(file_get_contents($pendingFile), true);
        if (is_array($pData)) {
            foreach ($pData as $o) {
                // If filter is 'on_process', we treat all pending as on_process for now 
                // unless there's a specific status field for it.
                $o['status'] = 'Pending';
                $allOrders[] = $o;
            }
        }
    }
    
    // Load Completed Orders
    if (($filter == 'completed' || $filter == 'all') && file_exists($completedFile)) {
        $cData = json_decode(file_get_contents($completedFile), true);
        if (is_array($cData)) {
            foreach ($cData as $o) {
                $o['status'] = 'Completed';
                $allOrders[] = $o;
            }
        }
    }

    // Sort Orders
    usort($allOrders, function($a, $b) use ($sort) {
        $t1 = strtotime($a['timestamp'] ?? '');
        $t2 = strtotime($b['timestamp'] ?? '');
        return ($sort == 'desc') ? ($t2 - $t1) : ($t1 - $t2);
    });

    $html = '';
    $foundMatch = false;
    foreach ($allOrders as $index => $order) {
        $match = true;
        
        // Search Filter
        if ($search != '') {
            $orderString = strtolower(($order['fullname'] ?? '') . ($order['orderid'] ?? '') . ($order['tablename'] ?? ''));
            if (strpos($orderString, $search) === false) $match = false;
        }
        
        // Table Filter
        if ($match && $tableId != '') {
             $tid = $order['tableid'] ?? '';
             if ($tid != $tableId) $match = false;
        }

        // Date Range Filter
        if ($match && ($dateFrom != '' || $dateTo != '')) {
            $orderDateStr = date('Y-m-d', strtotime($order['timestamp'] ?? ''));
            if ($dateFrom != '' && $orderDateStr < $dateFrom) $match = false;
            if ($dateTo != '' && $orderDateStr > $dateTo) $match = false;
        }

        if ($match) {
            $foundMatch = true;
            $statusClass = ($order['status'] == 'Pending') ? 'status-pending' : 'status-completed';
            $statusLabel = ($order['status'] == 'Pending') ? 'IN PROGRESS' : 'COMPLETED';
            
            // Extract Table Number (Actual Full Name)
            $tableNum = '';
            $rawTableID = $order['tableid'] ?? '';
            $rawTablePath = $order['tablename'] ?? '';
            
            // 1. Try JSON Table Name first
            if ($rawTablePath && $rawTablePath !== 'null' && trim($rawTablePath) !== '') {
                $tableNum = trim($rawTablePath);
            } 
            
            // 2. If Name is empty but we have an ID, look it up
            if ($tableNum == '' && $rawTableID && $rawTableID !== 'null' && trim($rawTableID) !== '' && $rawTableID !== '0') {
                $tid = mysqli_real_escape_string($con, $rawTableID);
                $tQuery = "SELECT name FROM tables WHERE id = '$tid' LIMIT 1";
                $tRes = mysqli_query($con, $tQuery);
                if ($tRow = mysqli_fetch_array($tRes)) {
                    $tableNum = trim($tRow['name']);
                } else {
                    $tableNum = $rawTableID; 
                }
            }
            
            // 3. Last resort fallback
            if ($tableNum == '' || $tableNum == '?' || strtolower($tableNum) == 'null' || strtolower(trim($tableNum)) == 'table null') {
                $tableNum = '?';
            }
            
            // Clean up 'Table ' prefix for the small badge display
            $displayTable = preg_replace('/^Table\s+/i', '', $tableNum);

            // Ultra-Robust Time Display
            $rawTs = $order['timestamp'] ?? 'Now';
            if (preg_match('/(\d{1,2}:\d{2})\s*(AM|PM|am|pm)/i', $rawTs, $m)) {
                $formattedTime = strtoupper($m[1] . ' ' . $m[2]);
            } else {
                $ts = strtotime(str_replace(',', '', $rawTs));
                $formattedTime = $ts ? date("h:i A", $ts) : $rawTs;
            }

            $currentTableForPrint = $tableNum;
            
            $totalPrice = 0;
            $itemsHtml = '';
            $printHtml = '';
            $itemCount = 1;
            foreach ($order['item'] as $item) {
                $totalPrice += $item['totalprice'];
                $itemsHtml .= '
                <div class="order-item-row">
                    <span class="item-name">' . $item['name_eng'] . '</span>
                    <span class="item-qty">x ' . $item['quantity'] . '</span>
                    <span class="item-price">₹' . $item['totalprice'] . '</span>
                </div>';
                
                // Print HTML structure (Table Rows)
                $printHtml .= '<tr>
                    <td class="item-id" scope="row">' . $itemCount . '</td>
                    <td>' . ($item['name_eng'] ?? 'Item') . '</td>
                    <td class="center">' . ($item['quantity'] ?? '1') . '</td>
                </tr>';
                $itemCount++;
            }

            $printAction = "printclick('print_" . $index . "','" . addslashes($order['mess'] ?? '') . "', '" . addslashes($currentTableForPrint) . "', '" . addslashes($order['fullname'] ?? '') . "', '" . addslashes($order['number'] ?? '') . "')";

            $html .= '
            <div class="col-12 col-md-6 col-lg-4 mb-4">
                <div class="order-card">
                    <div class="order-card-header">
                        <div class="table-badge">' . $displayTable . '</div>
                        <div class="order-info">
                            <h5>' . ($order['fullname'] ?: 'Customer') . '</h5>
                            <div class="order-meta">
                                <span class="order-id">#' . ($order['orderid'] ?: 'N/A') . '</span>
                                <span class="dot"></span>
                                <span class="order-time">' . $formattedTime . '</span>
                            </div>
                        </div>
                        <div class="status-indicator ' . $statusClass . '">' . $statusLabel . '</div>
                    </div>
                    
                    <div class="order-items-list scrollbar-light-blue">
                        ' . $itemsHtml . '
                    </div>
                    
                    <div class="order-card-footer">
                        <div class="order-note-container ' . ($order['mess'] ? '' : 'is-default') . '">
                            <i class="fa fa-sticky-note-o"></i> 
                            <span>' . ($order['mess'] ?: 'No special instructions') . '</span>
                        </div>
                        
                        <div class="total-row">
                            <span>Total Amount</span>
                            <span class="total-price">₹' . $totalPrice . '</span>
                        </div>
                        
                        <div class="order-actions">
                            <button class="action-btn print-btn" onclick="' . $printAction . '" title="Print Order">
                                <i class="fa fa-print"></i> <span>PRINT</span>
                            </button>';
            
            if ($order['status'] == 'Pending') {
                $html .= '
                            <button class="action-btn complete-btn btncomp" data-id="' . $order['orderid'] . '" title="Complete Order">
                                <i class="fa fa-check"></i> <span>READY</span>
                            </button>';
            }
            
            $html .= '
                            <button class="action-btn delete-btn btnremoveorder" data-id="' . $order['orderid'] . '" title="Remove Order">
                                <i class="fa fa-trash"></i>
                            </button>
                        </div>
                    </div>
                </div>
                <!-- Hidden Print content for JS -->
                <div id="print_' . $index . '" style="display:none">' . $printHtml . '</div>
            </div>';
        }
    }

    if (!$foundMatch) {
        $html = '<div class="col-12 text-center py-5">
                    <div class="no-orders-box">
                        <i class="fa fa-coffee fa-3x mb-3" style="color: var(--prem-primary); opacity: 0.3;"></i>
                        <h2>No orders found</h2>
                        <p>Orders will appear here once customers place them.</p>
                    </div>
                 </div>';
    }

    echo $html;
} else {
    header('location:../index.php');
    exit;
}
