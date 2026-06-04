<?php
if (isset($_SERVER['HTTP_REFERER'])) {
      require '../../../connect.php';
      session_start();
$restroid = $_SESSION['megausersession'];
$day = $_POST['day'];
$month = $_POST['month'];
$year = $_POST['year'];
$dayquery = "EXTRACT(day FROM (feedback.timestamp)) = '$day'";
$monthquery = "EXTRACT(month FROM (feedback.timestamp)) = '$month'";
$yearquery = "EXTRACT(year FROM (feedback.timestamp)) = '$year'";

$query = "select * from feedback where restroid = '$restroid' AND $dayquery AND $monthquery AND $yearquery ";
// echo $query;
$result = mysqli_query($con, $query);
$html = '';
$i = 0;
// print_r($result);
while ($value = mysqli_fetch_array($result)) {

      $i++;
      $html .= '<div style="display:none" >
      <span id="s_timestamp' . $value['id'] . '">' . $value['timestamp'] . '</span>
      <span id="s_fullname' . $value['id'] . '">' . $value['fullname'] . '</span>
      <span id="s_email' . $value['id'] . '">' . $value['email'] . '</span>
      <span id="s_feedback' . $value['id'] . '">' . $value['feedback'] . '</span>
      <span id="s_dob' . $value['id'] . '">' . $value['dob'] . '</span>
      <span id="s_mobile' . $value['id'] . '">' . $value['mobile'] . '</span>
      </div>
      ';
      $html .= '<tr>
      <td>' . $i . '</td>
      <td>' . $value['timestamp'] . '</td>
      <td>' . $value['fullname'] . '</td>
      <td>' . $value['email'] . '</td>
      <td><button type="button" data-id=' . $value['id'] . ' class="btn btn-primary btnviewfb" data-toggle="modal" data-target="#viewfeedback"><span class="d-none d-md-block">View</span><i class="fa fa-eye d-md-none"></i></button></td>
      <td><button type="button" data-id=' . $value['id'] . ' class="btn btn-danger deletefb"><span class="d-none d-md-block">Delete</span><i class="fa fa-trash d-md-none"></i></button></td>
</tr>';
}

echo $html;

} else {
      header('location:../index.php');
      exit;
}
