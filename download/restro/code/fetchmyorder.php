
<?php
if (isset($_SERVER['HTTP_REFERER'])) {

    require '../../connect.php';
    session_start();
    $restroid = $_SESSION['restroid'];
    $tableid = $_POST['tableid'];
    $language = $_POST['language'];
    $languagecat = 'cat' . $language;
    $filename =
        '../admin/json/preorder_' . $restroid . '.json';
    $html = '<div class="col-12 mb-3">
<div class="cart z-depth-1 px-0 py-0">
<div class="total-pay mt-md-0">
              <button class="btn-warning button-full z-depth-1" style="font-weight: bolder" data-toggle="modal" data-target="#feedback" id="paybtn">
              <i class="fa fa-credit-card-alt"></i>Call Waiter For Payment
              </button>
              </div>
          </div> ';
    if (file_exists($filename)) {
        $jsonString = file_get_contents($filename);
        $data = json_decode($jsonString, true);

        if ($data != '' &&  $data != array()) {
            $j = 0;
            $found = 0;
            foreach ($data as $value) {
                // $totalprice = 0;

                if ($value['tableid'] == $tableid) {
                    if ($found == 0) {
                        $html .= '<div class="pages-title mb-0">
        <h3>In Proccess</h3>
        <div class="line"></div>
        </div>
        </div>';
                    }

                    $found = 1;
                    foreach ($value['item'] as $v) {

                        $image_veg = "";
                        if ($v['veg'] == 1) {
                            $image_veg = '/suratbest/restro/admin/images/nonveg.png';
                        } elseif ($v['veg'] == 0) {
                            $image_veg = '/suratbest/restro/admin/images/veg.png';
                        }

                        $html .= '<div class="col-12">
                <div class="contents z-depth-1 d-flex align-items-center" style="padding: 15px">
                <div class="list-img">
                    <img src="' . $v['image'] . '" alt="" />
                    </div>
                    <div class="list-text" style="width: 100%">

                    <h6 class="menu-item-title">  <img style="" src="' . $image_veg . '" height="12em" width="12em"/>   ' . $v[$language] . '</h6>
                    <p class="mb-0 mt-0"><strong>' . $v[$languagecat] . '</strong></p>
                    <p>
                    <strong style="color: #00d2ff; font-size: 15px">&#8377;' . $v['price'] . '</strong>
                    </p>
                    <p class="mb-0 mt-0">Quantity : <strong>' . $v['quantity'] . '</strong></p>
                    </div>
                    </div>
                    </div>';
                        // $totalprice += $v['totalprice'];

                    }
                }
                if ($found == 1) {
                    // break;
                }
            }
        }
    }


    $filename =
        '../admin/json/finalorder_' . $restroid . '.json';
    if (file_exists($filename)) {
        $jsonString = file_get_contents($filename);
        $data = json_decode($jsonString, true);
        $imagedefault = "'/restro/admin/images/defaultitem.jpg'";
        if ($data != '' &&  $data != array()) {
            foreach ($data as $value) {

                $found = 0;

                if ($value['tableid'] == $tableid) {
                    $html .= '<div class="col-12 mb-3"><div class="pages-title mb-0">
            <h3>Completed</h3>
            <div class="line"></div>
            </div></div>';
                    $found = 1;
                    foreach ($value['item'] as $v) {
                        $html .= '<div class="col-12">
                    <div class="contents z-depth-1 d-flex align-items-center" style="padding: 15px">
                    <div class="list-img">
                    <img style="object-fit: cover; 
      object-position: center;
       " src="' . $v['image'] . '" alt="" onerror="this.onerror=null; this.src=' . $imagedefault . ';"/>
                    </div>
                    <div class="list-text" style="width: 100%">
                    <h6 class="menu-item-title">' . $v[$language] . '</h6>
                    <p class="mb-0 mt-0"><strong>' . $v[$languagecat] . '</strong></p>
                    <p><strong style="color: #00d2ff; font-size: 15px">&#8377;' . $v['price'] . '</strong></p>
                    <p class="mb-0 mt-0">Quantity : <strong>' . $v['quantity'] . '</strong></p>
                    </div>
                    </div>
                    </div>';
                        // $totalprice += $v['totalprice'];

                    }
                }
                if ($found == 1) {
                    break;
                }
            }
        }
    }


    echo $html;
} else {
    header('location:../index.php');
    exit;
}
