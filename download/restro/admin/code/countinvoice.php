
<?php
if (isset($_SERVER['HTTP_REFERER'])) {
    require '../../../connect.php';
    session_start();
    $count = 0;
    $restroid = $_SESSION['megausersession'];
    $filename = '../json/finalorder_' . $restroid . '.json';
    $html = '';
    if (file_exists($filename)) {
        $jsonString = file_get_contents($filename);
        $data = json_decode($jsonString, true);
        if ($data != '' &&  $data != array()) {
            foreach ($data as $value) {
                $count += 1;
            }
        }
    }
    echo $count;
} else {
    header('location:../index.php');
    exit;
}
