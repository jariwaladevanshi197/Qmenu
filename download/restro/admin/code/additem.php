<?php
if (isset($_SERVER['HTTP_REFERER'])) {
    require '../../../connect.php';
    session_start();
    $nameinhindi = $_POST['nameinhindi'];
    $nameinguj = $_POST['nameinguj'];
    $nameineng = $_POST['nameineng'];
    $itemprice = $_POST['itemprice'];
    $category = $_POST['category'];
    $category_veg = $_POST['category_veg'];
    ini_set("post_max_size", "30M");
    ini_set("upload_max_filesize", "30M");
    ini_set("memory_limit", "20000M");
    $restroid = $_SESSION['megausersession'];

    if (isset($_FILES['image']['size']) && $_FILES['image']['error'] == 0) {
        $milliseconds = round(microtime(true) * 1000);
        $filename = $_FILES["image"]["tmp_name"];
        $x = basename($_FILES["image"]["name"]);
        $ext =  "" . get_extension($x);
        
        // Debugging
        // echo "Size: " . $_FILES['image']['size'];

        // If file is valid
        if ($_FILES['image']['size'] > 0) {
            
            // Validate Extension
            $allowed = ['jpg', 'jpeg', 'png', 'webp', 'gif'];
            if (in_array(strtolower($ext), $allowed)) {
                $status = commpressandupload($filename, $ext, $milliseconds);
                $path = 'images/item_' . $milliseconds . "." . $ext;
                
                if ($status == 'true') {
                    $query = "INSERT INTO menuitems(restroid, image,categoryid, name_eng,name_hindi,name_guj, price, veg) VALUES ('$restroid','$path','$category','$nameineng','$nameinhindi','$nameinguj','$itemprice','$category_veg')";
                    $result = mysqli_query($con, $query);
                    if ($result) {
                        echo '<span class="success">Item Added Successfully</span>';
                    } else {
                        echo "Failed to Add to Database: " . mysqli_error($con);
                    }
                } else {
                     echo "Failed to process/compress image.";
                }
            } else {
                echo "Invalid File Type ($ext). Please upload JPG, PNG, WEBP, or GIF.";
            }
        } else {
            echo "File is empty or corrupted.";
        }
    } else {
        // Handle Upload Errors
        if (isset($_FILES['image']['error'])) {
             switch ($_FILES['image']['error']) {
                 case UPLOAD_ERR_INI_SIZE:
                     echo "File is too large (server limit). Maximum 2MB.";
                     break;
                 case UPLOAD_ERR_FORM_SIZE:
                     echo "File is too large (form limit).";
                     break;
                 case UPLOAD_ERR_PARTIAL:
                     echo "File was only partially uploaded.";
                     break;
                 case UPLOAD_ERR_NO_FILE:
                     // If no file uploaded, maybe insert with default?
                     // Logic below handles "else" (implies no file or empty file)
                     // But here error IS set.
                     $path = 'images/defaultitem.jpg';
                     $query = "INSERT INTO menuitems(restroid, image,categoryid, name_eng,name_hindi,name_guj, price,veg) VALUES ('$restroid','$path','$category','$nameineng','$nameinhindi','$nameinguj','$itemprice','$category_veg')";
                     $result = mysqli_query($con, $query);
                     if ($result) {
                         echo '<span class="success">Item Added Successfully</span>';
                     } else {
                         echo '<span class="fail">Failed Please Enter Valid Values</span>';
                     }
                     break;
                 default:
                     echo "Unknown upload error: " . $_FILES['image']['error'];
             }
        } else {
             // Fallback default image logic
             $path = 'images/defaultitem.jpg';
             $query = "INSERT INTO menuitems(restroid, image,categoryid, name_eng,name_hindi,name_guj, price,veg) VALUES ('$restroid','$path','$category','$nameineng','$nameinhindi','$nameinguj','$itemprice','$category_veg')";
             $result = mysqli_query($con, $query);
             if ($result) {
                 echo '<span class="success">Item Added Successfully</span>';
             } else {
                 echo '<span class="fail">Faild Please Enter Valid Values</span>';
             }
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
    if ($arr_image_details = @getimagesize($img)) {
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
        $imgt = '';
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
        if ($arr_image_details[2] == IMAGETYPE_WEBP) {
            $imgt = "imagewebp";
            $imgcreatefrom = "imagecreatefromwebp";
        }
        if ($arr_image_details[2] == IMAGETYPE_GIF) { // GIF was checked earlier but missing here? 
             // Logic in original code checked GIF at line 106. 
             // Let's ensure this block is consistent.
             $imgt = "imagegif";
             $imgcreatefrom = "imagecreatefromgif";
        }
        if ($imgt) {
            $target_file =  "../images/item_" . $milliseconds . "." . $ext;
            $old_image = $imgcreatefrom($img);
            $new_image = imagecreatetruecolor($thumbnail_width, $thumbnail_height);
            imagecopyresized($new_image, $old_image, 0, 0, 0, 0, $new_width, $new_height, $original_width, $original_height);

            $imgt($new_image, $target_file);

            return 'true';
        }
    } else {
        echo 'Faild';
    }
}

function get_extension($file)
{
    $x = explode(".", $file);
    $extension = end($x);
    return $extension ? $extension : false;
}
