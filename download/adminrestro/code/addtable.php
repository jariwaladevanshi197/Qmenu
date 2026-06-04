<?php

if (isset($_SERVER['HTTP_REFERER'])) {

      require '../../connect.php';
      session_start();
      $tablename = $_POST['tablename'];

      $restroid = $_SESSION['usersession'];
      // $restroid = 3;


      $query = "INSERT INTO tables(restroid, name) VALUES ('$restroid','$tablename')";

      $result = mysqli_query($con, $query);

      if ($result) {
            echo '<span class="success">Table Added Successfully</span>';
            // echo mysqli_error($con);
      } else {
            echo '<span class="fail">Faild Please Enter Valid Values</span>';
            echo mysqli_error($con);
      }
} else {
      header('location:../index.php');
      exit;
}
