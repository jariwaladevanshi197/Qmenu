
<?php
if (isset($_SERVER['HTTP_REFERER'])) {
  require '../../../connect.php';
  session_start();
  $restroid = $_SESSION['megausersession'];
  $withgst = $_POST['gst'];
  $filename = '../json/finalorder_' . $restroid . '.json';
  $html = '';
  if (file_exists($filename)) {
    $jsonString = file_get_contents($filename);
    $data = json_decode($jsonString, true);

    if ($data != '' &&  $data != array()) {
      $j = 0;
      foreach ($data as $value) {
        $show = '';
        $display = '';
        if ($j == 0) {
          $show = 'active';
          $display = 'style="display: block;"';
        } else {
          $show = '';
          $display = '';
        }
        $j++;
        $items = '';
        $i = 1;
        $totalprice = 0;
        foreach ($value['item'] as $v) {
          $items .= '<tr>
                      <th class="item-id" scope="row">' . $i . '</th>
                      <td>' . $v['name_eng'] . '</td>
                      <td>&#8377;' . $v['price'] . '</td>
                      <td class="center">' . $v['quantity'] . '</td>
                      <td style="text-align:right;">&#8377;' . $v['totalprice'] . '</td>
                    </tr>';
          $totalprice += $v['totalprice'];
          $i++;
        }
        $sql = "select discount,servicecharge from restro where id = " . $restroid . " limit 1";
        $query = mysqli_query($con, $sql);
        $row = mysqli_fetch_array($query);
        $dbdiscount = $row[0];
        $dbservicecharge = $row[1];
        $gst = '';
        $discount = '';
        $grandtotal = '';
        $charge = '';
        if ($withgst == 1) {

          $discount = ($totalprice * ($dbdiscount / 100));
          $charge = ($totalprice - $discount) * ($dbservicecharge / 100);
          $final = $totalprice - $discount;
          $gst = ($final * 0.18);
          $grandtotal = $final + $gst + $charge;
        } else {
          $gst = 0;
          $charge = ($totalprice * ($dbservicecharge / 100));
          $discount = ($totalprice * ($dbdiscount / 100));
          $grandtotal = $totalprice + $gst - $discount + $charge;
        }
        $displaygst = '';
        $displaydiscount = '';
        $displaycharge = '';
        if ($withgst == 1) {
          $displaygst .= '<tr >
                    <th class="item-id" scope="row"></th>
                    <td></td>
                    <td colspan="2" class="center" style="text-align:right;">GST 18%</td>
                    <td style="text-align:right;">+&#8377;' . round($gst, 2) . '</td>
                  </tr>';
        } else {
          $displaygst = '';
        }
        if ($dbdiscount != 0) {
          $displaydiscount .= '<tr>
                    <th class="item-id" scope="row"></th>
                    <td></td>
                    
                    <td colspan="2" class="center" style="text-align:right;">DISCOUNT ' . $dbdiscount . '%</td>
                    <td style="text-align:right;">-&#8377;' . round($discount, 2)  . '</td>
                  </tr>';
        } else {
          $displaydiscount = '';
        }
        if ($dbservicecharge != 0) {
          $displaycharge .= '<tr >
                    <th class="item-id" scope="row"></th>
                    <td></td>
                    
                    <td colspan="2" class="center" style="text-align:right;">Service Tax ' . $dbservicecharge . '%</td>
                    <td style="text-align:right;">+&#8377;' . round($charge, 2) . '</td>
                  </tr>';
        } else {
          $displaycharge = '';
        }



        $milliseconds = round(microtime(true) * 1000);
        $fullname = $value['fullname'];
        $number = $value['number'];
        $printid1 = "invoiceclick('id_" . $j . "','$milliseconds','$fullname','$number')";
        $printid = "id_" . $j;

        // Embed Tax Rates for JS
        $html .= '<input type="hidden" id="global_discount" value="' . $dbdiscount . '">';
        $html .= '<input type="hidden" id="global_service_charge" value="' . $dbservicecharge . '">';

        $html .= '<li class=' . $show . '>
              <div class="collapsible-header accordion-title ' . $show . '">
                <div class="row full-row" style="align-items: center;">
                <div class="col-2 col-md-1" style="display: flex; align-items: center; justify-content: center; z-index: 10;">
                    <input type="checkbox" class="merge-chk" style="width: 22px; height: 22px; cursor: pointer; opacity: 1 !important; position: relative !important; pointer-events: all !important; visibility: visible !important;" onclick="event.stopPropagation();">
                    <textarea class="order-data" style="display:none;">' . json_encode($value) . '</textarea>
                </div>
                <div class="col-4 col-md-5">
                  <i class="fa fa-map-marker"></i>' . $value['tablename'] . ' <small class="text-muted">(' . $value['fullname'] . ')</small>
                  </div>
                <div class="col-2">
                  <button type="button" class="btn btn-success btn-acc printbtn" onClick="' . $printid1 . '" style="padding: 0.30rem 0.35rem"><span class="d-none d-md-block">Print</span><i
                  style="margin: 0;" class="fa fa-print d-md-none"></i></button>
                </div>
                <div class="col-2">
                <button type="button" data-billno="' . $milliseconds . '" data-id="' . $value['orderid'] . '" class="btn btn-primary btn-acc btncomp" style="padding: 0.30rem 0.35rem"><span class="d-none d-md-block">Complete</span><i style="margin: 0;" class="fa fa-check-square-o d-md-none"></i></button>
                </div>
                <div class="col-2">
                <button type="button" data-id="' . $value['orderid'] . '" class="btn btn-danger btn-acc btnremoveorder" style="padding: 0.30rem 0.35rem"><span class="d-none d-md-block">Remove</span><i style="margin: 0;" class="fa fa-trash d-md-none"></i></button>
                </div>
                 
              </div>
                
              </div>
              <div class="collapsible-body" ' . $display . '>
             
            <div class="pages-title">
                <h3>' . $value['tablename'] . '</h3>
                <div class="line"></div>
                </div>
                
                
                
               
                <table class="table">
                <thead class="thead-dark">
                    <tr>
                      <th scope="col-2">Id</th>
                      <th scope="col-6">Item Name</th>
                      <th scope="col-2">Price</th>
                      <th class="center" scope="col-2">Quantity</th>
                      <th style="text-align:right;">Total</th>
                    </tr>
                    </thead>
                  <tbody id=' . $printid . ' >
                  ' . $items . '
                    <tr class="total-price">
                    <th class="item-id" scope="row"></th>
                    <td></td>
                    
                    <td colspan="2" class="center" style="text-align:right;">SUBTOTAL</td>
                    <td style="text-align:right;">&#8377;' . round($totalprice, 2) . '</td>
                    </tr>
                    ' . $displaydiscount . '
                    ' . $displaycharge . '
                   ' . $displaygst  . '
                  <tr class="total-price">
                    <th class="item-id" scope="row"></th>
                    <td></td>
                    
                    <td colspan="2" class="center" style="text-align:right;">GRAND TOTAL</td>
                    <td style="text-align:right;">&#8377;' . round($grandtotal, 2) . '</td>
                  </tr>
                  </tbody>
                </table>
                </div>
            </li>';
      }
    } else {
      echo '<div class="cart z-depth-1 px-4 py-4 text-center"><h2>No Orders</h2></div>';
    }
  } else {
    echo '<div class="cart z-depth-1 px-4 py-4 text-center"><h2>No Orders</h2></div>';
  }
  echo $html;
} else {
  header('location:../index.php');
  exit;
}
