fatchdata();
function fatchdata() {
  $.ajax({
    type: "POST",
    url: "code/fatchfeedback.php",
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
