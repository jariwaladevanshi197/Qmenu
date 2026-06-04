$("#register").click(function () {
  $("#fullname_e").html("");
  $("#username_e").html("");
  $("#email_e").html("");
  $("#pass_e").html("");
  $("#conpass_e").html("");
  $("#error").html(response);

  var fullname = $("#fullname").val();
  var username = $("#username").val();
  var email = $("#email").val();
  var password = $("#password").val();
  var conpassword = $("#conpassword").val();

  if (fullname != "") {
    $("#fullname_e").html("");
    if (username != "") {
      $("#username_e").html("");
      if (email != "") {
        $("#email_e").html("");
        if (password != "") {
          $("#pass_e").html("");
          if (password == conpassword) {
            $("#conpass_e").html("");
            $.ajax({
              type: "POST",
              url: "code/addadmin.php",
              data: {
                fullname: fullname,
                username: username,
                email: email,
                password: password,
                conpassword: conpassword,
              },
              success: function (response) {
                $("#error").html(response);
              },
            });
          } else {
            $("#conpass_e").html("Retype Password Dose Not Match");
          }
        } else {
          $("#pass_e").html("Please enter Password");
        }
      } else {
        $("#email_e").html("Please enter Email");
      }
    } else {
      $("#username_e").html("Please enter Username");
    }
  } else {
    $("#fullname_e").html("Please enter fullname");
  }
});
