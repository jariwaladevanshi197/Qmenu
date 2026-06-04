<?php
if (isset($_SERVER['HTTP_REFERER'])) {
      require '../../connect.php';
      $title = $_POST['title'];
$url = $_POST['url'];

$x = basename($_FILES["image"]["name"]);
       $ext =  "". get_extension($x);
       $milliseconds = round(microtime(true) * 1000);
       $target_file =  "../images/" . $milliseconds . "." . $ext;
      // echo $target_file;
       if (move_uploaded_file($_FILES["image"]["tmp_name"], $target_file)) {
 
             $path =  "images/" . $milliseconds . "." . $ext;
             $time = date('Y-m-d h:i:s', time());
             $query = "INSERT INTO theme(title, image, url) VALUES ('$title','$path','$url')";
 
             $result = mysqli_query($con, $query);
 
             if ($result) {
                   echo "<span class='success'>Templete Added Successfully</span>";
             } else {
                   echo mysqli_error($con);
                   echo "<span class='fail'>Please Enter Correct Details</span>";
             }
       } else {
             echo "<span class='fail'>Sorry, there was an error uploading your file.</span>";
            }
      } else {
            header('location:../index.php');
            exit;
      }

      function get_extension($file) {
            $x = explode(".", $file);
            $extension = end($x);
            return $extension ? $extension : false;
      }
      
      ?>
