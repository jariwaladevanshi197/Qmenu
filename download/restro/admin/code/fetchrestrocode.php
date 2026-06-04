<?php
if (isset($_SERVER['HTTP_REFERER'])) {
    require '../../../connect.php';
    session_start();
    $restroid = $_SESSION['megausersession'];

    
    $sql = "select * from restro where id='$restroid'";
$query = mysqli_query($con, $sql);
$row1 = mysqli_fetch_array($query);
$restrootp = $row1['restrootp'];

echo $restrootp;

} else {
    header('location:../index.php');
    exit;
}
