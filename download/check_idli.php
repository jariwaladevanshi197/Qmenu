<?php
require 'd:/Xampp/htdocs/xampp/qmenu/connect.php';
$query = "SELECT id, name_eng, image FROM menuitems WHERE id=4";
$result = mysqli_query($con, $query);
$row = mysqli_fetch_array($result);
echo "ID: " . $row['id'] . "\n";
echo "Name: " . $row['name_eng'] . "\n";
echo "Image: '" . $row['image'] . "'\n";
?>
