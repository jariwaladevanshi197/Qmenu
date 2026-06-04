fivecall();
$("#updatediscount").click(function () {
  var discount = $("#discount").val();
  if (discount != "") {
    $("#discount_e").html("");
    $.ajax({
      type: "POST",
      data: {
        discount,
      },
      cache: false,
      url: "code/setdiscount.php",
      success: function (response) {
        if (
          '<span class="success">Updated SuccessFul</span>' ==
          jQuery.trim(response)
        ) {
          alert("Discount Set Successfully");
        } else {
          console.log(response);
          alert("faild");
        }
      },
    });
  } else {
    $("#discount_e").html("Please Enter Todays Discount Or Set 0(zero)");
  }
});

$("#discountbtn").click(function () {
  $.ajax({
    type: "POST",
    cache: false,
    url: "code/fatchdiscount.php",
    success: function (response) {
      console.log(response);
      $("#discount").val(parseInt(response));
    },
  });
});

function fivecall() {
  countorders();
  countinvoice();
  countcallwaiter2();
  myVar = setTimeout(fivecall, 5000);
}
function countorders() {
  $.ajax({
    type: "POST",
    url: "code/countorders.php",
    success: function (response) {
      $("#ordercount").html(response);
    },
  });
}

function countinvoice() {
  $.ajax({
    type: "POST",
    url: "code/countinvoice.php",
    success: function (response) {
      $("#invoiccount").html(response);
    },
  });
}

function countcallwaiter2() {
  $.ajax({
    type: "POST",
    url: "code/countcallwaiter.php",
    success: function (response) {
      $("#waitercount").html(response);
    },
  });
}
