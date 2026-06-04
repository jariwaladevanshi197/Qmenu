<?php
require '../connect.php';
require 'code/checksession2.php';
$restroid = $_SESSION['usersession'];
$sql = "select themecode,slug,subtype,qrcode,restroname from restro where id = " . $restroid . " limit 1";
$query = mysqli_query($con, $sql);
$row = mysqli_fetch_array($query);
$themecode = $row[0];
$slug = $row[1];
$subtype = $row['subtype'];
$qrcode = $row['qrcode'];
$restroname = $row['restroname'];
$logo_path = "images/r1.png";
if ($qrcode != '') {
	$clean_qr = ltrim($qrcode, '/');
	$clean_qr = str_replace('admin/', '', $clean_qr);
	$logo_path = '../admin/' . $clean_qr;
}



$sql = "select title from theme where id = " . $themecode . " limit 1";
$query = mysqli_query($con, $sql);
$row = mysqli_fetch_array($query);
$themename = $row[0];
$protocol = isset($_SERVER['HTTPS']) && $_SERVER['HTTPS'] === 'on' ? "https" : "http";
$base_url = $protocol . "://" . $_SERVER['HTTP_HOST'] . str_replace('/adminrestro', '', dirname($_SERVER['PHP_SELF']));
$link = '../template/' . $themename . '/?restroid=' . $slug . '';
// $link = 'http://localhost/suratbest/template/' . $themename . '/index.php?restroid=' . $restroid . '';
?>

<!DOCTYPE html>
<html lang="en">

