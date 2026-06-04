// setdate();
// fatchhistory();
function fatchhistory() {
  var day = $("#day").val();
  var month = $("#month").val();
  var year = $("#year").val();

  $.ajax({
    type: "POST",
    url: "code/fatchhistory.php",
    data: {
      day,
      month,
      year,
    },
    success: function (response) {
      //   alert(response);
      $("#ordercontainer").html(response);
      //   console.log(response);
    },
  });
}

$("#day").change(function () {
  fatchhistory();
});
$("#month").change(function () {
  fatchhistory();
});
$("#year").change(function () {
  fatchhistory(); $("#ordercontainer").html(response);
});

$(document).on("click", ".showrecord", function (e) {
  var id = $(this).data("id");

  var s_timestamp = $("#s_timestamp".concat(id)).text();
  var s_fullname = $("#s_fullname".concat(id)).text();
  var s_number = $("#s_number".concat(id)).text();
  var s_orderid = $("#s_orderid".concat(id)).text();
  var s_items = $("#s_items".concat(id)).val();

  $("#ordertime").text(s_timestamp);
  $("#UserName").text(s_fullname);
  $("#mobileno").text(s_number);
  $("#orderno").text(s_orderid);
  $("#allitem").html(s_items);
});
$(document).on("click", ".dltrecord", function (e) {
  var fbid = $(this).data("id");

  var x = confirm("Are you sure?");
  if (x) {
    $.ajax({
      type: "POST",
      cache: false,
      data: {
        fbid: fbid,
      },
      url: "code/deleterecordorder.php",
      success: function (response) {
        alert(response);
        if ("Deleted SuccessFul" == jQuery.trim(response)) {
          var from = $("#datefrom").val();
          var to = $("#dateto").val();
          if (from == '') {
            var pg_no = $("#pg").text();
            var from = new Date();
            var to = new Date();
            from.setFullYear(2019, 1, 1);
            to.setDate(to.getDate() + 1);
            // var pg_no = $("#pg").text();
            fatchfrom(pg_no, convert(from.toString()), convert(to.toString()));
          } else {
            var pg_no = $("#pg").text();
            fetch(pg_no);
          }

        }
      },
    });
  }
})
function setdate() {
  var today = new Date();
  var dd = today.getDate();
  var mm = today.getMonth() + 1;
  var yyyy = today.getFullYear();

  $("#day").val(dd);
  $("#month").val(mm);
  $("#year").val(yyyy);
}
var pg_no = $("#pg").text();
fetch(pg_no);
var lastOrderCount = -1;
var refreshInterval;

function fetch(pg_no) {
  $.ajax({
    type: "POST",
    url: "code/fatchdefaultreport.php",
    data: {
      pg_no
    },
    success: function (response) {
      result = response.split('~');
      $("#ordercontainer").html(result[0]);
      $("#page").html(result[1]);
      $("#pg").text(result[2]);
      $("#amountcount").text(result[3]);

      var currentOrderCount = parseInt(result[4]);
      $("#tordercount").text(result[4]);

      // Sound notification logic
      if (lastOrderCount !== -1 && currentOrderCount > lastOrderCount) {
        document.getElementById('orderNotification').play().catch(e => console.log("Sound blocked by browser"));
        // Potentially highlight the new order
      }
      lastOrderCount = currentOrderCount;

      if (result[5] == "") {
        $("#todaysamount").text(0);
      }
      else {
        $("#todaysamount").text(result[5]);
      }
      $("#tbday").text(result[6]);
    },
  });
}

// Real-time Auto Refresh (Every 10 seconds)
function startAutoRefresh() {
  stopAutoRefresh();
  refreshInterval = setInterval(function () {
    var from = $("#datefrom").val();
    var to = $("#dateto").val();
    // Only auto-refresh if no date filters are set (Default "Today" view)
    if (from == '' && to == '') {
      var pg_no = $("#pg").text();
      fetch(pg_no);
    }
  }, 10000);
}

function stopAutoRefresh() {
  if (refreshInterval) clearInterval(refreshInterval);
}

// Start on load
$(document).ready(function () {
  startAutoRefresh();
});
$('#resetbtn').click(function () {
  $("#datefrom").val('');
  $("#dateto").val('');
  var pg_no = $("#pg").text();
  fetch(1);
});
$('#tordercountbtn').click(function () {
  var from = new Date();
  var to = new Date();
  from.setFullYear(2019, 1, 1);
  to.setDate(to.getDate() + 1);
  fatchfrom(1, convert(from.toString()), convert(to.toString()));

});
$('#search').click(function () {
  var from = $("#datefrom").val();
  var to = $("#dateto").val();
  fatchfrom(1, from, to);
});
function convert(str) {
  var mnths = {
    Jan: "01",
    Feb: "02",
    Mar: "03",
    Apr: "04",
    May: "05",
    Jun: "06",
    Jul: "07",
    Aug: "08",
    Sep: "09",
    Oct: "10",
    Nov: "11",
    Dec: "12"
  },
    date = str.split(" ");

  return [date[3], mnths[date[1]], date[2]].join("-");
}
function fetch2(pg_no) {
  var from = $("#datefrom").val();
  var to = $("#dateto").val();

  if (from == '') {
    var from = new Date();
    var to = new Date();
    from.setFullYear(2019, 1, 1);
    to.setDate(to.getDate() + 1);
    // var pg_no = $("#pg").text();
    fatchfrom(pg_no, convert(from.toString()), convert(to.toString()));
  } else {
    var from = $("#datefrom").val();
    var to = $("#dateto").val();
    // var pg_no = $("#pg").text();
    fatchfrom(pg_no, from, to);

  }
}
function fatchfrom(pg_no, from_date, to_date) {
  $.ajax({
    type: "POST",
    url: "code/fatchfromto.php",
    data: {
      pg_no,
      to_date,
      from_date
    },
    success: function (response) {

      result = response.split('~');
      $("#ordercontainer").html(result[0]);
      $("#page").html(result[1]);
      $("#pg").text(result[2]);
      $("#amountcount").text(result[3]);
      $("#tordercount").text(result[4]);
      if (result[5] == "") {
        $("#todaysamount").text(0);
      }
      else {
        $("#todaysamount").text(result[5]);
      }
      $("#tbday").text(result[6]);
    },
  });
}


$('#tbdaybtn').click(function () {
  $.ajax({
    type: "POST",
    url: "code/fatchtbday.php",
    data: {
    },
    success: function (response) {
      console.log(response);
      result = response.split('~');
      $("#ordercontainer").html(result[0]);
      $("#page").html(result[1]);
      $("#pg").text(result[2]);
    },
  });
});

// --- PRINT INVOICE FROM REPORT ---
$(document).on("click", "#print-report-invoice", function () {
  var billid = $("#orderno").text();
  var fullname = $("#UserName").text();
  var mobile = $("#mobileno").text();
  var items = $("#allitem").html();

  // Strip delete/edit buttons or any non-printable items if they exist in html
  var tempDiv = $('<div>').html(items);
  tempDiv.find('.btn, button, .fa-trash, .fa-edit').remove();
  var cleanItems = tempDiv.html();

  localStorage.setItem("printinvoice", cleanItems);
  localStorage.setItem("printinvoiceid", billid);
  localStorage.setItem("fullname", fullname);
  localStorage.setItem("mobile", mobile);
  window.location.href = "printinvoice.php";
});
