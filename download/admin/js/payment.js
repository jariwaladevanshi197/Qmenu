fatchpayment();
function fatchpayment(search) {
  $.ajax({
    type: "POST",
    url: "code/fatchpayment.php",
    data: {
      search: search,
    },
    success: function (response) {
      $("#table").html(response);
    },
  });
}

$("#searchpayment").keyup(function () {
  var search = $(this).val();
  fatchpayment(search);
});

$(document).on("click", ".btnhistory", function (e) {
  var restroid = $(this).data("id");
  $.ajax({
    type: "POST",
    url: "code/fatchhistory.php",
    data: {
      restroid: restroid,
    },
    success: function (response) {
      $("#historytable").html(response);
    },
  });
});

$(document).on("click", ".renewbtn", function (e) {
  var restroid = $(this).data("id");
  $("#planrestroid").val(restroid);
});

$("#planmonth").keyup(function () {
  var paydate = new Date($("#paydate").val());
  var year = paydate.getFullYear();
  var month = paydate.getMonth();
  var day = paydate.getDate();
  var monthplan = $("#planmonth").val();

  var date = new Date();
  date.setDate(day);
  date.setMonth(month);
  date.setFullYear(year);
  var fmonths = parseInt(date.getMonth()) + parseInt(monthplan) + 1;
  date.setMonth(fmonths);

  $("#expdate").val(convert(date.toString()));
});
function convert(str) {
  var date = new Date(str),
    mnth = ("0" + (date.getMonth() + 1)).slice(-2),
    day = ("0" + date.getDate()).slice(-2);
  return [date.getFullYear(), mnth, day].join("-");
}
$("#btnrenewsub").click(function () {
  // var restroid = $('#planrestroid').val();
  // var subplan = $('#mysubplan').val();
  // var myprice = $('#myprice').val();

  $("#myrestrotype_e").html("");
  $("#planprice_e").html("");
  $("#planmonth_e").html("");
  $("#paydate_e").html("");
  $("#expdate_e").html("");
  $("#planerror").html("");
  var plantype = $("#plansubtype").val();
  var price = $("#planprice").val();
  var month = $("#planmonth").val();
  var expdate = $("#expdate").val();
  var paydate = $("#paydate").val();
  var restroid = $("#planrestroid").val();

  if (plantype != "") {
    $("#myrestrotype_e").html("");
    if (price != "") {
      $("#planprice_e").html("");
      if (month != "") {
        $("#planmonth_e").html("");
        if (paydate != "") {
          $("#paydate_e").html("");
          if (expdate != "") {
            $("#expdate_e").html("");
            $.ajax({
              type: "POST",
              cache: false,
              data: {
                plantype,
                price,
                month,
                expdate,
                paydate,
                restroid,
              },
              url: "code/updaterenewsub.php",
              success: function (response) {
                $("#myerror").html(response);
                if (
                  '<span class="success">Successful</span>' ==
                  jQuery.trim(response)
                ) {
                  fatchpayment();
                  alert("Success");
                  $("#myerror").html("");
                  $("#renewmodel .close").click();
                }
              },
            });
          } else {
            $("#expdate_e").html("Please Enter Plan Expire Date");
          }
        } else {
          $("#paydate_e").html("Please Enter Payment Date");
        }
      } else {
        $("#planmonth_e").html("Please Enter Subscription Plan months");
      }
    } else {
      $("#planprice_e").html("Please Enter Price");
    }
  } else {
    $("#myrestrotype_e").html("Please Select Plan Type");
  }

  //   $.ajax({
  //     type: "POST",
  //     url: "code/updaterenewsub.php",
  //     data: {
  //       restroid: restroid,
  //       subplan: subplan,
  //       myprice: myprice,
  //     },
  //     success: function (response) {
  //       $("#myerror").html(response);
  //       if ('<span class="success">Successful</span>' == jQuery.trim(response)) {
  //         fatchpayment();
  //         alert("Success");
  //         $("#myerror").html("");
  //         $("#renewmodel .close").click();
  //       }
  //     },
  //   });
});
