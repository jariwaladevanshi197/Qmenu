<?php
if (isset($_SERVER['HTTP_REFERER'])) {
    require '../../../connect.php';
    session_start();
    $restroid = $_SESSION['megausersession'];
    $orderid = $_POST['orderid'];
    $billno = $_POST['billno'];
    $withgst = $_POST['withgst'];

    $finalorder = '../json/finalorder_' . $restroid . '.json';
    if (file_exists($finalorder)) {
        $jsonString = file_get_contents($finalorder);
        $data = json_decode($jsonString, true);

        $oldorder = array();
        $tableexist = 0;
        foreach ($data as $key => $value) {
            if ($value['orderid'] == $orderid) {
                $oldorder = $value;
                unset($data[$key]);
                file_put_contents($finalorder, json_encode($data));
                break;
            }
        }
        $items = array();
        $orderid = $oldorder['orderid'];
        $tableid = $oldorder['tableid'];
        $tablename = $oldorder['tablename'];
        $fullname = $oldorder['fullname'];
        $number = $oldorder['number'];
        $finalpricenotax = 0;
        foreach ($oldorder['item'] as $value) {
            $finalpricenotax += $value['totalprice'];
        }

        $sql = "select discount,servicecharge from restro where id = " . $restroid . " limit 1";
        $query = mysqli_query($con, $sql);
        $row = mysqli_fetch_array($query);
        $discount = $row[0];
        $servicecharge = $row[1];

        $grandtotal = 0;
        if ($withgst == 1) {
            $final = $finalpricenotax - ($finalpricenotax * ($discount / 100));
            $grandtotal =  $final + ($final * ($servicecharge / 100)) + ($final * 0.18);
        } else {
            $withouttax = $finalpricenotax - $discount + $servicecharge;
            // $gsttax = ($finalpricenotax - $discount + $servicecharge) * 0.18;
            $grandtotal = $withouttax;
        }


        $query = "INSERT INTO orderhistory(restroid, orderid, tableid, tablename, fullname, number,total,withgst,discount,servicetax,grandtotal) VALUES ('$restroid','$billno','$tableid','$tablename','$fullname','$number','$finalpricenotax','$withgst','$discount','$servicecharge','$grandtotal')";
        $result = mysqli_query($con, $query);
        if ($result) {
            $sql = "select id from orderhistory where orderid = " . $billno . " limit 1";
            $query = mysqli_query($con, $sql);
            $row = mysqli_fetch_array($query);
            $orderid = $row[0];
            $done = 0;
            foreach ($oldorder['item'] as $value) {
                $name_eng = $value['name_eng'];
                $name_hindi = $value['name_hindi'];
                $name_guj = $value['name_guj'];
                $price = $value['price'];
                $quantity = $value['quantity'];
                $totalprice = $value['totalprice'];
                $query = "INSERT INTO historyitem(orderid, name_eng, name_hindi, name_guj, price, quantity, totalprice) VALUES ('$orderid','$name_eng','$name_hindi','$name_guj','$price','$quantity','$totalprice')";

                $result = mysqli_query($con, $query);
                if ($result) {
                    $done = 1;
                } else {
                    echo 'faild';
                    echo mysqli_error($con);
                }
            }
            if ($done == 1) {
                echo 'order complete';
            }
        } else {
            echo 'fail';
        }
    }
} else {
    header('location:../index.php');
    exit;
}
