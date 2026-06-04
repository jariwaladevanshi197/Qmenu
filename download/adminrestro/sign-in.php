<?php
require 'code/checksession.php';
?>
<!DOCTYPE html>
<html lang="en">

<head>
	<meta charset="UTF-8">
	<meta name="viewport" content="width=device-width, initial-scale=1.0">
	<title>LOGIN | ADMIN[Q-MENU]</title>
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
	<link rel="stylesheet" href="../assets/css/auth-modern.css">
</head>

<body class="modern-auth-body">

    <div class="bg-blobs">
        <div class="blob"></div>
        <div class="blob"></div>
    </div>

	<!-- navbar -->
	<div class="navbar">
		<div class="container">
			<div class="row">
				<div class="col-12">
					<div class="content-center">
						<a href="index.php">
							<h1><span>Q-</span>MENU</h1>
						</a>
					</div>
				</div>
			</div>
		</div>
	</div>
	<!-- end navbar -->



	<!-- sign in -->
	<div class="sign-in segments-page login">
		<div class="container">
			<div class="row justify-content-center">
				<div class="col-12 col-md-6 col-lg-5">
					<div class="signin-contents">
						<div class="pages-title">
							<h3>Restro Login</h3>
							<div class="line"></div>
						</div>
						<form>
							<div class="modern-input-group">
								<input type="number" id="username" required placeholder=" ">
								<label>Mobile No</label>
							</div>
							<div class='fail' id="username_e"></div>

							<div class="modern-input-group">
								<input type="password" id="password" required placeholder=" ">
								<label>Password</label>
							</div>
							<div class='fail' id="pass_e"></div>
							<div class='' id="error"></div>
							<button class="button btn-add" id="login" type="button"><i class="fa fa-send"></i>Sign in</button>
						</form>
					</div>
				</div>
			</div>
		</div>
	</div>
	<!-- end sign in -->

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
	<script src="js/login.js"></script>

</body>

</html>
