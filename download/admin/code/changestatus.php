
<?php
if (isset($_SERVER['HTTP_REFERER'])) {
      require '../../connect.php';
      
      $set = $_POST['set'];
      $restroid = $_POST['restroid'];
// echo $set;
      $query = "UPDATE restro SET status='$set' WHERE id='$restroid'";
      
      $result = mysqli_query($con,$query);

      if($result){
            echo 'SuccesssFul';
            // echo mysqli_error($con);
      }else{
            echo 'Faild';
            // echo mysqli_error($con);
      }
} else {
      header('location:../index.php');
      exit;
}
      ?>
