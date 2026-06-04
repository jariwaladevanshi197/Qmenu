<?php
if (isset($_SERVER['HTTP_REFERER'])) {
    session_start();
    $data = $_POST['d'];
$_SESSION['cartitems'] = $data;
print_r($_SESSION['cartitems']);

} else {
    header('location:../index.php');
    exit;
}
