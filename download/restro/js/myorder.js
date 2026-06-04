fetchorder();

function fetchorder() {
  var tableid = localStorage.getItem("tableno");
  var language = localStorage.getItem("language");
  if (language == null) {
    language = "name_eng";
    localStorage.setItem("language", language);
  }
  $("#language").val(language);
  $.ajax({
    type: "POST",
    cache: false,
    data: { tableid, language },
    url: "code/fetchmyorder.php",
    success: function (response) {
      $("#myorder").html(response);
    },
  });
}
$("#language").change(function () {
  var language = $("#language").val();
  localStorage.setItem("language", language);
  fetchorder();
});
$(document).on("click", "#paybtn", function (e) {
  $("#fullname_e").html("");
  $("#date_e").html("");
  $("#mobile_e").html("");
  $("#email_e").html("");
  $("#feedback_e").html("");
  $("#errorfeedback").html("");

  var name = localStorage.getItem("fullname");
  var number = localStorage.getItem("number");

  $("#fullname").val(name);
  $("#mobile").val(number);
});
$("#makepaymentbtn").click(function () {
  // var username = $("#userfullname").val();
  // var number = $("#usermobile").val();
  // var date = $("#date").val();
  var data = getCookie("uservalid");

  $("#fullname_e").html("");
  $("#date_e").html("");
  $("#mobile_e").html("");
  $("#email_e").html("");
  $("#feedback_e").html("");
  $("#errorfeedback").html("");
  if (data == "true") {
    var fullname = $("#fullname").val();
    var email = $("#email").val();
    var feedback = $("#userfeedback").val();
    var mobile = $("#mobile").val();
    var date = $("#date").val();
    var no = localStorage.getItem("tablename");

    if (fullname != "") {
      $("#fullname_e").html("");
      // if (date != "") {
      //   $("#date_e").html("");
      if (mobile != "") {
        $("#mobile_e").html("");
        // if (email != "") {
        //   $("#email_e").html("");
        if (feedback != "") {
          $("#feedback_e").html("");
          $.ajax({
            type: "POST",
            url: "code/sendfeedback.php",
            data: {
              fullname: fullname,
              email: email,
              feedback: feedback,
              mobile: mobile,
              date: date,
              no: no,
            },
            success: function (response) {
              // $("#errorfeedback").html(response);
              // console.log(response);
              if (
                "<span class='success'>Successful</span>" ==
                jQuery.trim(response)
              ) {
                alert("Thanks for Your FeedBack. Please Wait For Waiter");
                $("#feedback .close").click();
              } else {
                alert("Faild");
              }
            },
          });
        } else {
          $("#feedback_e").html("Please Enter Your FeedBack");
        }
        // } else {
        //   $("#email_e").html("Please Enter Email Address");
        // }
      } else {
        $("#mobile_e").html("Please Enter Mobile Number");
      }
      // } else {
      //   $("#date_e").html("Please Enter Your Birth Date");
      // }
    } else {
      $("#fullname_e").html("Please Enter Your Nice Name");
    }
  } else {
    alert("Faild");
  }
});
