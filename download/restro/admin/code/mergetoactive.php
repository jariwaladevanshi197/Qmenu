<?php
if (isset($_SERVER['HTTP_REFERER'])) {
    require '../../../connect.php';
    session_start();
    if (!isset($_SESSION['megausersession'])) {
        echo 'session expired';
        exit;
    }
    
    $restroid = $_SESSION['megausersession'];
    $orderIds = $_POST['orderIds'];

    if (empty($orderIds)) {
        echo 'no orders selected';
        exit;
    }

    $filename = '../json/finalorder_' . $restroid . '.json';
    if (file_exists($filename)) {
        $jsonString = file_get_contents($filename);
        $data = json_decode($jsonString, true);

        $mergedItems = [];
        $ordersToRemove = [];
        $firstOrder = null;
        $tableNames = [];
        $customerDetails = [];
        $orderNotes = [];

        foreach ($data as $key => $value) {
            if (in_array($value['orderid'], $orderIds)) {
                if ($firstOrder === null) $firstOrder = $value;
                $ordersToRemove[] = $key;
                
                if (!in_array($value['tablename'], $tableNames)) {
                    $tableNames[] = $value['tablename'];
                }
                
                if ($value['mess'] != '') {
                    $orderNotes[] = $value['mess'];
                }

                foreach ($value['item'] as $item) {
                    $k = $item['name_eng'];
                    if (!isset($mergedItems[$k])) {
                        $mergedItems[$k] = $item;
                        $mergedItems[$k]['quantity'] = 0;
                        $mergedItems[$k]['totalprice'] = 0;
                    }
                    $mergedItems[$k]['quantity'] += (int)$item['quantity'];
                    $mergedItems[$k]['totalprice'] += (float)$item['totalprice'];
                }
            }
        }

        if ($firstOrder) {
            // Remove old entries
            foreach ($ordersToRemove as $k) {
                unset($data[$k]);
            }

            // Create new merged entry
            $newMerged = $firstOrder;
            $newMerged['orderid'] = 'M-' . round(microtime(true) * 1000);
            $newMerged['tablename'] = implode(' + ', $tableNames);
            $newMerged['mess'] = implode(' | ', $orderNotes);
            $newMerged['item'] = array_values($mergedItems);
            // Optionally mark it as merged in the name
            if(strpos($newMerged['fullname'], '(Merged)') === false) {
                 $newMerged['fullname'] = $newMerged['fullname'] . ' (Merged)';
            }

            $data[] = $newMerged;
            $data = array_values($data);

            if(file_put_contents($filename, json_encode($data))) {
                echo 'success';
            } else {
                echo 'fail to write';
            }
        } else {
            echo 'no order found';
        }
    } else {
        echo 'file not found';
    }
} else {
    echo 'access denied';
}
?>
