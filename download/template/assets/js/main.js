$(document).ready(function () {
  const urlParams = new URLSearchParams(window.location.search);
  let tableParam = urlParams.get('table') || urlParams.get('tableno');

  if (tableParam && tableParam !== 'null') {
    // Try to find the table by ID (data-id) or Name (value)
    let targetOption = $("#tableno option[data-id='" + tableParam + "']");
    if (targetOption.length === 0) {
      targetOption = $("#tableno option[value='" + tableParam + "']");
    }
    if (targetOption.length === 0) {
      // Try searching by text content if it's a name like "Table 1"
      targetOption = $("#tableno option:contains('" + tableParam + "')");
    }

    if (targetOption.length > 0) {
      const tableId = targetOption.attr('data-id') || targetOption.val();
      const tableName = targetOption.text().trim();
      $("#tableno").val(targetOption.val()).prop('disabled', true);
      localStorage.setItem('tableno', tableId);
      localStorage.setItem('tablename', tableName);
    } else {
      localStorage.setItem('tableno', tableParam);
      localStorage.setItem('tablename', "Table " + tableParam);
    }
  }

  if (urlParams.has('code')) {
    const code = urlParams.get('code');
    localStorage.setItem('restrootp', code);
  }

  if (!tableParam) {
    if (localStorage.getItem("tableno") === "null") localStorage.removeItem("tableno");
    if (localStorage.getItem("tablename") === "null") localStorage.removeItem("tablename");

    var storedTable = localStorage.getItem("tableno");
    if (storedTable && storedTable !== 'null') {
      if ($("#tableno option[value='" + storedTable + "']").length > 0) {
        $("#tableno").val(storedTable);
      }
    }
  }
});

checkwaitercall();
// getLocation();
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
fatchdata();
function fatchdata() {

  var language = $("#language").val();
  $.ajax({
    type: "POST",
    url: "../assets/code/fatchdata.php",
    data: {
      language,
    },
    success: function (response) {
      $("#accordion").html(response);
      if (typeof syncMenuQuantities === 'function') {
        syncMenuQuantities();
      }
    },
  });
}

function find(search) {
  if (search == "") {
    // $('$accordion').css('display','none');
    $(".dynamic").hide();

    // alert('if');
    $(".default").show();
  } else {
    // alert('else');
    $(".default").hide();
    $(".dynamic").show();
    var language = $("#language").val();
    $.ajax({
      type: "POST",
      url: "../assets/code/fetchsearch.php",
      data: {
        search,
        language,
      },
      success: function (response) {
        $(".dynamic").html(response);
      },
    });
  }
}
$("#search").keyup(function () {
  var search = $(this).val();
  find(search);
});
$("#language").change(function () {
  fatchdata();
});
function checkwaitercall() {
  var tableno = localStorage.getItem("tableno");

  if (tableno == null) {
  } else {
    $.ajax({
      type: "POST",
      url: "../assets/code/checkwaitercall.php",
      data: { tableno: tableno },

      success: function (response) {
        if ("yes" == jQuery.trim(response)) {
          $("#opencallwaiter").prop("disabled", true);
          $("#opencallwaiter").html("<span>Wait for Waiter</span>");
          $("#opencallwaiter").css("background-color", "gray");
        } else if ("no" == jQuery.trim(response)) {
          $("#opencallwaiter").html(
            '<i class="fa fa-bullhorn" ></i>Call Waiter'
          );
          $("#opencallwaiter").css("background-color", "");
          $("#opencallwaiter").prop("disabled", false);
        }
      },
    });
  }
  myVar = setTimeout(checkwaitercall, 8000);
}

// Add Toast Function
function showToast(message, duration = 3000) {
  var toast = $('<div class="custom-toast">' + message + '</div>');
  $('body').append(toast);

  toast.css({
    'position': 'fixed',
    'bottom': '100px',
    'left': '50%',
    'transform': 'translateX(-50%)',
    'background': 'rgba(0,0,0,0.85)',
    'color': '#fff',
    'padding': '14px 28px',
    'border-radius': '30px',
    'z-index': '9999',
    'font-size': '15px',
    'font-weight': '500',
    'box-shadow': '0 8px 16px rgba(0,0,0,0.4)',
    'opacity': '0',
    'transition': 'all 0.3s ease-in-out',
    'backdrop-filter': 'blur(5px)',
    'border': '1px solid rgba(255,255,255,0.1)'
  });

  setTimeout(() => toast.css('opacity', '1'), 100);
  setTimeout(() => {
    toast.css('opacity', '0');
    setTimeout(() => toast.remove(), 300);
  }, duration);
}


