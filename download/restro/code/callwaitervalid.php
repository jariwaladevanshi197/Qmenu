<?php
if (isset($_SERVER['HTTP_REFERER'])) {

    require '../../connect.php';
    session_start();
    $restroid = $_SESSION['restroid'];
    $tablename = $_POST['tablename'];
    callwaiter($tablename, $restroid);
} else {
    header('location:../index.php');
    exit;
}


function callwaiter($tablename, $restroid)
{
    $filename = '../admin/json/waitercall_' . $restroid . '.json';
    if (file_exists($filename)) {

        $jsonString = file_get_contents($filename);
        $data = json_decode($jsonString, true);
        if ($data == '') {
            $data = array();
            array_push($data, $tablename);
            echo "<span class='success'>Successful</span>";
            file_put_contents($filename, json_encode($data));
        } else {
            if (in_array($tablename, $data)) {
                echo "<span class='success'>Successful</span>";
            } else {
                array_push($data, $tablename);
                echo "<span class='success'>Successful</span>";
                file_put_contents($filename, json_encode($data));
            }
        }
    } else {
        $array = array($tablename);
        $fp = fopen($filename, 'w');
        fwrite($fp, json_encode($array));
        fclose($fp);
        echo "<span class='success'>Successful</span>";
    }
}
