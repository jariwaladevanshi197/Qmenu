<?php
            session_start();
            if(isset($_SESSION['megausersession'])){
                        header("Location: index.php");
            }
?>
