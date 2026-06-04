<?php
if (isset($_SERVER['HTTP_REFERER'])) {

      require '../../connect.php';
      session_start();
      $restroid = $_SESSION['usersession'];


      $query = "select * from tables where restroid = '$restroid'";
      $result = mysqli_query($con, $query);
      $html = '';
      $i = 0;
      while ($value = mysqli_fetch_array($result)) {
            $i++;
            $html .= '<div style="display:none" >
      <span id="s_tablename' . $value['id'] . '">' . $value['name'] . '</span>
      </div>
      ';
            $html .= '<tr>
      <th scope="row">' . $i . '</th>
      <td class="col-4 item-name">' . $value['name'] . '</td>
    
      <td class="col-2"><button type="button" data-id=' . $value['id'] . ' class="btn btn-primary tableeditbtn" data-toggle="modal" data-target="#edittable"><i class="fa fa-pencil"></i></button></td>
      <td class="col-2"><button type="button" data-id=' . $value['id'] . ' class="btn btn-warning tabledltbtn"><i class="fa fa-trash"></i></button></td>
</tr>';
      }



      echo $html;
} else {
      header('location:../index.php');
      exit;
}
