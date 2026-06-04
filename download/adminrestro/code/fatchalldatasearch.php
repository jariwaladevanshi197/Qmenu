<?php
if (isset($_SERVER['HTTP_REFERER'])) {

      require '../../connect.php';
      session_start();
      $search = $_POST['search'];
      $language = $_POST['language'];
      $restroid = $_SESSION['usersession'];
      $query = '';
      $query = "select * from menuitems where ( name_hindi LIKE '%" . $search . "%' OR name_guj LIKE '%" . $search . "%' OR name_eng LIKE '%" . $search . "%' OR price LIKE '%" . $search . "%') AND restroid = '$restroid' ";

      $result = mysqli_query($con, $query);
      mysqli_error($con);
      $i = 1;
      $item = "";
      while ($value = mysqli_fetch_array($result)) {

            $item .= '
            <div style="display:none">
            <span id="s_item_hindi' . $value['id'] . '">' . $value['name_hindi'] . '</span>
            <span id="s_item_eng' . $value['id'] . '">' . $value['name_eng'] . '</span>
            <span id="s_item_guj' . $value['id'] . '">' . $value['name_guj'] . '</span>
            <span id="s_itemprice' . $value['id'] . '">' . $value['price'] . '</span>
            <span id="s_itemid' . $value['id'] . '">' . $value['id'] . '</span>
            <span id="s_itemcategory' . $value['id'] . '">' . $value['categoryid'] . '</span>
            </div>
            ';

            $item .= '<tr>
      <th scope="row">' . $i . '</th>
      <td class="col-4 item-name">' . $value[$language] . '</td>
      <td class="item-price">&#8377;' . $value['price'] . '</td>
      <td class="col-2"><button type="button" data-id=' . $value['id'] . ' class="btn btn-primary edtbtn" data-toggle="modal" data-target="#editMenu"><i class="fa fa-pencil"></i></button></td>
      <td class="col-2"><button type="button" data-id=' . $value['id'] . ' class="btn btn-warning dltbtn"><i class="fa fa-trash"></i></button></td>
</tr>';
            $i++;
      }
      if ($item == '') {
            $result = 'No Data Found';
      } else {
            $result = 'Searching...';
      }
      $html = '<div id="accordion" ><div class="card">
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
      </div></div>
';

      echo $html;
} else {
      header('location:../index.php');
      exit;
}
