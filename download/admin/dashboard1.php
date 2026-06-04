<!DOCTYPE html>
<html lang="en">
<?php
require 'code/checksession2.php';
require 'code/connection.php';


?>

<head>
	<meta charset="UTF-8">
	<meta name="viewport" content="width=device-width, initial-scale=1.0">
	<title>INDEX | ADMIN[Q-MENU]</title>

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
			<div class="row">
				<div class="col-12 col-md-7">
					<button class="buttonblue btn-add btn-primary" data-toggle="modal" data-target="#addRestro"><i class="fa fa-plus"></i>Add Restaurant</button>
				</div>
				<div class="col-12 col-md-5">
					<!-- <a href="template.html" class="button btn-add"><i class="fa fa-list-alt"></i>Show Template</a> -->
					<button class="button btn-add" onclick="location.href='template.php';"><i class="fa fa-list-alt"></i>Show Template</button>
				</div>
			</div>

			<div class="table-contents z-depth-1">
				<table>
					<thead>
						<tr>
							<th class="">Id</th>
							<th class="">Restaurant</th>
							<th class="">Address</th>
							<th class="">Mobile No</th>
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

	<!--add restro Modal -->
	<div class="modal fade" id="addRestro" tabindex="-1" role="dialog" aria-labelledby="addRestroLabel" aria-hidden="true">
		<div class="modal-dialog" role="document">
			<div class="modal-content">
				<div class="modal-header">
					<h5 class="modal-title" id="addRestroLabel">Add Restaurant</h5>
					<button type="button" class="close" data-dismiss="modal" aria-label="Close">
						<span aria-hidden="true">&times;</span>
					</button>
				</div>
				<div class="modal-body">
					<div class="col-12 ">
						<form>
							<div class="input-field">
								<input type="text" id="restroname">
								<label>Restaurant Name</label>
							</div>
							<div class='fail' id="restroname_e"></div>
							<div class="input-field">
								<input type="text" id="mobileno">
								<label>Mobile No</label>
							</div>
							<div class='fail' id="restromobile_e"></div>
							<div class="input-field">
								<textarea class="materialize-textarea" cols="30" rows="1" id="address" required></textarea>
								<label>Address</label>
							</div>
							<div class='fail' id="restroaddress_e"></div>
							<div class="input-field">
								<input type="password" id="password">
								<label>Password</label>
							</div>
							<div class='fail' id="restropass_e"></div>
							<div class="input-field">
								<input type="password" id="conpassword">
								<label>Retype Password</label>
							</div>
							<div class='fail' id="restroconpass_e"></div>
							<div class="field">
								<select class="select-category" name="category" id="themecode">
									<?php
									$query = "select * from theme";
									$result = mysqli_query($con, $query);

									while ($value = mysqli_fetch_array($result)) {
										$themeid = $value['id'];
										echo "<option value='$themeid'>" . $value['title'] . "</option>";
									}
									?>
								</select>
							</div>
							<div class='fail' id="error"></div>
							<button class="button btn-add z-depth-1" id="addrestorent" type="button"><i class="fa fa-plus"></i>Add Restaurant</button>
						</form>
					</div>
				</div>
			</div>
		</div>
	</div>
	<!--end add restro Modal -->

	<!-- edit restro Modal -->
	<div class="modal fade" id="editRestro" tabindex="-1" role="dialog" aria-labelledby="editRestroLabel" aria-hidden="true">
		<div class="modal-dialog" role="document">
			<div class="modal-content">
				<div class="modal-header">
					<h5 class="modal-title" id="editRestroLabel">Edit Restaurant</h5>
					<button type="button" class="close" data-dismiss="modal" aria-label="Close">
						<span aria-hidden="true">&times;</span>
					</button>
				</div>
				<div class="modal-body">
					<div class="col-12 ">
						<form>
							<div class="field">
								<label>Restaurant ID</label>
								<input type="text" id="myrestroid" disabled>
							</div>
							<div class='fail' id="myrestroid_e"></div>
							<div class="field">
								<label>Restaurant Name</label>
								<input type="text" id="myrestroname">
							</div>
							<div class='fail' id="myrestroname_e"></div>
							<div class="field">
								<label>Mobile No</label>
								<input type="text" id="mymobileno">
							</div>
							<div class='fail' id="myrestromobile_e"></div>
							<div class="field">
								<label>Address</label>
								<textarea class="materialize-textarea" id="myaddress" cols="30" rows="0" required></textarea>
							</div>
							<div class='fail' id="myrestroaddress_e"></div>
							<div class="field">
								<label>Password</label>
								<input type="text" id="mypassword">
							</div>
							<div class='fail' id="myrestropass_e"></div>
							<div class="field">
								<select class="select-category" name="category" id="mythemecode">
									<?php
									$query = "select * from theme";
									$result = mysqli_query($con, $query);

									while ($value = mysqli_fetch_array($result)) {
										$themeid = $value['id'];
										echo "<option value='$themeid'>" . $value['title'] . "</option>";
									}
									?>
								</select>
							</div>
							<div class='fail' id="myerror"></div>
							<button class="button btn-add z-depth-1" type="button" id="btnupdaterestro"><i class="fa fa-pencil"></i>Update</button>
						</form>
					</div>
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
