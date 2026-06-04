fetchorders();
countcallwaiter();
function fetchorders() {
  var gst = $("#gst").val();
  $.ajax({
    type: "POST",
    cache: false,
    data: {
      gst,
    },
    url: "code/fatchfinalorder.php",
    success: function (response) {
      $("#ordercontainer").html(response);
      updateMergeButton();
    },
  });
  myVar = setTimeout(fetchorders, 30000);
}
$("#gst").change(function () {
  fetchorders();
});
$(document).on("click", ".btncomp", function (e) {
  var orderid = $(this).data("id");
  var billno = $(this).data("billno");
  var withgst = $("#gst").val();
  // var billno = $(this).data("billno");
  $.ajax({
    type: "POST",
    cache: false,
    data: { orderid, billno, withgst },
    url: "code/compfinalorder.php",
    success: function (response) {
      if ("order complete" == jQuery.trim(response)) {
        alert(response);
        // console.log(response);
        fetchorders();
      } else {
        alert("Faild");
      }
    },
  });
});

$(document).on("click", ".btnremoveorder", function (e) {
  var x = confirm("Are you sure Do You Want To Remove Order?");
  if (x) {
    var orderid = $(this).data("id");
    $.ajax({
      type: "POST",
      cache: false,
      data: { orderid },
      url: "code/removeorderfinal.php",
      success: function (response) {
        fetchorders();
      },
    });
  }
});

$("#updatecharge").click(function () {
  $("#service_e").html("");
  var charge = $("#servicecharge").val();
  if (charge != "") {
    $("#service_e").html("");
    $.ajax({
      type: "POST",
      cache: false,
      data: { charge },
      url: "code/setcharge.php",
      success: function (response) {
        if (
          '<span class="success">Updated SuccessFul</span>' ==
          jQuery.trim(response)
        ) {
          alert("Service Charge Updated SuccessFully");
        } else {
          alert("Faild");
        }
      },
    });
  } else {
    $("#service_e").html("Please Enter Service Charge Or Set 0(zero)");
  }
});
$("#btncharge").click(function () {
  $.ajax({
    type: "POST",
    cache: false,
    url: "code/fatchservicecharge.php",
    success: function (response) {
      console.log(response);
      $("#servicecharge").val(parseInt(response));
    },
  });
});
function countcallwaiter() {
  $.ajax({
    type: "POST",
    url: "code/countcallwaiter.php",
    success: function (response) {
      $("#callwaitercount").html(response);
    },
  });
  myVar = setTimeout(countcallwaiter, 5000);
}

// Merge Logic Variables
let selectedOrders = [];

// Listen for checkbox changes
$(document).on('change', '.merge-chk', function () {
  if ($(this).is(':checked')) {
    $(this).closest('li').addClass('selected-for-merge');
  } else {
    $(this).closest('li').removeClass('selected-for-merge');
  }
  updateMergeButton();
});

function updateMergeButton() {
  let count = $('.merge-chk:checked').length;
  $('#merge-count').text(count);

  if (count >= 2) {
    $('#merge-container').addClass('show-bar');
  } else {
    $('#merge-container').removeClass('show-bar');
  }
}

// Global Tax Rates (Fetched from hidden inputs in fatchfinalorder.php response)
function getTaxRates() {
  return {
    discount: parseFloat($('#global_discount').val()) || 0,
    serviceCharge: parseFloat($('#global_service_charge').val()) || 0
  };
}

// Merge & Print Click Handler
// --- 1. MERGE ENTIRE UNPAID INVOICES IN LIST ---
$('#btn-merge-active').click(function () {
  let orderIds = [];
  $('.merge-chk:checked').each(function () {
    let jsonStr = $(this).siblings('.order-data').val();
    try {
      let orderData = JSON.parse(jsonStr);
      if (orderData) {
        orderIds.push(orderData.orderid);
      }
    } catch (e) { }
  });

  if (confirm("Are you sure you want to merge these invoices into one row?")) {
    $("#preloader").fadeIn();
    $.ajax({
      type: "POST",
      url: "code/mergetoactive.php",
      data: { orderIds: orderIds },
      success: function (response) {
        $("#preloader").fadeOut();
        if (response == "success") {
          M.toast({ html: "Invoices Merged Successfully!", classes: "rounded green" });
          fetchorders(); // Refresh list to show the single merged row
        } else {
          alert(response);
        }
      },
    });
  }
});

// --- 2. MERGED PRINT ONLY ---
$('#btn-merge').click(function () {
  let ordersToMerge = [];
  $('.merge-chk:checked').each(function () {
    let jsonStr = $(this).siblings('.order-data').val();
    try {
      let orderData = JSON.parse(jsonStr);
      if (orderData) {
        ordersToMerge.push(orderData);
      }
    } catch (e) {
      console.error("Error parsing order data", e);
    }
  });

  if (ordersToMerge.length < 2) {
    alert("Please select at least 2 orders to merge.");
    return;
  }

  mergeAndPrint(ordersToMerge);
});

