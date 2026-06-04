$("#addrestorent").click(function () {
  $("#restroname_e").html("");
  $("#error").html("");
  $("#restromobile_e").html("");
  $("#restrodist_e").html("");
  $("#restroemail_e").html("");
  $("#restroaddress_e").html("");
  $("#restropass_e").html("");
  $("#restroconpass_e").html("");
  $("#restroprice_e").html("");
  $("#restroplansub_e").html("");
  $("#restrolati_e").html("");
  $("#restrolong_e").html("");
  $("#restrogstno_e").html("");
  $("#blah-add").attr("src", "images/blog1.jpg");
  $("#file-input-add").val("");

  var mobileno = $("#mobileno").val();
  var email = $("#email").val();
  var restroname = $("#restroname").val();
  var themecode = $("#themecode").val();
  var address = $("#address").val();
  var gstno = $("#gstno").val();
  var password = $("#password").val();
  var conpassword = $("#conpassword").val();
  var subplan = $("#subplan").val();
  var subtype = $("#subtype").val();
  var price = $("#price").val();
  var restrolati = $("#restrolati").val();
  var restrolong = $("#restrolong").val();
  var restrodist = $("#restrodist").val();

  if (restroname != "") {
    $("#restroname_e").html("");
    if (mobileno.length >= 10) {
      $("#restromobile_e").html("");
      if (email != "") {
        $("#restroemail_e").html("");
        if (address != "") {
          $("#restroaddress_e").html("");
          if (password.length >= 8) {
            $("#restropass_e").html("");
            if (password == conpassword) {
              $("#restroconpass_e").html("");
              if (price != "") {
                $("#restroprice_e").html("");
                if (subplan != 0) {
                  $("#restroplansub_e").html("");
                  if (restrolati != "") {
                    $("#restrolati_e").html("");
                    if (restrolong != "") {
                      $("#restrolong_e").html("");
                      if (restrodist != "") {
                        $("#restrodist_e").html("");
                        $("#error").html("");
                        var form_data = new FormData();
                        var image = $("#file-input-add").prop("files")[0];
                        if (image) {
                          form_data.append("image", image);
                        }
                        form_data.append("mobileno", mobileno);
                        form_data.append("email", email);
                        form_data.append("themecode", themecode);
                        form_data.append("address", address);
                        form_data.append("gstno", gstno);
                        form_data.append("restroname", restroname);
                        form_data.append("password", password);
                        form_data.append("subplan", subplan);
                        form_data.append("price", price);
                        form_data.append("restrolati", restrolati);
                        form_data.append("restrolong", restrolong);
                        form_data.append("restrodist", restrodist);
                        form_data.append("subtype", subtype);

                        $.ajax({
                          type: "POST",
                          url: "code/addrestro.php",
                          cache: false,
                          contentType: false,
                          processData: false,
                          data: form_data,
                          success: function (response) {
                            $("#error").html(response);
                            if (
                              '<span class="success">Successful</span>' ==
                              jQuery.trim(response)
                            ) {
                              alert("Success");
                              fatchrestro();
                              $("#addRestro .close").click();
                            } else {
                            }
                          },
                        });
                      } else {
                        $("#restrodist_e").html(
                          "Please Enter Distance of Restro in meters"
                        );
                      }
                    } else {
                      $("#restrolong_e").html(
                        "Please Enter Longitude Of Restro"
                      );
                    }
                  } else {
                    $("#restrolati_e").html("Please Enter Latitude Of Restro");
                  }
                } else {
                  $("#restroplansub_e").html("Please select Subscription Plan");
                }
              } else {
                $("#restroprice_e").html("Please Enter Payment Price");
              }
            } else {
              $("#restroconpass_e").html("Confirm password dose not match");
            }
          } else {
            $("#restropass_e").html("please enter more then 8 digit password");
          }
        } else {
          $("#restroaddress_e").html("Please Enter Address Of Restorent");
        }
      } else {
        $("#restroemail_e").html("Enter Your Email Address");
      }
    } else {
      $("#restromobile_e").html("Enter Atlest 10 digits number");
    }
  } else {
    $("#restroname_e").html("Enter Restorent name");
  }
});

fatchrestro();
function fatchrestro(search) {
  var subtype = $("#restrosubtype").val();
  $.ajax({
    type: "POST",
    url: "code/fatchrestro.php",
    data: {
      search: search,
      subtype: subtype,
    },
    success: function (response) {
      $("#table").html(response);
    },
  });
}
$("#restrosubtype").change(function () {
  fatchrestro();
});
$("#searchrestro").keyup(function () {
  var search = $(this).val();
  fatchrestro(search);
});

