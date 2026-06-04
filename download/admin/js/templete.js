$("#addtemplete").click(function () {
  $("#image_e").html("");
  $("#title_e").html("");
  $("#url_e").html("");
  $("#error").html("");

  var title = $("#title").val();
  var url = $("#url").val();
  var image = $("#file-input").prop("files")[0];

  var form_data = new FormData();
  form_data.append("image", image);
  form_data.append("title", title);
  form_data.append("url", url);

  if (image != undefined) {
    $("#image_e").html("");
    if (title != "") {
      $("#title_e").html("");
      if (url != "") {
        $("#url_e").html("");
        $("#error").html("");
        $.ajax({
          type: "POST",
          dataType: "text",
          cache: false,
          contentType: false,
          processData: false,
          url: "code/addtheme.php",
          data: form_data,
          success: function (response) {
            $("#error").html(response);
            if (
              "<span class='success'>Templete Added Successfully</span>" ==
              jQuery.trim(response)
            ) {
              alert("Success");
              $("#addtemp .close").click();
              fetchtemplete();
              $("#title").val("");
              $("#url").val("");
              $("#file-input").val("");
              $("#error").html("");
            }
          },
        });
      } else {
        $("#url_e").html("Please Enter URL of Theme");
      }
    } else {
      $("#title_e").html("Please enter Title Of Theme");
    }
  } else {
    $("#image_e").html("Please Enter Theme Image");
  }
});

fetchtemplete();
function fetchtemplete(search) {
  $.ajax({
    type: "POST",
    url: "code/fetchtemp.php",
    data: {
      search: search,
    },
    success: function (response) {
      $("#table").html(response);
    },
  });
}

$("#searchtemp").keyup(function () {
  var search = $(this).val();
  fetchtemplete(search);
});

$(document).on("click", ".btnedt", function (e) {
  var tempid = $(this).data("id");

  var s_id = $("#s_id".concat(tempid)).text();
  var s_image = $("#s_image".concat(tempid)).text();
  var s_url = $("#s_url".concat(tempid)).text();
  var s_title = $("#s_title".concat(tempid)).text();

  $("#mytitle").val(s_title);
  $("#myurl").val(s_url);
  $("#myid").val(s_id);
  // alert(s_image);
  // $('#myfile-input').prop('files')[0];
  $("#myblah").attr("src", s_image);
});

$("#edittemplete").click(function () {
  var title = $("#mytitle").val();
  var id = $("#myid").val();
  var url = $("#myurl").val();
  var image = $("#myfile-input").prop("files")[0];

  var form_data = new FormData();
  form_data.append("image", image);
  form_data.append("title", title);
  form_data.append("url", url);
  form_data.append("id", id);

  $("#myimage_e").html("");
  if (title != "") {
    $("#mytitle_e").html("");
    if (url != "") {
      $("#myurl_e").html("");
      if (image == undefined) {
        $("#myimage_e").html("");
        $.ajax({
          type: "POST",
          dataType: "text",
          cache: false,
          contentType: false,
          processData: false,
          url: "code/updatetemp.php",
          data: form_data,
          success: function (response) {
            $("#error").html(response);
            if (
              '<span class="success">Updated SuccessFul</span>' ==
              jQuery.trim(response)
            ) {
              alert("Success");
              $("#edittemp .close").click();
              fetchtemplete();
            }
          },
        });
      } else {
        $.ajax({
          type: "POST",
          dataType: "text",
          cache: false,
          contentType: false,
          processData: false,
          url: "code/updatetempimage.php",
          data: form_data,
          success: function (response) {
            $("#error").html(response);
            if (
              '<span class="success">Updated SuccessFul</span>' ==
              jQuery.trim(response)
            ) {
              alert("Success");
              $("#edittemp .close").click();
              fetchtemplete();
            }
          },
        });
      }
    } else {
      $("#myurl_e").html("Please Enter URL of Theme");
    }
  } else {
    $("#mytitle_e").html("Please enter Title Of Theme");
  }
});

$(document).on("click", ".btndlt", function (e) {
  var themeid = $(this).data("id");
  // alert(themeid);

  var x = confirm("Are you sure?");
  if (x) {
    $.ajax({
      type: "POST",
      cache: false,
      data: {
        themeid: themeid,
      },
      url: "code/deletetheme.php",
      success: function (response) {
        if (
          '<span class="success">Delete SuccessFul</span>' ==
          jQuery.trim(response)
        ) {
          alert("Delete SuccessFul");
          // $("#edittemp .close").click();
          fetchtemplete();
        }
        fetchtemplete();
      },
    });
  }
});
