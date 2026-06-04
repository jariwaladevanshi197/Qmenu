<?php
$con = mysqli_connect('127.0.0.1', 'root', '', 'qmenu');
if (!$con) {
    die('Connection failed: ' . mysqli_connect_error());
}

$res = mysqli_query($con, 'SHOW TABLES');
$tables = [];
while($row = mysqli_fetch_row($res)) {
    $tables[] = $row[0];
}

foreach ($tables as $table) {
    if (mysqli_query($con, "DROP TABLE IF EXISTS `$table`")) {
        echo "Dropped $table\n";
    } else {
        echo "Failed to drop $table: " . mysqli_error($con) . "\n";
    }
}
?>
