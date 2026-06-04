<?php 
            session_start();
            unset($_SESSION['adminsession']);
            header('Location:../index.php');
?>
