<?php
if (isset($_SERVER['HTTP_REFERER'])) {
      session_start();
      $restroid = $_SESSION['megausersession'];
      $name = $_POST['tablename'];
$filename = '../json/paymentcall_' . $restroid . '.json';
$str = file_get_contents($filename);
$json = json_decode($str, true);
if (($key = array_search($name, $json)) !== false) {
      unset($json[$key]);
}
file_put_contents($filename, json_encode($json));
print_r($json);

} else {
      header('location:../index.php');
      exit;
}
