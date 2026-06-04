<?php
if (isset($_SERVER['HTTP_REFERER'])) {
    session_start();
    $restroid = $_SESSION['megausersession'];

    $filename = '../json/waitercall_' . $restroid . '.json';

    if (file_exists($filename)) {
        $str = file_get_contents($filename);
        $json = json_decode($str, true);
        $html = '';
        if ($json != '' &&  $json != array()) {
            foreach ($json as $item) {
                if(is_array($item)) {
                    $val = $item['tableno'];
                    $type = isset($item['type']) ? $item['type'] : 'Calling For Waiter';
                } else {
                    $val = $item;
                    $type = 'Calling For Waiter';
                }
                $html .= "<div class='alert alert-warning alert-dismissible fade show' role='alert'>
    <strong>" . $val . "</strong>&nbsp; ($type)
      <button type='button' data-value='$val' class='close deletewaitercall' >
          <span aria-hidden='true'>&times;</span>
          </button>
  </div>";
            }
        }
        echo $html;
    } else {
        echo "";
    }
} else {
    header('location:../index.php');
    exit;
}
