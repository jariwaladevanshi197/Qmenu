<?php
require '../../connect.php';
require 'code/checksession2.php';
$restroid = $_SESSION['megausersession'];
$sql = "select themecode,slug,qrcode,restroname from restro where id = " . $restroid . " limit 1";
$query = mysqli_query($con, $sql);
$row = mysqli_fetch_array($query);
$themecode = $row[0];
$slug = $row[1];
$qrcode = $row[2];
$restroname = $row[3];
$logo = 'images/userback.png';
if ($qrcode != '') {
  $clean_qr = str_replace('/admin/', '', $qrcode);
  $qrcode = '../../admin/' . $clean_qr;
  $logo = $qrcode;
}
$link = '../index.php?restroid=' . $slug . '';
?>

<!DOCTYPE html>
<html lang="en">

<head>
  <meta charset="UTF-8" />
  <meta name="viewport" content="width=device-width, initial-scale=1.0" />

  <title>ADD TO CART | Q-MENU</title>
  <link rel="icon" type="image/png" href="/light.png" />
  <link rel="shortcut icon" href="/light.png" type="image/x-icon" />
  <link rel="stylesheet" href="https://fonts.googleapis.com/icon?family=Material+Icons" />
  <link rel="stylesheet" href="css/materialize.css" />
  <link rel="stylesheet" href="css/loaders.css" />
  <link rel="stylesheet" href="css/lightbox.css" />
  <link rel="stylesheet" href="css/font-awesome.min.css" />
  <link rel="stylesheet" href="css/owl.carousel.min.css" />
  <link rel="stylesheet" href="css/owl.theme.default.min.css" />
  <link rel="stylesheet" href="https://stackpath.bootstrapcdn.com/bootstrap/4.5.0/css/bootstrap.min.css" integrity="sha384-9aIt2nRpC12Uk9gS9baDl411NQApFmC26EwAOH8WgZl5MYYxFfc+NcPb1dKGj7Sk" crossorigin="anonymous" />
  <link rel="stylesheet" href="css/style.css" />
</head>

