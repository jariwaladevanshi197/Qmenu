<?php
require '../../../connect.php';
session_start();
$restroid = $_SESSION['restroid'];
$language = isset($_POST['language']) && !empty($_POST['language']) ? $_POST['language'] : 'name_eng';
$query = "select * from category where restroid = '$restroid'";
$result = mysqli_query($con, $query);
$categoryid = array();
$categoryname = array();

while ($value = mysqli_fetch_array($result)) {
    array_push($categoryid, $value['id']);
    array_push($categoryname, $value[$language]);
}

$j = 0;
$html = '';
foreach ($categoryid as $catid) {
    if ($j == 0) {
        $show = 'show';
    } else {
        $show = '';
    }

    $query = "select * from menuitems where categoryid = '$catid'";
    $result = mysqli_query($con, $query);
    $i = 1;
    $item = "";
    while ($value = mysqli_fetch_array($result)) {
        $itemname = $value[$language];
        $itemid = $value['id'];
        $itemprice = $value['price'];
        // Robust Image Path Construction
        $raw_image = $value['image'];
        // Remove known prefixes to isolate filename or relative path
        $raw_image = str_replace('/restro/admin/', '', $raw_image);
        $raw_image = str_replace('images/', '', $raw_image);
        // Ensure no leading slashes
        $raw_image = ltrim($raw_image, '/');
        
        // Rebuild correct path
        if ($raw_image) {
             $itemimage = '../../restro/admin/images/' . $raw_image;
        } else {
             $itemimage = '../../restro/admin/images/defaultitem.jpg';
        }

        $itemveg = $value['veg'];
        $itemnameeng = $value['name_eng'];
        $itemnamehindi = $value['name_hindi'];
        $itemnameguj = $value['name_guj'];
        
        // Veg/Non-veg indicator
        $vegIcon = $itemveg == 0 ? '../../restro/admin/images/veg.png' : '../../restro/admin/images/nonveg.png';
        
        $item .= '
        <div class="menu-item-list" style="border-bottom: 1px solid #333; padding: 15px 0;">
            <div class="d-flex align-items-center">
                <div class="menu-image-container" style="width: 80px; height: 80px; border-radius: 8px; overflow: hidden; flex-shrink: 0; margin-right: 15px; position: relative;">
                    <img src="' . $itemimage . '" alt="' . htmlspecialchars($itemname) . '" style="width: 100%; height: 100%; object-fit: cover;" onerror="this.src=\'../../restro/admin/images/defaultitem.jpg\'">
                    <img src="' . $vegIcon . '" style="position: absolute; top: 5px; right: 5px; width: 15px; height: 15px; background: rgba(255,255,255,0.8); border-radius: 50%; padding: 2px;">
                </div>
                <div class="menu-content flex-grow-1">
                    <div class="d-flex justify-content-between align-items-start">
                        <div>
                            <h6 style="margin: 0; color: #fff; font-weight: 600; font-size: 16px;">' . htmlspecialchars($itemname) . '</h6>
                            <p style="margin: 5px 0 0; color: #00d2ff; font-weight: 700;">₹' . $itemprice . '</p>
                        </div>
                        
                        <div class="menu-action-container">
                            <!-- Add Button (Initial State) -->
                            <button class="btn btn-sm btn-warning add-to-cart-btn" id="add-btn-' . $itemid . '"
                                onclick="addToCart(' . $itemid . ', \'' . addslashes($itemnameeng) . '\', \'' . addslashes($itemnamehindi) . '\', \'' . addslashes($itemnameguj) . '\', ' . $itemprice . ', \'' . $itemimage . '\', ' . $itemveg . ')"
                                style="padding: 6px 20px; font-weight: 600; border-radius: 20px;">
                                <i class="fa fa-plus"></i> Add
                            </button>
                            
                            <!-- Quantity Controls (Hidden by default) -->
                            <div class="quantity-controls" id="qty-controls-' . $itemid . '" style="display:none; align-items: center; background: #fff; border-radius: 20px; padding: 2px;">
                                <button class="btn btn-sm" onclick="updateItemQty(' . $itemid . ', -1)" style="color: #00d2ff; font-weight: bold; padding: 2px 10px; border: none; background: transparent;">-</button>
                                <span id="qty-' . $itemid . '" style="color: #333; font-weight: bold; min-width: 20px; text-align: center;">1</span>
                                <button class="btn btn-sm" onclick="updateItemQty(' . $itemid . ', 1)" style="color: #00d2ff; font-weight: bold; padding: 2px 10px; border: none; background: transparent;">+</button>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
        ';
        $i++;
    }


    $html .= '<div class="card category-card" style="background: transparent; border: none; margin-bottom: 20px;">
      <div class="card-header" role="tab" id="peterhead" data-toggle="collapse" data-target="#peter' . $j . '" style="background: #222; border-radius: 10px; border: 1px solid #333; padding: 15px;">
          <h5 class="mb-0">
              <a style="display: flex; align-items: center; justify-content: space-between; color: #fff; cursor: pointer; text-decoration: none;">
                  <span><i class="fa fa-cutlery" style="color: #00d2ff; margin-right: 10px;"></i> ' . $categoryname[$j] . '</span> 
                  <i class="fa fa-caret-down down-icon"></i>
              </a>
          </h5>
      </div>
      <div class="collapse ' . $show . '" id="peter' . $j . '" data-parent="#accordion">
          <div class="card-body" style="background: #1a1a1a; border: 1px solid #333; border-top: none; border-radius: 0 0 10px 10px; padding: 15px;">
              ' . $item . '
          </div>
      </div>
  </div>';

    $j++;
}
echo $html;
