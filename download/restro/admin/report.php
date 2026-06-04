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

    <title>REPORT | Q-MENU</title>
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
    <link rel="stylesheet" href="css/style.css?v=1.5">

</head>


<body>
    <!-- navbar -->
    <div class="navbar">
        <div class="container">
            <div class="row align-items-center">
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
            <li class="sidemenu active-menu">
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
            <div class="pages-title">
                <div class="d-flex justify-content-between align-items-center flex-wrap gap-3">
                    <h3>Report</h3>
                    <div class="live-indicator-wrapper">
                        <span class="live-dot"></span>
                        <span class="live-text">REAL-TIME LIVE</span>
                    </div>
                </div>
            </div>
            <div class="line mb-4"></div>
            
            <audio id="orderNotification" preload="auto">
                <source src="https://assets.mixkit.co/active_storage/sfx/2869/2869-preview.mp3" type="audio/mpeg">
            </audio>

            <div class="report-filter-card">
                <div class="row align-items-end">
                    <div class="col-12 col-md-3 mb-4 mb-md-0">
                        <div class="input-group-custom">
                            <label><i class="fa fa-calendar-plus-o"></i> Starting Date</label>
                            <input type="date" id="datefrom" name="birthday" class="browser-default">
                        </div>
                    </div>
                    <div class="col-12 col-md-3 mb-4 mb-md-0">
                        <div class="input-group-custom">
                            <label><i class="fa fa-calendar-check-o"></i> Ending Date</label>
                            <input type="date" id="dateto" name="birthday" class="browser-default">
                        </div>
                    </div>
                    <div class="col-6 col-md-3">
                        <button class="btn btn-warning btn-premium btn-block" id="search">
                            <i class="fa fa-search"></i> Search
                        </button>
                    </div>
                    <div class="col-6 col-md-3">
                        <button type="button" class="btn btn-light btn-premium btn-block" id="resetbtn">
                            <i class="fa fa-refresh"></i> Reset
                        </button>
                    </div>
                </div>
            </div>

            <div class="row">
                <div class="col-12 col-sm-6 col-md-6 col-lg-3 mb-4" id="tordercountbtn">
                    <div class="contents total-report z-depth-3 d-flex align-items-center">
                        <div class="list-img">
                            <i class="fa fa-coffee"></i>
                        </div>
                        <div class="list-text">
                            <h6 class="menu-item-title">Total Orders</h6>
                            <div class="total">
                                <strong><span id="tordercount"></span></strong>
                            </div>
                        </div>
                    </div>
                </div>
                <div class="col-12 col-sm-6 col-md-6 col-lg-3 mb-4" id="amountcountbtn">
                    <div class="contents total-report z-depth-3 d-flex align-items-center">
                        <div class="list-img">
                            <i class="fa fa-inr"></i>
                        </div>
                        <div class="list-text">
                            <h6 class="menu-item-title">Total Revenue</h6>
                            <div class="total">
                                <strong><span id="amountcount"></span></strong>
                            </div>
                        </div>
                    </div>
                </div>
                <div class="col-12 col-sm-6 col-md-6 col-lg-3 mb-4" id="todaysamountbtn">
                    <div class="contents total-report z-depth-3 d-flex align-items-center">
                        <div class="list-img">
                            <i class="fa fa-money"></i>
                        </div>
                        <div class="list-text">
                            <h6 class="menu-item-title">Today's Sales</h6>
                            <div class="total">
                                <strong><span id="todaysamount"></span></strong>
                            </div>
                        </div>
                    </div>
                </div>
                <div class="col-12 col-sm-6 col-md-6 col-lg-3 mb-4" id="tbdaybtn">
                    <div class="contents total-report z-depth-3 d-flex align-items-center">
                        <div class="list-img">
                            <i class="fa fa-birthday-cake"></i>
                        </div>
                        <div class="list-text">
                            <h6 class="menu-item-title">Birthdays</h6>
                            <div class="total">
                                <strong><span id="tbday"></span></strong>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            <div class="table-contents z-depth-1 px-0 py-0">
                <div class="table-responsive">
                    <table class="table" id="ordercontainer">
                        <thead>
                            <tr>
                                <th>Sr</th>
                                <th>Time</th>
                                <th>Name</th>
                                <th>Contact No.</th>
                                <th>Order Details</th>
                            </tr>
                        </thead>
                        <tbody>
                        </tbody>
                    </table>
                </div>
                <div id="page" class="p-4 text-center"></div>
                <span id="pg" style="display: none;">1</span>
            </div>
        </div>
    </div>


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
    <div class="modal fade bd-example-modal-lg" tabindex="-1" role="dialog" aria-labelledby="myLargeModalLabel" aria-hidden="true" id="invoice-pop">
        <div class="modal-dialog modal-lg">
            <div class="modal-content">
                <div class="modal-header">
                    <h5 class="modal-title" id="exampleModalLongTitle">Invoice</h5>
                    <button type="button" class="close" data-dismiss="modal" aria-label="Close">
                        <span aria-hidden="true">&times;</span>
                    </button>
                </div>
                <div class="modal-body" id="invoice">
                    <!-- bill start -->
                    <div class="text-center mb-4 px-3">
                        <h1 class="border-bottom border-top" style="letter-spacing: 2px;">*** INVOICE ***</h1>
                    </div>
                    <header class="clearfix px-3">
                        <?php
                        $sql = "select restroname,address,email,mobileno from restro where id ='$restroid'";
                        $query = mysqli_query($con, $sql);
                        $row = mysqli_fetch_array($query);
                        $name = $row[0];
                        $address = $row[1];
                        $gmail = $row[2];
                        $mobileno = $row[3];
                        ?>
                        <div class="row">
                            <div class="col-6 order-1">
                                <h2><?php echo $name; ?></h2>
                                <p><?php echo $address; ?></p>
                                <div class="py-2">
                                    <p><?php echo $mobileno; ?></p>
                                    <p><?php echo $gmail; ?></p>
                                </div>
                            </div>
                            <div class="col-6 order-2 text-md-right">
                                <h2>Customer Detail</h2>
                                <h5 class="pt-2"><strong>Bill No.:</strong>
                                    <span id="orderno"> </span>
                                </h5>
                                <h6 class="pt-2"><strong>Time.:</strong>
                                    <span id="ordertime"> </span>
                                </h6>
                                <div class="py-2">
                                    <p><span id="UserName"></span></p>
                                    <p><span id="mobileno"></span></p>
                                </div>
                            </div>
                        </div>
                    </header>
                    <main class="px-3">
                        <table class="invoice-table">
                            <thead>
                                <tr>
                                    <th class="service">SR.</th>
                                    <th class="desc">DESCRIPTION</th>
                                    <th>PRICE</th>
                                    <th>QTY</th>
                                    <th class="text-right">TOTAL</th>
                                </tr>
                            </thead>
                            <tbody id="allitem">
                            </tbody>
                        </table>
                    </main>
                    <footer class="py-2 text-center">
                        <p>Thank you !! Visit again :)</p>
                    </footer>
                </div>
                <div class="modal-footer d-flex justify-content-between">
                    <button type="button" class="btn btn-secondary" data-dismiss="modal">
                        Close
                    </button>
                    <button type="button" class="btn btn-warning" id="print-report-invoice">
                        <i class="fa fa-print"></i> Print Invoice
                    </button>
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
                            <i class="fa fa-pencil"></i> Set Discount
                        </button>
                    </form>
                </div>
            </div>
        </div>
    </div>

    <!-- Scripts -->
    <script src="js/jquery.min.js"></script>
    <script src="https://cdn.jsdelivr.net/npm/popper.js@1.16.1/dist/umd/popper.min.js" crossorigin="anonymous"></script>
    <script src="https://stackpath.bootstrapcdn.com/bootstrap/4.5.2/js/bootstrap.min.js" crossorigin="anonymous"></script>
    <script src="js/materialize.js"></script>
    <script src="js/numscroller.js"></script>
    <script src="js/lightbox.js"></script>
    <script src="js/owl.carousel.min.js"></script>
    <script src="js/main.js"></script>
    <script src="js/common.js"></script>
    <script src="js/report.js"></script>
</body>
</html>
