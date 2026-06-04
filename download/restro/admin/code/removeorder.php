<?php
if (isset($_SERVER['HTTP_REFERER'])) {
    require '../../../connect.php';
    session_start();
    $restroid = $_SESSION['megausersession'];
    $orderid = $_POST['orderid'];

    $filename = '../json/preorder_' . $restroid . '.json';
    
    // Open for reading and writing
    $fp = fopen($filename, 'c+');
    
    if (flock($fp, LOCK_EX)) { // Lock
        $filesize = filesize($filename);
        $data = array();
        if ($filesize > 0) {
            $jsonString = fread($fp, $filesize);
            $data = json_decode($jsonString, true);
        }
        
        if (is_array($data)) {
            foreach ($data as $key => $value) {
                if ($value['orderid'] == $orderid) {
                    unset($data[$key]);
                    // Re-index array if needed? JSON encoded Assoc array might become object if keys are missing.
                    // array_values() fixes this.
                    $data = array_values($data);
                    break;
                }
            }
            
            ftruncate($fp, 0);
            rewind($fp);
            fwrite($fp, json_encode($data));
            fflush($fp);
        }
        flock($fp, LOCK_UN); // Unlock
    }
    fclose($fp);
} else {
    header('location:../index.php');
    exit;
}
