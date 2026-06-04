<?php
if (isset($_SERVER['HTTP_REFERER'])) {
    require '../../../connect.php';
    session_start();
    date_default_timezone_set('Asia/Kolkata');
    $restroid = $_SESSION['restroid'];
    $json = $_POST['final'];
    $tableid = $json[0]['tableid'];
    $allitems = $json[0]['item'];
    $json[0]['timestamp'] = date("d M, h:i A"); // e.g. 14 Feb, 06:30 PM

    foreach ($allitems as $key => $item) {
        $itemid = $item['id'];
        $sql = "select * from menuitems where id='$itemid' AND restroid = '$restroid'";
        $query = mysqli_query($con, $sql);
        $row = mysqli_fetch_array($query);
        if ($row) {
            $json[0]['item'][$key]['price'] = $row['price'];
            $json[0]['item'][$key]['totalprice'] = $item['quantity'] *  $row['price'];
        } else {
            unset($json[0]['item'][$key]);
        }
    }
    
    $filename = '../../../restro/admin/json/preorder_' . $restroid . '.json';
    
    // Open the file for reading and writing. 
    // 'c+' creates the file if it doesn't exist, and places the pointer at the beginning.
    $fp = fopen($filename, 'c+');
    
    if (flock($fp, LOCK_EX)) { // Acquire an exclusive lock
        $filesize = filesize($filename);
        $data = array();
        
        if ($filesize > 0) {
            $jsonString = fread($fp, $filesize);
            $data = json_decode($jsonString, true);
        }
        
        // Ensure data is an array
        if (!is_array($data)) {
            $data = array();
        }
        
        // Append the new order
        $data[] = $json[0];
        
        // Truncate the file to 0 length and rewind
        ftruncate($fp, 0);
        rewind($fp);
        
        // Write the new data
        fwrite($fp, json_encode($data));
        fflush($fp); // Flush output before releasing the lock
        
        flock($fp, LOCK_UN); // Release the lock
        echo 'success';
    } else {
        echo 'error_locking';
    }
    
    fclose($fp);
} else {
    header('location:../../index.php');
    exit;
}
