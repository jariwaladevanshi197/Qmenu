<?php
if (isset($_SERVER['HTTP_REFERER'])) {
      require '../../connect.php';
      
      $id = $_POST['themeid'];
      

      $query = "DELETE FROM theme WHERE id = '$id'";

      $result = mysqli_query($con,$query);

      if($result){
            echo '<span class="success">Delete SuccessFul</span>';
            // echo mysqli_error($con);
      }else{
            echo '<span class="fail">delete Unsuccessful</span>';
            echo mysqli_error($con);
      }
} else {
      header('location:../index.php');
      exit;
}
      
?>
