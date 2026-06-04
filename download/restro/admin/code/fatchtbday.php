<?php
if (isset($_SERVER['HTTP_REFERER'])) {
    require '../../../connect.php';
    session_start();
    $restroid = $_SESSION['megausersession'];
    // $day = $_POST['day'];
    // $month = $_POST['month'];
    // $year = $_POST['year'];
    // $dayquery = "EXTRACT(day FROM (feedback.timestamp)) = '$day'";
    // $monthquery = "EXTRACT(month FROM (feedback.timestamp)) = '$month'";
    // $yearquery = "EXTRACT(year FROM (feedback.timestamp)) = '$year'";

    $query = "select * from feedback where restroid = '$restroid' AND DATE(timestamp) = CURDATE() ";
    // echo $query;
    $result = mysqli_query($con, $query);
    $html = '<thead class="bg-dark text-white">
                        <tr>
                            <th class="">Sr</th>
                            <th class="">DOB</th>
                            <th class="">Name</th>
                            <th class="">Contact No.</th>
                            <th class="">Email</th>
                            
                        </tr>

                    </thead> <tbody>';
    $i = 0;
    // print_r($result);
    while ($value = mysqli_fetch_array($result)) {

        $i++;
        //     $html .= '<div style="display:none" >
        //   <span id="s_timestamp' . $value['id'] . '">' . $value['timestamp'] . '</span>
        //   <span id="s_fullname' . $value['id'] . '">' . $value['fullname'] . '</span>
        //   <span id="s_email' . $value['id'] . '">' . $value['email'] . '</span>
        //   <span id="s_feedback' . $value['id'] . '">' . $value['feedback'] . '</span>
        //   <span id="s_dob' . $value['id'] . '">' . $value['dob'] . '</span>
        //   <span id="s_mobile' . $value['id'] . '">' . $value['mobile'] . '</span>
        //   </div>
        //   ';
        $html .= '<tr>
      <td>' . $i . '</td>
      <td>' . $value['dob'] . '</td>
      <td>' . $value['fullname'] . '</td>
      <td>' . $value['mobile'] . '</td>
      <td>' . $value['email'] . '</td>
</tr>';
    }


    $html .= ' <tbody>';
    echo $html;
} else {
    header('location:../index.php');
    exit;
}
