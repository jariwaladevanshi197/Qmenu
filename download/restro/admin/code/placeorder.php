<?php
if (isset($_SERVER['HTTP_REFERER'])) {
    require '../../../connect.php';
    session_start();
    $restroid = $_SESSION['megausersession'];
    $json = $_POST['final'];
    $tableid = $json[0]['tableid'];
    $allitems = $json[0]['item'];

    foreach ($allitems as $key => $item) {

        $itemid = $item['id'];
        $sql = "select * from menuitems where id='$itemid' AND restroid = '$restroid'";
        $query = mysqli_query($con, $sql);
        $row = mysqli_fetch_array($query);
        if ($row) {
            // echo 'true';
            $json[0]['item'][$key]['price'] = $row['price'];
            $json[0]['item'][$key]['totalprice'] = $item['quantity'] *  $row['price'];
        } else {
            unset($json[0]['item'][$key]);
        }
    }

    // echo $tableid;
    $filename = '../json/preorder_' . $restroid . '.json';
    if (file_exists($filename)) {
        $jsonString = file_get_contents($filename);
        $data = json_decode($jsonString, true);
        // echo $data;
        if ($data == '' || $data == array()) {

            file_put_contents($filename, json_encode($json));
        } else {

            $data[count($data)] = $json[0];
            file_put_contents($filename, json_encode($data));
        }

        echo 'success';
    } else {
        $fp = fopen($filename, 'w');
        fwrite($fp, json_encode($json));
        fclose($fp);
        echo 'success';
    }
} else {
    header('location:../index.php');
    exit;
}
