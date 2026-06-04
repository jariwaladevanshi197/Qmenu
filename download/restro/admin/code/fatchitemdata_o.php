
<?php
if (isset($_SERVER['HTTP_REFERER'])) {
    require '../../../connect.php';
    session_start();
    $restroid = $_SESSION['megausersession'];
    $itemid = $_POST['itemid'];
    $sql =
        "select name_eng,name_hindi,name_guj,price,image,categoryid,veg from menuitems where restroid = '$restroid' AND id='$itemid' limit 1";
    $query = mysqli_query($con, $sql);
    $row = mysqli_fetch_array($query);

    if ($row > 0) {
        $name_eng = $row['name_eng'];
        $name_hindi = $row['name_hindi'];
        $name_guj = $row['name_guj'];
        $price = $row['price'];
        $image = $row['image'];
        $categoryid = $row['categoryid'];
        $veg = $row['veg'];
        $sql = "select name_eng,name_hindi,name_guj from category where restroid = '$restroid' AND id='$categoryid' limit 1";
        $query = mysqli_query($con, $sql);
        $row1 = mysqli_fetch_array($query);
        $name_engcat = $row1['name_eng'];
        $name_hindicat = $row1['name_hindi'];
        $name_gujcat = $row1['name_guj'];
        if ($row1 > 0) {
            $array = array($name_eng, $name_hindi, $name_guj, $price, $image, $name_engcat, $name_hindicat, $name_gujcat,$veg);
            echo implode('~', $array);
        } else {
            echo 'Faild';
        }
    } else {
        echo 'Faild';
    }
} else {
    header('location:../index.php');
    exit;
}
