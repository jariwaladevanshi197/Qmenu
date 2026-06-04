<?php
if (isset($_SERVER['HTTP_REFERER'])) {
      require '../../connect.php';
      $restroid = $_POST['restroid'];


      $query = "select * from paymenthistory where restroid = '$restroid'";


      $result = mysqli_query($con, $query);
      $html = '';
      $i = 1;
      while ($value = mysqli_fetch_array($result)) {

            //       $html .=' <div style="display:none">
            //       <span id="s_restroid'.$value['id'].'">'.$value['id'].'</span>
            //       <span id="s_address'.$value['id'].'">'.$value['address'].'</span>

            // </div>';
            $type = '';
            if ($value['subtype'] == 0) {
                  $type = 'Normal Menu';
            } elseif ($value['subtype'] == 1) {
                  $type = 'Mega Menu';
            } elseif ($value['subtype'] == 2) {
                  $type = 'With webSite';
            }
            $html .= '<tr>
                  <td>' . $i . '</td>
                  <td>' . $type  . '</td>
                  <td>' . $value['subplan'] . '</td>
                  <td>' . $value['price'] . '</td>
                  <td>' . $value['paymentdate'] . '</td>
                  <td>' . $value['expdate'] . '</td>
                 
                  </tr>';
            $i++;
      }
      echo $html;
} else {
      header('location:../index.php');
      exit;
}
