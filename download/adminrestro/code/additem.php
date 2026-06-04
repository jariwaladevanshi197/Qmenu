<?php
if (isset($_SERVER['HTTP_REFERER'])) {
      
      require '../../connect.php';
session_start();
$nameinhindi = $_POST['nameinhindi'];
$nameinguj = $_POST['nameinguj'];
$nameineng = $_POST['nameineng'];
$itemprice = $_POST['itemprice'];
$category = $_POST['category'];

$restroid = $_SESSION['usersession'];
$query = "INSERT INTO menuitems(restroid, categoryid, name_eng,name_hindi,name_guj, price) VALUES ('$restroid','$category','$nameineng','$nameinhindi','$nameinguj','$itemprice')";

$result = mysqli_query($con, $query);

if ($result) {
      echo '<span class="success">Item Added Successfully</span>';
      // echo mysqli_error($con);
} else {
      echo '<span class="fail">Faild Please Enter Valid Values</span>';
      echo mysqli_error($con);
}

} else {
      header('location:../index.php');
      exit;
}
