$("#additem").click(function () {
  $("#image_e").html("");
  $("#nameeng_e").html("");
  $("#nameguj_e").html("");
  $("#namehindi_e").html("");
  $("#price_e").html("");
  $("#category_e").html("");
  $("#error").html("");

  var nameinhindi = $("#nameinhindi").val();
  var nameinguj = $("#nameinguj").val();
  var nameineng = $("#nameineng").val();
  var itemprice = $("#itemprice").val();
  var category = $("#category").val();
  var category_veg = $("#category_veg").val();
  var form_data = new FormData();
  var image = $("#file-input").prop("files")[0];
  form_data.append("image", image);
  form_data.append("nameinhindi", nameinhindi);
  form_data.append("nameinguj", nameinguj);
  form_data.append("nameineng", nameineng);
  form_data.append("category", category);
  form_data.append("category_veg", category_veg);
  form_data.append("itemprice", itemprice);

  // if (image != undefined) {
  //   $("#image_e").html("");
  if (nameineng != "") {
    $("#nameeng_e").html("");
    if (nameinhindi != "") {
      $("#namehindi_e").html("");
      if (nameinguj != "") {
        $("#nameguj_e").html("");
        if (itemprice != "") {
          $("#price_e").html("");
          if (category_veg == 0 || category_veg == 1) {
            $("#category_veg_e").html("");
            if (category != 0) {
              $("#category_e").html("");
              $.ajax({
                type: "POST",
                dataType: "text",
                cache: false,
                contentType: false,
                processData: false,
                data: form_data,
                url: "code/additem.php",
                success: function (response) {
                  $("#error").html(response);
                  if (response.indexOf('Item Added Successfully') !== -1) {
                    location.reload(true);
                  } else {
                    // Extract text from response if wrapped in HTML
                    var div = document.createElement("div");
                    div.innerHTML = response;
                    var msg = div.innerText || response;
                    alert("Error: " + msg);
                  }
                },
              });
            } else {
              $("#category_e").html("Please Select Category Of Item");
            }
          } else {
            $("#category_veg_e").html("Please Select veg or non veg");
          }
        } else {
          $("#price_e").html("Please enter Item Price");
        }
      } else {
        $("#nameguj_e").html("Please Enter Name in Gujarati");
      }
    } else {
      $("#namehindi_e").html("Please Enter Name in Hindi");
    }
  } else {
    $("#nameeng_e").html("Please Enter Category Name in English");
  }
  // } else {
  //   $("#image_e").html("Please Enter Item Image");
  // }
});

// Auto Transliteration Logic (Google Input Tools)
$("#nameineng").on("blur", function () {
  var text = $(this).val();
  if (text.length > 0) {

    // Indicate loading
    $("#nameinhindi").attr("placeholder", "Transliterating...");
    $("#nameinguj").attr("placeholder", "Transliterating...");

    // Transliterate to Hindi
    $.ajax({
      url: "https://inputtools.google.com/request",
      data: {
        text: text,
        itc: "hi-t-i0-und",
        num: 1,
        cp: 0,
        cs: 1,
        ie: "utf-8",
        oe: "utf-8"
      },
      dataType: "json",
      success: function (data) {
        if (data[0] === "SUCCESS" && data[1][0] && data[1][0][1][0]) {
          var result = data[1][0][1][0];
          $("#nameinhindi").val(result);
          $("label[for='nameinhindi']").addClass("active");
        }
        $("#nameinhindi").attr("placeholder", "");
      }
    });

    // Transliterate to Gujarati
    $.ajax({
      url: "https://inputtools.google.com/request",
      data: {
        text: text,
        itc: "gu-t-i0-und",
        num: 1,
        cp: 0,
        cs: 1,
        ie: "utf-8",
        oe: "utf-8"
      },
      dataType: "json",
      success: function (data) {
        if (data[0] === "SUCCESS" && data[1][0] && data[1][0][1][0]) {
          var result = data[1][0][1][0];
          $("#nameinguj").val(result);
          $("label[for='nameinguj']").addClass("active");
        }
        $("#nameinguj").attr("placeholder", "");
      }
    });
  }
});

// Self-Transliteration for Hindi Input
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

// Self-Transliteration for Gujarati Input
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
