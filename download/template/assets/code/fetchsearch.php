<?php
require '../../../connect.php';
session_start();
$search = $_POST['search'];
$language = isset($_POST['language']) && !empty($_POST['language']) ? $_POST['language'] : 'name_eng';
$restroid = $_SESSION['restroid'];


$query = "select * from menuitems where (name_eng LIKE '%" . $search . "%' OR name_guj LIKE '%" . $search . "%' OR name_hindi LIKE '%" . $search . "%' OR price LIKE '%" . $search . "%') AND restroid = '$restroid' ";

$result = mysqli_query($con, $query);
mysqli_error($con);
$i = 1;
$item = "";
while ($value = mysqli_fetch_array($result)) {
      $itemname = $value[$language];
      $item .= '<tr><th scope="row">' . $i . '</th>
							<td class="col-6 item-name">' . $itemname . '</td>
							<td class="item-price">&#8377;' . $value['price'] . '</td>
						</tr>
						';


      $i++;
}
if ($item == '') {
      $result = 'No Data Found';
} else {
      $result = 'Searching...';
}
$html = '<div class="card">
<div class="card-header" role="tab" id="peterhead" data-toggle="collapse" data-target="#peter">
      <h5 class="mb-0">
            <a>
                  <i class="fa fa-cutlery"></i> <span class="category-title">' . $result . '</span> <i class="fa fa-caret-down down-icon"></i>
            </a>
      </h5>
</div>
<div class="collapse show" id="peter" data-parent="#accordion">
      <div class="card-body">
            <table class="table rm-border">
                  ' . $item . '
      </div>
</div>
';

echo $html;
