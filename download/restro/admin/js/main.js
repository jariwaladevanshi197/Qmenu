fetchrestrocode();
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

function readURL(input) {
  if (input.files && input.files[0]) {
    var reader = new FileReader();

    reader.onload = function (e) {
      $("#blah").attr("src", e.target.result);
    };

    reader.readAsDataURL(input.files[0]);
  }
  if (document.getElementById("hideimage")) {
    document.getElementById("hideimage").style.display = "none";
  }
  if (document.getElementById("blah")) {
    document.getElementById("blah").style.display = "block";
  }
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

init();

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

function printDiv(divName) {
  var printContents = document.getElementById(divName).innerHTML;
  var originalContents = document.body.innerHTML;

  document.body.innerHTML = printContents;

  window.print(printContents);

  document.body.innerHTML = originalContents;

  // w = window.open();
  // // var a = $('#'.divName).html();
  // w.document.write(printContents);
  // w.print();
  // w.close();
}
function printclick(divName, note, tablename, fullname, number) {
  var items = document.getElementById(divName).innerHTML;
  localStorage.setItem("printorder", items);
  localStorage.setItem("note", note);
  localStorage.setItem("print_tablename", tablename);
  localStorage.setItem("print_fullname", fullname);
  localStorage.setItem("print_number", number);
  window.location.href = "printorder.php";
}
function invoiceclick(divName, billid, fullname, mobile) {
  var items = document.getElementById(divName).innerHTML;
  localStorage.setItem("printinvoice", items);
  localStorage.setItem("printinvoiceid", billid);
  localStorage.setItem("fullname", fullname);
  localStorage.setItem("mobile", mobile);
  window.location.href = "printinvoice.php";
}
// $(document).on("click", ".printbtn", function (e) {
//   var divName = $(this).data("id");
//   alert(divName);
//   var printContents = document.getElementById(divName).innerHTML;
//   var originalContents = document.body.innerHTML;
//   document.body.innerHTML = printContents;
//   window.print(printContents);
//   document.body.innerHTML = originalContents;
// });

function fetchrestrocode() {
  $.ajax({
    type: "POST",
    cache: false,
    url: "code/fetchrestrocode.php",
    success: function (response) {
      $("#restrocode").html(response);
    },
  });
  myVar = setTimeout(fetchrestrocode, 30000);
}

