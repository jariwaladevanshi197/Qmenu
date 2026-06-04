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

	<title>ADD-TABLE | Q-MENU</title>
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
			<li class="sidemenu ">
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

			<li class="sidemenu active-menu">
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

	<div class="sign-up segments-page">
		<div class="container">
			<div class="row justify-content-center">
				<div class="col-12 col-md-10 col-lg-8 signup-contents z-depth-1">
					<div class="pages-title">
						<h3>Add Table</h3>
					</div>
					<form>
						<div class="input-field">
							<input type="text" id="tablename">
							<label>Table Name</label>
						</div>
						<div id="name_e" class="fail"></div>
						<div id="error" class=""></div>
						<button class="button btn-warning btn-signup z-depth-1" type="button" id="addtablebtn"><i class="fa fa-plus"></i>Add Table</button>
					</form>
				</div>

				<div class="col-12 col-md-10 col-lg-8 signup-contents z-depth-1 mt-4">
					<div class="pages-title">
						<h3>List of Tables</h3>
					</div>
					<div class="table-responsive">
						<table class="table rm-border">
							<tbody id="displaytable">
								<!-- <tr>
									<th scope="row">1</th>
									<td class="item-name">Table 1</td>
									<td class="text-right">
										<button type="button" class="action-btn action-btn-info"><i class="fa fa-qrcode"></i></button>
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
	<!-- end sign up -->

	<!--end edit table -->

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
	<!-- View QR Modal (Materialize) -->
	<div id="viewqr" class="modal">
		<div class="modal-content center-align">
			<h4>Table QR Code</h4>
			<h5 id="qrtablename"></h5>
			<div class="qr-container">
				<img id="qrimage" src="" alt="QR Code" style="width: 100%; max-width: 250px;">
			</div>
			<button id="downloadqr" class="btn">Download / Print</button>
		</div>
		<div class="modal-footer">
			<a href="#!" class="modal-close waves-effect waves-green btn-flat">Close</a>
		</div>
	</div>
	<!-- End View QR Modal -->

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
	<script src="js/common.js"></script>
	<script src="js/addtable.js"></script>
</body>

</html>

