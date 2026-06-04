<?php
if (isset($_SERVER['HTTP_REFERER'])) {
    require '../../../connect.php';


    $id = $_POST['catid'];

    $select = "select * from menuitems where categoryid = '$id'";
    $query = mysqli_query($con, $select);
    $row = mysqli_num_rows($query);
    // echo $id;
    // print_r($row);
    if ($row <= 0) {
        $query = "DELETE FROM category WHERE id='$id'";
        $result = mysqli_query($con, $query);
        if ($result) {
            echo 'Deleted SuccessFul';
            // echo mysqli_error($con);
        } else {
            echo 'Unsuccessful';
            // echo mysqli_error($con);
        }
    } else {
        echo 'Please First Delete All Item Of Category';
    }
} else {
    header('location:../index.php');
    exit;
}
