<?php
if (isset($_SERVER['HTTP_REFERER'])) {
    require '../../../connect.php';
    session_start();
    $restroid = $_SESSION['megausersession'];
    $pg_no = $_POST['pg_no'];
    $per_page = 20;
    $limit = "LIMIT " . ($pg_no - 1) * $per_page . "," . $per_page;
    $from_date = $_POST['from_date'];
    $to_date = $_POST['to_date'];
    // echo $from_date;
    // 
    $sql1 = "select count(id) from orderhistory where restroid = '$restroid' AND timestamp >= '$from_date' AND timestamp <= '$to_date'";
    // echo $sql1;
    $query1 = mysqli_fetch_array(mysqli_query($con, $sql1));
    $result = $query1['0'];


    $last_page = ceil($result / $per_page);

    $query = "select * from orderhistory where restroid = '$restroid' AND timestamp >= '$from_date' AND timestamp <= '$to_date' $limit";
    $query = "select * from orderhistory where restroid = '$restroid' AND timestamp >= '$from_date' AND timestamp <= '$to_date' $limit";
    $result = mysqli_query($con, $query);
    $html = '<thead>
                        <tr>
                            <th>Sr</th>
                            <th>Time</th>
                            <th>Name</th>
                            <th>Contact No.</th>
                            <th>Order Details</th>
                            <th>Delete</th>
                        </tr>
                    </thead> <tbody>';
    $i = 0;
    while ($value = mysqli_fetch_array($result)) {
        $i++;
        $id = $value['id'];
        $query = "select * from historyitem where orderid = '$id'";
        $res = mysqli_query($con, $query);
        $j = 0;
        $allitem = ' ';
        $totalprice = 0;
        while ($val = mysqli_fetch_array($res)) {
            $j++;
            $allitem .= '<tr>
                                    <td class="service">' . $j . '</td>
                                    <td class="desc">
                                        ' . $val['name_eng'] . '
                                    </td>
                                    <td class="unit">&#8377;' . $val['price'] . '</td>
                                    <td class="qty">' . $val['quantity'] . '</td>
                                    <td class="total text-right">&#8377;' . $val['totalprice'] . '</td>
                                    </tr>';
            $totalprice += $val['totalprice'];
        }

        $allitem .= '<tr>
                                    <td colspan="4" class="grand total text-right">TOTAL</td>
                                    <td class="grand total text-right">&#8377;' . $totalprice . '</td>
                                </tr>';
        if ($value['discount'] != 0) {
            $final = $totalprice * ($value['discount'] / 100);
            $allitem .= '<tr>
                                    <td colspan="4" class="grand total text-right">DISCOUNT ' . $value['discount'] . '%</td>
                                    <td class="grand total text-right">- &#8377;' . $final . '</td>
                                </tr>';
        }
        if ($value['servicetax'] != 0) {
            $final = $totalprice - ($totalprice * ($value['discount'] / 100));
            $final = $final * ($value['servicetax'] / 100);

            $allitem .= '<tr>
                                    <td colspan="4" class="grand total text-right">Service Tax ' . $value['servicetax'] . '%</td>
                                    <td class="grand total text-right">+ &#8377;' . $final . '</td>
                                </tr>';
        }

        if ($value['withgst'] != 0) {
            $final = $totalprice - ($totalprice * ($value['discount'] / 100));
            $final = $final * 0.18;
            $allitem .= '<tr>
                                    <td colspan="4" class="grand total text-right">GST TAX 18%</td>
                                    <td class="grand total text-right">+ &#8377;' . $final . '</td>
                                </tr>';
        }
        $allitem .= '<tr>
                                    <td colspan="4" class="grand total text-right">GRAND TOTAL</td>
                                    <td class="grand total text-right">&#8377;' . $value['grandtotal'] . '</td>
                                </tr>';

        $htm = '<div style="display:none" >
    <span id="s_timestamp' . $value['id'] . '">' . $value['timestamp'] . '</span>
    <span id="s_fullname' . $value['id'] . '">' . $value['fullname'] . '</span>
    <span id="s_orderid' . $value['id'] . '">' . $value['orderid'] . '</span>
    <span id="s_number' . $value['id'] . '">' . $value['number'] . '</span>
    <Textarea id="s_items' . $value['id'] . '" style="display:none">' . $allitem . '</Textarea>
    <span id="s_id' . $value['id'] . '">' . $value['id'] . '</span>
    </div>
      ';
        $html .= '<tr>
                            <td>' . $i . '</td>
                            <td><span class="report-time-badge">' . date("H:i", strtotime($value['timestamp'])) . '</span><br><small class="text-muted">' . date("d M", strtotime($value['timestamp'])) . '</small></td>
                            <td><div class="report-customer-name">' . $value['fullname'] . '</div></td>
                            <td><div class="report-customer-phone">' . $value['number'] . '</div></td>
                            <td>' . $htm . '<button type="button" data-id=' . $value['id'] . ' class="btn-action-view showrecord" data-toggle="modal" data-target="#invoice-pop">
                                    <i class="fa fa-eye"></i> VIEW
                                </button></td>
                                <td><button type="button" data-id=' . $value['id'] . ' class="btn-action-delete dltrecord" >
                                    <i class="fa fa-trash"></i> DELETE
                                </button></td>
                        </tr>';
    }
    $html .= ' <tbody>';
    $query = "select SUM(grandtotal) AS grandtotal,count(id) AS totalorder from orderhistory where restroid = '$restroid' AND timestamp >= '$from_date' AND timestamp <= '$to_date' ";
    $res = mysqli_query($con, $query);
    $row = mysqli_fetch_assoc($res);
    $grandtotal = $row['grandtotal'];
    $totalorder = $row['totalorder'];

    $day = date("d");
    $month = date("m");

    $query = "select count(id) AS totalbday from feedback where restroid = '$restroid' AND EXTRACT(day FROM (feedback.dob)) = '$day' AND EXTRACT(month FROM (feedback.dob)) = '$month'";
    $query = "select count(id) AS totalbday from feedback where restroid = '$restroid' AND EXTRACT(day FROM (feedback.dob)) = '$day' AND EXTRACT(month FROM (feedback.dob)) = '$month'";
    $res = mysqli_query($con, $query);
    $row = mysqli_fetch_assoc($res);
    $totalbday = $row['totalbday'];


    $sql1 = "select count(id),SUM(grandtotal) from orderhistory where restroid = '$restroid' AND DATE(timestamp) = CURDATE()";
    $query1 = mysqli_fetch_array(mysqli_query($con, $sql1));

    $todaysorder = $query1['1'];




    $pg = 1;
    $pageination = "";
    if ($last_page > 1) {
        if ($pg_no > 1) {
            $pageination .= "<button class='page-btn btn btn-success' onclick='fetch2(" . ($pg_no - 1) . ")'>&lt;</button>";
            $pg = $pg_no;
        }
        $pageination .= " &nbsp; &nbsp; <b>Page " . $pg_no . "  of  " . $last_page . " </b> &nbsp; &nbsp; ";
        if ($pg_no != $last_page) {
            if ($pg_no >= 0) {
                $pageination .= "<button class='page-btn btn btn-success' onclick='fetch2(" . ($pg_no + 1) . ")'>&gt;</button>";
                $pg = $pg_no;
            }
        }
    }


    $array = array($html, $pageination, $pg, $grandtotal, $totalorder, $todaysorder, $totalbday);
    echo implode('~', $array);
} else {
    header('location:../index.php');
    exit;
}
