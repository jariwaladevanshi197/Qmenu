<?php
session_start();
unset($_SESSION['megausersession']);
header('Location:../../../adminrestro/sign-in.php');
