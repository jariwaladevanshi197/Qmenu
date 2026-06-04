<?php
require '../connect.php';
session_start();
$restroid = $_SESSION['restroid'];
$slug = $_SESSION['slug'];
$name = $_SESSION['name'];

if (!isset($_SESSION['restroid'])) {
  header("Location: pagenotfound.php");
}
?>
<!DOCTYPE html>
<html lang="en">

<head>
  <title>My order | <?php echo $name; ?></title>
  <meta charset="UTF-8" />
  <meta name="viewport" content="width=device-width, initial-scale=1.0" />

  <!-- favicon -->
  <link rel="icon" type="image/png" href="/light.png" />
  <link rel="shortcut icon" href="/light.png" type="image/x-icon" />

  <!-- external links -->
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
        <div class="col-9">
          <div class="content-left">
            <a href="index.php?restroid=<?php echo $slug ?>">
              <h3><span><?php echo $name; ?></span></h3>
            </a>
          </div>
        </div>

        <div class="col-3 d-flex flex-row-reverse" style="padding-right: 0">
          <div class="" style="padding: 0">
            <a href="addtocart.php"><i class="material-icons icon-pad">shopping_cart</i><span class="badge cart-item-cnt">0</span></a>
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
          <button class="btn-warning button-full z-depth-1" style="font-weight: bolder" id="backbtn" onclick="history.back()">
            <i class="fa fa-chevron-circle-left"></i>Back To Order
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

  <!-- **************** -->
  <div class="segments-page mb-5">
    <div class="container">
      <div class="pages-title mb-0">
        <h3>Your Order</h3>
        <div class="line"></div>
      </div>

      <div class="row" id="myorder">

      </div>
    </div>
  </div>
  <!-- **************** -->
  <div class="modal fade" id="callwaitermodel" tabindex="-1" role="dialog" aria-labelledby="callwaiter" aria-hidden="true">
    <div class="modal-dialog modal-dialog-centered" role="document">
      <div class="modal-content">
        <div class="modal-header">
          <h5 class="modal-title" id="callwaiter">
            <i class="fa fa-bullhorn pr-1"></i>Call Waiter
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
                <i class="fa fa-send"></i> Call Waiter</button>
            </form>
          </div>
        </div>
      </div>
    </div>
  </div>
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
              <div class="field">
                <div class="form-group">
                  <label for="fullname">Full Name</label>
                  <input type="text" class="form-control" id="fullname" placeholder="Full Name">
                </div>
                <div class="fail" id="fullname_e"></div>
                <div class="form-group">
                  <label for="date" class="control-label">Enter your date of birth</label>
                  <input id="date" name="date" class="form-control input-lg js-date--west" type="date">
                </div>
                <div class=" fail" id="date_e"></div>
                <div class="form-group">
                  <label for="mobile">Mobile no.</label>
                  <input type="number" class="form-control" id="mobile" placeholder="Mobile Number">
                </div>
                <div class="fail" id="mobile_e"></div>
                <div class="form-group">
                  <label for="email">Email address</label>
                  <input type="email" class="form-control" id="email" placeholder="name@example.com">
                </div>
                <div class="fail" id="email_e"></div>
                <div class="form-group">
                  <label for="userfeedback">Give Your FeedBack</label>
                  <textarea class="form-control" id="userfeedback" rows="3" autocomplete="off"></textarea>
                </div>
                <div class="fail" id="feedback_e"></div>
                <div class="" id="errorfeedback"></div>

                <button class="button btn-add z-depth-1 mt-3 btn-block btn-warning text-bold" type="button" id="makepaymentbtn">
                  <i class="fa fa-send"></i> Call Waiter
                </button>
            </form>
          </div>
        </div>
      </div>
    </div>
  </div>
  <!--end feedback show modal -->

  <!-- JS, Popper.js, and jQuery -->
  <script src="https://code.jquery.com/jquery-3.5.1.slim.min.js" integrity="sha384-DfXdz2htPH0lsSSs5nCTpuj/zy4C+OGpamoFVy38MVBnE+IbbVYUew+OrCXaRkfj" crossorigin="anonymous"></script>
  <script src="https://cdn.jsdelivr.net/npm/popper.js@1.16.0/dist/umd/popper.min.js" integrity="sha384-Q6E9RHvbIyZFJoft+2mJbHaEWldlvI9IOYy5n3zV9zzTtmI3UksdQRVvoxMfooAo" crossorigin="anonymous"></script>
  <script src="https://stackpath.bootstrapcdn.com/bootstrap/4.5.0/js/bootstrap.min.js" integrity="sha384-OgVRvuATP1z7JjHLkuOU7Xw704+h835Lr+6QL9UvYjZE3Ipu6Tp75j7Bh/kR0JKI" crossorigin="anonymous"></script>

  <script src="js/jquery.min.js"></script>
  <script src="js/materialize.js"></script>
  <script src="js/numscroller.js"></script>
  <script src="js/lightbox.js"></script>
  <script src="js/owl.carousel.min.js"></script>
  <script src="js/main.js"></script>
  <script src="js/myorder.js"></script>
</body>

</html>