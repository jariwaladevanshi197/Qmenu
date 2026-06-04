<?php
require '../../../connect.php';
session_start();
$no = $_POST['no'];
$lati = $_POST['lati'];
$long = $_POST['long'];
$restroid = $_SESSION['restroid'];

$sql = "select * from restro where id='$restroid'";
$query = mysqli_query($con, $sql);
$row = mysqli_fetch_array($query);
$latitude = $row['latitude'];
$longitude = $row['longitude'];
$distance = $row['distance'];


$totaldistance = getDistance($latitude, $longitude, $lati, $long);
$type = isset($_POST['type']) ? $_POST['type'] : 'Call Waiter';
$meters = (int) ($totaldistance * 1000);
$requeiddestence = $distance;
if ($meters < $requeiddestence) {
      $filename = '../../../restro/admin/json/waitercall_' . $restroid . '.json';
      if (file_exists($filename)) {

            $jsonString = file_get_contents($filename);
            $data = json_decode($jsonString, true);
            if (!is_array($data)) $data = array();
            
            $already_calling = false;
            foreach($data as $call) {
                  if(is_array($call) && $call['tableno'] == $no) {
                        $already_calling = true;
                        break;
                  } else if ($call == $no) {
                        $already_calling = true;
                        break;
                  }
            }

            if ($already_calling) {
                  echo "Please Wait Waiter Is coming...";
            } else {
                  array_push($data, array("tableno" => $no, "type" => $type));
                  echo 'success';
            }
            file_put_contents($filename, json_encode($data));
      } else {
            $array = array(array("tableno" => $no, "type" => $type));
            $fp = fopen($filename, 'w');
            fwrite($fp, json_encode($array));
            fclose($fp);
            echo 'success';
      }
} else {
      echo "<div class='fail'>Can't call waiter You Are out side Rrestro</div>";
}






function getDistance($latitude1, $longitude1, $latitude2, $longitude2)
{
      $earth_radius = 6371;

      $dLat = deg2rad($latitude2 - $latitude1);
      $dLon = deg2rad($longitude2 - $longitude1);

      $a = sin($dLat / 2) * sin($dLat / 2) + cos(deg2rad($latitude1)) * cos(deg2rad($latitude2)) * sin($dLon / 2) * sin($dLon / 2);
      $c = 2 * asin(sqrt($a));
      $d = $earth_radius * $c;

      return $d;
}
// $str = file_get_contents($filename);
// $json = json_decode($str, true);
// foreach ($json as $value) {
//       echo $value;
// }
