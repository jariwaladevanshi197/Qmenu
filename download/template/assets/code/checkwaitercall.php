<?php

session_start();
$tableno = $_POST['tableno'];
$restroid = $_SESSION['restroid'];

$filename = '../../../restro/admin/json/waitercall_' . $restroid . '.json';
if (file_exists($filename)) {

      $jsonString = file_get_contents($filename);
      $data = json_decode($jsonString, true);
      if (is_array($data)) {
            $is_calling = "no";
            foreach($data as $call) {
                  if(is_array($call) && $call['tableno'] == $tableno) {
                        $is_calling = "yes";
                        break;
                  } else if($call == $tableno) {
                        $is_calling = "yes";
                        break;
                  }
            }
            echo $is_calling;
      } else {
            echo 'no';
      }


      

      file_put_contents($filename, json_encode($data));
} 
?>