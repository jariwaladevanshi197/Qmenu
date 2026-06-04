<?php

require '../connect.php';
require 'code/checksession2.php';
$restroid = $_SESSION['usersession'];
$sql = "select themecode,slug,qrcode,restroname from restro where id = " . $restroid . " limit 1";
$query = mysqli_query($con, $sql);
$row = mysqli_fetch_array($query);
$themecode = $row[0];
$slug = $row[1];
$qrcode = $row[2];
$restroname = $row[3];
$logo_path = "images/r1.png";
if ($qrcode != '') {
	$clean_qr = str_replace('/admin/', '', $qrcode);
	$logo_path = '../admin/' . $clean_qr;
}

$sql = "select title from theme where id = " . $themecode . " limit 1";
$query = mysqli_query($con, $sql);
$row = mysqli_fetch_array($query);
$themename = $row[0];
$link = 'localhost/template/' . $themename . '/?restroid=' . $slug . '';
// $link = 'http://localhost/suratbest/template/' . $themename . '/index.php?restroid=' . $restroid . '';
?>
<!DOCTYPE html>
<html lang="en">

<head>
      <meta charset="UTF-8">
      <meta name="viewport" content="width=device-width, initial-scale=1.0">
      <title>ADD-TABLE | ADMIN[RESTRO]</title>
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
                                          <h1><span><?php echo $restroname; ?></span></h1>
                                    </a>
                              </div>
                        </div>
                        <!-- <div class="col-3 srch-pad">
					<div class="content-right">
						<span class="material-icons pointer" onclick="showbox()">search</span>
					</div>
				</div> -->
                  </div>
            </div>
            <div class="container">
                  <!-- <div class="row">
				<div class="col-12 srch-pad">
					<div class="search-box" id="searchbox">
						<input id="search" class="search-input" type="text" placeholder="Search">
					</div>
				</div>
			</div> -->
            </div>
      </div>
      <!-- end navbar -->

      <!-- sidebar -->
      <div class="sidebar-panel">
            <ul id="slide-out" class="collapsible side-nav  scrollbar-light-blue">
                  <li>
                        <div class="user-view" style="height: 10em;">
                              <div class="background">
                                    <img src="<?php echo $logo_path; ?>" alt="">
                              </div>
                        </div>
                  </li>

                  <li class="sidemenu"><a href="index.php"><i class="fa fa-list-alt"></i>Menu</a></li>
                  <li class="sidemenu"><a href="<?php echo $link; ?>" target="_blank"><i class="fa fa-eye"></i>Customer View</a></li>
                  <li class="sidemenu"><a href="notification.php"><i class="fa fa-bullhorn"></i>Waiter Call</a></li>
                  <li class="sidemenu"><a href="addmenu.php"><i class="fa fa-plus-square"></i>Add Menu Item</a></li>
                  <li class="sidemenu"><a href="addcategory.php"><i class="fa fa-tags"></i>Add Category</a></li>
                  <li class="sidemenu"><a href="addtable.php"><i class="fa fa-map-marker"></i>Add Table</a></li>
                  <li class="sidemenu active-menu"><a href="feedback.php"><i class="fa fa-comment"></i>FeedBack</a></li>
                  <li class="sidemenu "><a data-toggle="modal" data-target="#sharemenu"><i class="fa fa-share-alt"></i>Share Menu</a></li>
                  <li class="sidemenu"><a href="code/logout.php"><i class="fa fa-sign-out"></i>Log Out</a></li>
            </ul>
      </div>
      <!-- end sidebar -->



      <!-- <div class="sign-in segments-page add-menu-itenm" id="segments">
		<div class="container">
			<div class="row">
				<div class="col-2"></div>
				<div class="col-12 col-md-8 signin-contents z-depth-1 ">
					<div class="pages-title">
						<h3>Add Table</h3>
						<div class="line"></div>
					</div>
					
						<div class="input-field">
							<input type="text" id="tablename">
							<label>Table Name</label>
						</div>
						<div id="name_e" class="fail"></div>
						<div id="error" class="fail"></div>
						<button class="button btn-add z-depth-1" type="button" id="addtablebtn" ><i class="fa fa-plus"></i>Add Table</button>
					
				</div>
				<div class="col-2"></div>
			</div>
		</div>
	</div> -->


      <!--  -->
      <!-- table -->
      <div class="segments-page tableview" id="segments" style="margin-top:55px">
            <div class="container">

                  <div class="table-contents z-depth-1">
                        <table>
                              <thead>
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
                                    <!-- <tr>
                                                      <td>1</td>
                                                      <td>jenil</td>
                                                      <td>jenilmangukiya@gmail.com</td>
                                                      <td>Something I really appreciate about you is….” ...
                                                      </td>
                                                      <td><button type="button" class="btn btn-primary" data-toggle="modal" data-target="#editRestro"><span class="d-none d-md-block">View</span><i class="fa fa-eye d-md-none"></i></button></td>
                                                      <td><button type="button" class="btn btn-danger"><span class="d-none d-md-block">Delete</span><i class="fa fa-trash d-md-none"></i></button></td>
                                                </tr> -->
                                    <!-- <tr>
                                                      <td>1</td>
                                                      <td>Web Developer</td>

                                                      <td>9999999999</td>
                                                      <td><button type="button" class="btn btn-primary" data-toggle="modal" data-target="#editRestro"><span class="d-none d-md-block">Edit</span><i class="fa fa-pencil d-md-none"></i></button></td>
                                                      <td><button type="button" class="btn btn-warning"><span class="d-none d-md-block">Active</span><i class="fa fa-eye-slash d-md-none"></i></button></td>
                                                </tr>
                                                <tr>
                                                      <td>2</td>
                                                      <td>Designer</td>
                                                      <td>9999999999</td>
                                                      <td><button type="button" class="btn btn-primary" data-toggle="modal" data-target="#editRestro"><span class="d-none d-md-block">Edit</span><i class="fa fa-pencil d-md-none"></i></button></td>
                                                      <td><button type="button" class="btn btn-warning"><span class="d-none d-md-block">Active</span><i class="fa fa-eye d-md-none"></i></button></td>
                                                </tr>
                                                <tr>
                                                      <td>3</td>
                                                      <td>Web Developer</td>
                                                      <td>9999999999</td>
                                                      <td><button type="button" class="btn btn-primary" data-toggle="modal" data-target="#editRestro"><span class="d-none d-md-block">Edit</span><i class="fa fa-pencil d-md-none"></i></button></td>
                                                      <td><button type="button" class="btn btn-warning"><span class="d-none d-md-block">Active</span><i class="fa fa-eye d-md-none"></i></button></td>
                                                </tr>
                                                <tr>
                                                      <td>4</td>
                                                      <td>Designer</td>
                                                      <td>9999999999</td>
                                                      <td><button type="button" class="btn btn-primary" data-toggle="modal" data-target="#editRestro"><span class="d-none d-md-block">Edit</span><i class="fa fa-pencil d-md-none"></i></button></td>
                                                      <td><button type="button" class="btn btn-warning"><span class="d-none d-md-block">Active</span><i class="fa fa-eye d-md-none"></i></button></td>
                                                </tr>
                                                <tr>
                                                      <td>5</td>
                                                      <td>Web Developer</td>
                                                      <td>9999999999</td>
                                                      <td><button type="button" class="btn btn-primary" data-toggle="modal" data-target="#editRestro"><span class="d-none d-md-block">Edit</span><i class="fa fa-pencil d-md-none"></i></button></td>
                                                      <td><button type="button" class="btn btn-warning"><span class="d-none d-md-block">Active</span><i class="fa fa-eye d-md-none"></i></button></td>
                                                </tr>
                                                <tr>
                                                      <td>6</td>
                                                      <td>Designer</td>
                                                      <td>9999999999</td>
                                                      <td><button type="button" class="btn btn-primary" data-toggle="modal" data-target="#editRestro"><span class="d-none d-md-block">Edit</span><i class="fa fa-pencil d-md-none"></i></button></td>
                                                      <td><button type="button" class="btn btn-warning"><span class="d-none d-md-block">Active</span><i class="fa fa-eye-slash d-md-none"></i></button></td>
                                                </tr> -->
                              </tbody>
                        </table>
                  </div>
                  <!-- <div class="pagination">
				<ul>
					<li class="disabled"><a class="z-depth-1" href="">1</a></li>
					<li><a href="">2</a></li>
					<li><a href="">3</a></li>
					<li><a href="">4</a></li>
					<li><a href="">5</a></li>
				</ul>
			</div> -->
            </div>
      </div>
      <!-- end table -->

      <!-- start menu share popup -->

      <div class="modal fade" id="sharemenu" tabindex="-1" role="dialog" aria-labelledby="sharemenuLabel" aria-hidden="true">
            <div class="modal-dialog modal-dialog-centered" role="document">
                  <div class="modal-content">
                        <div class="modal-header">
                              <h5 class="modal-title" id="sharemenuLabel">Share</h5>
                              <button type="button" class="close" data-dismiss="modal" aria-label="Close">
                                    <span aria-hidden="true">&times;</span>
                              </button>
                        </div>
                        <div class="modal-body">
                              <div class="col-12 ">
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
                                                            <input class="form-control px-2" id="copylink" rows="4" disabled value="<?php echo $link; ?>" />
                                                      </div>
                                                      <div class="col-4 ">
                                                            <button type="button" onclick="copyLink()" class="button-full z-depth-1" style="color: black; font-weight:bold;">Copy</button>
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

      <div class="modal fade" id="viewfeedback" tabindex="-1" role="dialog" aria-labelledby="editCategoryLabel" aria-hidden="true">
            <div class="modal-dialog" role="document">
                  <div class="modal-content">
                        <div class="modal-header">
                              <h5 class="modal-title" id="editCategoryLabel">Edit Table </h5>
                              <button type="button" class="close" data-dismiss="modal" aria-label="Close">
                                    <span aria-hidden="true">&times;</span>
                              </button>
                        </div>
                        <div class="modal-body">
                              <div class="col-12 ">
                                    <form>
                                          <div class="field" style="display: none;">
                                                <label>Feedback ID</label>
                                                <input type="text" id="feedbackid">
                                          </div>
                                          <div class="field">
                                                <label>Time</label>
                                                <input type="text" id="feedbacktime" disabled>
                                          </div>
                                          <div class="field">
                                                <label>Username</label>
                                                <input type="text" id="userfullname" disabled>
                                          </div>
                                          <div class="field">
                                                <label>Date Of Birth</label>
                                                <input type="text" id="dob" disabled>
                                          </div>
                                          <div class="field">
                                                <label>mobile no</label>
                                                <input type="text" id="mobile" disabled>
                                          </div>

                                          <div class="field">
                                                <label>Email</label>
                                                <input type="text" id="useremail" disabled>
                                          </div>
                                          <div class="field">
                                                <label>FeedBack</label>
                                                <textarea class="form-control" id="userfeedback" rows="3" disabled></textarea>
                                          </div>
                                          <div class="fail" id="name_e"></div>
                                          <div class="" id="taberror"></div>
                                          <button class="button btn-add z-depth-1 mt-3" data-dismiss="modal" aria-label="Close">Back</button>
                                    </form>
                              </div>
                        </div>
                  </div>
            </div>
      </div>
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
      <script src="js/feedback.js"></script>

</body>

</html>
