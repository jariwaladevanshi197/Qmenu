<?php
if (isset($_SERVER['HTTP_REFERER'])) {
    session_start();
    require '../../../connect.php';

    $restroid = $_SESSION['megausersession'];
    $discount = $_POST['discount'];

    $query = "UPDATE restro SET discount='$discount' WHERE id='$restroid'";

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
