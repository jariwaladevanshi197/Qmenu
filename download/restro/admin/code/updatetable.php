<?php
if (isset($_SERVER['HTTP_REFERER'])) {
      require '../../../connect.php';
      
      $tablename = $_POST['tablename'];
      $tableid = $_POST['tableid'];
     
      

      $query = "UPDATE tables SET name='$tablename' WHERE id='$tableid'";

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
