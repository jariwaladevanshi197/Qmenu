$(function () {
  "use strict";

  // preloader
  $(".preloader").fadeOut();

  // sidebar
  $(".sidebar").sideNav();

  // slider
  $(".slide-show").owlCarousel({
    items: 1,
    navigation: true,
    slideSpeed: 1000,
    dots: true,
    paginationSpeed: 400,
    singleItem: true,
    autoplay: true,
    loop: true,
  });

  // testimonial
  $(".testimonial").owlCarousel({
    items: 1,
    navigation: true,
    slideSpeed: 1000,
    dots: true,
    paginationSpeed: 400,
    singleItem: true,
    autoplay: true,
    loop: true,
  });

  // tabs
  $("ul.tabs").tabs();

  // collapse
  $(".collapsible").collapsible();
});

// OUR EDITING
var showbox = function () {
  if (document.getElementById("searchbox").style.display == "block") {
    document.getElementById("searchbox").style.display = "none";
    document.getElementById("segments").style.marginTop = "0em";
  } else {
    document.getElementById("searchbox").style.display = "block";
    document.getElementById("segments").style.marginTop = "3.8em";
  }
};

$(document).ready(function () {
  var quantitiy = 1;
  $(".plus-btn").click(function (e) {
    // Stop acting like a button
    e.preventDefault();
    // Get the field name
    var quantity = parseInt($("#quantity").val());

    // If is not undefined

    $("#quantity").val(quantity + 1);

    // Increment
  });

  $(".minus-btn").click(function (e) {
    // Stop acting like a button
    e.preventDefault();
    // Get the field name
    var quantity = parseInt($("#quantity").val());

    // If is not undefined

    // Increment
    if (quantity > 1) {
      $("#quantity").val(quantity - 1);
    }
  });
});

function readURL(input) {
  if (input.files && input.files[0]) {
    var reader = new FileReader();

    reader.onload = function (e) {
      $("#blah").attr("src", e.target.result);
    };

    reader.readAsDataURL(input.files[0]);
  }
  document.getElementById("hideimage").style.display = "none";
  document.getElementById("blah").style.display = "block";
}

// share link button

const facebookBtn = document.querySelector(".facebook-btn");
const twitterBtn = document.querySelector(".twitter-btn");
const linkedinBtn = document.querySelector(".linkedin-btn");
const whatsappBtn = document.querySelector(".whatsapp-btn");

function init() {
  var link = document.querySelector("#copylink").value;
  let postUrl = encodeURI(link);
  let postTitle = encodeURI("Hi everyone, please visit my restaurant menu : ");

  facebookBtn.setAttribute(
    "href",
    `https://www.facebook.com/sharer.php?u=${postUrl}`
  );

  twitterBtn.setAttribute(
    "href",
    `https://twitter.com/share?url=${postUrl}&text=${postTitle}`
  );

  linkedinBtn.setAttribute(
    "href",
    `https://www.linkedin.com/shareArticle?url=${postUrl}&title=${postTitle}`
  );

  whatsappBtn.setAttribute(
    "href",
    `https://wa.me/?text=${postTitle} ${postUrl}`
  );
}

// init();

// copy to clipboard

function copyLink() {
  var copyText = document.getElementById("copylink").value;
  if (!navigator.clipboard) {
    alert("ooooooo  nooo nooo noooo !!!!!");
    return;
  }
  navigator.clipboard.writeText(copyText).then(
    function () {
      alert("Copying to clipboard was successful!");
    },
    function (err) {
      alert("Could not copy text: ", err);
    }
  );
}
function setCookie(cookiename, cookievalue, hours) {
  // var date = new Date();

  // // Get milliseconds at current time plus number of hours*60 minutes*60 seconds* 1000 milliseconds
  // date.setTime(+date + hours * 3600000); //60 * 60 * 1000

  // window.document.cookie =
  //   key + "=" + value + "; expires=" + date.toGMTString() + "; path=/";

  // return value;
  var result = "";
  var type = "set";
  $.ajax({
    type: "POST",
    async: false,
    data: {
      cookiename,
      type,
      cookievalue,
      hours,
    },
    url: "code/getsetcookies.php",
    success: function (response) {
      console.log(response);
      result = response;
      // return response;
    },
  });
  return result;
}
function getCookie(cookiename) {
  // var name = cname + "=";
  // var decodedCookie = decodeURIComponent(document.cookie);
  // var ca = decodedCookie.split(";");
  // for (var i = 0; i < ca.length; i++) {
  //   var c = ca[i];
  //   while (c.charAt(0) == " ") {
  //     c = c.substring(1);
  //   }
  //   if (c.indexOf(name) == 0) {
  //     return c.substring(name.length, c.length);
  //   }
  // }
  // return "";
  var result = "";
  var type = "get";
  $.ajax({
    type: "POST",
    async: false,
    data: {
      cookiename,
      type,
    },
    url: "code/getsetcookies.php",
    success: function (response) {
      console.log(response);
      result = response;
      // return response;
    },
  });
  return result;
}
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
$("#callwaiter").click(function () {
  var x = confirm("Are you sure Do You Want To Call Waiter ?");
  if (x) {
    var data = getCookie("uservalid");
    if (data == "true") {
      // alert("Calling Waiter Please Wait..");
      callwaiter();
    } else {
      $("#callwaiterext").trigger("click");
    }
  }
});

$("#callwaiterbtn").click(function () {
  callwaiternotvalid();
});
function callwaiternotvalid() {
  var tablename = $("#tablenocall option:selected").text();
  var restrootp = $("#restrootpcall").val();
  //  if(tablename )
  if (restrootp != "") {
    $("#restrootp_e").html("");
    $.ajax({
      type: "POST",
      data: {
        tablename,
        restrootp,
      },
      url: "code/callwaiternovalid.php",
      success: function (response) {
        if (
          "<span class='success'>Successful</span>" == jQuery.trim(response)
        ) {
          alert("Calling Waiter Please Wait");
          $("#callwaitermodel .close").click();
        } else {
          console.log(response);
        }
      },
    });
  } else {
    $("#restrootp_e").html("");
  }
}

function callwaiter() {
  var tablename = localStorage.getItem("tablename");
  $.ajax({
    type: "POST",
    data: {
      tablename,
    },
    url: "code/callwaitervalid.php",
    success: function (response) {
      if ("<span class='success'>Successful</span>" == jQuery.trim(response)) {
        alert("Calling Waiter Please Wait");
        $("#callwaitermodel .close").click();
      } else {
        console.log(response);
      }
    },
  });
}
