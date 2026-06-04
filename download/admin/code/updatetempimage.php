<?php
if (isset($_SERVER['HTTP_REFERER'])) {
      require '../../connect.php';
      $id = $_POST['id'];
      $title = $_POST['title'];
      $url = $_POST['url'];

      $x = basename($_FILES["image"]["name"]);
      $ext =  "" . get_extension($x);
      $milliseconds = round(microtime(true) * 1000);
      $target_file =  "../images/" . $milliseconds . "." . $ext;

      if (move_uploaded_file($_FILES["image"]["tmp_name"], $target_file)) {

            $path =  "images/" . $milliseconds . "." . $ext;
            $time = date('Y-m-d h:i:s', time());
            $query = "UPDATE theme SET title='$title',url='$url',image='$path' WHERE id= '$id'";

            $result = mysqli_query($con, $query);

            if ($result) {
                  echo '<span class="success">Updated SuccessFul</span>';
                  // echo mysqli_error($con);
            } else {
                  echo '<span class="fail">Update Unsuccessful</span>';
                  echo mysqli_error($con);
            }
      } else {
            echo "<div class='popup-error'>Sorry, there was an error uploading your file.</div>";
      }
} else {
      header('location:../index.php');
      exit;
}

function get_extension($file)
{
      $x = explode(".", $file);
      $extension = end($x);
      return $extension ? $extension : false;
}
