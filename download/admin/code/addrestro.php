<?php
if (isset($_SERVER['HTTP_REFERER'])) {
      require '../../connect.php';

      $mobileno = $_POST['mobileno'];
      $email = $_POST['email'];
      $password = md5($_POST['password']);
      $restroname = $_POST['restroname'];
      $themecode = $_POST['themecode'];
      $address = $_POST['address'];
      $gstno = $_POST['gstno'];
      $subplan = $_POST['subplan'];
      $subtype = $_POST['subtype'];
      $price = $_POST['price'];
      

      $restrolati = $_POST['restrolati'];
      $restrolong = $_POST['restrolong'];
      $restrodist = $_POST['restrodist'];
      $time = date('Y-m-d', time());


      $query = "select * from restro where mobileno = '$mobileno'";
      $check = mysqli_query($con, $query);
      $row = mysqli_num_rows($check);
      if ($row > 0) {
            echo '<span class="fail">Phone Number Exist</span>';
      } else {

            $joindate =  $time;
            $paymentdate =  $time;
            $expdate = $subplan;
            $timestamp = strtotime($time);
            $month = '+' . $subplan . ' ' . 'MONTH';
            $final = date("Y-m-d", strtotime($month, $timestamp));
            // $url = 'minires/suratbest/template/light-pink/index.php?restroid=';
            $randome = rand(1000, 9999);
            $query = "SHOW TABLE STATUS LIKE 'restro'";
            $result = mysqli_query($con, $query);
            $result = mysqli_fetch_assoc($result);
            $restroid_new = $result['Auto_increment'];
            $slug = md5($restroid_new);
            
            $path = "";
            if (isset($_FILES['image']) && $_FILES['image']['size'] > 0) {
                  $x = basename($_FILES["image"]["name"]);
                  $ext = get_extension($x);
                  $target_file = '../images/qr/qrcodeof_' . $restroid_new . "." . $ext;
                  if (move_uploaded_file($_FILES["image"]["tmp_name"], $target_file)) {
                        						$path = 'images/qr/qrcodeof_' . $restroid_new . "." . $ext;
                  }
            }

            $query = "INSERT INTO restro( restroname,address,gstno ,mobileno,email, password, themecode, status,latitude,longitude,distance,joindate,paymentdate,subplan,subtype,expdate,price,slug,restrootp,qrcode) VALUES ('$restroname','$address','$gstno','$mobileno','$email','$password','$themecode','1','$restrolati','$restrolong','$restrodist','$joindate','$paymentdate','$subplan','$subtype','$final','$price','$slug','$randome','$path')";

            $result = mysqli_query($con, $query);

            if ($result) {
                  echo '<span class="success">Successful</span>';
                  // echo mysqli_error($con);
            } else {
                  echo '<span class="fail">Unsuccessful</span>';
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
