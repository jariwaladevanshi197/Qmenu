<!DOCTYPE html>
<html lang="en">
<?php
require 'code/checksession2.php';
require '../connect.php';
?>

<head>
	<meta charset="UTF-8">
	<meta name="viewport" content="width=device-width, initial-scale=1.0">
	<title>INDEX | ADMIN[Q-MENU]</title>
	<link rel="icon" type="image/png" href="../light.png" />
	<link rel="shortcut icon" href="../light.png" type="image/x-icon" />
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

	<!-- navbar -->
	<div class="navbar">
		<div class="container">
			<div class="row">
				<div class="col-9">
					<div class="content-left">
						<a href="dashboard.php">
							<h1><span>Q-</span>MENU</h1>
						</a>
					</div>
				</div>
				<div class="col-3 src-div">
					<div class="content-right">
						<span class="material-icons pointer" onclick="showbox()">search</span>
						<a class="logout-btn" href="code/logout.php"><i class="material-icons">logout</i></a>
					</div>
				</div>

			</div>
		</div>
		<div class="container">
			<div class="row">
				<div class="col-12 srch-pad">
					<div class="search-box" id="searchbox">
						<input id="searchrestro" class="search-input" type="text" placeholder="Search" autocomplete="off">
					</div>
				</div>
			</div>
		</div>
	</div>
	<!-- end navbar -->

	<!-- table -->
	<div class="segments-page tableview" id="segments">
		<div class="container">

			<div class="row mt-2">
				<div class="col-12 col-md-4">
					<button class="buttonblue btn-add btn-primary" data-toggle="modal" data-target="#addRestro"><i class="fa fa-plus"></i>Add Restaurant</button>
				</div>
				<div class="col-12 col-md-4">
					<!-- <a href="template.html" class="button btn-add"><i class="fa fa-list-alt"></i>Show Template</a> -->
					<button class="button btn-add" onclick="location.href='template.php';"><i class="fa fa-list-alt"></i>Show Template</button>
				</div>
				<div class="col-12 col-md-4">
					<!-- <a href="template.html" class="button btn-add"><i class="fa fa-list-alt"></i>Show Template</a> -->
					<button class="buttonblue btn-add btn-primary" onclick="location.href='payment.php';"><i class="fa fa-paypal" style="padding-right:3px;"></i>Payment</button>
				</div>
				<div class="col-12 col-md-4">

				</div>
				<div class="col-12 col-md-4">

				</div>
				<div class="col-12 col-md-4 mt-2">
					<select class="select-table btn btn-secondary browser-default form-control" id="restrosubtype" style="height: auto; font-size: 14px;">
						<option value="0">Simple Restro</option>
						<option value="1">Mega Restro</option>
						<option value="2">With Site</option>
					</select>
				</div>
			</div>

			<div class="table-contents z-depth-1">
				<table>
					<thead>
						<tr>
							<th class="">Id</th>
							<th class="">Restaurant</th>
							<th class="">Mobile No</th>
							<th class=""></th>
							<th class=""></th>
							<th class=""></th>
							<th class=""></th>
						</tr>
					</thead>
					<tbody id='table'>
						<!-- <tr>
							<td>1</td>
							<td>Web Developer</td>
							<td>9999999999</td>
							<td><button type="button" class="btn btn-primary" data-toggle="modal" data-target="#editRestro"><span class="d-none d-md-block">Edit</span><i class="fa fa-pencil d-md-none"></i></button></td>
							<td><button type="button" class="btn btn-secondary"><span class="d-none d-md-block">Active</span><i class="fa fa-eye-slash d-md-none"></i></button></td>
						</tr>
						<tr>
							<td>1</td>
							<td>Web Developer</td>
							
							<td>9999999999</td>
							<td><button type="button" class="btn btn-primary" data-toggle="modal" data-target="#editRestro"><span class="d-none d-md-block">Edit</span><i class="fa fa-pencil d-md-none"></i></button></td>
							<td><button type="button" class="btn btn-warning"><span class="d-none d-md-block">Active</span><i class="fa fa-eye-slash d-md-none"></i></button></td>
						</tr>
						-->
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

	<!--add restro Modal -->
	<div class="modal fade" id="addRestro" tabindex="-1" role="dialog" aria-labelledby="addRestroLabel" aria-hidden="true">
		<div class="modal-dialog modal-lg" role="document">
			<div class="modal-content">
				<div class="modal-header">
					<h5 class="modal-title" id="addRestroLabel">Add New Restaurant</h5>
					<button type="button" class="close" data-dismiss="modal" aria-label="Close">
						<span aria-hidden="true">&times;</span>
					</button>
				</div>
				<div class="modal-body modern-form">
					<form id="addRestroForm">
						<div class="logo-upload-container">
							<div class="logo-preview-wrapper" id="logo-preview-container-add">
								<img id="blah-add" src="images/blog1.jpg" alt="Logo Preview">
							</div>
							<div class="upload-btn-wrapper">
								<button class="btn btn-upload-custom" type="button">CHOOSE LOGO</button>
								<input id="file-input-add" type="file" name="imageUpload" onchange="document.getElementById('blah-add').src = window.URL.createObjectURL(this.files[0])" />
							</div>
							<div class='fail mt-1' id="image_add_e"></div>
						</div>

						<span class="form-section-title">Basic Information</span>
						<div class="row">
							<div class="col-md-6">
								<div class="field">
									<label>Restaurant Name</label>
									<input type="text" id="restroname" placeholder="e.g. Pizza Palace">
									<div class='fail' id="restroname_e"></div>
								</div>
							</div>
							<div class="col-md-6">
								<div class="field">
									<label>Mobile Number</label>
									<input type="number" id="mobileno" placeholder="10 digit number">
									<div class='fail' id="restromobile_e"></div>
								</div>
							</div>
						</div>

						<div class="row">
							<div class="col-md-6">
								<div class="field">
									<label>Email Address</label>
									<input type="email" id="email" placeholder="restaurant@example.com">
									<div class='fail' id="restroemail_e"></div>
								</div>
							</div>
							<div class="col-md-6">
								<div class="field">
									<label>GST Number (Optional)</label>
									<input type="text" id="gstno" placeholder="GSTIN">
									<div class='fail' id="restrogstno_e"></div>
								</div>
							</div>
						</div>

						<div class="row">
							<div class="col-md-12">
								<div class="field">
									<label>Full Address</label>
									<textarea id="address" rows="2" placeholder="Street, City, Area..."></textarea>
									<div class='fail' id="restroaddress_e"></div>
								</div>
							</div>
						</div>

						<span class="form-section-title">Security & Portal</span>
						<div class="row">
							<div class="col-md-6">
								<div class="field">
									<label>System Password</label>
									<input type="password" id="password" placeholder="Min 8 characters">
									<div class='fail' id="restropass_e"></div>
								</div>
							</div>
							<div class="col-md-6">
								<div class="field">
									<label>Confirm Password</label>
									<input type="password" id="conpassword" placeholder="Retype to confirm">
									<div class='fail' id="restroconpass_e"></div>
								</div>
							</div>
						</div>

						<span class="form-section-title">Subscription & Policy</span>
						<div class="row">
							<div class="col-md-4">
								<div class="field">
									<label>Price</label>
									<input type="number" id="price" placeholder="Amount">
									<div class='fail' id="restroprice_e"></div>
								</div>
							</div>
							<div class="col-md-4">
								<div class="field">
									<label>Duration</label>
									<select id="subplan" class="browser-default">
										<option value="0">Select Months</option>
										<?php for($m=1; $m<=12; $m++) echo "<option value='$m'>$m Months</option>"; ?>
									</select>
									<div class='fail' id="restroplansub_e"></div>
								</div>
							</div>
							<div class="col-md-4">
								<div class="field">
									<label>Restro Type</label>
									<select id="subtype" class="browser-default">
										<option value="0">Normal Restro</option>
										<option value="1">Mega Restro</option>
										<option value="2">Mega + Site</option>
									</select>
									<div class='fail' id="restrotype_e"></div>
								</div>
							</div>
						</div>

						<div class="row">
							<div class="col-md-12">
								<div class="field">
									<label>Customer Menu Theme</label>
									<select id="themecode" class="browser-default">
										<?php
										$query = "select * from theme";
										$result = mysqli_query($con, $query);
										while ($value = mysqli_fetch_array($result)) {
											echo "<option value='".$value['id']."'>" . $value['title'] . "</option>";
										}
										?>
									</select>
								</div>
							</div>
						</div>

						<span class="form-section-title">Location Detection (For QR Access)</span>
						<div class="row align-items-center mb-3">
							<div class="col-md-8">
								<p class="text-muted small mb-0">Detect coordinates based on current browser location.</p>
							</div>
							<div class="col-md-4 text-right">
								<button class="btn btn-sm btn-outline-primary" id="getlocationbtn" type="button">AUTO-DETECT</button>
							</div>
						</div>
						
						<div class="row">
							<div class="col-md-4">
								<div class="field">
									<label>Latitude</label>
									<input type="text" id="restrolati" readonly>
									<div class='fail' id="restrolati_e"></div>
								</div>
							</div>
							<div class="col-md-4">
								<div class="field">
									<label>Longitude</label>
									<input type="text" id="restrolong" readonly>
									<div class='fail' id="restrolong_e"></div>
								</div>
							</div>
							<div class="col-md-4">
								<div class="field">
									<label>Radius (Meters)</label>
									<input type="number" id="restrodist" placeholder="e.g. 100">
									<div class='fail' id="restrodist_e"></div>
								</div>
							</div>
						</div>

						<div id='error' class='mb-3'></div>
						<button class="btn btn-modern-primary" id="addrestorent" type="button">CREATE RESTAURANT</button>
					</form>
				</div>
			</div>
		</div>
	</div>
	<!--end add restro Modal -->

	<!-- edit restro Modal -->
	<div class="modal fade" id="editRestro" tabindex="-1" role="dialog" aria-labelledby="editRestroLabel" aria-hidden="true">
		<div class="modal-dialog modal-lg" role="document">
			<div class="modal-content">
				<div class="modal-header">
					<h5 class="modal-title" id="editRestroLabel">Edit Restaurant Details</h5>
					<button type="button" class="close" data-dismiss="modal" aria-label="Close">
						<span aria-hidden="true">&times;</span>
					</button>
				</div>
				<div class="modal-body modern-form">
					<form id="editRestroForm">
						<div class="logo-upload-container">
							<div class="logo-preview-wrapper" id="logo-preview-container-edit">
								<img id="blah" src="images/blog1.jpg" alt="Logo Preview">
							</div>
							<div class="upload-btn-wrapper">
								<button class="btn btn-upload-custom" type="button">UPDATE LOGO</button>
								<input id="file-input" type="file" name="imageUpload" onchange="document.getElementById('blah').src = window.URL.createObjectURL(this.files[0])" />
							</div>
							<div class="fail mt-1" id="image_e"></div>
						</div>

						<span class="form-section-title">Essential Details</span>
						<div class="row">
							<div class="col-md-2">
								<div class="field">
									<label>ID</label>
									<input type="text" id="myrestroid" disabled style="background:#f9f9f9;">
								</div>
							</div>
							<div class="col-md-5">
								<div class="field">
									<label>Restaurant Name</label>
									<input type="text" id="myrestroname">
									<div class='fail' id="myrestroname_e"></div>
								</div>
							</div>
							<div class="col-md-5">
								<div class="field">
									<label>Mobile Number</label>
									<input type="number" id="mymobileno">
									<div class='fail' id="myrestromobile_e"></div>
								</div>
							</div>
						</div>

						<div class="row">
							<div class="col-md-6">
								<div class="field">
									<label>Email Address</label>
									<input type="email" id="myemail">
									<div class='fail' id="myrestroemail_e"></div>
								</div>
							</div>
							<div class="col-md-6">
								<div class="field">
									<label>GSTIN (Optional)</label>
									<input type="text" id="mygstno">
									<div class='fail' id="myrestrogstno_e"></div>
								</div>
							</div>
						</div>

						<div class="row">
							<div class="col-md-12">
								<div class="field">
									<label>Current Address</label>
									<textarea id="myaddress" rows="2"></textarea>
									<div class='fail' id="myrestroaddress_e"></div>
								</div>
							</div>
						</div>

						<span class="form-section-title">Configuration</span>
						<div class="row">
							<div class="col-md-3">
								<div class="field">
									<label>System Password</label>
									<div class="input-group">
										<input type="password" id="mypassword" class="form-control" style="border-right:0;">
										<div class="input-group-append">
											<button class="btn btn-outline-secondary" type="button" onclick="var p=document.getElementById('mypassword'); p.type=(p.type=='password'?'text':'password')" style="padding: 0 10px;"><i class="fa fa-eye"></i></button>
										</div>
									</div>
									<div class='fail' id="myrestropass_e"></div>
								</div>
							</div>
							<div class="col-md-3">
								<div class="field">
									<label>Duration</label>
									<select id="mysubplan" class="browser-default">
										<option value="0">Select Months</option>
										<?php for($m=1; $m<=12; $m++) echo "<option value='$m'>$m Months</option>"; ?>
									</select>
									<div class='fail' id="myrestroplansub_e"></div>
								</div>
							</div>
							<div class="col-md-3">
								<div class="field">
									<label>Restro Type</label>
									<select id="mysubtype" class="browser-default">
										<option value="0">Normal Restro</option>
										<option value="1">Mega Restro</option>
										<option value="2">Mega + Site</option>
									</select>
									<div class='fail' id="myrestrotype_e"></div>
								</div>
							</div>
							<div class="col-md-3">
								<div class="field">
									<label>Active Theme</label>
									<select id="mythemecode" class="browser-default">
										<?php
										$query = "select * from theme";
										$result = mysqli_query($con, $query);
										while ($value = mysqli_fetch_array($result)) {
											echo "<option value='".$value['id']."'>" . $value['title'] . "</option>";
										}
										?>
									</select>
								</div>
							</div>
						</div>

						<span class="form-section-title">Geo-Location Updates</span>
						<div class="row align-items-center mb-3">
							<div class="col-md-8">
								<p class="text-muted small mb-0">Update location coordinates for boundary access control.</p>
							</div>
							<div class="col-md-4 text-right">
								<button class="btn btn-sm btn-outline-primary" id="mygetlocationbtn" type="button">REFRESH LOCATION</button>
							</div>
						</div>

						<div class="row">
							<div class="col-md-4">
								<div class="field">
									<label>Latitude</label>
									<input type="text" id="myrestrolati" readonly>
									<div class='fail' id="myrestrolati_e"></div>
								</div>
							</div>
							<div class="col-md-4">
								<div class="field">
									<label>Longitude</label>
									<input type="text" id="myrestrolong" readonly>
									<div class='fail' id="myrestrolong_e"></div>
								</div>
							</div>
							<div class="col-md-4">
								<div class="field">
									<label>Radius (Meters)</label>
									<input type="number" id="myrestrodist">
									<div class='fail' id="myrestrodist_e"></div>
								</div>
							</div>
						</div>

						<div id='myerror' class="mb-3"></div>
						<button class="btn btn-modern-primary" type="button" id="btnupdaterestro">SAVE CHANGES</button>
					</form>
				</div>
			</div>
		</div>
	</div>
	<!--end edit restro Modal -->
	<!-- Edit Restro Plan Modal -->
	<div class="modal fade" id="editRestroplan" tabindex="-1" role="dialog" aria-labelledby="editRestroplanLabel" aria-hidden="true">
		<div class="modal-dialog modal-md" role="document">
			<div class="modal-content">
				<div class="modal-header">
					<h5 class="modal-title" id="editRestroplanLabel">Edit Subscription Plan</h5>
					<button type="button" class="close" data-dismiss="modal" aria-label="Close">
						<span aria-hidden="true">&times;</span>
					</button>
				</div>
				<div class="modal-body modern-form">
					<form>
						<div class="row">
							<div class="col-md-4 col-12">
								<div class="field">
									<label>Restro ID</label>
									<input type="text" id="planrestroid" disabled style="background:#f9f9f9;">
								</div>
							</div>
							<div class="col-md-8 col-12">
								<div class="field">
									<label>Plan Category</label>
									<select id="plansubtype" class="browser-default">
										<option value="0">Normal Restro</option>
										<option value="1">Mega Restro</option>
										<option value="2">Mega + Site</option>
									</select>
								</div>
							</div>
						</div>

						<div class="row">
							<div class="col-md-6 col-12">
								<div class="field">
									<label>Price</label>
									<input type="number" id="planprice">
									<div class='fail' id="planprice_e"></div>
								</div>
							</div>
							<div class="col-md-6 col-12">
								<div class="field">
									<label>Duration (Months)</label>
									<input type="number" id="planmonth">
									<div class='fail' id="planmonth_e"></div>
								</div>
							</div>
						</div>

						<div class="row">
							<div class="col-md-6 col-12">
								<div class="field">
									<label>Payment Date</label>
									<input id="paydate" type="date">
									<div class="fail" id="paydate_e"></div>
								</div>
							</div>
							<div class="col-md-6 col-12">
								<div class="field">
									<label>Expire Date</label>
									<input id="expdate" type="date">
									<div class="fail" id="expdate_e"></div>
								</div>
							</div>
						</div>

						<div id="planerror" class="mb-3"></div>
						<button class="btn btn-modern-primary" type="button" id="btnupdateplan">UPDATE PLAN</button>
					</form>
				</div>
			</div>
		</div>
	</div>

	<!-- Change Password Modal -->
	<div class="modal fade" id="changepass" tabindex="-1" role="dialog" aria-labelledby="changepassLabel" aria-hidden="true">
		<div class="modal-dialog modal-sm" role="document">
			<div class="modal-content">
				<div class="modal-header">
					<h5 class="modal-title" id="changepassLabel">Reset Password</h5>
					<button type="button" class="close" data-dismiss="modal" aria-label="Close">
						<span aria-hidden="true">&times;</span>
					</button>
				</div>
				<div class="modal-body modern-form">
					<form>
						<input type="hidden" id="myrestroidp">
						<div class="field">
							<label>New System Password</label>
							<input type="text" id="mypass" placeholder="Enter new password">
							<div class='fail' id="mypassword_e"></div>
						</div>
						<div id="myerrorpass" class="mb-3"></div>
						<button class="btn btn-modern-primary" type="button" id="btnupdatepass">UPDATE PASSWORD</button>
					</form>
				</div>
			</div>
		</div>
	</div>
	<!--end edit restro Modal -->


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
