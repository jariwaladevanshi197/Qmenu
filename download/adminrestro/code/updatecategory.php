<?php
if (isset($_SERVER['HTTP_REFERER'])) {
      
      require '../../connect.php';

      $nameinhindi = $_POST['nameinhindi'];
$nameinguj = $_POST['nameinguj'];
$nameineng = $_POST['nameineng'];
$catid = $_POST['catid'];

$query = "UPDATE category SET name_eng='$nameineng',name_guj='$nameinguj',name_hindi='$nameinhindi' WHERE id='$catid'";

$result = mysqli_query($con, $query);

if ($result) {
      echo '<span class="success">Updated SuccessFul</span>';
      // echo mysqli_error($con);
} else {
      echo '<span class="fail">Update Unsuccessful</span>';
      echo mysqli_error($con);
}

} else {
      header('location:../index.php');
      exit;
}
