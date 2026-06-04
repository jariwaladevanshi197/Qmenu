
<?php
if (isset($_SERVER['HTTP_REFERER'])) {
  require '../../../connect.php';
  session_start();
  $restroid = $_SESSION['megausersession'];
  $language = $_POST['language'];
  $catid = $_POST['catid'];
  $searchis = isset($_POST['search']);
  $query = '';
  if ($catid == 0) {
    $query = "select * from menuitems where restroid = '$restroid' AND available = '1' ";
  } elseif ($catid == 1) {
    $query = "select * from menuitems where restroid = '$restroid' AND veg = 0";
  } elseif ($catid == 2) {
    $query = "select * from menuitems where restroid = '$restroid' AND veg = 1";
  } else {
    $query = "select * from menuitems where restroid = '$restroid' AND categoryid='$catid' AND available = '1'";
  }
  if ($searchis) {
    $search = $_POST['search'];
    if ($search != '') {
      $query = "select * from menuitems where (name_eng LIKE '%" . $search . "%' OR name_guj LIKE '%" . $search . "%' OR name_hindi LIKE '%" . $search . "%' OR price LIKE '%" . $search . "%') AND restroid = '$restroid' AND available = '1' ";
    }
  }




  $result = mysqli_query($con, $query);
  $html = '';
  $i = 0;
  while ($value = mysqli_fetch_array($result)) {
    $i++;
    //   $html .= '<div style="display:none" >
    //     <span id="s_item_hindi' . $value['id'] . '">' . $value['name_hindi'] . '</span>
    //     <span id="s_item_eng' . $value['id'] . '">' . $value['name_eng'] . '</span>
    //     <span id="s_item_guj' . $value['id'] . '">' . $value['name_guj'] . '</span>
    //     <span id="s_catid' . $value['id'] . '">' . $value['categoryid'] . '</span>
    //     <span id="s_itemid' . $value['id'] . '">' . $value['id'] . '</span>
    //     <span id="s_itemprice' . $value['id'] . '">' . $value['price'] . '</span>
    //     <span id="s_image' . $value['id'] . '">' . $value['image'] . '</span>
    //       </div>
    //       ';
    //     $html .= '<div class="contents z-depth-1">
    //     <div class="list-img">
    //       <img style="object-fit: cover; 
    //       object-position: center;
    //        " src="' . $value['image'] . '" alt="" />
    //     </div>
    //     <div class="list-text">
    //       <h6 class="menu-item-title">' . $value[$language] . '</h6>
    //       <p>
    //         <strong style="color: #00d2ff; font-size: 15px">&#8377;' . $value['price'] . '</strong>
    //       </p>


    //       <button type="button" data-id=' . $value['id'] . ' class="btn btn-primary btn-edit edtbtn" data-toggle="modal" data-target="#editMenu">
    //         <span class="d-none d-md-block">Edit</span><i class="fa fa-pencil d-md-none"></i>
    //       </button>

    //       <button type="button" data-id=' . $value['id'] . ' class="btn btn-warning add-cart-btn dltbtn">
    //         <span class="d-none d-md-block">Delete</span><i class="fa fa-trash d-md-none"></i>
    //       </button>

    //       <!--  -->
    //     </div>
    //   </div>';
    $imagedefault = "'/restro/admin/images/defaultitem.jpg'";
    $image_veg = "";
    if ($value['veg'] == 1) {
      $image_veg = '/suratbest/restro/admin/images/nonveg.png';
    } elseif ($value['veg'] == 0) {
      $image_veg = '/suratbest/restro/admin/images/veg.png';
    }

    $html .= '<div class="col-12">
  <div class="contents z-depth-1 d-flex align-items-center">
    <div class="list-img">
    <img style="object-fit: cover; 
      object-position: center;
       " src="' . $value['image'] . '" alt="" onerror="this.onerror=null; this.src=' . $imagedefault . ';"/>
    </div>
    <div class="list-text" style="width: 100%">
    <h6 class="menu-item-title" style="padding-top: 5px;">    <img style="margin-bottom: 3px;" src="' . $image_veg . '" height="12em" width="12em"/>
    ' . $value[$language] . '</h6> 
      <p>
        <strong style="color: #00d2ff; font-size: 15px">&#8377;' . $value['price'] . '</strong>
      </p>
      
      <div class="d-flex justify-content-between">
      <div class="btn-group" role="group" aria-label="Basic example">
          <button type="button" data-qid="quantity_' . $value['id'] . '" class="btn btn-danger minus-btn">
          <i class="fa fa-minus"></i>
          </button>
          <input type="number" id="quantity_' . $value['id'] . '" class="quantity-text" value="1" min="1" max="50" step="1" />
          <button type="button"  data-qid="quantity_' . $value['id'] . '" class="btn btn-primary plus-btn">
          <i class="fa fa-plus"></i>
          </button>
          </div>

          <button type="button" data-qid="quantity_' . $value['id'] . '" onclick="addtocart(this,' . $value['id'] . ')" class="btn btn-warning add-cart-btn flex-end">
          <i class="material-icons">add_shopping_cart</i>
        </button>
        </div>
    </div>
    </div>
</div>';
  }



  echo $html;
} else {
  header('location:../index.php');
  exit;
}
