<?php
if (isset($_SERVER['HTTP_REFERER'])) {
    session_start();
    // $data = $_POST['data'];
if (isset($_SESSION['cartitems'])) {
    print_r($_SESSION['cartitems']);
} else {
    // echo 'Fail';
}

} else {
    header('location:../index.php');
    exit;
}
