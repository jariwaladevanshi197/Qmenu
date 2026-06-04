var currentFilter = "pending";
var searchQuery = "";
var currentSort = "desc";
var dateFrom = "";
var dateTo = "";
var filterTable = "";

fetchorders();
countcallwaiter();

function fetchorders() {
  $.ajax({
    type: "POST",
    cache: false,
    url: "code/fatchorders.php",
    data: {
      filter: currentFilter,
      search: searchQuery,
      sort: currentSort,
      dateFrom: dateFrom,
      dateTo: dateTo,
      tableId: filterTable
    },
    success: function (response) {
      $("#ordercontainer").html(response);
    }
  });
  if (window.orderTimeout) clearTimeout(window.orderTimeout);
  window.orderTimeout = setTimeout(fetchorders, 15000);
}

// Toggle Advanced Filters
$(document).on("click", "#toggleFilters", function () {
  $(this).toggleClass("active");
  $("#advancedFilters").slideToggle();
});

// Apply Filters
$(document).on("click", "#applyFilters", function () {
  dateFrom = $("#dateFrom").val();
  dateTo = $("#dateTo").val();
  filterTable = $("#filterTable").val();
  currentSort = $("#orderSort").val();
  fetchorders();
});

// Clear Filters
$(document).on("click", "#clearFilters", function () {
  $("#dateFrom, #dateTo, #filterTable").val("");
  $("#orderSort").val("desc");
  dateFrom = "";
  dateTo = "";
  filterTable = "";
  currentSort = "desc";
  fetchorders();
});

// Handle Filter Tabs
$(document).on("click", ".order-tab", function () {
  $(".order-tab").removeClass("active");
  $(this).addClass("active");
  currentFilter = $(this).data("filter");

  // Show preloader while loading
  $("#ordercontainer").html('<div class="col-12 text-center py-5"><div class="preloader-wrapper small active"><div class="spinner-layer spinner-blue-only"><div class="circle-clipper left"><div class="circle"></div></div><div class="gap-patch"><div class="circle"></div></div><div class="circle-clipper right"><div class="circle"></div></div></div></div></div>');
  fetchorders();
});

// Handle Search
$(document).on("input", "#orderSearch", function () {
  searchQuery = $(this).val().toLowerCase();
  fetchorders();
});

$(document).on("click", ".btncomp", function (e) {
  var orderid = $(this).data("id");
  var $btn = $(this);
  $btn.prop('disabled', true).html('<i class="fa fa-spinner fa-spin"></i>');

  $.ajax({
    type: "POST",
    cache: false,
    data: { orderid },
    url: "code/comporder.php",
    success: function (response) {
      fetchorders();
    },
    error: function () {
      $btn.prop('disabled', false).html('<i class="fa fa-check"></i> READY');
    }
  });
});

$(document).on("click", ".btnremoveorder", function (e) {
  var x = confirm("Are you sure you want to remove this order?");
  if (x) {
    var orderid = $(this).data("id");
    $.ajax({
      type: "POST",
      cache: false,
      data: { orderid },
      url: "code/removeorder.php",
      success: function (response) {
        fetchorders();
      },
    });
  }
});

function countcallwaiter() {
  $.ajax({
    type: "POST",
    url: "code/countcallwaiter.php",
    success: function (response) {
      $("#callwaitercount").html(response);
      $("#waitercount").html(response);
    },
  });
  setTimeout(countcallwaiter, 5000);
}
