<?php
$con = mysqli_connect('127.0.0.1', 'root', '', 'qmenu');
if (!$con) {
    die('Connection failed: ' . mysqli_connect_error());
}

$queries = [
    "DROP TABLE IF EXISTS `admin`",
    "CREATE TABLE `admin` (
      `id` int(11) NOT NULL AUTO_INCREMENT,
      `fullname` varchar(200) NOT NULL,
      `username` varchar(200) NOT NULL,
      `email` varchar(200) NOT NULL,
      `password` varchar(300) NOT NULL,
      PRIMARY KEY (`id`),
      UNIQUE KEY `username` (`username`)
    ) ENGINE=InnoDB DEFAULT CHARSET=latin1",
    "INSERT INTO `admin` (`id`, `fullname`, `username`, `email`, `password`) VALUES
    (3, 'suratbest', 'suratbest', 'info@surat.best', '161c3a0332456a2cd82753ea80a51091')"
];

foreach ($queries as $sql) {
    if (mysqli_query($con, $sql)) {
        echo "Success: " . substr($sql, 0, 50) . "...\n";
    } else {
        echo "Error: " . mysqli_error($con) . " for query: $sql\n";
    }
}
?>
