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
    document.getElementById("segments").style.marginTop = "50px";
  } else {
    document.getElementById("searchbox").style.display = "block";
    document.getElementById("segments").style.marginTop = "8em";
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
  document.getElementById("hideimage").style.display = "none";
  document.getElementById("blah").style.display = "block";
}

function myreadURL(input) {
  if (input.files && input.files[0]) {
    var reader = new FileReader();

    reader.onload = function (e) {
      $("#myblah").attr("src", e.target.result);
    };

    reader.readAsDataURL(input.files[0]);
  }
  // document.getElementById("myhideimage").style.display="none";
  document.getElementById("myblah").style.display = "block";
}


