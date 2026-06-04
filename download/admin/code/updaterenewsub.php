<?php
if (isset($_SERVER['HTTP_REFERER'])) {
      require '../../connect.php';

      $restroid = $_POST['restroid'];
      $plantype = $_POST['plantype'];
      $price = $_POST['price'];
      $month = $_POST['month'];
      $expdate = $_POST['expdate'];
      $paydate = $_POST['paydate'];



      $sql = "select * from restro where id =$restroid limit 1";

      $result = mysqli_query($con, $sql);
      // echo $sql;
      $row1 = mysqli_fetch_array($result);
      $paymentdatedb = $row1['paymentdate'];
      $expdatedb = $row1['expdate'];
      $pricedb = $row1['price'];
      $subtypedb = $row1['subtype'];
      $subplandb = $row1['subplan'];

      // echo $expdate;
      // $timestamp = strtotime($expdate);
      // $month = '+'.$subplan.' '.'MONTH';
      // $final = date("Y-m-d", strtotime($month,$timestamp));




      $sql = "INSERT INTO paymenthistory( restroid, paymentdate,subplan ,price,subtype,expdate) VALUES ('$restroid','$paymentdatedb','$subplandb',$pricedb,'$subtypedb','$expdatedb')";
      $result = mysqli_query($con, $sql);

      if ($result) {
            $sql = "UPDATE restro SET paymentdate='$paydate',subplan='$month',expdate='$expdate',price='$price' WHERE id ='$restroid'";
            $result = mysqli_query($con, $sql);
            if ($result) {
                  echo '<span class="success">Successful</span>';
                  echo mysqli_error($con);
            } else {
                  echo '<span class="fail">Unsuccessful</span>';
                  echo mysqli_error($con);
            }
      } else {
            echo '<span class="fail">Unsuccessful</span>';
            echo mysqli_error($con);
      }
} else {
      header('location:../index.php');
      exit;
}
