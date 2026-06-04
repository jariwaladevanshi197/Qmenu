<?php
            session_start();
            if(isset($_SESSION['adminsession'])){
                        
            }else{
                        header("Location: index.php");
            }
?>
