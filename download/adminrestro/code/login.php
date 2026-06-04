<?php
if (isset($_SERVER['HTTP_REFERER'])) {

      $a = 2592000000 * 6;
      ini_set('session.cookie_lifetime', $a);
      session_start();
      require '../../connect.php';
      $mobileno = $_POST['username'];
      $pass = md5($_POST['password']);


      $select = "select * from restro where mobileno = '$mobileno' and password = '$pass'";
      $query = mysqli_query($con, $select);

      $num = mysqli_num_rows($query);
      $row = mysqli_fetch_array($query);

      if ($num != 0) {
            if ($row['subtype'] == 0) {
                  $_SESSION['usersession'] = $row['id'];
                  $_SESSION['restroname'] = $row['restroname'];
                  // echo "<script>
                  //        alert(".$_SESSION['usersession'].");
                  //    </script>";
                  echo "<script>
            window.location = 'index.php';
         </script>";
            } elseif ($row['subtype'] == 1 or $row['subtype'] == 2) {
                  $_SESSION['megausersession'] = $row['id'];
                  $_SESSION['restroname'] = $row['restroname'];
                  echo "<script>
             window.location = '../restro/admin/index.php';
             </script>";
            }
      } else {
            echo mysqli_error($con);
            echo "<span class='fail'>Please enter correct details !</span>";
      }
} else {
      header('location:../index.php');
      exit;
}
