<?php
require '../../../connect.php';
session_start();
$restroid = $_SESSION['restroid'];
$fullname = $_POST['fullname'];
$email = $_POST['email'];
$feedback = $_POST['feedback'];
$mobile = $_POST['mobile'];


$time = strtotime($_POST['date']);
$new_date = date('Y-m-d', $time);

$query = "INSERT INTO feedback(restroid, fullname,mobile, email,dob, feedback) VALUES ('$restroid','$fullname','$mobile','$email','$new_date','$feedback')";

$result = mysqli_query($con, $query);

if ($result) {
      echo '<span class="success">Successful</span>';
      // echo mysqli_error($con);
} else {
      echo '<span class="fail">Unsuccessful</span>';
      // echo mysqli_error($con);
}
