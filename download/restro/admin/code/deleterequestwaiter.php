<?php
if (isset($_SERVER['HTTP_REFERER'])) {
    session_start();
    $restroid = $_SESSION['megausersession'];
    $name = $_POST['tablename'];
    $filename = '../json/waitercall_' . $restroid . '.json';
    $str = file_get_contents($filename);
    $json = json_decode($str, true);
    foreach($json as $key => $item) {
        if(is_array($item) && $item['tableno'] == $name) {
            unset($json[$key]);
        } else if($item == $name) {
            unset($json[$key]);
        }
    }
    $json = array_values($json); // Re-index array
    file_put_contents($filename, json_encode($json));
    print_r($json);
} else {
    header('location:../index.php');
    exit;
}
