<?php
if (isset($_SERVER['HTTP_REFERER'])) {

    session_start();
    require '../../connect.php';

    $target_dir = "../pdf/";

    $restroid = $_SESSION['usersession'];
    $x = basename($_FILES["file"]["name"]);
    $ext =  "" . get_extension($x);
    $target_file = $target_dir . 'menuof_' . $restroid . '.' . $ext;


    if (move_uploaded_file($_FILES["file"]["tmp_name"], $target_file)) {


        $userimage =  "/adminrestro/pdf/" . 'menuof_' . $restroid . '.' . $ext;
        $query = "UPDATE restro SET pdf='$userimage' WHERE id='$restroid'";

        $result = mysqli_query($con, $query);

        if ($result) {
            echo "Successful";
        } else {
            echo mysqli_error($con);
            echo "Please Try Again later";
        }
    } else {
        echo "Sorry, there was an error uploading your file.";
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
