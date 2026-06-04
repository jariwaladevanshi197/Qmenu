<?php
if (isset($_SERVER['HTTP_REFERER'])) {
      require '../../connect.php';
      $fullname = $_POST['fullname'];
      $username = $_POST['username'];
      $email = $_POST['email'];
      $password = md5($_POST['password']);
      

      $query = "INSERT INTO admin( fullname, username, email, password) VALUES ('$fullname','$username','$email','$password')";
      
      $result = mysqli_query($con,$query);
      if ($result) {
            echo "<span class='success'> Added Successfully</span>";
      } else {
            echo mysqli_error($con);
            echo "<span class='fail'>Please Enter Correct Details</span>";
      }

} else {
      header('location:../index.php');
      exit;
}
      ?>
