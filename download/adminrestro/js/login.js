$("#login").click(function () {
  $("#username_e").html("");
  $("#pass_e").html("");
  $("#error").html("");

  var username = $("#username").val();
  var password = $("#password").val();

  if (username != "") {
    $("#username_e").html("");
    if (password != "") {
      $("#pass_e").html("");
      $.ajax({
        type: "POST",
        url: "code/login.php",
        data: {
          username: username,
          password: password,
        },
        success: function (response) {
          $("#error").html(response);
        },
      });
    } else {
      $("#pass_e").html("Please enter password !");
    }
  } else {
    $("#username_e").html("Please enter mobile no. !");
  }
});

document
  .getElementById("password")
  .addEventListener("keypress", function (event) {
    if (event.keyCode == 13) {
      $("#login").click();
    }
  });
