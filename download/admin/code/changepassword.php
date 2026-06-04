<?php
if (isset($_SERVER['HTTP_REFERER'])) {
    require '../../connect.php';
    
    $password = md5($_POST['password']);
$restroid = $_POST['restroid'];


$query = "UPDATE restro SET password='$password' WHERE id ='$restroid'";

$result = mysqli_query($con, $query);

if ($result) {
    echo '<span class="success">Updated SuccessFul</span>';
    // echo mysqli_error($con);
} else {
    echo '<span class="fail">Update Unsuccessful</span>';
    echo mysqli_error($con);
}

} else {
    header('location:../index.php');
    exit;
}
