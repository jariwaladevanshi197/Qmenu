<?php
if (isset($_SERVER['HTTP_REFERER'])) {

    require '../../connect.php';
    session_start();
    $restroid = $_SESSION['restroid'];

    // $otp = $_POST['otp'];
    $mobile = $_POST['mobile'];
    $tableno = $_POST['tableno'];
    $restrootp = $_POST['restrootp'];
    $randome = rand(1000, 9999);

    // if (isset($_SESSION['otp'])) {
    //     if ($_SESSION['otp'] == $otp) {
            $sql = "select * from restro where id='$restroid'";
            $query = mysqli_query($con, $sql);
            $row1 = mysqli_fetch_array($query);
            $restrootpdb = $row1['restrootp'];
            $count = $row1['count'];
            if ($restrootpdb != 0) {
                if ($restrootpdb == $restrootp) {
                    echo 'Success';
                    if ($count >= 10) {
                        $count = 0;
                        $query = "UPDATE restro SET restrootp='$randome',count='$count' WHERE id='$restroid'";
                        $result = mysqli_query($con, $query);
                    } else {
                        $finalcount = $count + 1;
                        $query = "UPDATE restro SET count='$finalcount' WHERE id='$restroid'";
                        $result = mysqli_query($con, $query);
                    }
                } else {
                    echo '<div class="fail">Please Enter Correct Restro Code</div>';
                }
            } else {
                $finalcount = $count + 1;
                $query = "UPDATE restro SET restrootp='$randome',count='$finalcount' WHERE id='$restroid'";
                $result = mysqli_query($con, $query);
                echo 'Success';
            }
        // } else {
        //     echo '<div class="fail">OTP Is Incorrect Please Enter Valid OTP</div>';
        // }
    // } else {
    //     echo '<div class="fail">OTP Is Incorrect Please Enter Valid OTP</div>';
    // }
} else {
    header('location:../index.php');
    exit;
}
