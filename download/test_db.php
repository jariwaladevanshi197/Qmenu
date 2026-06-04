<?php
$c = mysqli_connect('127.0.0.1', 'root', '', 'qmenu');
if (!$c) {
    die('Connection failed: ' . mysqli_connect_error());
}
echo "Connected successfully";
?>
