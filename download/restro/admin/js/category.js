$("#addcategory").click(function () {
  $("#nameeng_e").html("");
  $("#nameguj_e").html("");
  $("#namehindi_e").html("");
  $("#error").html("");

  var nameinhindi = $("#nameinhindi").val();
  var nameinguj = $("#nameinguj").val();
  var nameineng = $("#nameineng").val();
  var categorydesc = $("#categorydesc").val();

  if (nameineng != "") {
    $("#nameeng_e").html("");
    if (nameinhindi != "") {
      $("#namehindi_e").html("");
      if (nameinguj != "") {
        $("#nameguj_e").html("");

        $.ajax({
          type: "POST",
          url: "code/addcategory.php",
          data: {
            categorydesc,
            nameinhindi,
            nameinguj,
            nameineng,
          },
          success: function (response) {
            $("#error").html(response);
            if (
              '<span class="success">Category Added Successfully</span>' ==
              jQuery.trim(response)
            ) {
              location.reload(true);
            }
          },
        });
      } else {
        $("#nameguj_e").html("Please Enter Category Name in Gujarati");
      }
    } else {
      $("#namehindi_e").html("Please Enter Category Name in Hindi");
    }
  } else {
    $("#nameeng_e").html("Please Enter Category Name in English");
  }
});

document
  .getElementById("categorydesc")
  .addEventListener("keypress", function (event) {
    if (event.keyCode == 13) {
      $("#addcategory").click();
    }
  });

fatchcategory();
function fatchcategory() {
  var language = $("#language").val();

  $.ajax({
    type: "POST",
    url: "code/fatchcategory.php",
    data: {
      language: language,
    },
    success: function (response) {
      $("#displaycategory").html(response);
    },
  });
}
$("#language").change(function () {
  fatchcategory();
});
$(document).on("click", ".categoryedtbtn", function (e) {
  $("#mycaterror").html("");
  $("#mynameeng_e").html("");
  $("#mynamehindi_e").html("");
  $("#mynameguj_e").html("");
  $("#mycaterror").html("");
  var catid = $(this).data("id");
  var s_cat_hindi = $("#s_cat_hindi".concat(catid)).text();
  var s_cat_eng = $("#s_cat_eng".concat(catid)).text();
  var s_cat_guj = $("#s_cat_guj".concat(catid)).text();
  var s_catid = $("#s_catid".concat(catid)).text();

  $("#catenglish").val(s_cat_eng);
  $("#catgujarati").val(s_cat_guj);
  $("#cathindi").val(s_cat_hindi);
  $("#categoryid").val(s_catid);
});

$("#catupdate").click(function () {
  $("#mycaterror").html("");
  $("#mynameeng_e").html("");
  $("#mynamehindi_e").html("");
  $("#mynameguj_e").html("");
  $("#mycaterror").html("");
  var nameinhindi = $("#cathindi").val();
  var nameinguj = $("#catgujarati").val();
  var nameineng = $("#catenglish").val();
  var catid = $("#categoryid").val();

  if (nameineng != "") {
    $("#mynameeng_e").html("");

    if (nameinhindi != "") {
      $("#mynamehindi_e").html("");
      if (nameinguj != "") {
        $("#mynameguj_e").html("");
        $.ajax({
          type: "POST",
          url: "code/updatecategory.php",
          data: {
            catid,
            nameinhindi,
            nameinguj,
            nameineng,
          },
          success: function (response) {
            $("#mycaterror").html(response);
            if (
              '<span class="success">Updated SuccessFul</span>' ==
              jQuery.trim(response)
            ) {
              alert("successful");
              fatchcategory();
              $("#editcategory .close").click();
            }
          },
        });
      } else {
        $("#mynameguj_e").html("Please Enter Category Name in Gujarati");
      }
    } else {
      $("#mynamehindi_e").html("Please Enter Category Name in Hindi");
    }
  } else {
    $("#mynameeng_e").html("Please Enter Category Name in English");
  }
});

$(document).on("click", ".categorydltbtn", function (e) {
  var catid = $(this).data("id");

  var x = confirm("Are you sure?");
  if (x) {
    $.ajax({
      type: "POST",
      cache: false,
      data: {
        catid: catid,
      },
      url: "code/deletecategory.php",
      success: function (response) {
        alert(response);
        if ("Deleted SuccessFul" == jQuery.trim(response)) {
          fatchcategory();
        }
      },
    });
  }
});

