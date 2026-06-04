fatchdata("");
function fatchdata(search) {
  var language = $("#language").val();
  if (search == "") {
    $.ajax({
      type: "POST",
      url: "code/fatchalldata.php",
      data: {
        language: language,
      },
      success: function (response) {
        $("#accordion").html(response);
      },
    });
  } else {
    $.ajax({
      type: "POST",
      url: "code/fatchalldatasearch.php",
      data: {
        language: language,
        search: search,
      },
      success: function (response) {
        $("#accordion").html(response);
      },
    });
  }
}
$("#language").change(function () {
  fatchdata("");
});
$("#searchitem").keyup(function () {
  var search = $(this).val();
  fatchdata(search);
});

$(document).on("click", ".edtbtn", function (e) {
  $("#i_nameeng_e").html("");
  $("#i_nameguj_e").html("");
  $("#i_namehindi_e").html("");
  $("#itemprice_e").html("");
  $("#itemcategory_e").html("");
  $("#error").html("");
  var itemid = $(this).data("id");

  var s_item_hindi = $("#s_item_hindi".concat(itemid)).text();
  var s_item_eng = $("#s_item_eng".concat(itemid)).text();
  var s_item_guj = $("#s_item_guj".concat(itemid)).text();
  var s_itemprice = $("#s_itemprice".concat(itemid)).text();
  var s_itemid = $("#s_itemid".concat(itemid)).text();
  var s_itemcategory = $("#s_itemcategory".concat(itemid)).text();
  
  $("#i_nameinguj").val(s_item_guj);
  $("#i_nameinhindi").val(s_item_hindi);
  $("#i_nameineng").val(s_item_eng);
  $("#itemprice").val(s_itemprice);
  $("#itemid").val(s_itemid);
  $("#itemcategory").val(s_itemcategory);
});

$("#updateitem").click(function () {
  $("#i_nameeng_e").html("");
  $("#i_nameguj_e").html("");
  $("#i_namehindi_e").html("");
  $("#itemprice_e").html("");
  $("#itemcategory_e").html("");
  $("#error").html("");

  var nameinhindi = $("#i_nameinhindi").val();
  var nameineng = $("#i_nameineng").val();
  var nameinguj = $("#i_nameinguj").val();
  var itemprice = $("#itemprice").val();
  var id = $("#itemid").val();
  var category = $("#itemcategory").val();
  if (nameineng != "") {
    $("#i_nameeng_e").html("");
    if (nameinguj != "") {
      $("#i_nameguj_e").html("");
      if (nameinhindi != "") {
        $("#i_namehindi_e").html("");
        if (itemprice != "") {
          $("#itemprice_e").html("");
          if (category != 0) {
            $("#itemcategory_e").html("");
            $.ajax({
              type: "POST",
              url: "code/updateitem.php",
              data: {
                nameinhindi,
                nameineng,
                nameinguj,
                itemprice,
                category,
                id,
              },
              success: function (response) {
                $("#error").html(response);
                if (
                  '<span class="success">Updated SuccessFul</span>' ==
                  jQuery.trim(response)
                ) {
                  alert("Success");
                  fatchdata("");
                  $("#editMenu .close").click();
                }
              },
            });
          } else {
            $("#itemcategory_e").html("Please Select Category Of Item");
          }
        } else {
          $("#itemprice_e").html("Please enter Item Price");
        }
      } else {
        $("#i_namehindi_e").html("Please Enter Item Name in Hindi");
      }
    } else {
      $("#i_nameguj_e").html("Please Enter Item Name in Gujarati");
    }
  } else {
    $("#i_nameeng_e").html("Please Enter Item Name in English");
  }
});

$(document).on("click", ".dltbtn", function (e) {
  var itemid = $(this).data("id");

  var x = confirm("Are you sure?");
  if (x) {
    $.ajax({
      type: "POST",
      cache: false,
      data: {
        itemid: itemid,
      },
      url: "code/deleteitem.php",
      success: function (response) {
        alert(response);
        if ("Deleted SuccessFul" == jQuery.trim(response)) {
          fatchdata("");
        }
      },
    });
  }
});

$(document).on("click", ".catbtnedt", function (e) {
  $("#nameeng_e").html("");
  $("#nameguj_e").html("");
  $("#namehindi_e").html("");
  $("#caterror").html("");

  var catid = $(this).data("id");
  var s_cat_hindi = $("#s_cat_hindi".concat(catid)).text();
  var s_cat_eng = $("#s_cat_eng".concat(catid)).text();
  var s_cat_guj = $("#s_cat_guj".concat(catid)).text();
  var s_catid = $("#s_catid".concat(catid)).text();

  $("#catid").val(s_catid);
  $("#nameinhindi").val(s_cat_hindi);
  $("#nameineng").val(s_cat_eng);
  $("#nameinguj").val(s_cat_guj);
});
$("#updatecategory").click(function () {
  $("#nameeng_e").html("");
  $("#nameguj_e").html("");
  $("#namehindi_e").html("");
  $("#caterror").html("");

  var nameinhindi = $("#nameinhindi").val();
  var nameineng = $("#nameineng").val();
  var nameinguj = $("#nameinguj").val();
  var catid = $("#catid").val();

  if (nameineng != "") {
    $("#nameeng_e").html("");
    if (nameinguj != "") {
      $("#nameguj_e").html("");
      if (nameinhindi != "") {
        $("#namehindi_e").html("");
        $.ajax({
          type: "POST",
          url: "code/updatecategory.php",
          data: {
            catid,
            nameinhindi,
            nameineng,
            nameinguj,
          },
          success: function (response) {
            $("#caterror").html(response);
            if (
              '<span class="success">Updated SuccessFul</span>' ==
              jQuery.trim(response)
            ) {
              alert("Success");
              fatchdata("");
              $("#editCategory .close").click();
            }
          },
        });
      } else {
        $("#namehindi_e").html("Please Enter Category Name in Hindi");
      }
    } else {
      $("#nameguj_e").html("Please Enter Category Name in Gujarati");
    }
  } else {
    $("#nameeng_e").html("Please Enter Category Name in English");
  }
});

$(document).on("click", ".catbtndlt", function (e) {
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
          fatchdata("");
        }
      },
    });
  }
});

$("#uploadpdf").click(function () {
  var form_data = new FormData();
  var file = $("#file-input").prop("files")[0];
  form_data.append("file", file);

  if (file != undefined) {
    $.ajax({
      type: "POST",
      dataType: "text",
      cache: false,
      contentType: false,
      processData: false,
      data: form_data,
      url: "code/uploadpdf.php",
      success: function (mess) {
        alert(mess);
        if (jQuery.trim(mess) === "Successful") {
          $("#pdfname").val("");
          location.reload(true);
        } else {
          alert("Not Successful");
        }
      },
    });
  } else {
    alert("Choose File Please");
  }
});
