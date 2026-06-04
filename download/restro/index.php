<?php
require '../connect.php';
session_start();
$slug  = $_GET['restroid'];

$sql = "select * from restro where slug='$slug'";
$query = mysqli_query($con, $sql);
$row1 = mysqli_fetch_array($query);
$x = $row1['status'];
$subtype = $row1['subtype'];
$themecode = $row1['themecode'];



if ($themecode != '' && $themecode != 0) {
  
  $sql = "select title from theme where id = " . $themecode . " limit 1";
  $query = mysqli_query($con, $sql);
  $row = mysqli_fetch_array($query);
  $themename = $row[0];
  $link = '../template/' . $themename . '/?restroid=' . $slug . '';
  if (isset($_GET['table'])) {
    $link .= '&table=' . $_GET['table'];
  }
  if (isset($_GET['code'])) {
    $link .= '&code=' . $_GET['code'];
  }
  // $linkk = 'http://localhost/suratbest/template/' . $themename . '/?restroid=' . $slug . '';
  header("Location: " . $link);
}
if ($x == 0) {
  header("Location: pagenotfound.php");
}
$restroid = $row1['id'];
$slug = $row1['slug'];
$name = $row1['restroname'];
$_SESSION['slug'] = $slug;
$_SESSION['restroid'] = $restroid;
$_SESSION['name'] = $name;
// echo '<script>alert('.$restroid.')</script>';

?>
<!DOCTYPE html>
<html lang="en">

