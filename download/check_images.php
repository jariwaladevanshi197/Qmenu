<?php
require 'd:/Xampp/htdocs/xampp/qmenu/connect.php';

$query = "SELECT id, name_eng, image FROM menuitems LIMIT 5";
$result = mysqli_query($con, $query);

echo "Database Image Paths:\n";
echo "=====================\n\n";

while ($row = mysqli_fetch_array($result)) {
    echo "ID: " . $row['id'] . "\n";
    echo "Name: " . $row['name_eng'] . "\n";
    echo "Image: " . $row['image'] . "\n";
    echo "---\n";
}
?>