<head>
	<meta charset="UTF-8">
	<meta name="viewport" content="width=device-width, initial-scale=1.0">
	<title>INDEX | ADMIN[RESTRO]</title>
	<link rel="icon" type="image/png" href="/light.png" />
	<link rel="shortcut icon" href="/light.png" type="image/x-icon" />
	<link rel="stylesheet" href="https://fonts.googleapis.com/icon?family=Material+Icons">
	<link rel="stylesheet" href="css/materialize.css">
	<link rel="stylesheet" href="css/lightbox.css">
	<link rel="stylesheet" href="css/font-awesome.min.css">
	<link rel="stylesheet" href="css/owl.carousel.min.css">
	<link rel="stylesheet" href="css/owl.theme.default.min.css">
	<link rel="stylesheet" href="https://stackpath.bootstrapcdn.com/bootstrap/4.5.0/css/bootstrap.min.css" integrity="sha384-9aIt2nRpC12Uk9gS9baDl411NQApFmC26EwAOH8WgZl5MYYxFfc+NcPb1dKGj7Sk" crossorigin="anonymous">
	<link rel="stylesheet" href="css/style.css">

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
				<div class="col-3 srch-pad">
					<div class="content-right">
						<span class="material-icons  pointer" onclick="showbox()">search</span>
					</div>
				</div>
			</div>
		</div>
		<div class="container">
			<div class="row">
				<div class="col-12 srch-pad">
					<div class="search-box" id="searchbox">
						<input id="searchitem" class="search-input" type="text" placeholder="Search" autofocus>
					</div>
				</div>
			</div>
		</div>
	</div>
	<!-- end navbar -->

	<!-- sidebar -->
	<div class="sidebar-panel">
		<ul id="slide-out" class="collapsible side-nav  scrollbar-light-blue">
			<li>
				<div class="user-view" style="height: 10em;">
					<img src="<?php echo $logo_path; ?>" alt="logo" style="object-fit: contain; width: 100%; height: 100%;">
				</div>
			</li>

			<li class="sidemenu active-menu"><a href="index.php"><i class="fa fa-list-alt"></i>Menu</a></li>
			<li class="sidemenu"><a href="<?php echo $link; ?>" target="_blank"><i class="fa fa-eye"></i>Customer View</a></li>
			<li class="sidemenu"><a href="notification.php"><i class="fa fa-bullhorn"></i>Waiter Call</a></li>
			<li class="sidemenu "><a href="addmenu.php"><i class="fa fa-plus-square"></i>Add Menu Item</a></li>
			<li class="sidemenu"><a href="addcategory.php"><i class="fa fa-tags"></i>Add Category</a></li>
			<li class="sidemenu "><a href="addtable.php"><i class="fa fa-map-marker"></i>Add Table</a></li>
			<li class="sidemenu "><a href="feedback.php"><i class="fa fa-comment"></i>FeedBack</a></li>
			<li class="sidemenu "><a data-toggle="modal" data-target="#sharemenu"><i class="fa fa-share-alt"></i>Share Menu</a></li>
			<li class="sidemenu"><a href="code/logout.php"><i class="fa fa-sign-out"></i>Log Out</a></li>
		</ul>
	</div>
	<!-- end sidebar -->

	<!-- accordion -->
	<div class="segments-page menu" id="segments">
		<div class="container">

			<div class="row">
				<div class="col-12 mb-4">
					<div class="card shadow-sm border-0 p-3" style="background: #f8f9fa;">
						<div class="row align-items-center">
							<div class="col-md-9">
								<form enctype="multipart/form-data" class="m-0">
									<input type="file" class="input-hide" name="file-input" id="file-input" />
									<div class="d-flex align-items-center">
										<label class="btn btn-warning shadow-sm mb-0 mr-2 flex-grow-1 text-bold" for="file-input" style="color: #fff;">
											<i class="fa fa-plus mr-1"></i>Select Menu PDF
										</label>
										<button type="button" class="btn btn-primary shadow-sm text-bold" id="uploadpdf">
											<i class="fa fa-upload mr-1"></i>Upload
										</button>
									</div>
								</form>
							</div>
							<div class="col-md-3 mt-3 mt-md-0 d-flex align-items-center justify-content-end">
								<?php
								$sql = "select pdf from restro where id='$restroid'";
								$query = mysqli_query($con, $sql);
								$row = mysqli_fetch_array($query);
								$pdf = $row[0];
								if ($pdf != '') {
									$pdf_filename = basename($pdf);
									echo '<a href="pdf/' . $pdf_filename . '" download class="btn btn-outline-warning mr-2 shadow-sm" style="font-weight: 600;"><i class="fa fa-download mr-1"></i>PDF</a>';
								}
								?>
								<select class="form-control bg-primary text-white border-0 shadow-sm" id="language" style="width: 80px; font-weight: bold; cursor: pointer;">
									<option value="name_eng">ENG</option>
									<option value="name_guj">GUJ</option>
									<option value="name_hindi">HIN</option>
								</select>
							</div>
						</div>
					</div>
				</div>
			</div>
			<!--  -->
			<div class="row row-content align-items-center">
				<div class="col col-sm-12">
					<div id="accordion">
						<!-- <div class="card">
							<div class="card-header" role="tab" id="peterhead" data-toggle="collapse" data-target="#peter">
								<h5 class="mb-0">
									<a >
										<i class="fa fa-cutlery"></i> <span class="category-title">Drinks</span>  <i class="fa fa-caret-down down-icon"></i> 
										
										<button type="button" class="btn btn-warning mng-btn"><i class="fa fa-trash"></i></button>
										<button type="button" class="btn btn-primary mng-btn" data-toggle="modal" data-target="#editCategory"><i class="fa fa-pencil"></i></button>
										
									</a>
								</h5>
							</div>
							<div class="collapse show" id="peter" data-parent="#accordion">
								<div class="card-body">
									<table class="table rm-border">
										<tbody>
											<tr>
												<th scope="row">1</th>
												<td class="col-4 item-name">Mango juice</td>
												<td class="item-price">&#8377;50</td>
												<td class="col-2"><button type="button" class="btn btn-primary" data-toggle="modal" data-target="#editMenu"><i class="fa fa-pencil"></i></button></td>
												<td class="col-2"><button type="button" class="btn btn-warning"><i class="fa fa-trash"></i></button></td>
												
											</tr>
											<tr>
												<th scope="row">2</th>
												<td class="col-4 item-name">Thumbs up</td>
												<td class="item-price">&#8377;25</td>
												<td class="col-2"><button type="button" class="btn btn-primary" data-toggle="modal" data-target="#editMenu"><i class="fa fa-pencil"></i></button></td>
												<td class="col-2"><button type="button" class="btn btn-warning"><i class="fa fa-trash"></i></button></td>
											</tr>
											<tr>
												<th scope="row">3</th>
												<td class="col-4 item-name">Butter milk</td>
												<td class="item-price">&#8377;20</td>
												<td class="col-2"><button type="button" class="btn btn-primary" data-toggle="modal" data-target="#editMenu"><i class="fa fa-pencil"></i></button></td>
												<td class="col-2"><button type="button" class="btn btn-warning"><i class="fa fa-trash"></i></button></td>
											</tr>
											<tr>
												<th scope="row">4</th>
												<td class="col-4 item-name">Lychee drink</td>
												<td class="item-price">&#8377;50</td>
												<td class="col-2"><button type="button" class="btn btn-primary" data-toggle="modal" data-target="#editMenu"><i class="fa fa-pencil"></i></button></td>
												<td class="col-2"><button type="button" class="btn btn-warning"><i class="fa fa-trash"></i></button></td>
											</tr>
										</tbody>
									</table>
								</div>
							</div>
						</div>
						<div class="card">
							<div class="card-header collapsed" role="tab" id="dannyhead" data-toggle="collapse" data-target="#danny">
								<h5 class="mb-0">
									<a class="" >
										<i class="fa fa-cutlery"></i> <span class="category-title">Appetizer</span> <i class="fa fa-caret-down down-icon"></i>
										<button type="button" class="btn btn-warning mng-btn"><i class="fa fa-trash"></i></button>
										<button type="button" class="btn btn-primary mng-btn" data-toggle="modal" data-target="#editCategory"><i class="fa fa-pencil"></i></button>
									</a>
								</h5>
							</div>
							<div class="collapse" id="danny" data-parent="#accordion">
								<div class="card-body">
									<table class="table rm-border">
										<tbody >
											<tr>
												<th scope="row">1</th>
												<td class="col-4 item-name">beef puff</td>
												<td class="item-price">&#8377;50</td>
												<td class="col-2"><button type="button" class="btn btn-primary" data-toggle="modal" data-target="#editMenu"><i class="fa fa-pencil"></i></button></td>
												<td class="col-2"><button type="button" class="btn btn-warning"><i class="fa fa-trash"></i></button></td>
											</tr>
											<tr>
												<th scope="row">2</th>
												<td class="col-4 item-name">chicken puff</td>
												<td class="item-price">&#8377;25</td>
												<td class="col-2"><button type="button" class="btn btn-primary" data-toggle="modal" data-target="#editMenu"><i class="fa fa-pencil"></i></button></td>
												<td class="col-2"><button type="button" class="btn btn-warning"><i class="fa fa-trash"></i></button></td>
											</tr>
											<tr>
												<th scope="row">3</th>
												<td class="col-4 item-name">egg puff</td>
												<td class="item-price">&#8377;20</td>
												<td class="col-2"><button type="button" class="btn btn-primary" data-toggle="modal" data-target="#editMenu"><i class="fa fa-pencil"></i></button></td>
												<td class="col-2"><button type="button" class="btn btn-warning"><i class="fa fa-trash"></i></button></td>
											</tr>
											<tr>
												<th scope="row">4</th>
												<td class="col-4 item-name">chicken cutlet</td>
												<td class="item-price">&#8377;50</td>
												<td class="col-2"><button type="button" class="btn btn-primary" data-toggle="modal" data-target="#editMenu"><i class="fa fa-pencil"></i></button></td>
												<td class="col-2"><button type="button" class="btn btn-warning"><i class="fa fa-trash"></i></button></td>
											</tr>
										</tbody>
									</table>
								</div>
							</div>
						</div> -->
					</div>
				</div>
			</div>
		</div>
	</div>
	<!-- end accordion -->

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

	<!--EDIT MENU Modal -->
	<div class="modal fade" id="editMenu" tabindex="-1" role="dialog" aria-labelledby="editMenuLabel" aria-hidden="true">
		<div class="modal-dialog" role="document">
			<div class="modal-content">
				<div class="modal-header">
					<h5 class="modal-title" id="editMenuLabel">Edit Menu Item</h5>
					<button type="button" class="close" data-dismiss="modal" aria-label="Close">
						<span aria-hidden="true">&times;</span>
					</button>
				</div>
				<div class="modal-body">
					<div class="col-12 ">
						<form>
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
								<select class="select-category" name="category" id="itemcategory">
									<option value="0">Select Category</option>
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
							<button class="button btn-add z-depth-1" id="updateitem" type="button"><i class="fa fa-pencil"></i>Update</button>
						</form>
					</div>
				</div>
			</div>
		</div>
	</div>
	<!--EDIT MENU Modal -->


	<!--EDIT category Modal -->
	<div class="modal fade" id="editCategory" tabindex="-1" role="dialog" aria-labelledby="editCategoryLabel" aria-hidden="true">
		<div class="modal-dialog" role="document">
			<div class="modal-content">
				<div class="modal-header">
					<h5 class="modal-title" id="editCategoryLabel">Edit Menu Item</h5>
					<button type="button" class="close" data-dismiss="modal" aria-label="Close">
						<span aria-hidden="true">&times;</span>
					</button>
				</div>
				<div class="modal-body">
					<div class="col-12 ">
						<form>
							<div class="field" style="display: none;">
								<label>Category ID</label>
								<input type="text" id="catid">
							</div>
							<div class="field">
								<label>Category Name in English</label>
								<input type="text" id="nameineng" autofocus>
							</div>
							<div class="fail" id="nameeng_e"></div>
							<div class="field">
								<label>Category Name in Gujarati</label>
								<input type="text" id="nameinguj">
							</div>
							<div class="fail" id="nameguj_e"></div>
							<div class="field">
								<label>Category Name in Hindi</label>
								<input type="text" id="nameinhindi">
							</div>
							<div class="fail" id="namehindi_e"></div>
							<div class="fail" id="catname_e"></div>
							<div class="caterror"></div>
							<button class="button btn-add z-depth-1" type="button" id="updatecategory"><i class="fa fa-pencil"></i>Update</button>
						</form>
					</div>
				</div>
			</div>
		</div>
	</div>
	<!--EDIT category Modal -->

	<!-- JS, Popper.js, and jQuery -->
	<script src="https://code.jquery.com/jquery-3.5.1.slim.min.js" integrity="sha384-DfXdz2htPH0lsSSs5nCTpuj/zy4C+OGpamoFVy38MVBnE+IbbVYUew+OrCXaRkfj" crossorigin="anonymous"></script>
	<script src="https://cdn.jsdelivr.net/npm/popper.js@1.16.0/dist/umd/popper.min.js" integrity="sha384-Q6E9RHvbIyZFJoft+2mJbHaEWldlvI9IOYy5n3zV9zzTtmI3UksdQRVvoxMfooAo" crossorigin="anonymous"></script>
	<script src="https://stackpath.bootstrapcdn.com/bootstrap/4.5.0/js/bootstrap.min.js" integrity="sha384-OgVRvuATP1z7JjHLkuOU7Xw704+h835Lr+6QL9UvYjZE3Ipu6Tp75j7Bh/kR0JKI" crossorigin="anonymous"></script>

	<script src="js/jquery.min.js"></script>
	<script src="js/materialize.js"></script>
	<script src="js/owl.carousel.min.js"></script>
	<script src="js/main.js"></script>
	<script src="js/index.js"></script>

</body>

</html>
