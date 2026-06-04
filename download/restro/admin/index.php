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
  $clean_qr = ltrim($qrcode, '/');
  $clean_qr = str_replace('admin/', '', $clean_qr);
  $logo = '../../admin/' . $clean_qr;
}
$protocol = isset($_SERVER['HTTPS']) && $_SERVER['HTTPS'] === 'on' ? "https" : "http";
$base_url = $protocol . "://" . $_SERVER['HTTP_HOST'] . str_replace('/admin', '', dirname($_SERVER['PHP_SELF']));
$link = '../index.php?restroid=' . $slug . '';
?>
<!DOCTYPE html>
<html lang="en">

<head>
  <meta charset="UTF-8" />
  <meta name="viewport" content="width=device-width, initial-scale=1.0" />

  <title> <?php echo $restroname; ?> | Q-MENU</title>
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
  <!-- preloader -->
  <div class="preloader">
    <div class="spinner z-depth-1"></div>
  </div>
  <!-- end preloader -->

  <!-- navbar -->
  <div class="navbar">
    <div class="container">
      <div class="row mr-0">
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
        <div class="col-3 pr-0">
          <div class="content-right">


            <span class="material-icons pointer pl-1" onclick="showbox()">search</span>
          </div>
        </div>

      </div>
    </div>
    <div class="container">
      <div class="row">
        <div class="col-12 srch-pad">
          <div class="search-box" id="searchbox">
            <input id="search" class="search-input" type="text" placeholder="Search" ng-model="searchio" />
          </div>
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
            <img src="<?php echo $logo; ?>" alt="logo" style="object-fit: contain; width: 100%; height: 100%;" />
        </div>
      </li>
      <!--  -->

      <li class="restro-id-container">
        <div class="restro-badge">
          <i class="fa fa-key"></i>
          <span>ID: <strong id="restrocode">546734</strong></span>
        </div>
      </li>

      <li class="sidemenu">
        <a href="" data-toggle="modal" data-target="#discountmodel" id="discountbtn"><i class="fa fa-percent"></i>Today's Discount</a>
      </li>
      <li class="sidemenu active-menu">
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
      <li class="sidemenu">
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

  <!-- list -->
  <div class="list segments-page">
    <div class="container">
      <div class="row mb-4 align-items-center">
        <div class="col-8 col-md-10">
          <select class="select-table" id="language" style="margin-bottom: 0;">
            <option value="name_eng">English Menu</option>
            <option value="name_guj">Gujarati Menu</option>
            <option value="name_hindi">Hindi Menu</option>
          </select>
        </div>
        <div class="col-4 col-md-2 pl-0">
          <a href="notification.php" class="notificationforcall btn btn-primary w-100" style="background: var(--prem-surface-light) !important; border: 1px solid var(--prem-border) !important;">
            <i class="fa fa-bullhorn" style="color: var(--prem-primary);"></i>
            <span class="badgeforcall" id="callwaitercount" style="border: none;">0</span>
          </a>
        </div>
      </div>
      <div class="main">
        <button type="button" class="btn-mng btn-mng-left" id="slideBack">
          <i class="fa fa-chevron-left" aria-hidden="true"></i>
        </button>
        <div class="scrollmenu" id="container" style="width: 100%;">
          <!-- <a class="activemenu z-depth-1">Home</a>
          <a class="z-depth-1 ">News</a>
          <a class="z-depth-1">Contact</a>
          <a href="#about" class="z-depth-1">About</a>
          <a href="#support" class="z-depth-1">Support</a> -->
          <!-- <a href="#blog" class="z-depth-1">Blog</a>
          <a href="#tools" class="z-depth-1">Tools</a>
          <a href="#base" class="z-depth-1">Base</a>
          <a href="#custom" class="z-depth-1">Custom</a>
          <a href="#more" class="z-depth-1">More</a> -->

        </div>
        <button type="button" class="btn-mng btn-mng-right" id="slide">
          <i class="fa fa-chevron-right" aria-hidden="true"></i>
        </button>
      </div>

      <!-- ADMIN POST LAYOUT -->
      <div id='itemcontainer'>
      </div>

      <!--END ADMIN POST LAYOUT -->

      <!-- ADMIN POST LAYOUT -->
      <!-- <div class="contents z-depth-1">
        <div class="list-img">
          <img src="images/f1.jpg" alt="" />
        </div>
        <div class="list-text">
          <h6 class="menu-item-title">Cheez Burger</h6>
          <p>
            <strong style="color: #00d2ff; font-size: 15px">&#8377;500</strong>
          </p>
         

          <button type="button" class="btn btn-primary btn-edit">
            <span class="d-none d-md-block">Edit</span><i class="fa fa-pencil d-md-none"></i>
          </button>

          <button type="button" class="btn btn-warning add-cart-btn">
            <span class="d-none d-md-block">Delete</span><i class="fa fa-trash d-md-none"></i>
          </button>

         
        </div>
      </div> -->
      <!--END ADMIN POST LAYOUT -->
    </div>
  </div>
  <!-- end list -->



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
                    <input class="form-control px-2 mb-0" id="copylink" rows="4" disabled value=<?php echo $link; ?> />
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
  <div class="modal fade" id="editMenu" tabindex="-1" role="dialog" aria-labelledby="editMenuLabel" aria-hidden="true">
    <div class="modal-dialog" role="document">
      <div class="modal-content">
        <div class="modal-header">
          <h5 class="modal-title" id="editMenuLabel">
            <i class="fa fa-pencil pr-1"></i> Edit Menu Item
          </h5>
          <button type="button" class="close" data-dismiss="modal" aria-label="Close">
            <span aria-hidden="true">&times;</span>
          </button>
        </div>
        <div class="modal-body">
          <div class="">
            <form>
              <div class="profile-banner">
                <span>Menu Item Image</span>
                <div class="contents">
                  <img id="blah" src="images/blog1.jpg" class="imagesize" alt="your image" />
                  <input id="imageUpload" type="file" name="imageUpload" onchange="readURL(this);" />
                </div>
              </div>
              <div class="field" style="display: none;">
                <label>Item ID</label>
                <input type="text" id="itemid" disabled>
              </div>
              <div class="field">
                <label>item Name in English</label>
                <input type="text" id="i_nameineng" autofocus>

              </div>
              <div class="fail" id="i_nameeng_e"></div>
              <div class="field">
                <label>item Name in Gujarati</label>
                <input type="text" id="i_nameinguj">
              </div>
              <div class="fail" id="i_nameguj_e"></div>
              <div class="field">
                <label>item Name in Hindi</label>
                <input type="text" id="i_nameinhindi">
              </div>
              <div class="fail" id="i_namehindi_e"></div>
              <div class="field">
                <label>Item Price</label>
                <input type="text" id="itemprice">
              </div>
              <div class="fail" id="itemprice_e"></div>

              <div class="field">
                <select class="select-category" name="category" id="category_veg">
                  <option value="0" selected>veg</option>
                  <option value="1">non-veg</option>
                </select>
              </div>
              <div class="fail" id="category_veg_e"></div>


              <div class="field">
                <select class="select-category" name="category" id="category_available">
                  <option value="1" selected>available</option>
                  <option value="0">unavailable</option>
                </select>
              </div>
              <div class="fail" id="category_available_e"></div>


              <div class="field">
                <select class="select-category" name="category" id="itemcategory">
                  <option value="0" selected>Select Category</option>
                  <?php
                  $query = "select * from category where restroid ='$restroid'";
                  $result = mysqli_query($con, $query);

                  while ($value = mysqli_fetch_array($result)) {
                    $categoryid = $value['id'];
                    echo "<option value='$categoryid'>" . $value['name_eng'] . "/" . $value['name_guj'] . "/" . $value['name_hindi'] . "</option>";
                  }
                  ?>
                </select>
              </div>
              <div class="fail" id="itemcategory_e"></div>
              <div class="" id="error"></div>
              <button class="button-full btn-warning z-depth-1" type="button" id="updateitem">
                <i class="fa fa-pencil"></i>Update
              </button>
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
  <script src="https://cdn.jsdelivr.net/npm/popper.js@1.16.1/dist/umd/popper.min.js" integrity="sha384-9/reFTGAW83EW2RDu2S0VKaIzap3H66lZH81PoYlFhbGU+6BZp6G7niu735Sk7lN" crossorigin="anonymous"></script>
  <script src="https://stackpath.bootstrapcdn.com/bootstrap/4.5.2/js/bootstrap.min.js" integrity="sha384-B4gt1jrGC7Jh4AgTPSdUtOBvfO8shuf57BaghqFfPlYxofvL8/KUEfYiJOMMV+rV" crossorigin="anonymous"></script>

  <script src="js/jquery.min.js"></script>
  <script src="js/materialize.js"></script>
  <script src="js/numscroller.js"></script>
  <script src="js/lightbox.js"></script>
  <script src="js/owl.carousel.min.js"></script>
  <script src="js/main.js"></script>
  <script src="js/common.js"></script>
  <script src="js/index.js"></script>
  <script>

  </script>
</body>

</html>

