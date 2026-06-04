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
