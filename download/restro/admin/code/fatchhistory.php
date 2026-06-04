<?php
if (isset($_SERVER['HTTP_REFERER'])) {
    require '../../../connect.php';
    session_start();
    $restroid = $_SESSION['megausersession'];

    $day = $_POST['day'];
    $month = $_POST['month'];
    $year = $_POST['year'];
    $dayquery = "EXTRACT(day FROM (orderhistory.timestamp)) = '$day'";
    $monthquery = "EXTRACT(month FROM (orderhistory.timestamp)) = '$month'";
    $yearquery = "EXTRACT(year FROM (orderhistory.timestamp)) = '$year'";

    $query = "select * from orderhistory where restroid = '$restroid' AND $dayquery AND $monthquery AND $yearquery";
    $result = mysqli_query($con, $query);
    $html = '';
    $i = 0;
    while ($value = mysqli_fetch_array($result)) {
        $i++;

        $id = $value['id'];

        $query = "select * from historyitem where orderid = '$id'";
        $res = mysqli_query($con, $query);
        $j = 0;
        $allitem = '';
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

        $html .= '<div style="display:none" >
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
                            <td>' . $value['timestamp'] . '</td>
                            <td>' . $value['fullname'] . '</td>
                            <td>' . $value['number'] . '</td>
                            <td><button type="button" data-id=' . $value['id'] . ' class="btn btn-primary pl-2 btn-edit showrecord" data-toggle="modal" data-target="#invoice-pop">
                                    <span class="d-none d-md-block text-bold">Show</span><i class="fa fa-eye d-md-none"></i>
                                </button></td>
                        </tr>';
    }


    echo $html;
    // print_r($data);

} else {
    header('location:../index.php');
    exit;
}
