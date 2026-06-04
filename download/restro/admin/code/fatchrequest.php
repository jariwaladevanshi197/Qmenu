<?php
if (isset($_SERVER['HTTP_REFERER'])) {
  session_start();
  $restroid = $_SESSION['megausersession'];

  $filename = '../json/paymentcall_' . $restroid . '.json';

  if (file_exists($filename)) {
  $str = file_get_contents($filename);
  $json = json_decode($str, true);
  $html = '';
  foreach ($json as $value) {
    $html .= "<div class='alert alert-warning alert-dismissible fade show' role='alert'>
    <strong>" . $value . "</strong>&nbsp; Calling For Payment...
      <button type='button' data-value='$value' class='close deletecall' >
          <span aria-hidden='true'>&times;</span>
          </button>
  </div>";
}
  echo $html;
} else {
  echo "";
}

} else {
  header('location:../index.php');
  exit;
}
