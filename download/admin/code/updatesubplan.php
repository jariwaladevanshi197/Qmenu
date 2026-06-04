<?php
if (isset($_SERVER['HTTP_REFERER'])) {
    require '../../connect.php';

    $plantype = $_POST['plantype'];
    $price = $_POST['price'];
    $month = $_POST['month'];
    $expdate = $_POST['expdate'];
    $paydate = $_POST['paydate'];
    $restroid = $_POST['restroid'];


    $query = "UPDATE restro SET paymentdate='$paydate',subtype='$plantype',subplan='$month',expdate='$expdate',price='$price' WHERE id ='$restroid'";

    $result = mysqli_query($con, $query);

    if ($result) {
        echo '<span class="success">Updated SuccessFul</span>';
        // echo mysqli_error($con);
    } else {
        echo '<span class="fail">Update Unsuccessful</span>';
        echo mysqli_error($con);
    }
} else {
    header('location:../index.php');
    exit;
}