$("#opencallwaiter").click(function () {
  var no = $("#tableno").val() || localStorage.getItem("tableno");
  if (no != 0 && no != null && no != 'Select Here') {
    // Table already selected, show type modal
    $("#selecttable").modal("show");
    $("#calltype_container").removeClass('d-none');
    $("#error").html("");
    $("#table_e").html("");
  } else {
    // Show modal to select table
    $("#selecttable").modal("show");
    $("#calltype_container").addClass('d-none');
    $("#error").html("");
    $("#table_e").html("");
  }
});

var selectedCallType = "Call Waiter";

$("#callwaiterbtn").click(function () {
  var no = $("#tableno").val();
  if (no == 0 || no == null || no == 'Select Here') {
    $("#table_e").html("Please Select Table Name");
    return;
  }
  $("#error").html("");
  $("#table_e").html("");
  selectedCallType = $("#calltype").val() || "Call Waiter";
  getLocation();
});

function callwaiter(lati, long) {
  $("#table_e").html("");
  var no = $("#tableno").val();
  localStorage.setItem("tableno", no);

  if (no != 0) {
    $.ajax({
      type: "POST",
      url: "../assets/code/callwaiter.php",
      data: {
        no: no,
        lati: lati,
        long: long,
        type: selectedCallType
      },

      success: function (response) {
        $("#error").html(response);
        if ("success" == jQuery.trim(response)) {
          showToast(selectedCallType + " Requested successfully!");
          $("#selecttable").modal("hide");
          $("#opencallwaiter").prop("disabled", true);
          $("#opencallwaiter").html("<span>Wait for Waiter</span>");
          $("#opencallwaiter").css("background-color", "gray");
        } else if ("Please Wait Waiter Is coming..." == jQuery.trim(response)) {
          showToast("Waiter is already on the way!");
          $("#selecttable").modal("hide");
          $("#opencallwaiter").prop("disabled", true);
          $("#opencallwaiter").html("<span>Wait for Waiter</span>");
          $("#opencallwaiter").css("background-color", "gray");
        }
      },
    });
  } else {
    $("#table_e").html("Please Select Table Name");
  }
}

$("#feedbtn").click(function () {
  $("#email_e").html("");
  $("#feedback_e").html("");
  $("#fullname_e").html("");
  $("#errorfeedback").html("");
});

$("#sendfeedback").click(function () {
  checkwaitercall();
  var fullname = $("#fullname").val();
  var email = $("#email").val();
  var feedback = $("#feedback").val();
  var mobile = $("#mobile").val();
  var date = $("#date").val();


  if (fullname != '') {
    $("#fullname_e").html("");
    if (date != '') {
      $("#date_e").html("");
      if (mobile != '') {
        $("#mobile_e").html("");
        if (email != '') {
          $("#email_e").html("");
          if (feedback != '') {
            $("#feedback_e").html("");
            $.ajax({
              type: "POST",
              url: "../assets/code/sendfeedback.php",
              data: {
                fullname: fullname,
                email: email,
                feedback: feedback,
                mobile: mobile,
                date: date
              },
              success: function (response) {
                $("#errorfeedback").html(response);
                if (
                  '<span class="success">Successful</span>' == jQuery.trim(response)
                ) {
                  alert("Thanks for Your FeedBack.");
                  $("#feedbackmodel .close").click();
                }
              },
            });
          } else {
            $("#feedback_e").html("Please Enter Your FeedBack");
          }
        } else {
          $("#email_e").html("Please Enter Email Address");
        }
      } else {
        $("#mobile_e").html("Please Enter Mobile Number");
      }
    } else {
      $("#date_e").html("Please Enter Your Birth Date");
    }
  } else {
    $("#fullname_e").html("Please Enter Your Nice Name");
  }
});


function getLocation() {
  if (navigator.geolocation) {
    navigator.geolocation.getCurrentPosition(showPosition, showError);
  } else {
    console.log("Geolocation is not supported by this browser.");
  }
}

function showPosition(position) {
  var lati = position.coords.latitude;
  var long = position.coords.longitude;
  callwaiter(lati, long);
  // console.log('hey');
}
function showError(error) {
  switch (error.code) {
    case error.PERMISSION_DENIED:
      alert("Please Give Permision Of Gps For Better Experience");
      break;
    case error.POSITION_UNAVAILABLE:
      alert("Location information is unavailable.");
      break;
    case error.TIMEOUT:
      alert("The request to get user location timed out.");
      break;
    case error.UNKNOWN_ERROR:
      alert("An unknown error occurred.");
      break;
  }
}
