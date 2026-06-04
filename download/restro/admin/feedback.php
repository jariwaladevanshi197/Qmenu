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

  <title>FEEDBACK | Q-MENU</title>
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
        <div class="col-3 pr-0">
          <div class="content-right">
            <span class="material-icons pointer" onclick="showbox()">search</span>
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
      <li class="sidemenu active-menu">
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
  <div class="segments-page">
    <div class="container ">
      <div class="pages-title">
        <h3>FEEDBACKS</h3>
        <div class="line"></div>
      </div>
      <div class="row">

        <div class="col-3 pr-0">
          <select id="day" name="state" class="select-table btn btn-primary ">

            <option value="1">1</option>
            <option value="2">2</option>
            <option value="3">3</option>
            <option value="4">4</option>
            <option value="5">5</option>
            <option value="6">6</option>
            <option value="7">7</option>
            <option value="8">8</option>
            <option value="9">9</option>
            <option value="10">10</option>
            <option value="11">11</option>
            <option value="12">12</option>
            <option value="13">13</option>
            <option value="14">14</option>
            <option value="15">15</option>
            <option value="16">16</option>
            <option value="17">17</option>
            <option value="18">18</option>
            <option value="19">19</option>
            <option value="20">20</option>
            <option value="21">21</option>
            <option value="22">22</option>
            <option value="23">23</option>
            <option value="24">24</option>
            <option value="25">25</option>
            <option value="26">26</option>
            <option value="27">27</option>
            <option value="28">28</option>
            <option value="29">29</option>
            <option value="30">30</option>
            <option value="31">31</option>
          </select>
        </div>
        <div class="col-6">
          <select id="month" name="state" class="select-table btn btn-primary">
            <option value="1">January</option>
            <option value="2">Febuary</option>
            <option value="3">March</option>
            <option value="4">April</option>
            <option value="5">May</option>
            <option value="6">June</option>
            <option value="7">July</option>
            <option value="8">August</option>
            <option value="9">September</option>
            <option value="10">October</option>
            <option value="11">November</option>
            <option value="12">December</option>
          </select>
        </div>
        <div class="col-3 pl-0">
          <select id="year" name="state" class="select-table btn btn-primary pl-0">

            <option value="2023">2023</option>
            <option value="2022">2022</option>
            <option value="2021">2021</option>
            <option value="2020">2020</option>
            <option value="2019">2019</option>
            <option value="2018">2018</option>
            <option value="2017">2017</option>
            <option value="2016">2016</option>
            <option value="2015">2015</option>
            <option value="2014">2014</option>
            <option value="2013">2013</option>
            <option value="2012">2012</option>
            <option value="2011">2011</option>
            <option value="2010">2010</option>
            <option value="2009">2009</option>

          </select>
        </div>


      </div>
      <div class="table-contents z-depth-1 px-3 py-3">

        <table class="">
          <thead class="bg-dark text-white">
            <tr>
              <th class=""></th>
              <th class="">Time</th>
              <th class="">FullName</th>
              <th class="">Email Address</th>

              <th class="">View</th>
              <th class="">Delete</th>
            </tr>
          </thead>
          <tbody id='table'>

          </tbody>
        </table>
      </div>
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

  <!--start feedback show modal -->
  <div class="modal fade" id="viewfeedback" tabindex="-1" role="dialog" aria-labelledby="viewfeedbackLabel" aria-hidden="true">
    <div class="modal-dialog" role="document">
      <div class="modal-content">
        <div class="modal-header">
          <h5 class="modal-title" id="viewfeedbackLabel">
            <i class="fa fa-comment pr-1"></i>FeedBack
          </h5>
          <button type="button" class="close" data-dismiss="modal" aria-label="Close">
            <span aria-hidden="true">&times;</span>
          </button>
        </div>
        <div class="modal-body">
          <div class="col-12">
            <form>
              <div class="field" style="display: none">
                <label>Feedback ID</label>
                <input type="text" id="feedbackid" />
              </div>
              <div class="field">
                <label>Time</label>
                <input type="text" id="feedbacktime" disabled />
              </div>
              <div class="field">
                <label>Name</label>
                <input type="text" id="userfullname" disabled />
              </div>
              <div class="field">
                <label>Contact no.</label>
                <input type="number" id="mobile" disabled />
              </div>
              <div class="field">
                <label>Email</label>
                <input type="text" id="useremail" disabled />
              </div>
              <div class="field">
                <label>Birth-Date</label>
                <input type="text" id="dob" disabled />
              </div>
              <div class="field">
                <label>FeedBack</label>
                <textarea class="form-control" id="userfeedback" rows="3" disabled></textarea>
              </div>
              <div class="fail" id="name_e"></div>
              <div class="" id="taberror"></div>
              <button class="button btn-add z-depth-1 mt-3 btn-block btn-warning" data-dismiss="modal" aria-label="Close">
                Back
              </button>
            </form>
          </div>
        </div>
      </div>
    </div>
  </div>
  <!--end feedback show modal -->
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
  <script src="js/feedback.js"></script>
</body>

</html>