$(document).on("click", ".btnedt", function (e) {
  $("#myerror").html("");
  $("#blah").attr("src", "images/blog1.jpg");
  $("#myrestrodist_e").html("");
  $("#myrestrolong_e").html("");
  $("#myrestrolati_e").html("");
  $("#myrestroaddress_e").html("");
  $("#myrestroemail_e").html("");
  $("#myrestromobile_e").html("");
  $("#myrestroname_e").html("");
  $("#myrestrogstno_e").html("");
  $("#file-input").val("");
  var restroid = $(this).data("id");

  var s_restroname = $("#s_restroname".concat(restroid)).text();
  var s_address = $("#s_address".concat(restroid)).text();
  var s_qrcode = $("#s_qrcode".concat(restroid)).text();
  var s_gstno = $("#s_gstno".concat(restroid)).text();
  var s_mobileno = $("#s_mobileno".concat(restroid)).text();
  var s_email = $("#s_email".concat(restroid)).text();
  var s_password = $("#s_password".concat(restroid)).text();
  var s_themecode = $("#s_themecode".concat(restroid)).text();
  var s_lati = $("#s_lati".concat(restroid)).text();
  var s_long = $("#s_long".concat(restroid)).text();
  var s_dist = $("#s_dist".concat(restroid)).text();
  var s_id = $("#s_id".concat(restroid)).text();

  if (s_qrcode != "") {
    // If the path starts with /admin, strip it to make it relative to the admin folder
    var display_path = s_qrcode.startsWith('/admin') ? s_qrcode.substring(7) : s_qrcode;
    $("#blah").attr("src", display_path);
  }
  $("#myrestroname").val(s_restroname);
  $("#myrestroid").val(s_id);
  $("#mymobileno").val(s_mobileno);
  $("#myemail").val(s_email);
  $("#myaddress").val(s_address);
  $("#mygstno").val(s_gstno);
  $("#mypassword").val(s_password);
  $("#mythemecode").val(s_themecode);
  $("#mysubtype").val(s_plantype);
  $("#mysubplan").val(s_subplan);
  $("#myrestrolati").val(s_lati);
  $("#myrestrolong").val(s_long);
  $("#myrestrodist").val(s_dist);
});

$("#btnupdaterestro").click(function () {
  $("#myrestropass_e").html("");
  $("#myerror").html("");
  $("#myrestrodist_e").html("");
  $("#myrestrolong_e").html("");
  $("#myrestrolati_e").html("");
  $("#myrestroaddress_e").html("");
  $("#myrestroemail_e").html("");
  $("#myrestromobile_e").html("");
  $("#myrestroname_e").html("");
  $("#myrestrogstno_e").html("");

  // var image = $("#image").val();
  var restroname = $("#myrestroname").val();
  var restroid = $("#myrestroid").val();
  var mobileno = $("#mymobileno").val();
  var email = $("#myemail").val();
  var address = $("#myaddress").val();
  var gstno = $("#mygstno").val();
  var password = $("#mypassword").val();
  var themecode = $("#mythemecode").val();
  var restrolati = $("#myrestrolati").val();
  var restrolong = $("#myrestrolong").val();
  var restrodist = $("#myrestrodist").val();
  var subtype = $("#mysubtype").val();
  var subplan = $("#mysubplan").val();

  var form_data = new FormData();
  var image = $("#file-input").prop("files")[0];
  form_data.append("image", image);
  form_data.append("restroname", restroname);
  form_data.append("restroid", restroid);
  form_data.append("mobileno", mobileno);
  form_data.append("email", email);
  form_data.append("address", address);
  form_data.append("gstno", gstno);
  form_data.append("password", password);
  form_data.append("themecode", themecode);
  form_data.append("restrolati", restrolati);
  form_data.append("restrolong", restrolong);
  form_data.append("restrodist", restrodist);
  form_data.append("subtype", subtype);
  form_data.append("subplan", subplan);

  if (restroname != "") {
    $("#myrestroname_e").html("");
    if (mobileno.length >= 10) {
      $("#myrestromobile_e").html("");
      if (email != "") {
        $("#myrestroemail_e").html("");

        if (address != "") {
          $("#myrestroaddress_e").html("");
          if (restrolati != "") {
            $("#myrestrolati_e").html("");
            if (restrolong != "") {
              $("#myrestrolong_e").html("");
              if (restrodist != "") {
                $("#myrestrodist_e").html("");
                if (password.length >= 8) {
                  $("#myrestropass_e").html("");
                  $("#myerror").html("");
                  $.ajax({
                    type: "POST",
                    dataType: "text",
                    cache: false,
                    contentType: false,
                    processData: false,
                    url: "code/updaterestro.php",
                    data: form_data,
                    success: function (response) {
                      $("#myerror").html(response);
                      if (
                        '<span class="success">Updated SuccessFul</span>' ==
                        jQuery.trim(response)
                      ) {
                        alert("Success");
                        fatchrestro();
                        $("#editRestro .close").click();
                      } else {
                      }
                    },
                  });
                } else {
                  $("#myrestropass_e").html(
                    "please enter more then 8 digit password"
                  );
                }
              } else {
                $("#myrestrodist_e").html(
                  "Please Enter Distance of Restro in meters"
                );
              }
            } else {
              $("#myrestrolong_e").html("Please Enter Longitude Of Restro");
            }
          } else {
            $("#myrestrolati_e").html("Please Enter Latitude Of Restro");
          }
        } else {
          $("#myrestroaddress_e").html("Please Enter Address Of Restorent");
        }
      } else {
        $("#myrestroemail_e").html("Enter Your Email Address");
      }
    } else {
      $("#myrestromobile_e").html("Enter Atlest 10 digits number");
    }
  } else {
    $("#myrestroname_e").html("Enter Restorent name");
  }
});

