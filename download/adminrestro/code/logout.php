<?php 
            session_start();
            unset($_SESSION['usersession']);
            header('Location:../sign-in.php');
?>
