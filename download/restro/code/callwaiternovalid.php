<?php
if (isset($_SERVER['HTTP_REFERER'])) {

    require '../../connect.php';
    session_start();
    $restroid = $_SESSION['restroid'];
    $restrootp = $_POST['restrootp'];
    $tablename = $_POST['tablename'];
    $query = "select * from restro where id = '$restroid' ";
    $result = mysqli_query($con, $query);
    if ($result) {
        $row = mysqli_fetch_array($result);
        if ($row) {
            $x = $row['restrootp'];
            if ($x == $restrootp) {
                callwaiter($tablename, $restroid, $con);
            } else {
                echo 'Please Enter Correct Restro Code';
            }
        }
    } else {
        echo 'Faild';
        echo mysqli_error($con);
    }
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
