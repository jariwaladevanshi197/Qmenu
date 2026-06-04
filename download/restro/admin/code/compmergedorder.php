<?php
if (isset($_SERVER['HTTP_REFERER'])) {
    require '../../../connect.php';
    session_start();
    $restroid = $_SESSION['megausersession'];
    
    // Expecting an array of order IDs and potentially a merged ID/BillNo
    $orderIds = $_POST['orderIds']; // Array of IDs
    $billno = $_POST['billno']; // The new Merged Bill No
    $withgst = $_POST['withgst'];
    // $mergedTotal = $_POST['grandTotal']; // Optional, or recalculate
    
    if (empty($orderIds)) {
        echo 'no orders selected';
        exit;
    }

    $finalorder = '../json/finalorder_' . $restroid . '.json';
    if (file_exists($finalorder)) {
        $jsonString = file_get_contents($finalorder);
        $data = json_decode($jsonString, true);

        $mergedItems = [];
        $ordersToRemove = [];
        $firstOrder = null;
        $orderIdsToRemove = $orderIds; 
        $tableNamesArr = [];
        
        // 1. Collect Data & Identify Orders to Remove
        foreach ($data as $key => $value) {
            if (in_array($value['orderid'], $orderIdsToRemove)) {
                if ($firstOrder === null) $firstOrder = $value;
                
                $ordersToRemove[] = $key;
                
                // Track unique table names
                if(!in_array($value['tablename'], $tableNamesArr)){
                    $tableNamesArr[] = $value['tablename'];
                }
                
                // Aggregate Items
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
        
        // ... (previous logic for removing and reindexing)
        
        foreach ($ordersToRemove as $k) {
            unset($data[$k]);
        }
        $data = array_values($data); 
        file_put_contents($finalorder, json_encode($data));
        
        // 3. Prepare History Data
        if ($firstOrder) {
            $tableid = $firstOrder['tableid'];
            $tablename = implode(', ', $tableNamesArr); // Show all tables merged
            $fullname = $firstOrder['fullname'];
            $number = $firstOrder['number'];
            
            // Recalculate Totals Logic 
            $finalpricenotax = 0;
            foreach ($mergedItems as $v) {
                $finalpricenotax += $v['totalprice'];
            }
            
            $sql = "select discount,servicecharge from restro where id = " . $restroid . " limit 1";
            $query = mysqli_query($con, $sql);
            $row = mysqli_fetch_array($query);
            $discount = $row[0];
            $servicecharge = $row[1];
            
            $grandtotal = 0;
            $discAmt = $finalpricenotax * ($discount / 100);
            
            if ($withgst == 1) {
                $final = $finalpricenotax - $discAmt;
                $servAmt = $final * ($servicecharge / 100); // Service charge on discounted? Or total?
                // Following logic from compfinalorder... but improving clarity
                // compfinalorder: $charge = ($totalprice - $discount) * ($dbservicecharge / 100);
                $servAmt = ($finalpricenotax - $discAmt) * ($servicecharge / 100);
                $gstAmt = ($finalpricenotax - $discAmt) * 0.18;
                $grandtotal = ($finalpricenotax - $discAmt) + $servAmt + $gstAmt;
            } else {
                $servAmt = $finalpricenotax * ($servicecharge / 100); 
                // Wait, compfinalorder.php line 47 had weird logic. Assuming standard:
                // Total - Discount + Service Charge
                $grandtotal = $finalpricenotax - $discAmt + $servAmt;
            }

            // 4. Insert into History (Order Header)
            $query = "INSERT INTO orderhistory(restroid, orderid, tableid, tablename, fullname, number,total,withgst,discount,servicetax,grandtotal) VALUES ('$restroid','$billno','$tableid','$tablename','$fullname','$number','$finalpricenotax','$withgst','$discount','$servicecharge','$grandtotal')";
            $result = mysqli_query($con, $query);
            
            if ($result) {
                // Get the ID (Primary Key) of the inserted history row for Items Foreign Key
                 // Using orderid (billno) to fetch. Assuming it is unique enough or use insert_id
                 $last_id = mysqli_insert_id($con);
                 
                 $done = 0;
                 foreach ($mergedItems as $value) {
                    $name_eng = $value['name_eng'];
                    $name_hindi = $value['name_hindi']; 
                    $name_guj = $value['name_guj'];
                    $price = $value['price'];
                    $quantity = $value['quantity'];
                    $totalprice = $value['totalprice'];
                    
                    $query = "INSERT INTO historyitem(orderid, name_eng, name_hindi, name_guj, price, quantity, totalprice) VALUES ('$last_id','$name_eng','$name_hindi','$name_guj','$price','$quantity','$totalprice')";
                    $result = mysqli_query($con, $query);
                    if ($result) $done = 1;
                 }
                 
                 if ($done == 1) {
                     echo 'order complete';
                 }
            } else {
                echo 'fail header insert: ' . mysqli_error($con);
            }
        } else {
            echo 'fail: no order found';
        }
    }
} else {
    header('location:../index.php');
    exit;
}
?>