<head>
  <title> Menu | <?php echo $name; ?> </title>
  <meta charset="UTF-8" />
  <meta name="viewport" content="width=device-width, initial-scale=1.0" />

  <!-- SEO metas -->
  <meta name="description" content="surat.best is restaurent management company for the digital menu distribution in restaurants with customers satisfication and for save plastic menus and disposable menus.">

  <meta name="keywords" content="<?php echo $name; ?>,SURAT.BEST,SURAT BEST,BEST,SURAT,SURAT RESTAURANT,RESTAURENT,RESTAURANT,YRHP,BEST RESTAURENT,TOP RESTAURANT,RESTAURANT IN SURAT,SURAT,TOP RESTAURANT,TOP SURAT,MENUS,TOP MENU,SURAT MENU,RESTAURANT MENU,FIVESTAR RESTAURANT,BEST MENU OF RESTAURANT">

  <meta name="author" content="surat.best">

  <!-- favicon -->
  <link rel="icon" type="image/png" href="../light.png" />
  <link rel="shortcut icon" href="../light.png" type="image/x-icon" />

  <!-- external links -->
  <link rel="stylesheet" href="https://fonts.googleapis.com/icon?family=Material+Icons" />
  <link rel="stylesheet" href="css/materialize.css" />
  <link rel="stylesheet" href="css/loaders.css" />
  <link rel="stylesheet" href="css/owl.carousel.min.css" />
  <link rel="stylesheet" href="css/lightbox.css" />
  <link rel="stylesheet" href="css/font-awesome.min.css" />
  <link rel="stylesheet" href="css/owl.theme.default.min.css" />
  <link rel="stylesheet" href="https://stackpath.bootstrapcdn.com/bootstrap/4.5.0/css/bootstrap.min.css" integrity="sha384-9aIt2nRpC12Uk9gS9baDl411NQApFmC26EwAOH8WgZl5MYYxFfc+NcPb1dKGj7Sk" crossorigin="anonymous" />
  <link rel="stylesheet" href="css/style.css" />

  <!-- Global site tag (gtag.js) - Google Analytics -->
  <script async src="https://www.googletagmanager.com/gtag/js?id=UA-80866042-21"></script>
  <script>
    window.dataLayer = window.dataLayer || [];

    function gtag() {
      dataLayer.push(arguments);
    }
    gtag('js', new Date());

    gtag('config', 'UA-80866042-21');
  </script>
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
      <div class="row d-flex justify-content-between">
        <div class="col-9">
          <div class="content-left">
            <a href="index.php?restroid=<?php echo $slug ?>">
              <h3><span><?php echo $name; ?></span></h3>
            </a>
          </div>
        </div>

        <div class="col-3 d-flex flex-row-reverse" style="padding-right: 0">
          <div class="" style="padding: 0">
            <a href="addtocart.php"><i class="material-icons icon-pad">shopping_cart</i><span id='cartcount' class="badge cart-item-cnt">0</span></a>
          </div>
          <div class="" style="padding: 0">
            <span class="material-icons pointer icon-pad" style="padding: 0 5px 0 0" onclick="showbox()">search</span>
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

  <!-- bottom navbar -->
  <div class="bottom-navbar">
    <div class="container">
      <div class="row mx-0">
        <div class="col-2 px-0">
          <select class="btn-warning select-table button-full z-depth-1" id="language">
            <option value="name_eng">Eng</option>
            <option value="name_guj">Guj</option>
            <option value="name_hindi">Hin</option>
          </select>
        </div>
        <div class="col-8">
          <button class="btn-warning button-full z-depth-1" style="font-weight: bolder" onclick="document.location='myorder.php'">
            <i class="fa fa-list-alt"></i>My Order
          </button>
        </div>
        <div class="col-2 px-0">
          <button class="btn-warning button-full z-depth-1" id="callwaiter" type="button">
            <i class="fa fa-bullhorn"></i>
          </button>
          <div style="display: none;">
            <button class="btn-warning button-full z-depth-1" id="callwaiterext" type="button" data-toggle="modal" data-target="#callwaitermodel">
              <i class="fa fa-bullhorn"></i>
            </button>
          </div>
        </div>
      </div>
    </div>
  </div>
  <!-- end bottom navbar -->

  <!-- list -->
  <div class="list segments-page" id="segments">
    <div class="container">
      <div class="row mb-3 mt-2">
        <div class="col-12 text-center">
          <?php
          $sql_pdf = "select pdf from restro where id='$restroid'";
          $query_pdf = mysqli_query($con, $sql_pdf);
          $row_pdf = mysqli_fetch_array($query_pdf);
          $pdf = $row_pdf[0];
          if ($pdf != '') {
            $pdf_rel_path = '../adminrestro/pdf/' . basename($pdf);
            echo '<a href="' . $pdf_rel_path . '" download class="btn btn-warning btn-block shadow-sm text-bold py-2"><i class="fa fa-download mr-1"></i>Download Menu (PDF)</a>';
          }
          ?>
        </div>
      </div>
      <div class="main">
        <button type="button" class="btn-mng btn-mng-left" id="slideBack">
          <i class="fa fa-chevron-left" aria-hidden="true"></i>
        </button>
        <div class="scrollmenu" id="container" style='width:100%;'>

        </div>
        <button type="button" class="btn-mng btn-mng-right" id="slide">
          <i class="fa fa-chevron-right" aria-hidden="true"></i>
        </button>
      </div>



      <div class="row" id="itemcontainer">

      </div>
    </div>
  </div>
  <!-- end list -->

  <!--start feedback show modal -->
  <div class="modal fade" id="feedback" tabindex="-1" role="dialog" aria-labelledby="feedbackLabel" aria-hidden="true">
    <div class="modal-dialog modal-dialog-centered" role="document">
      <div class="modal-content">
        <div class="modal-header">
          <h5 class="modal-title" id="feedbackLabel">
            <i class="fa fa-commenting pr-1"></i>FeedBack
          </h5>
          <button type="button" class="close" data-dismiss="modal" aria-label="Close">
            <span aria-hidden="true">&times;</span>
          </button>
        </div>
        <div class="modal-body">
          <div class="col-12">
            <form>
              <div class="input-field">
                <input type="text" id="userfullname" required />
                <label>Name
                  <span style="color: red; font-weight: bold">*</span></label>
              </div>
              <div class="input-field">
                <input type="text" id="useremail" required />
                <label>Contact
                  <span style="color: red; font-weight: bold">*</span></label>
              </div>
              <div class="input-field">
                <input type="text" id="useremai" required />
                <label>Birth-Date </label>
              </div>

              <div class="input">
                <label>FeedBack</label>
                <textarea class="form-control" id="userfeedback" rows="4"></textarea>
              </div>
              <div class="fail" id="name_e"></div>
              <div class="" id="taberror"></div>
              <button class="button btn-add z-depth-1 mt-3 btn-block btn-warning text-bold" data-dismiss="modal" aria-label="Close">
                <i class="fa fa-send"></i> Send
              </button>
            </form>
          </div>
        </div>
      </div>
    </div>
  </div>
  <!--end feedback show modal -->
  <div class="modal fade" id="callwaitermodel" tabindex="-1" role="dialog" aria-labelledby="callwaiter" aria-hidden="true">
    <div class="modal-dialog modal-dialog-centered" role="document">
      <div class="modal-content">
        <div class="modal-header">
          <h5 class="modal-title" id="callwaiter">
            <i class="fa fa-commenting pr-1"></i>call Waiter..
          </h5>
          <button type="button" class="close" data-dismiss="modal" aria-label="Close">
            <span aria-hidden="true">&times;</span>
          </button>
        </div>
        <div class="modal-body">
          <div class="col-12">
            <form>
              <select class="select-category" name="tableno" id="tablenocall">

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
              <div class="input-field">
                <input type="text" id="restrootpcall" autofocus placeholder="(Search For It Or Call Waiter)" />
                <label>Enter Restro Code
                  <span style="color: red; font-weight: bold">*</span></label>
              </div>
              <div class="fail" id="restrootp_e"></div>
              <div class="" id="callwaiter_e"></div>
              <button class="button btn-add z-depth-1 mt-3 btn-block btn-warning text-bold" type="button" id="callwaiterbtn">
                <i class="fa fa-send"></i> Call Waiter..
              </button>
            </form>
          </div>
        </div>
      </div>
    </div>
  </div>
  <div id="snackbar">Item Added To Cart..</div>
  <!-- JS, Popper.js, and jQuery -->
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
  <script src="js/index.js"></script>
</body>

</html>