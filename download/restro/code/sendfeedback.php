<?php
if (isset($_SERVER['HTTP_REFERER'])) {

      require '../../connect.php';
      session_start();
      $no = $_POST['no'];
      $restroid = $_SESSION['restroid'];
      $fullname = $_POST['fullname'];
      $email = $_POST['email'];
      $feedback = $_POST['feedback'];
      $mobile = $_POST['mobile'];
      $filename = '../admin/json/paymentcall_' . $restroid . '.json';
      if (file_exists($filename)) {
            $jsonString = file_get_contents($filename);
            $data = json_decode($jsonString, true);
            if (in_array($no, $data)) {
                  echo "<span class='success'>Successful</span>";
            } else {
                  $new_date = '';
                  if ($_POST['date'] != '') {
                        $time = strtotime($_POST['date']);
                        $new_date = date('Y-m-d', $time);
                  } else {
                        $time = strtotime($_POST['date']);
                        $new_date = "NULL";
                  }
                  $query = "INSERT INTO feedback(restroid, fullname,mobile, email,dob, feedback) VALUES ('$restroid','$fullname','$mobile','$email','$new_date','$feedback')";
                  $result = mysqli_query($con, $query);

                  if ($result) {
                        // echo '<span class="success">Successful</span>';

                        if (file_exists($filename)) {
                              $jsonString = file_get_contents($filename);
                              $data = json_decode($jsonString, true);
                              if (in_array($no, $data)) {
                                    echo "<span class='success'>Successful</span>";
                              } else {
                                    array_push($data, $no);
                                    echo "<span class='success'>Successful</span>";
                              }
                              file_put_contents($filename, json_encode($data));
                        } else {
                              $array = array($no);
                              $fp = fopen($filename, 'w');
                              fwrite($fp, json_encode($array));
                              fclose($fp);
                              echo "<span class='success'>Successful</span>";
                        }
                        // echo mysqli_error($con);
                  } else {
                        echo '<span class="fail">Unsuccessful</span>';
                        // echo mysqli_error($con);
                  }
            }
      } else {
            $array = array($no);
            $fp = fopen($filename, 'w');
            fwrite($fp, json_encode($array));
            fclose($fp);

            $time = strtotime($_POST['date']);
            $new_date = date('Y-m-d', $time);

            $query = "INSERT INTO feedback(restroid, fullname,mobile, email,dob, feedback) VALUES ('$restroid','$fullname','$mobile','$email','$new_date','$feedback')";

            $result = mysqli_query($con, $query);

            if ($result) {
                  echo "<span class='success'>Successful</span>";
            } else {
                  echo 'faild';
            }
      }
} else {
      header('location:../index.php');
      exit;
}
