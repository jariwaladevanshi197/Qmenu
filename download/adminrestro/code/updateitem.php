<?php
if (isset($_SERVER['HTTP_REFERER'])) {
      
      require '../../connect.php';

      $nameinhindi = $_POST['nameinhindi'];
      $nameinguj = $_POST['nameinguj'];
      $nameineng = $_POST['nameineng'];
      $itemprice = $_POST['itemprice'];
      $category = $_POST['category'];
      $id = $_POST['id'];
   

      $query = "UPDATE menuitems SET categoryid='$category',price='$itemprice',name_eng='$nameineng',name_guj='$nameinguj',name_hindi='$nameinhindi' WHERE id='$id'";

      $result = mysqli_query($con,$query);

      if($result){
            echo '<span class="success">Updated SuccessFul</span>';
            // echo mysqli_error($con);
      }else{
            echo '<span class="fail">Update Unsuccessful</span>';
            echo mysqli_error($con);
      }
} else {
      header('location:../index.php');
      exit;
}
