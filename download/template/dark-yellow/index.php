<?php
require '../../connect.php';
session_start();
$slug  = $_GET['restroid'];

$sql = "select * from restro where slug='$slug'";
$query = mysqli_query($con, $sql);
$row1 = mysqli_fetch_array($query);
$restroid = $row1['id'];
$slug = $row1['slug'];
$_SESSION['restroid'] = $restroid;
$_SESSION['slug'] = $slug;
$_SESSION['name'] = $name;
$x = $row1['status'];
$name = $row1['restroname'];
$subtype = $row1['subtype'];
// echo '<script>alert('.$restroid.')</script>';

if ($x == 0) {
	header("Location: ../pagenotfound.php");
}
?>
<!DOCTYPE html>
<html lang="en">

<head>
	<meta charset="UTF-8">
	<title> Menu | <?php echo  $name; ?> </title>
	<meta name="viewport" content="width=device-width, initial-scale=1.0">

	<!-- SEO metas -->
	<meta name="description" content="surat.best is restaurent management company for the digital menu distribution in restaurants with customers satisfication and for save plastic menus and disposable menus.">

	<meta name="keywords" content="<?php echo $name; ?>SURAT.BEST,SURAT BEST,BEST,SURAT,SURAT RESTAURANT,SCANNER,ONLINE SCANNER,BEST SCANNER,TOP SCANNER,ONLINE GOOD SCANNER,RESTAURENT,RESTAURANT,YRHP,BEST RESTAURENT,TOP RESTAURANT,RESTAURANT IN SURAT,SURAT,TOP RESTAURANT,TOP SURAT,MENUS,TOP MENU,SURAT MENU,RESTAURANT MENU,FIVESTAR RESTAURANT,BEST MENU OF RESTAURANT">

	<meta name="author" content="surat.best">

	<link rel="stylesheet" href="https://fonts.googleapis.com/icon?family=Material+Icons">
	<link rel="stylesheet" href="css/materialize.css">
	<link rel="stylesheet" href="css/font-awesome.min.css">
	<!-- Latest compiled and minified CSS -->
	<link rel="stylesheet" href="https://maxcdn.bootstrapcdn.com/bootstrap/4.5.0/css/bootstrap.min.css">
	<link rel="stylesheet" href="css/style.css">
	<link rel="stylesheet" href="../assets/css/menu-cards.css">
	<link rel="icon" type="image/png" href="/dark.png" />
	<link rel="shortcut icon" href="/dark.png" type="image/x-icon" />
	<style>
		.fail {
			color: red;
		}

		.success {
			color: green;
		}
	</style>

	<!-- Global site tag (gtag.js) - Google Analytics -->
	<script async src="https://www.googletagmanager.com/gtag/js?id=UA-80866042-21"></script>
	<script>
		window.dataLayer = window.dataLayer || [];

		function gtag() {
			dataLayer.push(arguments);
		}
		gtag('js', new Date());

		gtag('config', 'UA-80866042-21');


		var darkModeMediaQuery = window.matchMedia(
			"(prefers-color-scheme: dark)"
		);
		handleDarkmode(darkModeMediaQuery);

		function handleDarkmode(e) {
			var darkModeOn = e.matches; // true if dark mode is enabled
			var favicon = document.querySelector('link[rel="shortcut icon"]'); // get favicon-192.png element
			var largeFavicon = document.querySelector('link[rel="icon"]'); // get favicon.ico element
			if (!favicon || !largeFavicon) {
				return; // where are our favicon elements???
			}
			// replace icons with dark/light themes as appropriate
			if (darkModeOn) {
				favicon.href = "/dark.png";
				largeFavicon.href = "/dark.png";
			} else {
				favicon.href = "/light.png";
				largeFavicon.href = "/light.png";
			}
		}
		darkModeMediaQuery.addListener(handleDarkmode);
	</script>

</head>

