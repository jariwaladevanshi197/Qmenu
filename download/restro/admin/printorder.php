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
            <a href="orders.php"><i class="material-icons">clear</i></a>
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

  <!-- list -->
  <div class="list segments-page">
    <div class="container">
      <div id="order-det">
        <div class="pages-title">
          <h3 id="tablename">Table 1</h3>
          <h5 id="customer_info" style="margin-top:5px; font-size:16px; color:#333;"></h5>
          <div class="line"></div>
        </div>
        <table class="table">
...
  <script>
    window.onload = (event) => {
      var printorder = localStorage.getItem("printorder");
      var note = localStorage.getItem("note");
      var tablename = localStorage.getItem("print_tablename");
      var fullname = localStorage.getItem("print_fullname");
      var number = localStorage.getItem("print_number");

      $("#tbody").html(printorder);
      
      if(tablename) $("#tablename").text(tablename);
      
      var custInfo = "";
      if(fullname) custInfo += fullname;
      if(number) custInfo += " (" + number + ")";
      $("#customer_info").text(custInfo);

      if (note != '') {
        $("#note").text(note);
      } else {
        $("#notecontainer").text('');
      }

      printDiv("order-det");
    };
  </script>
          <thead class="thead-dark">
            <tr>
              <th scope="col-2">Sr.</th>
              <th scope="col-8">Item Name</th>
              <th class="center" scope="col-2">Quantity</th>
            </tr>
          </thead>
          <tbody id="tbody">
            <!-- <tr>
                <th class="item-id" scope="row">1</th>
                <td>Hat Blue Trending for Men & Women</td>
                <td class="center">2</td>
              </tr>
              <tr>
                <th class="item-id" scope="row">2</th>
                <td>Hat Blue Trending for Men & Women</td>
                <td class="center">3</td>
              </tr>
              <tr>
                <th class="item-id" scope="row">3</th>
                <td>Hat Blue Trending for Men & Women</td>
                <td class="center">1</td>
              </tr> -->
          </tbody>
        </table>
        <h3 class="success" id="notecontainer">Note : <span id="note"></span></h3>
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


</body>

</html>

