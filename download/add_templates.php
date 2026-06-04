<?php
require 'connect.php';

$templates = [
    ['title' => 'DARK-DEFAULT', 'url' => 'dark-default', 'image' => 'images/tmp1.jpg'],
    ['title' => 'DARK-INDIGO', 'url' => 'dark-indigo', 'image' => 'images/tmp1.jpg'],
    ['title' => 'DARK-PINK', 'url' => 'dark-pink', 'image' => 'images/tmp1.jpg'],
    ['title' => 'DARK-YELLOW', 'url' => 'dark-yellow', 'image' => 'images/tmp3.jpg'],
    ['title' => 'LIGHT-DEFAULT', 'url' => 'light-default', 'image' => 'images/tmp2.jpg'],
    ['title' => 'LIGHT-INDIGO', 'url' => 'light-indigo', 'image' => 'images/tmp2.jpg'],
    ['title' => 'LIGHT-PINK', 'url' => 'light-pink', 'image' => 'images/tmp2.jpg'],
    ['title' => 'LIGHT-YELLOW', 'url' => 'light-yellow', 'image' => 'images/tmp2.jpg']
];

foreach ($templates as $t) {
    $title = $t['title'];
    $url = $t['url'];
    $image = $t['image'];
    
    // Check if exists
    $check = mysqli_query($con, "SELECT id FROM theme WHERE url = '$url'");
    if (mysqli_num_rows($check) == 0) {
        $sql = "INSERT INTO theme (title, image, url) VALUES ('$title', '$image', '$url')";
        if (mysqli_query($con, $sql)) {
            echo "Added: $title<br>";
        } else {
            echo "Error adding $title: " . mysqli_error($con) . "<br>";
        }
    } else {
        echo "Exists: $title<br>";
    }
}
echo "<h3>Migration Complete! Please refresh your Template Master page.</h3>";
?>
