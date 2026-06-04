<?php
if (isset($_SERVER['HTTP_REFERER'])) {
    require '../../../connect.php';
    session_start();
$restroid = $_SESSION['megausersession'];

$mobile = $_POST['mobileno'];
$sender = 'YRHPIT';
$otp = mt_rand(100000, 999999);
$message = 'Welcome to Restorent,Your OTP to Confirm Order is ' . $otp;
$_SESSION['otp'] = $otp;
echo $otp;
try {
    
    // $ch = curl_init();
    // $url = "http://bulksms.yrhp.in/api/push.json";
    // curl_setopt($ch, CURLOPT_URL, $url);
    // curl_setopt($ch, CURLOPT_POST, true);
    // curl_setopt($ch, CURLOPT_POSTFIELDS, "apikey=5d6e4723f0318&route=trans_dnd&sender=YRHPIT&mobileno=$mobile&text=$message");
    // curl_setopt($ch, CURLOPT_RETURNTRANSFER, true);
    // $output = curl_exec($ch);
    // curl_close($ch);
    // $json = json_decode($output);
    // if (($json->{'status'}) == "success") {
    echo 'OTP SEND SuccessFully';
    // } else {
        //     echo "Please Enter Correct Mobile Number";
    // }
} catch (Exception $e) {
    die('Error: ' . $e->getMessage());
}

} else {
    header('location:../index.php');
    exit;
}
