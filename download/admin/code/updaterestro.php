<?php
if (isset($_SERVER['HTTP_REFERER'])) {
      require '../../connect.php';

      $mobileno = $_POST['mobileno'];
      $email = $_POST['email'];
      $password = $_POST['password'];
      $restroname = $_POST['restroname'];
      $themecode = $_POST['themecode'];
      $address = $_POST['address'];
      $gstno = $_POST['gstno'];
      $restroid = $_POST['restroid'];
      $restrolati = $_POST['restrolati'];
      $restrolong = $_POST['restrolong'];
      $restrodist = $_POST['restrodist'];
      $subtype = $_POST['subtype'];
      $subplan = $_POST['subplan'];
      ini_set("post_max_size", "30M");
      ini_set("upload_max_filesize", "30M");
      ini_set("memory_limit", "20000M");

      if (isset($_FILES['image']['size'])) {
            $milliseconds = round(microtime(true) * 1000);
            $filename = $_FILES["image"]["tmp_name"];
            $x = basename($_FILES["image"]["name"]);
            $ext =  "" . get_extension($x);
            if ($_FILES['image']['size'] >= 4097152 or $_FILES['image']['size'] != 0) {
                  $target_file =
                        '../images/qr/qrcodeof_' . $restroid . "." . $ext;
                  if ($ext == 'jpg' || $ext == 'jpeg' || $ext == 'png') {
                        $path = 'images/qr/qrcodeof_' . $restroid . "." . $ext;
                        if (move_uploaded_file($_FILES["image"]["tmp_name"], $target_file)) {
                              $query = "UPDATE restro SET qrcode='$path',restroname='$restroname',mobileno='$mobileno',email='$email',address='$address',gstno='$gstno',themecode='$themecode',latitude='$restrolati',longitude='$restrolong',distance='$restrodist',subtype='$subtype',subplan='$subplan' WHERE id ='$restroid'";
                              $result = mysqli_query($con, $query);
                              if ($result) {
                                    echo '<span class="success">Updated SuccessFul</span>';
                                    // echo mysqli_error($con);
                              } else {
                                    echo '<span class="fail">Update Unsuccessful</span>';
                                    // echo mysqli_error($con);
                              }
                        } else {
                              echo "Sorry, there was an error uploading your file.";
                        }
                  } else {
                        echo "Please Upload Image";
                  }
            } else {
                  echo "Please Upload Image Or Check It's Size";
            }
      } else {
            $query = "UPDATE restro SET restroname='$restroname',mobileno='$mobileno',email='$email',address='$address',gstno='$gstno',themecode='$themecode',latitude='$restrolati',longitude='$restrolong',distance='$restrodist',subtype='$subtype',subplan='$subplan' WHERE id ='$restroid'";

            $result = mysqli_query($con, $query);

            if ($result) {
                  echo '<span class="success">Updated SuccessFul</span>';
                  // echo mysqli_error($con);
            } else {
                  echo '<span class="fail">Update Unsuccessful</span>';
                  echo mysqli_error($con);
            }
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
