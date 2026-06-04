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
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">

  <title>ORDERS | Q-MENU</title>
  <link rel="icon" type="image/png" href="/light.png" />
  <link rel="shortcut icon" href="/light.png" type="image/x-icon" />
  <link rel="stylesheet" href="https://fonts.googleapis.com/icon?family=Material+Icons">
  <link rel="stylesheet" href="css/materialize.css">
  <link rel="stylesheet" href="css/loaders.css">
  <link rel="stylesheet" href="css/lightbox.css">
  <link rel="stylesheet" href="css/font-awesome.min.css">
  <link rel="stylesheet" href="css/owl.carousel.min.css">
  <link rel="stylesheet" href="css/owl.theme.default.min.css">
  <link rel="stylesheet" href="https://stackpath.bootstrapcdn.com/bootstrap/4.5.0/css/bootstrap.min.css" integrity="sha384-9aIt2nRpC12Uk9gS9baDl411NQApFmC26EwAOH8WgZl5MYYxFfc+NcPb1dKGj7Sk" crossorigin="anonymous">
  <link rel="stylesheet" href="css/style.css">

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
          <div class="background">
            <img src="<?php echo $logo; ?>" alt="" />
          </div>
        </div>
      </li>
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
      <li class="sidemenu active-menu">
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
    </ul>
  </div>
  <!-- end sidebar -->

  <div class="segments-page">
    <div class="container">
      <!-- Waiter's Call Header -->
      <div class="row">
        <div class="col-12">
          <a href="notification.php" class="waiter-call-banner">
            <i class="fa fa-bullhorn"></i> WAITER'S CALL
            <span class="call-badge" id="callwaitercount">0</span>
          </a>
        </div>
      </div>

      <!-- Order Category Buttons & Search -->
      <div class="order-management-header">
        <div class="order-tabs">
          <button class="order-tab active" data-filter="pending">All Orders</button>
          <button class="order-tab" data-filter="on_process">On Process</button>
          <button class="order-tab" data-filter="completed">Completed</button>
        </div>
        
        <div class="header-actions">
          <button id="toggleFilters" class="filter-toggle-btn" title="Show Advanced Filters">
            <i class="fa fa-sliders"></i>
          </button>
          <div class="order-search">
            <i class="fa fa-search"></i>
            <input type="text" id="orderSearch" placeholder="Search a name, order, or etc">
          </div>
        </div>
      </div>

      <!-- Advanced Filters Panel -->
      <div class="advanced-filters-panel" id="advancedFilters">
        <div class="filter-grid">
          <div class="filter-group">
            <label><i class="fa fa-calendar"></i> From Date</label>
            <input type="date" id="dateFrom" class="filter-input">
          </div>
          <div class="filter-group">
            <label><i class="fa fa-calendar"></i> To Date</label>
            <input type="date" id="dateTo" class="filter-input">
          </div>
          <div class="filter-group">
            <label><i class="fa fa-map-marker"></i> Specific Table</label>
            <select id="filterTable" class="filter-input">
              <option value="">All Tables</option>
              <?php
              $tQuery = "SELECT * FROM tables WHERE restroid = '$restroid'";
              $tRes = mysqli_query($con, $tQuery);
              while($tRow = mysqli_fetch_array($tRes)) {
                echo '<option value="'.$tRow['id'].'">'.$tRow['name'].'</option>';
              }
              ?>
            </select>
          </div>
          <div class="filter-group">
            <label><i class="fa fa-sort-amount-desc"></i> Sort By</label>
            <select id="orderSort" class="filter-input">
              <option value="desc">Newest Order first</option>
              <option value="asc">Oldest Order first</option>
            </select>
          </div>
          <div class="filter-group action-group">
            <button id="applyFilters" class="btn-filter-apply">Apply</button>
            <button id="clearFilters" class="btn-filter-clear">Reset</button>
          </div>
        </div>
      </div>

      <div class="status-bar">
        <div class="status-item">
          <div class="status-dot pending"></div>
          <span>Pending Orders</span>
        </div>
        <div class="status-item">
          <div class="status-dot completed"></div>
          <span>Completed Orders</span>
        </div>
      </div>

      <div class="pages-title">
        <h3>TABLE ORDER</h3>
      </div>

      <!-- Order Cards Container -->
      <div class="row" id="ordercontainer">
        <!-- Dynamic Content from fatchorders.php -->
        <div class="col-12 text-center py-5">
           <div class="preloader-wrapper small active" style="width: 30px; height: 30px;">
              <div class="spinner-layer spinner-blue-only">
                <div class="circle-clipper left"><div class="circle"></div></div>
                <div class="gap-patch"><div class="circle"></div></div>
                <div class="circle-clipper right"><div class="circle"></div></div>
              </div>
           </div>
        </div>
      </div>
    </div>
  </div>

  <!-- modals -->
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
                <li><a href="" target="_blank" class="facebook-btn"><i class="z-depth-1 fa fa-facebook"></i></a></li>
                <li><a href="" target="_blank" class="whatsapp-btn"><i class="z-depth-1 fa fa-whatsapp"></i></a></li>
                <li><a href="" target="_blank" class="twitter-btn"><i class="z-depth-1 fa fa-twitter"></i></a></li>
                <li><a href="" target="_blank" class="linkedin-btn"><i class="z-depth-1 fa fa-linkedin"></i></a></li>
              </ul>
              <div class="field">
                <div class="row d-flex align-items-center">
                  <div class="col-8">
                    <input class="form-control px-2 mb-0" id="copylink" rows="4" disabled value="<?php echo $link; ?>" />
                  </div>
                  <div class="col-4">
                    <button type="button" onclick="copyLink()" class="button-full z-depth-1" style="color: black; font-weight: bold">Copy</button>
                  </div>
                </div>
              </div>
            </div>
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

  <!-- Scripts -->
  <script src="js/jquery.min.js"></script>
  <script src="https://cdn.jsdelivr.net/npm/popper.js@1.16.0/dist/umd/popper.min.js"></script>
  <script src="https://stackpath.bootstrapcdn.com/bootstrap/4.5.0/js/bootstrap.min.js"></script>
  <script src="js/materialize.js"></script>
  <script src="js/main.js"></script>
  <script src="js/common.js"></script>
  <script src="js/orders.js"></script>

</body>
</html>
