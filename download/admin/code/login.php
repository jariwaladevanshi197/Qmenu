<?php
if (isset($_SERVER['HTTP_REFERER'])) {
      $a = 2592000000 * 6 ;
      ini_set('session.cookie_lifetime', $a);
session_start();
require '../../connect.php';
$username = $_POST['username'];
$pass = md5($_POST['password']);

$select = "select * from admin where username = '$username' and password = '$pass'";
$query = mysqli_query($con,$select);

$row = mysqli_num_rows($query);


if ($row) {
      $_SESSION['adminsession'] = $username;
           echo "<script>
           window.location = 'dashboard.php';
         </script>";
} else {
      echo mysqli_error($con);
      echo "<span class='fail'>Please enter correct details !</span>";
}
} else {
      header('location:../index.php');
      exit;
}
?>
