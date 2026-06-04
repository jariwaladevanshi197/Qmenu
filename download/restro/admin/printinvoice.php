<?php
require '../../connect.php';
require 'code/checksession2.php';
$restroid = $_SESSION['megausersession'];
$sql = "select themecode,slug,restroname from restro where id = " . $restroid . " limit 1";
$query = mysqli_query($con, $sql);
$row = mysqli_fetch_array($query);
$themecode = $row[0];
$slug = $row[1];
$restroname = $row[2];
$link = '../index.php?restroid=' . $slug . '';
?>
<!DOCTYPE html>
<html lang="en">

<head>
  <meta charset="UTF-8" />
  <meta name="viewport" content="width=device-width, initial-scale=1.0" />

  <title>PRINT ORDER | Q-MENU</title>
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
            <a href="javascript:history.back()"><i class="material-icons">clear</i></a>

          </div>
        </div>
        <div class="col-6">
          <div class="content-center">
            <a href="index.php">
              <h1><span><?php echo $restroname; ?></span></h1>
            </a>
          </div>
        </div>
        <div class="col-3 pr-0">
          <!-- <div class="content-right">
              <span class="material-icons pointer" onclick="showbox()"
                >search</span
              >
            </div> -->
        </div>
      </div>
    </div>
  </div>
  <!-- end navbar -->

  <!-- list -->
  <div class="list segments-page">
    <div class="container">
      <div id="order-det">
        <div class="text-center mb-4 px-3">
          <h1 class="border-bottom border-top" style="letter-spacing: 2px;">*** INVOICE ***</h1>
        </div>
        <header class="clearfix px-3">
          <?php

          $sql = "select restroname,address,email,mobileno,gstno from restro where id ='$restroid'";
          $query = mysqli_query($con, $sql);
          $row = mysqli_fetch_array($query);
          $name = $row[0];
          $address = $row[1];
          $gmail = $row[2];
          $mobileno = $row[3];
          $gstno = $row[4];

          ?>


          <div class="row">
            <div class="col-6  order-1">
              <h2><?php echo $name; ?></h2>
              <?php
              if ($gstno != '') {
                echo '<p>Gst No: ' . $gstno . '</p>';
              } else {
              }
              ?>
              <p><?php echo $address; ?></p>
              <!-- <div class="py-2"> -->
              <?php
              if ($gmail != '') {
                echo '<p>' . $gmail . '</p>';
              } else {
              }
              ?>
              <p><?php echo $mobileno; ?></p>
              <!-- </div> -->

            </div>
            <div class="col-6 order-2 text-md-right">
              <h2>Customer Detail</h2>
              <h4 class="pt-2"><strong>Bill No.: </strong><span id="billno"></span></h4>
              <div class="py-2">
                <p id="fullname"></p>
                <p id="mobileno"></p>
              </div>
            </div>


          </div>

        </header>
        <main class="px-3">
          <table class="invoice-table">
            <thead style="color: black;" class="">
              <tr>
                <th class="service">SR.</th>
                <th class="desc">DESCRIPTION</th>
                <th>PRICE</th>
                <th class="center" scope="col-2">QTY</th>
                <th class="">TOTAL</th>
              </tr>
            </thead>
            <tbody style="font-weight: normal;" class="" id="tbody">

            </tbody>
          </table>
        </main>
        <footer class="py-2">
          <p>Thank you !! Visit again :)</p>
        </footer>
        <!-- bill end -->
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

  <!-- JS, Popper.js, and jQuery -->
  <script src="https://stackpath.bootstrapcdn.com/bootstrap/4.5.0/js/bootstrap.min.js" integrity="sha384-OgVRvuATP1z7JjHLkuOU7Xw704+h835Lr+6QL9UvYjZE3Ipu6Tp75j7Bh/kR0JKI" crossorigin="anonymous"></script>
  <script src="https://code.jquery.com/jquery-3.5.1.slim.min.js" integrity="sha384-DfXdz2htPH0lsSSs5nCTpuj/zy4C+OGpamoFVy38MVBnE+IbbVYUew+OrCXaRkfj" crossorigin="anonymous"></script>
  <script src="https://cdn.jsdelivr.net/npm/popper.js@1.16.0/dist/umd/popper.min.js" integrity="sha384-Q6E9RHvbIyZFJoft+2mJbHaEWldlvI9IOYy5n3zV9zzTtmI3UksdQRVvoxMfooAo" crossorigin="anonymous"></script>
  <script src="js/jquery.min.js"></script>
  <script src="js/materialize.js"></script>
  <script src="js/numscroller.js"></script>
  <script src="js/lightbox.js"></script>
  <script src="js/owl.carousel.min.js"></script>
  <script src="js/main.js"></script>
  <script src="js/common.js"></script>

  <script>
    window.onload = (event) => {
      var printorder = localStorage.getItem("printinvoice");
      var printorderid = localStorage.getItem("printinvoiceid");
      var fullname = localStorage.getItem("fullname");
      var mobile = localStorage.getItem("mobile");
      // console.log(printorder);
      $("#tbody").html(printorder);
      $("#billno").html(printorderid);
      $("#fullname").html(fullname);
      $("#mobileno").html(mobile);
      printDiv("order-det");
    };
  </script>
</body>

</html>

