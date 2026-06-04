<?php
if (isset($_SERVER['HTTP_REFERER'])) {
      require '../../connect.php';

      $subtype = $_POST['subtype'];
      $query = '';
      if (isset($_POST['search'])) {
            $search = $_POST['search'];
            if ($search != '') {
                  $query = "select * from restro where 
                  restroname LIKE '%" . $search . "%' OR 
                  mobileno LIKE '%" . $search . "%' OR
                  address LIKE '%" . $search . "%' ORDER BY expdate";
            } else {
                  $query = "select * from restro where subtype='$subtype' ORDER BY expdate";
            }
      } else {
            $query = "select * from restro where subtype='$subtype' ORDER BY expdate";
      }

      $result = mysqli_query($con, $query);
      $html = '';
      while ($value = mysqli_fetch_array($result)) {

            $status = '';
            if ($value['status'] == 1) {
                  $status = '<td><button type="button" data-id=' . $value['id'] . ' data-status="active" class="btn btn-success btnstatus"><span class="d-none d-md-block"> isActive  </span><i class="fa fa-eye d-md-none"></i></button></td>';
            } else {
                  $status = '<td><button type="button" data-id=' . $value['id'] . ' data-status="deactive" class="btn btn-danger btnstatus"><span class="d-none d-md-block">Deactive</span><i class="fa fa-eye-slash d-md-none"></i></button></td>';
            }
            $html .= '
            <div style="display:none">
            <span id="s_restroname' . $value['id'] . '">' . $value['restroname'] . '</span>
                  <span id="s_address' . $value['id'] . '">' . $value['address'] . '</span>
                  <span id="s_qrcode' . $value['id'] . '">' . $value['qrcode'] . '</span>
                  <span id="s_gstno' . $value['id'] . '">' . $value['gstno'] . '</span>
                  <span id="s_mobileno' . $value['id'] . '">' . $value['mobileno'] . '</span>
                  <span id="s_email' . $value['id'] . '">' . $value['email'] . '</span>
                  <span id="s_password' . $value['id'] . '">' . $value['password'] . '</span>
                  <span id="s_themecode' . $value['id'] . '">' . $value['themecode'] . '</span>
                  <span id="s_lati' . $value['id'] . '">' . $value['latitude'] . '</span>
                  <span id="s_long' . $value['id'] . '">' . $value['longitude'] . '</span>
                  <span id="s_dist' . $value['id'] . '">' . $value['distance'] . '</span>
                  <span id="s_id' . $value['id'] . '">' . $value['id'] . '</span>
                  <span id="s_plantype' . $value['id'] . '">' . $value['subtype'] . '</span>
                  <span id="s_price' . $value['id'] . '">' . $value['price'] . '</span>
                  <span id="s_subplan' . $value['id'] . '">' . $value['subplan'] . '</span>
                  <span id="s_expdate' . $value['id'] . '">' . $value['expdate'] . '</span>
                  <span id="s_paymentdate' . $value['id'] . '">' . $value['paymentdate'] . '</span>
            </div>
            ';

            $sql = "select title from theme where id = " . $value['themecode'] . " limit 1";
            $query = mysqli_query($con, $sql);

            $row1 = mysqli_fetch_array($query);
            $x = isset($row1[0]) ? $row1[0] : '';
            // <td>'.$link.'</td>
            $link = '';
            if ($value['subtype'] == 0) {
                  $link = '../template/' . $x . '/index.php?restroid=' . $value['slug'] . '';
            } else {
                  $link = '../restro/index.php?restroid=' . $value['slug'] . '';
            }
            $html .= '<tr>
                  <td>' . $value['id'] . '</td>
                  <td><a href=' . $link . ' target="_blank">' . $value['restroname'] . '</a></td>
                  
                  <td>' . $value['mobileno'] . '</td>
                  
                  <td><button type="button" data-id=' . $value['id'] . ' class="btn btn-primary btnedt" data-toggle="modal" data-target="#editRestro"><span class="d-none d-md-block">Edit</span><i class="fa fa-pencil d-md-none"></i></button></td>
                                    <td><button type="button" data-id=' . $value['id'] . ' class="btn btn-primary btnedtplan" data-toggle="modal" data-target="#editRestroplan"><span class="d-none d-md-block">Edit Plan</span><i class="fa fa-inr d-md-none"></i></button></td>
                  ' . $status . '
                  <td style="text-align:center;"><button type="button" data-id=' . $value['id'] . ' class="btn btn-primary btnpass" data-toggle="modal" data-target="#changepass"><span class="d-none d-md-block">Password</span><i class="fa fa-lock d-md-none"></i></button></td>
            </tr>';
      }

      echo $html;
} else {
      header('location:../index.php');
      exit;
}
