$("#addtablebtn").click(function () {
  $("#name_e").html("");
  $("#error").html("");
  var tablename = $("#tablename").val();

  if (tablename != "") {
    $("#name_e").html("");
    $.ajax({
      type: "POST",
      url: "code/addtable.php",
      data: {
        tablename: tablename,
      },
      success: function (response) {
        $("#error").html(response);
        if (
          '<span class="success">Table Added Successfully</span>' ==
          jQuery.trim(response)
        ) {
          fatchdata();
          $("#name_e").html("");
          $("#tablename").val("");
          setTimeout(function () {
            $("#error").html("");
          }, 1000);
        }
      },
    });
  } else {
    $("#name_e").html("Please Enter Table name");
  }
});

document
  .getElementById("tablename")
  .addEventListener("keypress", function (event) {
    if (event.keyCode == 13) {
      $("#addtablebtn").click();
    }
  });

fatchdata();
function fatchdata() {
  $.ajax({
    type: "POST",
    url: "code/fatchalltable.php",
    success: function (response) {
      $("#displaytable").html(response);
    },
  });
}

$(document).on("click", ".tableeditbtn", function (e) {
  $("#taberror").html("");
  $("#name_e").html("");
  var tabid = $(this).data("id");

  var s_tablename = $("#s_tablename".concat(tabid)).text();
  $("#mytablename").val(s_tablename);
  $("#tableid").val(tabid);
});

$("#updatetable").click(function () {
  var tablename = $("#mytablename").val();
  var tableid = $("#tableid").val();

  if (tablename != "") {
    $("#name_e").html("");
    $.ajax({
      type: "POST",
      url: "code/updatetable.php",
      data: {
        tablename: tablename,
        tableid: tableid,
      },
      success: function (response) {
        $("#taberror").html(response);

        if (
          '<span class="success">Updated SuccessFul</span>' ==
          jQuery.trim(response)
        ) {
          fatchdata();

          $("#name_e").val("");
          setTimeout(function () {
            $("#taberror").html("");
            $("#edittable .close").click();
          }, 1000);
        }
      },
    });
  } else {
    $("#name_e").html("Please Enter Table Name");
  }
});

$(document).on("click", ".tabledltbtn", function (e) {
  var tableid = $(this).data("id");

  var x = confirm("Are you sure?");
  if (x) {
    $.ajax({
      type: "POST",
      cache: false,
      data: {
        tableid: tableid,
      },
      url: "code/deletetable.php",
      success: function (response) {
        alert(response);
        if ("Deleted SuccessFul" == jQuery.trim(response)) {
          fatchdata();
        }
      },
    });
  }
});
