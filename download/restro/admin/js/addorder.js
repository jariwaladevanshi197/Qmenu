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
  var language = $("#language").val();
  localStorage.setItem("language", language);
  var x = $(".activemenu").attr("data-id");
  fetchcategory();
  fetchitems(0);
});
function call(a, catid) {
  $(".activemenu").addClass("").removeClass("activemenu");
  a.className += " activemenu";
  fetchitems(catid);
}

function fetchitems(catid, search) {
  var language = $("#language").val();
  $.ajax({
    type: "POST",
    url: "code/fatchitem_o.php",
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

$("#search").keyup(function () {
  var search = $(this).val();
  fetchitems(0, search);
});

function showToast() {
  var x = document.getElementById("snackbar");
  x.className = "show";
  setTimeout(function () {
    x.className = x.className.replace("show", "");
  }, 3000);
}

function addtocart(th, itemid) {
  showToast();
  var qid = $(th).data("qid");
  var change = "#".concat(qid);
  var quantity = parseInt($(change).val());

  var name_eng = "";
  var name_hindi = "";
  var name_guj = "";
  var image = "";
  var price = "";
  var totalprice = "";
  var catname_eng = "";
  var catname_hindi = "";
  var catname_guj = "";
  var veg = "";
  $.ajax({
    type: "POST",
    url: "code/fatchitemdata_o.php",
    data: {
      itemid,
    },
    success: function (data) {
      if ("Faild" != jQuery.trim(data)) {
        result = data.split("~");
        name_eng = result[0];
        name_hindi = result[1];
        name_guj = result[2];
        price = result[3];
        image = result[4];
        totalprice = quantity * price;
        catname_eng = result[5];
        catname_hindi = result[6];
        catname_guj = result[7];
        veg = result[8];

        var seconditem = {
          id: itemid,
          name_eng: name_eng,
          name_hindi: name_hindi,
          name_guj: name_guj,
          price: price,
          image: image,
          quantity: quantity,
          catname_eng: catname_eng,
          catname_hindi: catname_hindi,
          catname_guj: catname_guj,
          totalprice: totalprice,
          veg: veg,
        };

        var data = localStorage.getItem("cartitems");
        var result = JSON.parse(data);
        if (result != null) {
          if (result[itemid] == undefined) {
            result = {
              ...result,
              [itemid]: seconditem,
            };
          } else {
            result[itemid] = seconditem;
          }
        } else {
          result = { [itemid]: seconditem };
        }
        localStorage.setItem("cartitems", JSON.stringify(result));
        countcartitem();
      } else {
        alert("Faild");
      }
    },
  });
}
countcartitem();
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

    // var count = localStorage.getItem("countcartitem");
    // console.log(count);
  } else {
    count = 0;
    localStorage.setItem("countcartitem", 0);
  }
  $("#cartcount").text(count);
}

$(document).ready(function () {
  var quantitiy = 1;
  // $(".plus-btn").click(function (e) {
  $(document).on("click", ".plus-btn", function (e) {
    var qid = $(this).data("qid");
    var change = "#".concat(qid);
    e.preventDefault();
    var quantity = parseInt($(change).val());
    $(change).val(quantity + 1);
  });

  // $(".minus-btn").click(function (e) {
  $(document).on("click", ".minus-btn", function (e) {
    var qid = $(this).data("qid");
    e.preventDefault();
    var change = "#".concat(qid);
    var quantity = parseInt($(change).val());
    if (quantity > 1) {
      $(change).val(quantity - 1);
    }
  });
});

// function getcartitems(data) {
//   $.ajax({
//     type: "POST",
//     url: "code/getcartitems.php",
//     data: {
//       data,
//     },
//     success: function (response) {
//       return response;
//     },
//   });
// }

// function setcartitems(data) {
//   $.ajax({
//     type: "POST",
//     url: "code/getcartitems.php",
//     data: {
//       data,
//     },
//     success: function (response) {
//       return response;
//     },
//   });
// }

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
