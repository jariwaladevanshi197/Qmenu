<?php
if (isset($_SERVER['HTTP_REFERER'])) {

      require '../../connect.php';


      $id = $_POST['catid'];

      $query = "DELETE FROM category WHERE id='$id'";
      $result = mysqli_query($con, $query);
      if ($result) {
            echo 'Deleted SuccessFul';
            // echo mysqli_error($con);
      } else {
            echo 'Unsuccessful';
            // echo mysqli_error($con);
      }
} else {
      header('location:../index.php');
      exit;
}
