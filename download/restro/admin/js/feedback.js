setdate();
fatchdata();
function fatchdata() {
  var day = $("#day").val();
  var month = $("#month").val();
  var year = $("#year").val();

  $.ajax({
    type: "POST",
    url: "code/fatchfeedback.php",
    data: {
      day,
      month,
      year,
    },
    success: function (response) {
      $("#table").html(response);
    },
  });
}

$(document).on("click", ".btnviewfb", function (e) {
  var feedbackid = $(this).data("id");

  var s_timestamp = $("#s_timestamp".concat(feedbackid)).text();
  var s_fullname = $("#s_fullname".concat(feedbackid)).text();
  var s_email = $("#s_email".concat(feedbackid)).text();
  var s_feedback = $("#s_feedback".concat(feedbackid)).text();
  var s_dob = $("#s_dob".concat(feedbackid)).text();
  var s_mobile = $("#s_mobile".concat(feedbackid)).text();
  $("#dob").val(s_dob);
  $("#mobile").val(s_mobile);
  $("#feedbackid").val(feedbackid);
  $("#feedbacktime").val(s_timestamp);
  $("#userfullname").val(s_fullname);
  $("#useremail").val(s_email);
  $("#userfeedback").val(s_feedback);
});

$(document).on("click", ".deletefb", function (e) {
  var fbid = $(this).data("id");

  var x = confirm("Are you sure?");
  if (x) {
    $.ajax({
      type: "POST",
      cache: false,
      data: {
        fbid: fbid,
      },
      url: "code/deletefeedback.php",
      success: function (response) {
        alert(response);
        if ("Deleted SuccessFul" == jQuery.trim(response)) {
          fatchdata();
        }
      },
    });
  }
});
$("#day").change(function () {
  fatchdata();
});
$("#month").change(function () {
  fatchdata();
});
$("#year").change(function () {
  fatchdata();
});
function setdate() {
  var today = new Date();
  var dd = today.getDate();
  var mm = today.getMonth() + 1;
  var yyyy = today.getFullYear();

  $("#day").val(dd);
  $("#month").val(mm);
  $("#year").val(yyyy);
}