<body>

	<!-- navbar -->
	<div class="navbar">
		<div class="container">
			<div class="row">
				<div class="col-9">
					<div class="content-left">
						<a class="brand-text" href="index.php<?php echo '?restroid=' . $slug; ?>">
							<h2 style="color:#00d2ff; text-transform:capitalize"><?php echo "<span>" . $name . "</span>"; ?></h2>
						</a>
					</div>
				</div>
				<div class="col-3 src-div">
					<div class="content-right" style="display: flex; gap: 15px; align-items: center;">
						<a href="../assets/code/addtocart.php" style="position: relative; color: inherit; display: inline-flex; align-items: center;">
							<span class="material-icons">shopping_cart</span>
							<span id="cartcount" class="badge" style="position: absolute; top: -8px; right: -8px; background: #f44336; color: white; border-radius: 50%; min-width: 18px; height: 18px; padding: 0 4px; font-size: 10px; display: flex; justify-content: center; align-items: center;">0</span>
						</a>
						<span class="material-icons pointer" onclick="showbox()">search</span>
					</div>
				</div>
			</div>
		</div>
		<div class="container">
			<div class="row">
				<div class="col-12 srch-pad">
					<div class="search-box" id="searchbox">
						<input id="search" class="search-input" type="text" placeholder="Search" autocomplete="off">
					</div>
				</div>
			</div>
		</div>
	</div>
	<!-- end navbar -->

	<!-- <div class="slide" >
		<div class="slide-show owl-carousel owl-theme">
			<div class="slide-content">
				<div class="mask"></div>
				<img src="images/f1.jpg" alt="">
				<div class="caption text-center">
					<h2>FRESH & DELICIOUS</h2>
					<p>Food For Your Health</p>
					
				</div>
			</div>
			<div class="slide-content">
				<div class="mask"></div>
				<img src="images/f4.jpg" alt="">
				<div class="caption center">
					<h2>We Believe Good Food</h2>
					<p>Offer Great Smile</p>
				</div>
			</div>
		</div>
	</div> -->
	<!-- end slide -->

	<!-- accordion -->
	<div class="segments-page" id="segments" style="margin-top:50px">
		<div class="container">
			<div class="row mb-2 mt-2">
				<div class="col-12">
					<!-- <button class="button-full z-depth-1" style="font-weight: bolder;" id="download_menu"><i class="fa fa-download"></i>Download Menu</button> -->

					<?php
					$sql = "select pdf from restro where id='$restroid'";
					$query = mysqli_query($con, $sql);
					$row = mysqli_fetch_array($query);
					$pdf = $row[0];
					if ($pdf == '') {
						$pdffilename = '<button disabled class="button-full z-depth-1" style="font-weight: bolder;" id="download_menu"><i class="fa fa-download"></i>Download Menu</button>';
					} else {
						$pdf_rel_path = '../../adminrestro/pdf/' . basename($pdf);
						$pdffilename = '<a href="' . $pdf_rel_path . '" download><button class="button-full z-depth-1" style="font-weight: bolder;" id="download_menu" ><i class="fa fa-download"></i>Download Menu</button></a>';
					}
					?>

					<?php echo $pdffilename ?>
				</div>


			</div>
			<!--  -->
			<div class="row row-content align-items-center">
				<div class="col col-sm-12" id="mybody">
					<div id="" class="dynamic">
					</div>
					<div id="accordion" class="default">


						<?php
						// 		$query = "select * from category where restroid = '$restroid'";
						// 		$result = mysqli_query($con, $query);
						// 		$categoryid = array();
						// 		$categoryname = array();
						// 		while ($value = mysqli_fetch_array($result)) {
						// 			array_push($categoryid, $value['id']);
						// 			array_push($categoryname, $value['name']);
						// 		}
						// 		// print_r($allcategory);

						// 		$j = 0;
						// 		$html = '';
						// 		// print_r($categoryid);
						// 		// print_r($categoryname);
						// 		foreach ($categoryid as $catid) {
						// 			if ($j == 0) {
						// 				$show = 'show';
						// 			} else {
						// 				$show = '';
						// 			}

						// 			$query = "select * from menuitems where categoryid = '$catid'";
						// 			$result = mysqli_query($con, $query);
						// 			$i = 1;
						// 			$item = "";
						// 			while ($value = mysqli_fetch_array($result)) {
						// 				$item .= '<tr>
						// 			<th scope="row">' . $i . '</th>
						// 			<td class="col-6 item-name">' . $value['name_eng'] . '</td>
						// 			<td class="item-price">&#8377;' . $value['price'] . '</td>
						// 		</tr>
						// 		';


						// 				$i++;
						// 			}
						// 			$html .= '<div class="card">
						// 	<div class="card-header" role="tab" id="peterhead" data-toggle="collapse" data-target="#peter' . $j . '">
						// 		<h5 class="mb-0">
						// 			<a >
						// 				<i class="fa fa-cutlery"></i> <span class="category-title">' . $categoryname[$j] . '</span> <i class="fa fa-caret-down down-icon"></i>
						// 			</a>
						// 		</h5>
						// 	</div>
						// 	<div class="collapse ' . $show . '" id="peter' . $j . '" data-parent="#accordion">
						// 		<div class="card-body">
						// 			<table class="table rm-border">
						// 				' . $item . '
						// 			</table>
						// 		</div>
						// 	</div>
						// </div>';
						// 			$j++;
						// 		}

						// 		echo $html;

						?>
					</div>
				</div>
			</div>
			<!--  -->


		</div>
	</div>
	<!-- end accordion -->

	<!--bottom navbar -->
	<div class="bottom-navbar">
		<div class="container">
			<div class="row" style="margin:0">
				<div class="col-2 px-0">
					<select class="select-table button-full z-depth-1" id="language">
						<option value="name_eng">Eng</option>
						<option value="name_guj">Guj</option>
						<option value="name_hindi">Hin</option>
					</select>
				</div>
				<div class="col-8">
					<button class="button-full z-depth-1" style="font-weight: bolder;" id="opencallwaiter"><i class="fa fa-bullhorn"></i>Call Waiter</button>
				</div>
				<div class="col-2" style="padding: 0;">
					<button class="button-full z-depth-1" data-toggle="modal" data-target="#feedbackmodel" id="feedbtn"><i class="fa fa-commenting"></i></button>
				</div>
			</div>
		</div>
	</div>
	<!-- end bottom navbar -->

	<div class="modal fade" id="selecttable" tabindex="-1" role="dialog" aria-labelledby="selecttableTitle" aria-hidden="true">
		<div class="modal-dialog modal-dialog-centered" role="document">
			<div class="modal-content">
				<div class="modal-header">
					<h5 class="modal-title" id="selecttableTitle">Select Table</h5>
					<button type="button" class="close" data-dismiss="modal" aria-label="Close">
						<span aria-hidden="true">&times;</span>
					</button>
				</div>
				<div class="modal-body">
					<form>
						<div class="form-group">
							<label>Select Table</label>
							<select class="form-control" id="tableno">
								<option value="0">Select Table Name</option>
								<?php
								$query = "select * from tables where restroid ='$restroid'";
								$result = mysqli_query($con, $query);

								while ($value = mysqli_fetch_array($result)) {
									$tablename = $value['name'];
									$tableid = $value['id'];
									$selected = (isset($_GET['table']) && $_GET['table'] == $tableid) ? 'selected' : '';
									echo "<option value='$tablename' data-id='$tableid' $selected>" . $tablename . "</option>";
								}
								?>

							</select>
						</div>
						<div class="form-group d-none" id="calltype_container">
							<label>Select Calling Type</label>
							<select class="form-control" id="calltype">
								<option value="Call Waiter">Call Waiter</option>
								<option value="Water">Water</option>
								<option value="Bill">Bill</option>
								<option value="Order">Order</option>
								<option value="Clear Table">Clear Table</option>
							</select>
						</div>
						<div id="table_e" class="fail"></div>
						<div id="error"></div>
						<hr>
						<div class="form-group">
							<button class="button-full  z-depth-1" type='button' style="font-weight: bolder; text-transform: uppercase;" id="callwaiterbtn"> <i class="fa fa-paper-plane"></i>Call Waiter</button>
						</div>
					</form>
				</div>
			</div>
		</div>
	</div>

	<!-- end select table popup -->

	<!-- feedback popup -->

	<div class="modal fade" id="feedbackmodel" tabindex="-1" role="dialog" aria-labelledby="feedbackTitle" aria-hidden="true">
		<div class="modal-dialog modal-dialog-centered" role="document">
			<div class="modal-content">
				<div class="modal-header">
					<h5 class="modal-title" id="feedbackTitle">FeedBack</h5>
					<button type="button" class="close" data-dismiss="modal" aria-label="Close">
						<span aria-hidden="true">&times;</span>
					</button>
				</div>
				<div class="modal-body">
					<form>
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
							<input type="tel" class="form-control" id="mobile" placeholder="Mobile Number">
						</div>
						<div class="fail" id="mobile_e"></div>
						<div class="form-group">
							<label for="email">Email address</label>
							<input type="email" class="form-control" id="email" placeholder="name@example.com">
						</div>
						<div class="fail" id="email_e"></div>
						<div class="form-group">
							<label for="feedback">Give Your FeedBack</label>
							<textarea class="form-control" id="feedback" rows="3" autocomplete="off"></textarea>
						</div>
						<div class="fail" id="feedback_e"></div>
						<div class="" id="errorfeedback"></div>
						<hr>
						<div class="form-group">
							<button class="button-full z-depth-1" style="font-weight: bolder; text-transform: uppercase;" type="button" id="sendfeedback"><i class="fa fa-paper-plane"></i>send</button>
						</div>
					</form>
				</div>
			</div>
		</div>
	</div>

	<!-- end feedback popup -->

	<!-- JS, Popper.js, and jQuery -->
	<!-- JS, Popper.js, and jQuery -->
	<!-- jQuery library -->
	<script src="https://ajax.googleapis.com/ajax/libs/jquery/3.5.1/jquery.min.js"></script>

	<!-- Popper JS -->
	<script src="https://cdnjs.cloudflare.com/ajax/libs/popper.js/1.16.0/umd/popper.min.js"></script>

	<!-- Latest compiled JavaScript -->
	<script src="https://maxcdn.bootstrapcdn.com/bootstrap/4.5.0/js/bootstrap.min.js"></script>
	<script src="js/main.js"></script>
	<script src="../assets/js/main.js"></script>
	<script src="../assets/js/cart.js"></script>


</body>

</html>
