fatchrequest();
function fatchrequest() {
  $.ajax({
    type: "POST",
    url: "code/fatchrequest.php",
    success: function (response) {
      $("#allcall").html(response);
    },
  });
  myVar = setTimeout(fatchrequest, 5000);
}

$(document).on("click", ".deletecall", function (e) {
  var tablename = $(this).data("value");

  $.ajax({
    type: "POST",
    url: "code/deleterequest.php",
    data: { tablename: tablename },
    success: function (response) {
      // alert(response);
      fatchrequest();
    },
  });
});
