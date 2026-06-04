<?php
if (isset($_SERVER['HTTP_REFERER'])) {
      require '../../../connect.php';
      session_start();
      $restroid = $_SESSION['megausersession'];


      $query = "select * from tables where restroid = '$restroid'";
      $result = mysqli_query($con, $query);
      $html = '';
      $i = 0;
      $query_slug = "select slug, restrootp from restro where id = '$restroid'";
      $result_slug = mysqli_query($con, $query_slug);
      $row_slug = mysqli_fetch_array($result_slug);
      $slug = $row_slug['slug'];
      $otp = $row_slug['restrootp'];

      while ($value = mysqli_fetch_array($result)) {
            $i++;
            $encoded_table = urlencode($value['name']);
            
            // Dynamic Path Construction
            $script_path = dirname(dirname(dirname($_SERVER['PHP_SELF'])));
            $url = "http://" . $_SERVER['HTTP_HOST'] . $script_path . "/index.php?restroid=" . $slug . "&table=" . $value['id'] . "&code=" . $otp;
      
      // QRCode Monkey API
      // Config for basic square QR. You can add logo here in future.
      $config = urlencode('{"body":"square", "logo":""}'); 
      $qr_image = 'https://api.qrcode-monkey.com/qr/custom?data=' . urlencode($url) . '&config=' . $config . '&file=png';

            $html .= '<div style="display:none" >
      <span id="s_tablename' . $value['id'] . '">' . $value['name'] . '</span>
      </div>
      ';
            $html .= '<tr>
      <th scope="row" style="width: 50px;">' . $i . '</th>
      <td class="item-name" style="font-weight: 600;">' . $value['name'] . '</td>
      <td class="text-right" style="white-space: nowrap;">
         <button type="button" data-qr="' . $qr_image . '" data-name="' . $value['name'] . '" class="action-btn action-btn-info viewqrbtn" title="View QR"><i class="fa fa-qrcode"></i></button>
         <button type="button" data-id="' . $value['id'] . '" class="action-btn action-btn-warning tabledltbtn" title="Delete"><i class="fa fa-trash"></i></button>
      </td>
      </tr>';
      }



      echo $html;
} else {
      header('location:../index.php');
      exit;
}
