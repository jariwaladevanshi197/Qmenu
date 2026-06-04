<?php
if (isset($_SERVER['HTTP_REFERER'])) {

      require '../../../connect.php';
      $id = $_POST['itemid'];

      $sql = "select image from menuitems where id = " . $id . " limit 1";
      $query = mysqli_query($con, $sql);
      $row = mysqli_fetch_array($query);
      $imageoldpath = $row[0];

      $filename = basename($imageoldpath);
      $pathold = '../images/' . $filename;

      if (file_exists($pathold)) {
            if ($filename != 'defaultitem.jpg') {
                  unlink($pathold);
            }
            // echo 'File ' . $pathold . ' has been deleted';
            $query = "DELETE FROM menuitems WHERE id='$id'";

            $result = mysqli_query($con, $query);

            if ($result) {
                  echo 'Deleted SuccessFul';
                  // echo mysqli_error($con);
            } else {
                  echo 'Unsuccessful';
                  echo mysqli_error($con);
            }
      } else {
            $query = "DELETE FROM menuitems WHERE id='$id'";

            $result = mysqli_query($con, $query);

            if ($result) {
                  echo 'Deleted SuccessFul';
                  // echo mysqli_error($con);
            } else {
                  echo 'Unsuccessful';
                  echo mysqli_error($con);
            }
      }
} else {
      header('location:../index.php');
      exit;
}
