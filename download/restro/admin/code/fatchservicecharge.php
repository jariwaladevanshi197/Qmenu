
<?php
if (isset($_SERVER['HTTP_REFERER'])) {
    session_start();
    require '../../../connect.php';
    $restroid = $_SESSION['megausersession'];

    $sql = "select servicecharge from restro where id = " . $restroid . " limit 1";
    $query = mysqli_query($con, $sql);
    $row = mysqli_fetch_array($query);
    $discount = $row[0];
    echo $discount;
} else {
    header('location:../index.php');
    exit;
}
