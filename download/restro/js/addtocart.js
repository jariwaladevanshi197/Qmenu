countcartitem();
fatchitem();
totalprice();
// $(".modal").modal({
//   dismissible: true,
// });
function countcartitem() {
  var count = localStorage.getItem("countcartitem");
  if (count != null) {
    var data = JSON.parse(localStorage.getItem("cartitems"));

    count = 0;
    for (var k in data) {
      //   console.log(data[k]["quantity"]);
      count += data[k]["quantity"];
    }
    localStorage.setItem("countcartitem", count);
  } else {
    count = 0;
    localStorage.setItem("countcartitem", 0);
  }
  $("#cartcount").text(count);
}
function totalprice() {
  var count = localStorage.getItem("totalprice");
  if (count != null) {
    var data = JSON.parse(localStorage.getItem("cartitems"));

    count = 0;
    for (var k in data) {
      var total = data[k]["price"] * data[k]["quantity"];
      count += total;
    }
    localStorage.setItem("totalprice", count);
  } else {
    count = 0;
    localStorage.setItem("totalprice", 0);
  }
  $("#totalprice").html(count);
}

function fatchitem() {
  var data = JSON.parse(localStorage.getItem("cartitems"));

  var language = localStorage.getItem("language");
  if (language == null) {
    language = "name_eng";
    localStorage.setItem("language", language);
  }
  $("#language").val(language);
  var html = "";
  var imagedefault = "'/restro/admin/images/defaultitem.jpg'";
  for (var k in data) {

    var image_veg = "";
    if (data[k]["veg"] == 1) {
      image_veg = '/suratbest/restro/admin/images/nonveg.png';
    } else if (data[k]["veg"] == 0) {
      image_veg = '/suratbest/restro/admin/images/veg.png';
    }

    html +=
      '<div class="cart-product first"> <div class="row"> <div class="col-4 col-md-2"> <div class="contents "> <img style="object-fit: cover; object-position: center; " src="' +
      data[k]["image"] +
      '" alt="" onerror="this.onerror=null; this.src=' +
      imagedefault +
      ';"/> </div> </div> <div class="col-6 col-md-8"> <h6 class="menu-item-title pl-md-3"><img style="margin-bottom: 3px;" style="" src="' + image_veg + '" height="12em" width="12em"/> ' +
      data[k][language] +
      ' </h6> </div> <div class="col-2"> <div class="contents remove dlt-btn" data-id="' +
      k +
      '"> <a ><i class="fa fa-remove"></i></a> </div> </div> </div> <div class="row"> <div class="col-5"> <div class="contents"> <p> Price <strong style="color: #00d2ff">&#8377;' +
      data[k]["totalprice"] +
      '</strong> </p> </div> </div> <div class="col-7 cart-quan d-flex justify-content-end mb-2"> <p>Quantity</p> <div class="contents"> <div class="btn-group" role="group" aria-label="Basic example"> <button type="button" data-qid="quantity_' +
      k +
      '" data-id="' +
      k +
      '" class="btn btn-danger minus-btn"> <i class="fa fa-minus"></i> </button> <input type="number" id="quantity_' +
      k +
      '" class="quantity-text" value="' +
      data[k]["quantity"] +
      '" min="1" max="50" step="10" /> <button type="button" data-id="' +
      k +
      '" data-qid="quantity_' +
      k +
      '" class="btn btn-primary plus-btn"> <i class="fa fa-plus"></i> </button> </div> </div> </div> </div> </div>';
  }
  if (html == "") {
    document.getElementById("itemcontainer").innerHTML = "Your Cart Is Empty";
  } else {
    document.getElementById("itemcontainer").innerHTML = html;
  }
  countcartitem();

  totalprice();
}
$(document).ready(function () {
  $("#afterotp").css("display", "none");
  var quantitiy = 1;
  // $(".plus-btn").click(function (e) {
  $(document).on("click", ".plus-btn", function (e) {
    var qid = $(this).data("qid");
    var itemid = $(this).data("id");
    var change = "#".concat(qid);
    // e.preventDefault();
    var quantity = parseInt($(change).val());
    $(change).val(quantity + 1);
    quantity = parseInt($(change).val());
    var data = JSON.parse(localStorage.getItem("cartitems"));
    data[itemid]["totalprice"] = data[itemid]["price"] * quantity;
    data[itemid]["quantity"] = quantity;
    localStorage.setItem("cartitems", JSON.stringify(data));
    // alert("hello");
    fatchitem();
  });

  // $(".minus-btn").click(function (e) {
  $(document).on("click", ".minus-btn", function (e) {
    var qid = $(this).data("qid");
    var itemid = $(this).data("id");
    var change = "#".concat(qid);
    var quantity = parseInt($(change).val());
    if (quantity > 1) {
      $(change).val(quantity - 1);
      quantity = parseInt($(change).val());
      var data = JSON.parse(localStorage.getItem("cartitems"));
      data[itemid]["totalprice"] = data[itemid]["price"] * quantity;
      data[itemid]["quantity"] = quantity;
      localStorage.setItem("cartitems", JSON.stringify(data));
      fatchitem();
    }
  });

  $(document).on("click", ".dlt-btn", function (e) {
    var itemid = $(this).data("id");
    var data = JSON.parse(localStorage.getItem("cartitems"));
    delete data[itemid];
    localStorage.setItem("cartitems", JSON.stringify(data));
    fatchitem();
  });
});

