<?php
if (isset($_SERVER['HTTP_REFERER'])) {

      session_start();
      require '../../../connect.php';
      $nameinhindi = $_POST['nameinhindi'];
      $nameinguj = $_POST['nameinguj'];
      $nameineng = $_POST['nameineng'];
      $categorydesc = $_POST['categorydesc'];
      $restroid = $_SESSION['megausersession'];



      $query = "INSERT INTO category(restroid, name_eng,name_hindi,name_guj,categorydesc) VALUES ($restroid,'$nameineng','$nameinhindi','$nameinguj','$categorydesc')";
      $result = mysqli_query($con, $query);

      if ($result) {
            echo '<span class="success">Category Added Successfully</span>';
            // echo mysqli_error($con);
      } else {
            echo '<span class="fail">Faild Please Enter Valid Values</span>';
            echo mysqli_error($con);
      }
} else {
      header('location:../index.php');
      exit;
}
