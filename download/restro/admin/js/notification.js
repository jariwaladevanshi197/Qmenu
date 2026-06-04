fatchrequestpayment();
function fatchrequestpayment() {
  $.ajax({
    type: "POST",
    url: "code/fatchrequestpay.php",
    success: function (response) {
      console.log(response);
      $("#allcallpay").html(response);
    },
  });
  myVar = setTimeout(fatchrequestpayment, 5000);
}

$(document).on("click", ".deletepaycall", function (e) {
  var tablename = $(this).data("value");

  $.ajax({
    type: "POST",
    url: "code/deleterequestpay.php",
    data: { tablename: tablename },
    success: function (response) {
      // alert(response);
      fatchrequestpayment();
    },
  });
});

fatchrequestwaiter();
function fatchrequestwaiter() {
  $.ajax({
    type: "POST",
    url: "code/fatchrequestwaiter.php",
    success: function (response) {
      $("#allcallwaiter").html(response);
    },
  });
  myVar = setTimeout(fatchrequestwaiter, 5000);
}

$(document).on("click", ".deletewaitercall", function (e) {
  var tablename = $(this).data("value");

  $.ajax({
    type: "POST",
    url: "code/deleterequestwaiter.php",
    data: { tablename: tablename },
    success: function (response) {
      // alert(response);
      fatchrequestwaiter();
    },
  });
});