// Complete Merged Order Click Handler
$('#btn-merge-complete').click(function () {
  let ordersToComplete = [];
  let orderIds = [];
  $('.merge-chk:checked').each(function () {
    let jsonStr = $(this).siblings('.order-data').val();
    try {
      let orderData = JSON.parse(jsonStr);
      if (orderData) {
        ordersToComplete.push(orderData);
        orderIds.push(orderData.orderid);
      }
    } catch (e) {
      console.error("Error parsing order data", e);
    }
  });

  if (ordersToComplete.length < 2) {
    alert("Please select at least 2 orders to complete together.");
    return;
  }

  if (!confirm("Are you sure you want to COMPLETE these " + ordersToComplete.length + " orders as a MERGED entry? This will move them to history.")) {
    return;
  }

  // We need to calculate the Merged Bill No and tax info to pass to PHP
  // Reuse merge logic roughly or let PHP do it. PHP does it.
  // We just need a billno. Use first order's timestamp or new one?
  let mergedBillNo = "MERGED-" + Date.now();
  let withgst = $('#gst').val();

  $.ajax({
    type: "POST",
    url: "code/compmergedorder.php",
    data: {
      orderIds: orderIds,
      billno: mergedBillNo,
      withgst: withgst
    },
    success: function (response) {
      if (response.includes('order complete')) {
        alert("Merger Completed Successfully!");
        fetchorders(); // Refresh list
        $('#merge-container').fadeOut();
      } else {
        alert("Failed to complete merged order. " + response);
      }
    }
  });
});

function mergeAndPrint(orders) {
  let mergedItems = {};
  let firstOrder = orders[0];
  let tablenames = [];

  // Aggregation Logic
  orders.forEach(order => {
    if (!tablenames.includes(order.tablename)) {
      tablenames.push(order.tablename);
    }

    order.item.forEach(item => {
      // Use name_eng as key (or id if available and unique across orders)
      let key = item.name_eng;
      if (!mergedItems[key]) {
        mergedItems[key] = {
          ...item,
          quantity: 0,
          totalprice: 0
        };
      }
      mergedItems[key].quantity += parseInt(item.quantity);
      mergedItems[key].totalprice += parseFloat(item.totalprice); // Ensure float
    });
  });

  // Calculate Totals
  let totalprice = 0;
  let htmlItems = '';
  let i = 1;

  for (let key in mergedItems) {
    let item = mergedItems[key];
    totalprice += item.totalprice;
    htmlItems += `<tr>
            <td class="service">${i++}</td>
            <td class="desc">${item.name_eng}</td>
            <td class="unit">₹${item.price}</td> <!-- Assuming price is unit price -->
            <td class="qty">${item.quantity}</td>
            <td class="total">₹${item.totalprice}</td>
        </tr>`;
  }

  // Tax Logic
  let rates = getTaxRates();
  let withgst = $('#gst').val() == '1';

  let discountAmount = 0;
  let serviceAmount = 0;
  let gstAmount = 0;
  let grandTotal = 0;

  if (withgst) {
    discountAmount = totalprice * (rates.discount / 100);
    let taxable = totalprice - discountAmount;
    serviceAmount = taxable * (rates.serviceCharge / 100);
    let subtotalAfterService = taxable; // Service charge is usually on top? 
    // Logic from fatchfinalorder.php:
    // $discount = ($totalprice * ($dbdiscount / 100));
    // $charge = ($totalprice - $discount) * ($dbservicecharge / 100);
    // $final = $totalprice - $discount;
    // $gst = ($final * 0.18);
    // $grandtotal = $final + $gst + $charge;

    // JS Implementation:
    discountAmount = totalprice * (rates.discount / 100);
    serviceAmount = (totalprice - discountAmount) * (rates.serviceCharge / 100);
    let finalAmt = totalprice - discountAmount;
    gstAmount = finalAmt * 0.18;
    grandTotal = finalAmt + gstAmount + serviceAmount;

  } else {
    // Logic from fatchfinalorder.php:
    // $gst = 0;
    // $charge = ($totalprice * ($dbservicecharge / 100));
    // $discount = ($totalprice * ($dbdiscount / 100));
    // $grandtotal = $totalprice + $gst - $discount + $charge;

    // JS Implementation:
    discountAmount = totalprice * (rates.discount / 100);
    serviceAmount = totalprice * (rates.serviceCharge / 100);
    grandTotal = totalprice + 0 - discountAmount + serviceAmount;
  }

  // Generate Footer Rows
  let htmlFooter = `
        <tr>
            <td colspan="4" class="grand total">SUBTOTAL</td>
            <td class="grand total">₹${totalprice.toFixed(2)}</td>
        </tr>`;

  if (rates.discount > 0) {
    htmlFooter += `<tr>
            <td colspan="4" class="grand total">DISCOUNT ${rates.discount}%</td>
            <td class="grand total">-₹${discountAmount.toFixed(2)}</td>
        </tr>`;
  }

  if (rates.serviceCharge > 0) {
    htmlFooter += `<tr>
            <td colspan="4" class="grand total">SERVICE CHARGE ${rates.serviceCharge}%</td>
            <td class="grand total">+₹${serviceAmount.toFixed(2)}</td>
        </tr>`;
  }

  if (withgst) {
    htmlFooter += `<tr>
            <td colspan="4" class="grand total">GST 18%</td>
            <td class="grand total">+₹${gstAmount.toFixed(2)}</td>
        </tr>`;
  }

  htmlFooter += `<tr>
        <td colspan="4" class="grand total">GRAND TOTAL</td>
        <td class="grand total">₹${grandTotal.toFixed(2)}</td>
    </tr>`;

  // Final HTML Construction for Print Page
  let finalHtml = htmlItems + htmlFooter;

  // Save to LocalStorage
  let mergedBillId = "MERGED-" + Date.now();
  let mergedTableName = tablenames.join(' + ');

  // We use the customer details of the FIRST order for simplicity
  // Or we could verify if they are the same.
  let customerName = firstOrder.fullname + (orders.length > 1 ? " (Merged)" : "");
  let customerMobile = firstOrder.number;

  localStorage.setItem("printinvoice", finalHtml);
  localStorage.setItem("printinvoiceid", mergedBillId);
  localStorage.setItem("fullname", customerName);
  localStorage.setItem("mobile", customerMobile);

  // Redirect
  window.location.href = "printinvoice.php";
}