$(document).on("click", ".btnstatus", function (e) {
  var restroid = $(this).data("id");
  var status = $(this).data("status");
  var set = "";
  if (status == "active") {
    set = 0;
  } else {
    set = 1;
  }
  var x = confirm("Are you sure?");
  if (x) {
    $.ajax({
      type: "POST",
      cache: false,
      data: {
        restroid: restroid,
        set: set,
      },
      url: "code/changestatus.php",
      success: function (response) {
        alert(response);
        fatchrestro();
      },
    });
  }
});

$("#getlocationbtn").click(function () {
  if (navigator.geolocation) {
    navigator.geolocation.getCurrentPosition(showPosition, showError);
  } else {
    console.log("Geolocation is not supported by this browser.");
  }
});

$("#mygetlocationbtn").click(function () {
  if (navigator.geolocation) {
    navigator.geolocation.getCurrentPosition(myshowPosition, showError);
  } else {
    console.log("Geolocation is not supported by this browser.");
  }
});

function showPosition(position) {
  var latitude = position.coords.latitude;
  var longitude = position.coords.longitude;
  $("#restrolati").val(latitude);
  $("#restrolong").val(longitude);
  // console.log('hey');
}
function myshowPosition(position) {
  var latitude = position.coords.latitude;
  var longitude = position.coords.longitude;
  $("#myrestrolati").val(latitude);
  $("#myrestrolong").val(longitude);
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
$(document).on("click", ".btnpass", function (e) {
  var restroid = $(this).data("id");
  $("#myrestroidp").val(restroid);
  $("#mypass").val("");
  $("#mypassword_e").html("");
  $("#myerrorpass").html("");
});

$("#btnupdatepass").click(function () {
  var restroid = $("#myrestroidp").val();
  var password = $("#mypass").val();

  if (password.length >= 8) {
    $("#mypassword_e").html("");
    $.ajax({
      type: "POST",
      cache: false,
      data: {
        restroid,
        password,
      },
      url: "code/changepassword.php",
      success: function (response) {
        $("#myerrorpass").html(response);
        fatchrestro();
        //   $("#changepass .close").click();
      },
    });
  } else {
    $("#mypassword_e").html("Please Enter 8 Digit Password");
  }
});

$(document).on("click", ".btnedtplan", function (e) {
  $("#myrestrotype_e").html("");
  $("#planprice_e").html("");
  $("#planmonth_e").html("");
  $("#paydate_e").html("");
  $("#expdate_e").html("");
  $("#planerror").html("");
  var restroid = $(this).data("id");

  var s_plantype = $("#s_plantype".concat(restroid)).text();
  var s_price = $("#s_price".concat(restroid)).text();
  var s_subplan = $("#s_subplan".concat(restroid)).text();
  var s_expdate = $("#s_expdate".concat(restroid)).text();
  var s_paymentdate = $("#s_paymentdate".concat(restroid)).text();
  var s_id = $("#s_id".concat(restroid)).text();

  $("#plansubtype").val(s_plantype);
  $("#planprice").val(s_price);
  $("#planmonth").val(s_subplan);
  $("#expdate").val(s_expdate);
  $("#paydate").val(s_paymentdate);
  $("#planrestroid").val(s_id);
});

$("#btnupdateplan").click(function () {
  $("#myrestrotype_e").html("");
  $("#planprice_e").html("");
  $("#planmonth_e").html("");
  $("#paydate_e").html("");
  $("#expdate_e").html("");
  $("#planerror").html("");
  var plantype = $("#plansubtype").val();
  var price = $("#planprice").val();
  var month = $("#planmonth").val();
  var expdate = $("#expdate").val();
  var paydate = $("#paydate").val();
  var restroid = $("#planrestroid").val();

  if (plantype != "") {
    $("#myrestrotype_e").html("");
    if (price != "") {
      $("#planprice_e").html("");
      if (month != "") {
        $("#planmonth_e").html("");
        if (paydate != "") {
          $("#paydate_e").html("");
          if (expdate != "") {
            $("#expdate_e").html("");
            $.ajax({
              type: "POST",
              cache: false,
              data: {
                plantype,
                price,
                month,
                expdate,
                paydate,
                restroid,
              },
              url: "code/updatesubplan.php",
              success: function (response) {
                $("#planerror").html(response);
                if (
                  '<span class="success">Updated SuccessFul</span>' ==
                  jQuery.trim(response)
                ) {
                  alert("Updated");
                  fatchrestro();
                  $("#editRestroplan .close").click();
                }
              },
            });
          } else {
            $("#expdate_e").html("Please Enter Plan Expire Date");
          }
        } else {
          $("#paydate_e").html("Please Enter Payment Date");
        }
      } else {
        $("#planmonth_e").html("Please Enter Subscription Plan months");
      }
    } else {
      $("#planprice_e").html("Please Enter Price");
    }
  } else {
    $("#myrestrotype_e").html("Please Select Plan Type");
  }
});
