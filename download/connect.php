<?php

      $host = 'sql106.infinityfree.com';
      $user = 'if0_41198824';
      $pass = 'Jd1952001';
      $db = 'if0_41198824_qmenu';
      $con = mysqli_connect($host,$user,$pass,$db);

      if($con){
            // echo "Connected successfully";
      }else{
            echo "Connection failed";
      }
?>