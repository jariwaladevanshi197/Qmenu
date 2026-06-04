<?php
if (isset($_SERVER['HTTP_REFERER'])) {
  require '../../../connect.php';
  session_start();
$restroid = $_SESSION['megausersession'];
$language = $_POST['language'];

$query = "select * from category where restroid = '$restroid' AND id > 2 ";
$result = mysqli_query($con, $query);
$html = '';
$i = 0;
while ($value = mysqli_fetch_array($result)) {
  $i++;
  $html .= '<div style="display:none" >
    <span id="s_cat_hindi' . $value['id'] . '">' . $value['name_hindi'] . '</span>
    <span id="s_cat_eng' . $value['id'] . '">' . $value['name_eng'] . '</span>
    <span id="s_cat_guj' . $value['id'] . '">' . $value['name_guj'] . '</span>
    <span id="s_catid' . $value['id'] . '">' . $value['id'] . '</span>
      </div>
      ';
  $html .= '<tr>
  <th scope="row" style="width: 50px;">' . $i . '</th>
      <td class="item-name" style="font-weight: 600;">' . $value[$language] . '</td>
      <td class="text-right" style="white-space: nowrap;">
        <button type="button" data-id="' . $value['id'] . '" class="action-btn action-btn-primary categoryedtbtn" data-toggle="modal" data-target="#editcategory" title="Edit"><i class="fa fa-pencil"></i></button>
        <button type="button" data-id="' . $value['id'] . '" class="action-btn action-btn-warning categorydltbtn" title="Delete"><i class="fa fa-trash"></i></button>
      </td>
      </tr>';
}



echo $html;

} else {
  header('location:../index.php');
  exit;
}
