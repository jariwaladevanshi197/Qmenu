$("#addcategory").click(function () {
  $("#nameeng_e").html("");
  $("#nameguj_e").html("");
  $("#namehindi_e").html("");
  $("#error").html("");
  
  var nameinhindi = $("#nameinhindi").val();
  var nameinguj = $("#nameinguj").val();
  var nameineng = $("#nameineng").val();
  var categorydesc = $("#categorydesc").val();
  
  if (nameineng != "") {
    $("#nameeng_e").html("");
    
    if (nameinhindi != "") {
      $("#namehindi_e").html("");
      if (nameinguj != "") {
        $("#nameguj_e").html("");
        $.ajax({
          type: "POST",
          url: "code/addcategory.php",
          data: {
            categorydesc,
            nameinhindi,
            nameinguj,
            nameineng,
          },
          success: function (response) {
            $("#error").html(response);
            if (
              '<span class="success">Category Added Successfully</span>' ==
              jQuery.trim(response)
              ) {
                location.reload(true);
              }
            },
          });
        } else {
          $("#nameguj_e").html("Please Enter Category Name in Gujarati");
        }
      } else {
        $("#namehindi_e").html("Please Enter Category Name in Hindi");
      }
    } else {
      $("#nameeng_e").html("Please Enter Category Name in English");
    }
  });
  
  
  document
  .getElementById("categorydesc")
  .addEventListener("keypress", function (event) {
    if (event.keyCode == 13) {
      $("#addcategory").click();
    }
  });

  // Auto-translation logic
  $("#nameineng").on("blur", function() {
    var text = $(this).val();
    if(text != "") {
      // Translate to Hindi
      $.get("https://translate.googleapis.com/translate_a/single?client=gtx&sl=en&tl=hi&dt=t&q=" + encodeURI(text), function(res) {
        $("#nameinhindi").val(res[0][0][0]);
        M.updateTextFields(); // Update Materialize labels
      });
      // Translate to Gujarati
      $.get("https://translate.googleapis.com/translate_a/single?client=gtx&sl=en&tl=gu&dt=t&q=" + encodeURI(text), function(res) {
        $("#nameinguj").val(res[0][0][0]);
        M.updateTextFields(); // Update Materialize labels
      });
    }
  });
  
