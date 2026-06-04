<?php
require 'code/checksession2.php';

?>
<!DOCTYPE html>
<html lang="en">

<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>TEMPLATE | ADMIN[Q-MENU]</title>
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
                        <input id="searchtemp" class="search-input" type="text" placeholder="Search" autocomplete="off">
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
                <div class="col-5 pr-0">
                    <button class="buttonblue btn-add btn-primary" onclick="location.href='dashboard.php';"><i class="fa fa-home pr-1"></i>Home</button>
                </div>
                <div class="col-7">
                    <button class="button btn-add" data-toggle="modal" data-target="#addtemp"><i class="fa fa-plus"></i>Add Template</button>
                </div>
            </div>
            <div class="row" id="table">

                <!--  -->
                <!-- <div class="col-12 col-sm-6 col-md-4">
                    <div class="card">
                        <a href="#"><img class="card-img-top card-img-size" src="images/tmp1.jpg" alt="Card image cap"></a>
                        <div class="card-body">
                            <h5 class="card-title temp-title">Surat.Best Template</h5>
                            <button type="button" class="btn btn-primary mng-btn" data-toggle="modal" data-target="#edittemp"><span class="">Edit</span></button>
                            <button type="button" style="float: right;" class="btn btn-warning mng-btn"><span class="">Delete</span></button>
                        </div>
                    </div>
                </div> -->
                <!--  -->

                <!--  -->
                <!-- <div class="col-12 col-sm-6 col-md-4">
                    <div class="card">
                        <a href="#"><img class="card-img-top card-img-size" src="images/tmp2.jpg" alt="Card image cap"></a>
                        <div class="card-body">
                            <h5 class="card-title temp-title">Surat.Best Template</h5>
                            <button type="button" class="btn btn-primary mng-btn" data-toggle="modal" data-target="#edittemp"><span class="">Edit</span></button>
                            <button type="button" style="float: right;" class="btn btn-warning mng-btn"><span class="">Delete</span></button>
                        </div>
                    </div>
                </div> -->
                <!--  -->

                <!--  -->
                <!-- <div class="col-12 col-sm-6 col-md-4">
                    <div class="card">
                        <a href="#"><img class="card-img-top card-img-size" src="images/tmp3.jpg" alt="Card image cap"></a>
                        <div class="card-body">
                            <h5 class="card-title temp-title">Surat.Best Template</h5>
                            <button type="button" class="btn btn-primary mng-btn" data-toggle="modal" data-target="#edittemp"><span class="">Edit</span></button>
                            <button type="button" style="float: right;" class="btn btn-warning mng-btn"><span class="">Delete</span></button>
                        </div>
                    </div>
                </div> -->
                <!--  -->

                <!--  -->
                <!-- <div class="col-12 col-sm-6 col-md-4">
                    <div class="card">
                        <a href="#"><img class="card-img-top card-img-size" src="images/tmp3.jpg" alt="Card image cap"></a>
                        <div class="card-body">
                            <h5 class="card-title temp-title">Surat.Best Template</h5>
                            <button type="button" class="btn btn-primary mng-btn" data-toggle="modal" data-target="#edittemp"><span class="">Edit</span></button>
                            <button type="button" style="float: right;" class="btn btn-warning mng-btn"><span class="">Delete</span></button>
                        </div>
                    </div>
                </div> -->
                <!--  -->

                <!--  -->
                <!-- <div class="col-12 col-sm-6 col-md-4">
                    <div class="card">
                        <a href="#"><img class="card-img-top card-img-size" src="images/tmp2.jpg" alt="Card image cap"></a>
                        <div class="card-body">
                            <h5 class="card-title temp-title">Surat.Best Template</h5>
                            <button type="button" class="btn btn-primary mng-btn" data-toggle="modal" data-target="#edittemp"><span class="">Edit</span></button>
                            <button type="button" style="float: right;" class="btn btn-warning mng-btn"><span class="">Delete</span></button>
                        </div>
                    </div>
                </div> -->
                <!--  -->

                <!--  -->
                <!-- <div class="col-12 col-sm-6 col-md-4">
                    <div class="card">
                        <a href="#"><img class="card-img-top card-img-size" src="images/tmp1.jpg" alt="Card image cap"></a>
                        <div class="card-body">
                            <h5 class="card-title temp-title">Surat.Best Template</h5>
                            <button type="button" class="btn btn-primary mng-btn" data-toggle="modal" data-target="#edittemp"><span class="">Edit</span></button>
                          <button type="button" style="float: right;" class="btn btn-warning mng-btn"><span class="">Delete</span></button>
                        </div>
                    </div>
                </div> -->
                <!--  -->

            </div>

        </div>
    </div>
    <!-- end table -->

    <!--add restro Modal -->
    <div class="modal fade" id="addtemp" tabindex="-1" role="dialog" aria-labelledby="addtempLabel" aria-hidden="true">
        <div class="modal-dialog" role="document">
            <div class="modal-content">
                <div class="modal-header">
                    <h5 class="modal-title" id="addtempLabel">Add Template</h5>
                    <button type="button" class="close" data-dismiss="modal" aria-label="Close">
                        <span aria-hidden="true">&times;</span>
                    </button>
                </div>
                <div class="modal-body">
                    <div class="col-12 ">
                        <form method="POST">
                            <div class="profile-banner">
                                <span>Add Template image</span>
                                <div class="contents">
                                    <img id="blah" src="images/blog1.jpg" class="imagesize" alt="your image">
                                    <input id="file-input" type="file" name="imageUpload" onchange="readURL(this);" />
                                </div>
                            </div>
                            <div class="fail" id="image_e"></div>
                            <div class="input-field">
                                <input type="text" id="title">
                                <label>Template Title</label>
                            </div>
                            <div class="fail" id="title_e"></div>
                            <div class="input-field">
                                <input type="text" id="url">
                                <label>Template URL</label>
                            </div>
                            <div class="fail" id="error"></div>
                            <button class="button btn-add z-depth-1" id="addtemplete" type="button"><i class="fa fa-plus"></i>Add Template</button>
                        </form>
                    </div>
                </div>
            </div>
        </div>
    </div>
    <!--end add restro Modal -->

    <!-- edit restro Modal -->
    <div class="modal fade" id="edittemp" tabindex="-1" role="dialog" aria-labelledby="edittempLabel" aria-hidden="true">
        <div class="modal-dialog" role="document">
            <div class="modal-content">
                <div class="modal-header">
                    <h5 class="modal-title" id="edittempLabel">Edit Template</h5>
                    <button type="button" class="close" data-dismiss="modal" aria-label="Close">
                        <span aria-hidden="true">&times;</span>
                    </button>
                </div>
                <div class="modal-body">
                    <div class="col-12 ">
                        <form>
                            <div class="profile-banner">
                                <span>Add Template image</span>
                                <div class="contents">
                                    <img id="myblah" src="images/blog1.jpg" class="imagesize" alt="your image">
                                    <input id="myfile-input" type="file" name="imageUpload" onchange="myreadURL(this);" />
                                </div>
                            </div>
                            <div class="fail" id="myimage_e"></div>
                            <div class="field">
                                <label>Template ID</label>
                                <input type="text" id="myid" disabled>
                            </div>
                            <div class="fail" id="myid_e"></div>
                            <div class="field">
                                <label>Template Title</label>
                                <input type="text" id="mytitle">
                            </div>
                            <div class="fail" id="mytitle_e"></div>
                            <div class="field">
                                <label>Template URL</label>
                                <input type="text" id="myurl">
                            </div>
                            <div class="fail" id="myerror_e"></div>
                            <button class="button btn-add z-depth-1" id="edittemplete" type='button'><i class="fa fa-plus"></i>Edit Template</button>
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
    <script src="js/templete.js"></script>

</body>

</html>
