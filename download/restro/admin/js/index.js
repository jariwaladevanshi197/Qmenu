
// code for creating qr code


fetchcategory();
fetchitems(0);
countcallwaiter();



function fetchcategory() {
  var language = $("#language").val();
  $.ajax({
    type: "POST",
    url: "code/fatchcat.php",
    data: {
      language,
    },
    success: function (response) {
      $("#container").html(response);
    },
  });
}

$("#language").change(function () {
  var x = $(".activemenu").attr("data-id");
  fetchcategory();
  fetchitems(0);
});

function call(a, catid) {
  var itemid = $(a).data("id");

  $(".activemenu").addClass("").removeClass("activemenu");
  a.className += " activemenu";
  fetchitems(catid);
}
function fetchitems(catid, search) {
  var language = $("#language").val();
  $.ajax({
    type: "POST",
    url: "code/fatchitem.php",
    data: {
      language,
      catid,
      search,
    },
    success: function (response) {
      $("#itemcontainer").html(response);
    },
  });
}

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
  var s_itemcategory = $("#s_catid".concat(itemid)).text();
  var s_veg = $("#s_veg".concat(itemid)).text();
  var s_available = $("#s_available".concat(itemid)).text();
  var s_image = $("#s_image".concat(itemid)).text();
  $("#imageUpload").val("");
  $("#i_nameinguj").val(s_item_guj);
  $("#i_nameinhindi").val(s_item_hindi);
  $("#i_nameineng").val(s_item_eng);
  $("#itemprice").val(s_itemprice);
  $("#itemid").val(s_itemid);
  $("#itemcategory").val(s_itemcategory);
  $("#category_veg").val(s_veg);
  $("#category_available").val(s_available);
  $("#blah").attr("src", s_image);
});

$("#updateitem").click(function () {
  $("#i_nameeng_e").html("");
  $("#i_nameguj_e").html("");
  $("#i_namehindi_e").html("");
  $("#itemprice_e").html("");
  $("#itemcategory_e").html("");
  $("#category_available_e").html("");
  $("#category_veg_e").html("");
  $("#error").html("");
  imagepath = $("#blah").attr("src").toString();
  var nameinhindi = $("#i_nameinhindi").val();
  var nameinguj = $("#i_nameinguj").val();
  var nameineng = $("#i_nameineng").val();
  var itemprice = $("#itemprice").val();
  var itemid = $("#itemid").val();
  var itemcategory = $("#itemcategory").val();
  var category_veg = $("#category_veg").val();
  var category_available = $("#category_available").val();

  var form_data = new FormData();
  var image = $("#imageUpload").prop("files")[0];
  if (image == undefined) {
  } else {
    form_data.append("image", image);
  }

  form_data.append("nameinhindi", nameinhindi);
  form_data.append("nameinguj", nameinguj);
  form_data.append("nameineng", nameineng);
  form_data.append("category", itemcategory);
  form_data.append("itemprice", itemprice);
  form_data.append("itemid", itemid);
  form_data.append("category_veg", category_veg);
  form_data.append("category_available", category_available);


  if (nameineng != "") {
    $("#i_nameeng_e").html("");
    if (nameinguj != "") {
      $("#i_nameguj_e").html("");
      if (nameinhindi != "") {
        $("#i_namehindi_e").html("");
        if (itemprice != "") {
          $("#itemprice_e").html("");
          if (category_veg == 0 || category_veg == 1) {
            $("#category_veg_e").html("");
            if (category_available == 0 || category_available == 1) {
              $("#category_available_e").html("");
              if (itemcategory != 0 && itemcategory != null) {
                $("#itemcategory_e").html("");

                $.ajax({
                  type: "POST",
                  dataType: "text",
                  cache: false,
                  contentType: false,
                  processData: false,
                  data: form_data,
                  url: "code/updateitem.php",

                  success: function (response) {
                    $("#error").html(response);
                    if (
                      '<span class="success">Item updated Successfully</span>' ==
                      jQuery.trim(response)
                    ) {
                      alert("Success");
                      var x = $(".activemenu").attr("data-id");
                      fetchitems(x);
                      $("#editMenu .close").click();
                    }
                  },
                });
              } else {
                $("#itemcategory_e").html("Please Select Category Of Item");
              }
            } else {
              $("#category_available_e").html("Please Select available or unavailable");
            }
          } else {
            $("#category_veg_e").html("Please Select veg or non veg");
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
          var x = $(".activemenu").attr("data-id");
          fetchitems(x);
        }
      },
    });
  }
});

$("#search").keyup(function () {
  var search = $(this).val();
  fetchitems(0, search);
});
function countcallwaiter() {
  $.ajax({
    type: "POST",
    url: "code/countcallwaiter.php",
    success: function (response) {
      $("#callwaitercount").html(response);
    },
  });
  myVar = setTimeout(countcallwaiter, 5000);
}

var button = document.getElementById("slide");
button.onclick = function () {
  var container = document.getElementById("container");
  sideScroll(container, "right", 25, 100, 10);
};

var back = document.getElementById("slideBack");
back.onclick = function () {
  var container = document.getElementById("container");
  sideScroll(container, "left", 25, 100, 10);
};
var show = 0;
function sideScroll(element, direction, speed, distance, step) {
  scrollAmount = 0;

  var slideTimer = setInterval(function () {
    if (direction == "left") {
      element.scrollLeft -= step;
      show -= 1;
    } else {
      element.scrollLeft += step;
      show += 1;
    }
    scrollAmount += step;

    if (show == 0) {
      back.style.display = "none";
    } else {
      back.style.display = "block";
    }
    // console.log(show);
    // alert(scrollAmount);
    if (scrollAmount >= distance) {
      window.clearInterval(slideTimer);
    }
  }, speed);
}
