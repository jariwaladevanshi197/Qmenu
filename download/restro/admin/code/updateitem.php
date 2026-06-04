<?php
if (isset($_SERVER['HTTP_REFERER'])) {
    require '../../../connect.php';
    $image = isset($_FILES['image']);
    $nameinhindi = $_POST['nameinhindi'];
    $nameinguj = $_POST['nameinguj'];
    $nameineng = $_POST['nameineng'];
    $itemprice = $_POST['itemprice'];
    $category = $_POST['category'];
    $category_veg = $_POST['category_veg'];
    $category_available = $_POST['category_available'];

    $id = $_POST['itemid'];
    ini_set("post_max_size", "30M");
    ini_set("upload_max_filesize", "30M");
    ini_set("memory_limit", "20000M");
    $sql = "select image from menuitems where id = " . $id . " limit 1";
    $query = mysqli_query($con, $sql);
    $row = mysqli_fetch_array($query);
    $imageoldpath = $row[0];



    if ($image) {

        if ($_FILES['image']['size'] < 2485760 or $_FILES['image']['size'] != 0) {
            $milliseconds = round(microtime(true) * 1000);
            $filename = $_FILES["image"]["tmp_name"];
            $x = basename($_FILES["image"]["name"]);
            $ext =  "" . get_extension($x);
            if ($ext == 'jpg' || $ext == 'jpeg' || $ext == 'png' || $ext == 'gif') {
                $status = commpressandupload($filename, $ext, $milliseconds);
                $path = 'images/item_' . $milliseconds . "." . $ext;
                if ($status = 'true') {
                    $query = "UPDATE menuitems SET categoryid='$category',image='$path',name_guj='$nameinguj',name_hindi='$nameinhindi',name_eng='$nameineng',price='$itemprice',veg='$category_veg',available='$category_available' WHERE id='$id'";

                    $result = mysqli_query($con, $query);

                    if ($result) {
                        $filename = basename($imageoldpath);
                        if ($filename != 'defaultitem.jpg') {
                            $pathold = '../images/' . $filename;

                            if (file_exists($pathold)) {
                                unlink($pathold);
                                echo '<span class="success">Item updated Successfully</span>';
                                // echo 'File ' . $pathold . ' has been deleted';
                            } else {
                                // echo 'Could not delete ' . $pathold . ', file does not exist';
                            }
                        } else {
                            echo '<span class="success">Item updated Successfully</span>';
                        }
                    } else {
                        echo '<span class="success">Item updated Successfully</span>';
                        // echo mysqli_error($con);
                    }
                }
            } else {
                echo "Please Upload Image";
            }
        } else {
            echo "Please Upload Small Size Image";
        }
    } else {


        $query = "UPDATE menuitems SET categoryid='$category',name_guj='$nameinguj',name_hindi='$nameinhindi',name_eng='$nameineng',price='$itemprice',veg='$category_veg' ,available='$category_available' WHERE id='$id'";

        $result = mysqli_query($con, $query);

        if ($result) {
            echo '<span class="success">Item updated Successfully</span>';
            // echo mysqli_error($con);
        } else {
            echo '<span class="fail">Faild Please Enter Valid Values</span>';
            // echo mysqli_error($con);
        }
    }
} else {
    header('location:../index.php');
    exit;
}

function commpressandupload($img, $ext, $milliseconds)
{
    $divide_by = 2;
    $thumbnail_width = 0;
    $thumbnail_height = 0;
    $thumb_beforeword = "thumb";

    // pass id to thumb name
    if ($arr_image_details = @getimagesize($img)) {
        // $arr_image_details = getimagesize($img);
        $original_width = $arr_image_details[0];
        $original_height = $arr_image_details[1];
        $size = filesize($img);
        // echo $img;
        // $units = array('B', 'KB', 'MB', 'GB', 'TB', 'PB', 'EB', 'ZB', 'YB');
        $size_kb =  (int)($size / pow(1024, 1));
        // print_r($size_kb);
        if ($size_kb > 5000) {
            $divide_by = 10;
        } elseif ($size_kb > 4000) {
            $divide_by = 9;
        } elseif ($size_kb > 3000) {
            $divide_by = 8;
        } elseif ($size_kb > 2000) {
            $divide_by = 8;
        } elseif ($size_kb > 1500) {
            $divide_by = 7;
        } elseif ($size_kb > 1000) {
            $divide_by = 6;
        } elseif ($size_kb > 500) {
            $divide_by = 4;
        } elseif ($size_kb > 250) {
            $divide_by = 3;
        } elseif ($size_kb > 100) {
            $divide_by = 2;
        } else {
            $divide_by = 2;
        }

        // echo ' ' . $divide_by;
        $new_height = intval($original_height / $divide_by);
        $new_width = intval($original_width / $divide_by);
        $thumbnail_width = intval($original_width / $divide_by);
        $thumbnail_height = intval($original_height / $divide_by);
        if ($arr_image_details[2] == IMAGETYPE_GIF) {
            $imgt = "imagegif";
            $imgcreatefrom = "imagecreatefromgif";
        }
        if ($arr_image_details[2] == IMAGETYPE_JPEG) {
            $imgt = "imagejpeg";
            $imgcreatefrom = "imagecreatefromjpeg";
        }
        if ($arr_image_details[2] == IMAGETYPE_PNG) {
            $imgt = "imagepng";
            $imgcreatefrom = "imagecreatefrompng";
        }
        if ($imgt) {

            $target_file =  "../images/item_" . $milliseconds . "." . $ext;
            $old_image = $imgcreatefrom($img);
            $new_image = imagecreatetruecolor($thumbnail_width, $thumbnail_height);
            imagecopyresized($new_image, $old_image, 0, 0, 0, 0, $new_width, $new_height, $original_width, $original_height);

            $imgt($new_image, $target_file);

            return 'true';
        }
    }
}

function get_extension($file)
{
    $x = explode(".", $file);
    $extension = end($x);
    return $extension ? $extension : false;
}
