<?php
if (isset($_SERVER['HTTP_REFERER'])) {
    require '../../../connect.php';
    session_start();
    $restroid = $_SESSION['megausersession'];
    $orderid = $_POST['orderid'];

    $filename = '../json/finalorder_' . $restroid . '.json';
    if (file_exists($filename)) {
        $jsonString = file_get_contents($filename);
        $data = json_decode($jsonString, true);
        foreach ($data as $key => $value) {
            if ($value['orderid'] == $orderid) {
                // $oldorder = $value;
                unset($data[$key]);
                file_put_contents($filename, json_encode($data));
                break;
            }
        }
    }
} else {
    header('location:../index.php');
    exit;
}
