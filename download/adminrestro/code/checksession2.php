<?php
session_start();
$restroid = $_SESSION['usersession'];
$sql = "select status from restro where id='$restroid'";
$query = mysqli_query($con, $sql);
$row1 = mysqli_fetch_array($query);
$x = $row1[0];
if ($x == 0) {
      // echo "<script>alert('yes');</script>";
      header("Location: pagenotfound.php");
}
if (isset($_SESSION['usersession'])) {
} else {
      header("Location: sign-in.php");
}