<body>
  <!-- navbar -->
  <div class="navbar">
    <div class="container">
      <div class="row d-flex justify-content-between">
        <div class="col-3">
          <div class="content-left">
            <a href="#slide-out" data-activates="slide-out" class="sidebar"><i class="material-icons">menu</i></a>
          </div>
        </div>
        <div class="col-6">
          <div class="content-center">
            <a href="index.php">
              <h1 style="text-transform: uppercase;"><span><?php echo $restroname; ?></span></h1>
            </a>
          </div>
        </div>
        <div class="col-3 d-flex flex-row-reverse" style="padding-right: 0;">


          <div class="" style="padding: 0;">
            <a href="addtocart.php"><i class="material-icons icon-pad">shopping_cart</i><span id="cartcount" class="badge cart-item-cnt">0</span></a>
          </div>
          <!-- <div class="" style="padding: 0;">*
            <span class="material-icons pointer icon-pad" style="padding: 0 5px 0 0;" onclick="showbox()">search</span>
          </div> -->



        </div>
      </div>
    </div>
    <div class="container">
      <div class="row">
        <!-- <div class="col-12 srch-pad">
          <div class="search-box" id="searchbox">
            <input id="search" class="search-input" type="text" placeholder="Search" ng-model="searchio">
          </div> -->
      </div>
    </div>
  </div>
  </div>
  <!-- end navbar -->

  <!-- sidebar -->
  <div class="sidebar-panel" id="segments">
    <ul id="slide-out" class="collapsible side-nav  scrollbar-light-blue">
      <li>
        <div class="user-view" style="height: 10em">
          <div class="background">
            <img src="<?php echo $logo; ?>" alt="" />
          </div>
        </div>
      </li>
      <!--  -->
      <li class="restro-id-container">
        <div class="restro-badge">
          <i class="fa fa-key"></i>
          <span>ID: <strong id="restrocode">0</strong></span>
        </div>
      </li>
      <li class="sidemenu">
        <a href="" data-toggle="modal" data-target="#discountmodel" id="discountbtn"><i class="fa fa-percent"></i>Today's Discount</a>
      </li>
      <li class="sidemenu">
        <a href="index.php"><i class="fa fa-list-alt"></i>Menu</a>
      </li>
      <li class="sidemenu">
        <a href="<?php echo $link; ?>" target="_blank"><i class="fa fa-eye"></i>Customer View</a>
      </li>
      <li class="sidemenu">
        <a href="orders.php"><i class="fa fa-coffee"></i>Orders <span id="ordercount" class="badge all-cnt">0</span></a>
      </li>
      <li class="sidemenu">
        <a href="invoice.php"><i class="fa fa-money"></i>Invoice <span id="invoiccount" class="badge all-cnt">0</span></a>
      </li>
      <li class="sidemenu">
        <a href="notification.php"><i class="fa fa-bullhorn"></i>Waiter's Call <span id="waitercount" class="badge all-cnt">0</span></a>
      </li>
      <li class="sidemenu active-menu">
        <a href="addorder.php"><i class="fa fa-cutlery"></i>Add Order</a>
      </li>
      <li class="sidemenu">
        <a href="addcategory.php"><i class="fa fa-tags"></i>Add Category</a>
      </li>
      <li class="sidemenu">
        <a href="addmenu.php"><i class="fa fa-plus-square"></i>Add Menu Item</a>
      </li>

      <li class="sidemenu">
        <a href="addtable.php"><i class="fa fa-map-marker"></i>Add Table</a>
      </li>
      <li class="sidemenu">
        <a href="report.php"><i class="fa fa-line-chart"></i>Report</a>
      </li>
      <li class="sidemenu">
        <a href="feedback.php"><i class="fa fa-comment"></i>FeedBack</a>
      </li>
      <li class="sidemenu">
        <a href="" data-toggle="modal" data-target="#sharemenu"><i class="fa fa-share-alt"></i>Share Menu</a>
      </li>
      <li class="sidemenu">
        <a href="<?php echo $qrcode; ?>" download><i class="fa fa-download"></i>Download QR Code</a>
      </li>
      <li class="sidemenu">
        <a href="code/logout.php"><i class="fa fa-sign-out"></i>Log Out</a>
      </li>

      <!--  -->
    </ul>
  </div>
  <!-- end sidebar -->

  <!-- **************** -->
  <div class="segments-page">
    <div class="container">
      <div class="pages-title">
        <h3>Your Cart</h3>
        <div class="line"></div>
      </div>

      <!-- start Cart Item -->

      <div class="row">
        <div class="col-12 col-md-8">
          <!-- cart item LAYOUT -->
          <div class="cart z-depth-1" style="padding: 15px;" id="itemcontainer">
            <!-- <div class="cart-product first">
              <div class="row">
                <div class="col-4 col-md-2">
                  <div class="contents ">
                    <img src="images/f1.jpg" alt="" />
                  </div>
                </div>
                <div class="col-6 col-md-8">
                  <h6 class="menu-item-title pl-md-3">
                    Cheez Burger
                  </h6>
                </div>
                <div class="col-2">
                  <div class="contents remove">
                    <a href=""><i class="fa fa-remove"></i></a>
                  </div>
                </div>
              </div>
              <div class="row">
                <div class="col-5">
                  <div class="contents">
                    <p>
                      Price <strong style="color: #00d2ff">&#8377;500</strong>
                    </p>
                  </div>
                </div>
                <div class="col-7 cart-quan d-flex justify-content-end mb-2">
                  <p>Quantity</p>
                  <div class="contents">
                    <div class="btn-group" role="group" aria-label="Basic example">
                      <button type="button" class="btn btn-danger minus-btn">
                        <i class="fa fa-minus"></i>
                      </button>
                      <input type="number" id="quantity" class="quantity-text" value="1" min="1" max="50" step="10" />
                      <button type="button" class="btn btn-primary plus-btn">
                        <i class="fa fa-plus"></i>
                      </button>
                    </div>
                  </div>
                </div>
              </div>
            </div> -->
            <!--  -->

            <!--  -->
            <!-- <div class="cart-product first">
              <div class="row">
                <div class="col-4 col-md-2">
                  <div class="contents ">
                    <img src="images/f1.jpg" alt="" />
                  </div>
                </div>
                <div class="col-6 col-md-8">
                  <h6 class="menu-item-title pl-md-3">
                    Cheez Burger with extra souce with coca with full naan
                  </h6>
                </div>
                <div class="col-2">
                  <div class="contents remove">
                    <a href=""><i class="fa fa-remove"></i></a>
                  </div>
                </div>
              </div>
              <div class="row">
                <div class="col-5">
                  <div class="contents">
                    <p>
                      Price <strong style="color: #00d2ff">&#8377;500</strong>
                    </p>
                  </div>
                </div>
                <div class="col-7 cart-quan d-flex justify-content-end mb-2">
                  <p>Quantity</p>
                  <div class="contents">
                    <div class="btn-group" role="group" aria-label="Basic example">
                      <button type="button" class="btn btn-danger minus-btn">
                        <i class="fa fa-minus"></i>
                      </button>
                      <input type="number" id="quantity" class="quantity-text" value="1" min="1" max="50" step="10" />
                      <button type="button" class="btn btn-primary plus-btn">
                        <i class="fa fa-plus"></i>
                      </button>
                    </div>
                  </div>
                </div>
              </div>
            </div> -->
            <!--  -->

            <!-- END cart item LAYOUT -->
          </div>
        </div>
        <div class="col-12 col-md-4">
          <div class="row mb-0" style="margin-left: -15px; margin-right: -15px">
            <div class="col-12">
              <div class="cart z-depth-1 py-0">
                <div class="total-pay mt-md-0">
                  <div class="row py-0">
                    <div class="col-8 px-0 pb-2">
                      <div class="contents">
                        <h5>Extra Note:</h5>
                      </div>
                    </div>
                    <div class="col-4"></div>
                    <textarea class="form-control" id="mess" rows="4"></textarea>
                  </div>
                </div>
              </div>
            </div>
            <div class="col-12 mt-md-2 mb-5">
              <div class="cart z-depth-1">
                <div class="total-pay mt-md-0">
                  <div class="row">
                    <div class="col-8">
                      <div class="contents">
                        <h5>Total</h5>
                      </div>
                    </div>
                    <div class="col-4">
                      <div class="contents right">
                        <h5>&#8377;<span id="totalprice"></span></h5>
                      </div>
                    </div>
                  </div>
                  <button class="button-full btn-warning z-depth-1" id="placeorderbtn" type="button">
                    <i class="fa fa-send"></i>Place My Order
                  </button>
                  <div style="display: none;">
                    <button class="button-full z-depth-1" data-toggle="modal" data-target="#comfirmorder" id="notvalid" type="button">
                      <i class="fa fa-send"></i>Place Order
                    </button>
                    <button class="button-full z-depth-1" data-toggle="modal" data-target="#comfirmordervalid" id="valid" type="button">
                      <i class="fa fa-send"></i>Place Order
                    </button>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <!-- end Cart Item -->

    </div>
  </div>
  <!-- **************** -->
  <!--start share menu -->
  <div class="modal fade" id="sharemenu" tabindex="-1" role="dialog" aria-labelledby="sharemenuLabel" aria-hidden="true">
    <div class="modal-dialog modal-dialog-centered" role="document">
      <div class="modal-content">
        <div class="modal-header">
          <h5 class="modal-title" id="sharemenuLabel">
            <i class="fa fa-share-alt pr-1"></i> Share
          </h5>
          <button type="button" class="close" data-dismiss="modal" aria-label="Close">
            <span aria-hidden="true">&times;</span>
          </button>
        </div>
        <div class="modal-body">
          <div class="col-12">
            <div class="share-btn">
              <ul>
                <li>
                  <a href="" target="_blank" class="facebook-btn"><i class="z-depth-1 fa fa-facebook"></i></a>
                </li>
                <li>
                  <a href="" target="_blank" class="whatsapp-btn"><i class="z-depth-1 fa fa-whatsapp"></i></a>
                </li>
                <li>
                  <a href="" target="_blank" class="twitter-btn"><i class="z-depth-1 fa fa-twitter"></i></a>
                </li>
                <li>
                  <a href="" target="_blank" class="linkedin-btn"><i class="z-depth-1 fa fa-linkedin"></i></a>
                </li>
              </ul>

              <div class="field">
                <div class="row d-flex align-items-center">
                  <div class="col-8">
                    <input class="form-control px-2 mb-0" id="copylink" rows="4" disabled value="<?php echo $link; ?>" />
                  </div>
                  <div class="col-4">
                    <button type="button" onclick="copyLink()" class="button-full z-depth-1" style="color: black; font-weight: bold">
                      Copy
                    </button>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>

  <!-- end menu share popup -->
  <!--edit menu item Modal -->
  <div class="modal fade" id="comfirmorder" tabindex="-1" role="dialog" aria-labelledby="editMenuLabel" aria-hidden="true">
    <div class="modal-dialog" role="document">
      <div class="modal-content">
        <div class="modal-header">
          <h5 class="modal-title" id="editMenuLabel">
            <i class="fa fa-pencil pr-1"></i> Place Order
          </h5>
          <button type="button" class="close" data-dismiss="modal" aria-label="Close">
            <span aria-hidden="true">&times;</span>
          </button>
        </div>
        <div class="modal-body">
          <div class="">
            <form>
              <div class="input-field">
                <label>Enter FullName</label>
                <input type="text" id="fullname" autofocus placeholder="Your Nice Name">
              </div>
              <div class="fail" id="fullname_e"></div>
              <div class="input-field">
                <label>Enter Mobile Number</label>
                <input type="number" id="mobileno" autofocus placeholder="Mobile Number">
              </div>
              <div class="fail" id="mobile_e"></div>
              <div class="" id="mobile_ee"></div>
              <!-- <button class="button btn-signup z-depth-1" type="button" id="verify">
                <i class="fa fa-pencil"></i>Verify Number
              </button> -->

              <!-- <div class="input-field">
                <label>Enter Number Displyed in restro</label>
                <input type="text" id="restrootp">
              </div>
              <div class="fail" id="restrootp_e"></div> -->
              <!-- <div id="afterotp"> -->
              <!-- <div class="input-field">
                  <label>Enter OTP (ONE TIME PASSWORD)</label>
                  <input type="text" id="otp">
                </div> -->
              <div class="fail" id="otp_e"></div>
              <select class="select-category" name="tableno" id="tableno">
                <option value="0" selected>Select Table</option>
                <?php
                $query = "select * from tables where restroid ='$restroid'";
                $result = mysqli_query($con, $query);
                while ($value = mysqli_fetch_array($result)) {
                  $categoryid = $value['id'];
                  echo "<option value='" . $value['id'] . "'>" . $value['name'] . "</option>";
                }
                ?>
              </select>
              <div class="fail" id="table_e"></div>
              <div class="" id="error"></div>
              <button class="button btn-warning btn-signup z-depth-1" type="button" id="placeorder">
                <i class="fa fa-pencil"></i>Verify
              </button>
              <!-- </div> -->
            </form>
          </div>
        </div>
      </div>
    </div>
  </div>
  <!-- JS, Popper.js, and jQuery -->
  <div class="modal fade" id="comfirmordervalid" tabindex="-1" role="dialog" aria-labelledby="editMenuLabel" aria-hidden="true">
    <div class="modal-dialog" role="document">
      <div class="modal-content">
        <div class="modal-header">
          <h5 class="modal-title" id="editMenuLabel">
            <i class="fa fa-pencil pr-1"></i> Place Order
          </h5>
          <button type="button" class="close" data-dismiss="modal" aria-label="Close">
            <span aria-hidden="true">&times;</span>
          </button>
        </div>
        <div class="modal-body">
          <div class="">
            <form>
              <select class="select-category" name="tableno" id="tablenovalid">
                <option value="0" selected>Select Table</option>
                <?php
                $query = "select * from tables where restroid ='$restroid'";
                $result = mysqli_query($con, $query);
                while ($value = mysqli_fetch_array($result)) {
                  $categoryid = $value['id'];
                  echo "<option value='" . $value['id'] . "'>" . $value['name'] . "</option>";
                }
                ?>
              </select>
              <div class="fail" id="tablevalid_e"></div>
              <div class="" id="errorvalid"></div>
              <button class="button btn-warning btn-signup z-depth-1" type="button" id="placeordervalid">
                <i class="fa fa-pencil"></i>Place My Order
              </button>
          </div>
          </form>
        </div>
      </div>
    </div>
  </div>
  </div>


  <div class="modal fade" id="discountmodel" tabindex="-1" role="dialog" aria-labelledby="editMenuLabel" aria-hidden="true">
    <div class="modal-dialog" role="document">
      <div class="modal-content">
        <div class="modal-header">
          <h5 class="modal-title" id="editMenuLabel">
            <i class="fa fa-pencil pr-1"></i> Set Today's Discount
          </h5>
          <button type="button" class="close" data-dismiss="modal" aria-label="Close">
            <span aria-hidden="true">&times;</span>
          </button>
        </div>
        <div class="modal-body">
          <div class="">
            <form>

              <div class="field">
                <label>Enter Today's Discount</label>
                <input type="number" id="discount" autofocus placeholder="Example : 10 ">
              </div>
              <div class="fail" id="discount_e"></div>
              <div class="" id="error"></div>
              <button class="button-full btn-warning z-depth-1" type="button" id="updatediscount">
                <i class="fa fa-pencil"></i>Set Discount
              </button>
            </form>
          </div>
        </div>
      </div>
    </div>
  </div>
  <!-- JS, Popper.js, and jQuery -->
  <script src="https://code.jquery.com/jquery-3.5.1.slim.min.js" integrity="sha384-DfXdz2htPH0lsSSs5nCTpuj/zy4C+OGpamoFVy38MVBnE+IbbVYUew+OrCXaRkfj" crossorigin="anonymous"></script>
  <script src="https://cdn.jsdelivr.net/npm/popper.js@1.16.0/dist/umd/popper.min.js" integrity="sha384-Q6E9RHvbIyZFJoft+2mJbHaEWldlvI9IOYy5n3zV9zzTtmI3UksdQRVvoxMfooAo" crossorigin="anonymous"></script>
  <script src="js/jquery.min.js"></script>
  <script src="https://stackpath.bootstrapcdn.com/bootstrap/4.5.0/js/bootstrap.min.js" integrity="sha384-OgVRvuATP1z7JjHLkuOU7Xw704+h835Lr+6QL9UvYjZE3Ipu6Tp75j7Bh/kR0JKI" crossorigin="anonymous"></script>

  <script src="js/materialize.js"></script>
  <script src="js/numscroller.js"></script>
  <script src="js/lightbox.js"></script>
  <script src="js/owl.carousel.min.js"></script>
  <script src="js/main.js"></script>
  <script src="js/common.js"></script>
  <script src="js/addtocart.js"></script>
</body>

</html>

