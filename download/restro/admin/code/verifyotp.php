<?php
if (isset($_SERVER['HTTP_REFERER'])) {
    require '../../../connect.php';
    session_start();
    $restroid = $_SESSION['megausersession'];

    $otp = $_POST['otp'];
    $mobile = $_POST['mobile'];
    $tableno = $_POST['tableno'];

    if (isset($_SESSION['otp'])) {
        if ($_SESSION['otp'] == $otp) {
            echo 'Success';
        } else {
            echo '<div class="fail">OTP Is Incorrect Please Enter Valid OTP</div>';
        }
    } else {
        echo '<div class="fail">OTP Is Incorrect Please Enter Valid OTP</div>';
    }
} else {
    header('location:../index.php');
    exit;
}