$("#placeorderbtn").click(function () {
  var cartitems = JSON.parse(localStorage.getItem("cartitems"));
  if (cartitems) {
    // var data = localStorage.getItem("uservalid");
    var data = getCookie("uservalid");
    console.log(data);
    if (data == "true") {
      $("#comfirmordervalid .close").click();
      confirmorder();
      // $("#comfirmordervalid").modal("show");
    } else {
      // $("#comfirmorder").modal("show");
      $("#notvalid").trigger("click");
    }
  } else {
    alert("No Item In Cart");
  }
});
$("#verify").click(function () {
  $("#mobile_ee").html("");
  $("#mobile_e").html("");
  $("#fullname_e").html("");

  var mobileno = $("#mobileno").val();
  var fullname = $("#fullname").val();
  if (fullname != "") {
    $("#fullname_e").html("");
    if (mobileno.length >= 10) {
      $("#mobile_ee").html("");
      $("#mobile_e").html("");
      $.ajax({
        type: "POST",
        data: { mobileno },
        url: "code/getotp.php",
        success: function (response) {
          $("#mobileno").prop("disabled", true);
          $("#fullname").prop("disabled", true);
          $("#verify").css("display", "none");
          $("#afterotp").css("display", "block");
          $("#mobile_ee").html(response);
        },
      });
    } else {
      $("#mobile_e").html("Please Enter 10 Digit Number");
    }
  } else {
    $("#fullname_e").html("Please Enter Your Nice Name");
  }
});

$("#placeorder").click(function () {
  var mobile = $("#mobileno").val();
  var otp = $("#otp").val();
  var restrootp = $("#restrootp").val();
  var tableno = $("#tableno").val();
  var fullname = $("#fullname").val();
  var tablename = $("#tableno option:selected").text();

  if (mobile.length >= 10) {
    $("#mobile_e").html("");
    // if (otp != "") {
    //   $("#otp_e").html("");
    if (restrootp != "") {
      $("#otp_e").html("");
      if (tableno != 0) {
        $("#table_e").html("");
        $("#error").html("");
        $.ajax({
          type: "POST",
          data: { mobile, otp, tableno, restrootp },
          url: "code/verifyrescode.php",
          success: function (response) {
            if ("Success" == jQuery.trim(response)) {
              // localStorage.setItem("uservalid", "true");
              setCookie("uservalid", "true", 2);
              localStorage.setItem("number", mobile);
              localStorage.setItem("tableno", tableno);
              localStorage.setItem("tablename", tablename);
              localStorage.setItem("fullname", fullname);

              $("#comfirmorder .close").click();
              confirmorder();
            } else {
              $("#error").html(response);
            }
          },
        });
      } else {
        $("#table_e").html("Please Select Table Number");
      }
    } else {
      $("#restrootp_e").html("Call Waiter For This code");
    }
    // } else {
    //   $("#otp_e").html("Please Enter OTP");
    // }
  } else {
    $("#mobile_e").html("Please Enter 10 Digit Number");
  }
});
$("#placeordervalid").click(function () {
  // var tableno = $("#tablenovalid").val();
  // var tablename = $("#tablenovalid option:selected").text();
  // if (tableno != 0) {
  //   $("#tablevalid_e").html("");
  // $("#comfirmordervalid .close").click();
  // confirmorder(tableno, tablename);
  // } else {
  //   $("#tablevalid_e").html("Please Select Table Number");
  // }
});

function confirmorder(tableno, tablename) {
  var cartitems = JSON.parse(localStorage.getItem("cartitems"));
  var number = localStorage.getItem("number");
  var fullname = localStorage.getItem("fullname");
  var tableno = localStorage.getItem("tableno");
  var tablename = localStorage.getItem("tablename");
  var mess = $("#mess").val();
  var date = new Date();
  var components = [
    date.getYear(),
    date.getMonth(),
    date.getDate(),
    date.getHours(),
    date.getMinutes(),
    date.getSeconds(),
    date.getMilliseconds(),
  ];
  var id = components.join("");
  var final = [
    {
      orderid: id,
      tableid: tableno,
      tablename: tablename,
      fullname: fullname,
      number: number,
      mess: mess,
      item: cartitems,
    },
  ];

  $.ajax({
    type: "POST",
    data: { final },
    url: "code/placeorder.php",
    success: function (response) {
      // console.log(response);
      if ("success" == jQuery.trim(response)) {
        alert("Your Order Is Comfirm");
        $("#mess").val("");
        removecartitem();
        window.location.replace("myorder.php");
        //  window.location.href = "myorder.php";
      }
    },
  });
}

function removecartitem() {
  localStorage.removeItem("cartitems");
  fatchitem();
}
$("#language").change(function () {
  var language = $("#language").val();
  localStorage.setItem("language", language);
  fatchitem();
});