// Auto Transliteration Logic (Add Category)
$("#nameineng").on("blur", function () {
  var text = $(this).val();
  if (text.length > 0) {
    $("#nameinhindi").attr("placeholder", "Transliterating...");
    $("#nameinguj").attr("placeholder", "Transliterating...");

    // Hindi
    $.ajax({
      url: "https://inputtools.google.com/request",
      data: { text: text, itc: "hi-t-i0-und", num: 1, cp: 0, cs: 1, ie: "utf-8", oe: "utf-8" },
      dataType: "json",
      success: function (data) {
        if (data[0] === "SUCCESS" && data[1][0] && data[1][0][1][0]) {
          $("#nameinhindi").val(data[1][0][1][0]);
          $("label[for='nameinhindi']").addClass("active");
        }
        $("#nameinhindi").attr("placeholder", "");
      }
    });

    // Gujarati
    $.ajax({
      url: "https://inputtools.google.com/request",
      data: { text: text, itc: "gu-t-i0-und", num: 1, cp: 0, cs: 1, ie: "utf-8", oe: "utf-8" },
      dataType: "json",
      success: function (data) {
        if (data[0] === "SUCCESS" && data[1][0] && data[1][0][1][0]) {
          $("#nameinguj").val(data[1][0][1][0]);
          $("label[for='nameinguj']").addClass("active");
        }
        $("#nameinguj").attr("placeholder", "");
      }
    });
  }
});

// Self-Transliteration for Hindi Input (Add)
$("#nameinhindi").on("blur", function () {
  var text = $(this).val();
  if (text.length > 0 && /^[a-zA-Z\s]+$/.test(text)) { // Only if English characters
    $.ajax({
      url: "https://inputtools.google.com/request",
      data: { text: text, itc: "hi-t-i0-und", num: 1, cp: 0, cs: 1, ie: "utf-8", oe: "utf-8" },
      dataType: "json",
      success: function (data) {
        if (data[0] === "SUCCESS" && data[1][0] && data[1][0][1][0]) {
          $("#nameinhindi").val(data[1][0][1][0]);
        }
      }
    });
  }
});

// Self-Transliteration for Gujarati Input (Add)
$("#nameinguj").on("blur", function () {
  var text = $(this).val();
  if (text.length > 0 && /^[a-zA-Z\s]+$/.test(text)) { // Only if English characters
    $.ajax({
      url: "https://inputtools.google.com/request",
      data: { text: text, itc: "gu-t-i0-und", num: 1, cp: 0, cs: 1, ie: "utf-8", oe: "utf-8" },
      dataType: "json",
      success: function (data) {
        if (data[0] === "SUCCESS" && data[1][0] && data[1][0][1][0]) {
          $("#nameinguj").val(data[1][0][1][0]);
        }
      }
    });
  }
});

// Auto Transliteration Logic (Edit Category)
$("#catenglish").on("blur", function () {
  var text = $(this).val();
  if (text.length > 0) {
    $("#cathindi").attr("placeholder", "Transliterating...");
    $("#catgujarati").attr("placeholder", "Transliterating...");

    // Hindi
    $.ajax({
      url: "https://inputtools.google.com/request",
      data: { text: text, itc: "hi-t-i0-und", num: 1, cp: 0, cs: 1, ie: "utf-8", oe: "utf-8" },
      dataType: "json",
      success: function (data) {
        if (data[0] === "SUCCESS" && data[1][0] && data[1][0][1][0]) {
          $("#cathindi").val(data[1][0][1][0]);
          $("label[for='cathindi']").addClass("active");
        }
        $("#cathindi").attr("placeholder", "");
      }
    });

    // Gujarati
    $.ajax({
      url: "https://inputtools.google.com/request",
      data: { text: text, itc: "gu-t-i0-und", num: 1, cp: 0, cs: 1, ie: "utf-8", oe: "utf-8" },
      dataType: "json",
      success: function (data) {
        if (data[0] === "SUCCESS" && data[1][0] && data[1][0][1][0]) {
          $("#catgujarati").val(data[1][0][1][0]);
          $("label[for='catgujarati']").addClass("active");
        }
        $("#catgujarati").attr("placeholder", "");
      }
    });
  }
});

// Self-Transliteration for Hindi Input (Edit)
$("#cathindi").on("blur", function () {
  var text = $(this).val();
  if (text.length > 0 && /^[a-zA-Z\s]+$/.test(text)) {
    $.ajax({
      url: "https://inputtools.google.com/request",
      data: { text: text, itc: "hi-t-i0-und", num: 1, cp: 0, cs: 1, ie: "utf-8", oe: "utf-8" },
      dataType: "json",
      success: function (data) {
        if (data[0] === "SUCCESS" && data[1][0] && data[1][0][1][0]) {
          $("#cathindi").val(data[1][0][1][0]);
        }
      }
    });
  }
});

// Self-Transliteration for Gujarati Input (Edit)
$("#catgujarati").on("blur", function () {
  var text = $(this).val();
  if (text.length > 0 && /^[a-zA-Z\s]+$/.test(text)) {
    $.ajax({
      url: "https://inputtools.google.com/request",
      data: { text: text, itc: "gu-t-i0-und", num: 1, cp: 0, cs: 1, ie: "utf-8", oe: "utf-8" },
      dataType: "json",
      success: function (data) {
        if (data[0] === "SUCCESS" && data[1][0] && data[1][0][1][0]) {
          $("#catgujarati").val(data[1][0][1][0]);
        }
      }
    });
  }
});
