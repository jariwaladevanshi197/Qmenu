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

  <title>ADD-CATEGORY | Q-MENU</title>
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
      <div class="row">
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
        <div class="col-3">
          <div class="content-right">
            <!-- <span class="material-icons pointer" onclick="showbox()"
                >search</span
              > -->
          </div>
        </div>
      </div>
    </div>
    <!-- <div class="container">
        <div class="row">
          <div class="col-12 srch-pad">
            <div class="search-box" id="searchbox">
              <input
                id="search"
                class="search-input"
                type="text"
                placeholder="Search"
                ng-model="searchio"
              />
            </div>
          </div>
        </div>
      </div> -->
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
      <li class="sidemenu">
        <a href="addorder.php"><i class="fa fa-cutlery"></i>Add Order</a>
      </li>
      <li class="sidemenu active-menu">
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

  <!-- add category -->
  <div class="sign-in segments-page">
    <div class="container">
      <div class="row justify-content-center">
        <div class="col-12 col-md-10 col-lg-8 signup-contents z-depth-1">
          <div class="pages-title">
            <h3>Add Category</h3>
          </div>
          <form>
            <div class="input-field">
              <input type="text" id="nameineng" autofocus>
              <label>Category Name in English</label>
            </div>
            <div class="fail" id="nameeng_e"></div>
            <div class="input-field">
              <input type="text" id="nameinhindi">
              <label>Category Name in Hindi</label>
            </div>
            <div class="fail" id="namehindi_e"></div>
            <div class="input-field">
              <input type="text" id="nameinguj">
              <label>Category Name in Gujarati</label>
            </div>
            <div class="fail" id="nameguj_e"></div>

            <div class="input-field">
              <textarea class="materialize-textarea" cols="30" rows="10" required id="categorydesc"></textarea>
              <label>Category Description</label>
            </div>
            <div class="fail" id="desc_e"></div>
            <button class="button btn-login btn-warning z-depth-1" id="addcategory" type="button">
              <i class="fa fa-plus"></i>Add Category
            </button>
          </form>
        </div>
        <div class="col-12 col-md-10 col-lg-8 signup-contents z-depth-1 mt-4">
          <div class="pages-title">
            <h3>Select Language</h3>
          </div>
          <div class="p-3">
            <select class="form-control" name="language" id="language">
                <option value="name_eng">English</option>
                <option value="name_hindi">Hindi</option>
                <option value="name_guj">Gujarati</option>
            </select>
          </div>
        </div>

        <div class="col-12 col-md-10 col-lg-8 signup-contents z-depth-1 mt-4">
          <div class="pages-title">
            <h3>List of Categories</h3>
          </div>
          <div class="table-responsive">
            <table class="table rm-border">
              <tbody id="displaycategory">
                <!-- <tr>
                  <th scope="row">1</th>
                  <td class="item-name">Mango juice</td>
                  <td class="text-right">
                    <button type="button" class="action-btn action-btn-primary"><i class="fa fa-pencil"></i></button>
                    <button type="button" class="action-btn action-btn-warning"><i class="fa fa-trash"></i></button>
                  </td>
                </tr> -->
              </tbody>
            </table>
          </div>
        </div>
      </div>
    </div>
  </div>
  <!-- end add category -->

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
  <!--start edit Category -->
  <div class="modal fade" id="editcategory" tabindex="-1" role="dialog" aria-labelledby="editcategoryLabel" aria-hidden="true">
    <div class="modal-dialog" role="document">
      <div class="modal-content">
        <div class="modal-header">
          <h5 class="modal-title" id="editcategoryLabel">
            <i class="fa fa-pencil pr-1"></i> Edit Category
          </h5>
          <button type="button" class="close" data-dismiss="modal" aria-label="Close">
            <span aria-hidden="true">&times;</span>
          </button>
        </div>
        <div class="modal-body">
          <div class="col-12">
            <form>
              <div class="field" style="display: none;">
                <label>Category id</label>
                <input type="text" id="categoryid" />
              </div>
              <div class="field">
                <label>Category Name In English</label>
                <input type="text" id="catenglish" />
              </div>
              <div class="fail" id="mynameeng_e"></div>

              <div class="field">
                <label>Category Name In Hindi</label>
                <input type="text" id="cathindi" />
              </div>
              <div class="fail" id="mynamehindi_e"></div>
              <div class="field">
                <label>Category Name In Gujarati</label>
                <input type="text" id="catgujarati" />
              </div>
              <div class="fail" id="mynameguj_e"></div>

              <div class="" id="mycaterror"></div>
              <button class="button btn-add z-depth-1 mt-3 btn-block btn-warning" type="button" id="catupdate">
                Update
              </button>
            </form>
          </div>
        </div>
      </div>
    </div>
  </div>
  <!--end edit table -->
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
              <button class="button-full btn-warning btn-warning z-depth-1" type="button" id="updatediscount">
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
  <script src="js/category.js?v=2"></script>
</body>

</html>

