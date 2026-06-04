
<?php
if (isset($_SERVER['HTTP_REFERER'])) {
  require '../../../connect.php';
  session_start();
  $restroid = $_SESSION['megausersession'];
  $language = $_POST['language'];
  $catid = $_POST['catid'];
  $searchis = isset($_POST['search']);
  if ($catid == 0) {
    $query = "select * from menuitems where restroid = '$restroid' ";
  } elseif ($catid == 1) {
    $query = "select * from menuitems where restroid = '$restroid' AND veg = 0";
  } elseif ($catid == 2) {
    $query = "select * from menuitems where restroid = '$restroid' AND veg = 1";
  } else {
    $query = "select * from menuitems where restroid = '$restroid' AND categoryid='$catid'";
  }
  if ($searchis) {
    $search = $_POST['search'];
    if ($search != '') {
      $query = "select * from menuitems where (name_eng LIKE '%" . $search . "%' OR name_guj LIKE '%" . $search . "%' OR name_hindi LIKE '%" . $search . "%' OR price LIKE '%" . $search . "%') AND restroid = '$restroid' ";
    }
  }




  $result = mysqli_query($con, $query);
  $html = '';
  $i = 0;
  while ($value = mysqli_fetch_array($result)) {
    $i++;
    $item_img = str_replace('/restro/admin/', '', $value['image']);
    $html .= '<div style="display:none" >
        <span id="s_item_hindi' . $value['id'] . '">' . $value['name_hindi'] . '</span>
        <span id="s_item_eng' . $value['id'] . '">' . $value['name_eng'] . '</span>
        <span id="s_item_guj' . $value['id'] . '">' . $value['name_guj'] . '</span>
        <span id="s_catid' . $value['id'] . '">' . $value['categoryid'] . '</span>
        <span id="s_veg' . $value['id'] . '">' . $value['veg'] . '</span>
        <span id="s_available' . $value['id'] . '">' . $value['available'] . '</span>
        <span id="s_itemid' . $value['id'] . '">' . $value['id'] . '</span>
        <span id="s_itemprice' . $value['id'] . '">' . $value['price'] . '</span>
        <span id="s_image' . $value['id'] . '">' . $item_img . '</span>
        </div>
          ';
    $imagedefault = "'images/defaultitem.jpg'";
    $image_veg = "";
    if ($value['veg'] == 1) {
      $image_veg = 'images/nonveg.png';
    } elseif ($value['veg'] == 0) {
      $image_veg = 'images/veg.png';
    }
    $html .= '<div class="contents z-depth-1">
    <div class="list-img">
      <img style="object-fit: cover; 
      object-position: center;
       " src="' . $item_img . '" alt="" onerror="this.onerror=null; this.src=' . $imagedefault . ';"/>
    </div>
    <div class="list-text">
      <h6 class="menu-item-title" style="padding-top: 5px;">     <img style="margin-bottom: 3px;" src="' . $image_veg . '" height="12em" width="12em"/> ' . $value[$language] . '</h6>
      <p>
      <strong style="color: #00d2ff; font-size: 15px">&#8377;' . $value['price'] . '</strong>
      </p>
      

      <button type="button" data-id="' . $value['id'] . '" class="btn btn-edit edtbtn">
        <span class="d-none d-md-block">EDIT</span><i class="fa fa-pencil d-md-none"></i>
      </button>
      
      <button type="button" data-id="' . $value['id'] . '" class="btn add-cart-btn dltbtn">
        <span class="d-none d-md-block">DELETE</span><i class="fa fa-trash d-md-none"></i>
      </button>
      </div>
  </div>';
  }



  echo $html;
} else {
  header('location:../index.php');
  exit;
}
