// Cart Management System for Template Themes
// Adapted from restro/js/addtocart.js

countcartitem();
fatchitem();
totalprice();

function countcartitem() {
    var count = localStorage.getItem("countcartitem");
    if (count != null) {
        var data = JSON.parse(localStorage.getItem("cartitems"));
        count = 0;
        for (var k in data) {
            count += data[k]["quantity"];
        }
        localStorage.setItem("countcartitem", count);
    } else {
        count = 0;
        localStorage.setItem("countcartitem", 0);
    }
    $("#cartcount").text(count);
}

function totalprice() {
    var count = localStorage.getItem("totalprice");
    if (count != null) {
        var data = JSON.parse(localStorage.getItem("cartitems"));
        count = 0;
        for (var k in data) {
            var total = data[k]["price"] * data[k]["quantity"];
            count += total;
        }
        localStorage.setItem("totalprice", count);
    } else {
        count = 0;
        localStorage.setItem("totalprice", 0);
    }
    $("#totalprice").html(count);
    $("#totalprice2").html(count);
}

function fatchitem() {
    var data = JSON.parse(localStorage.getItem("cartitems"));
    var language = localStorage.getItem("language");
    if (language == null) {
        language = "name_eng";
        localStorage.setItem("language", language);
    }
    $("#language").val(language);
    var html = "";
    // Determine relative path prefix (depth 2 for index.php, depth 3 for addtocart.php)
    var pathPrefix = '../../';
    if (window.location.pathname.toLowerCase().indexOf('addtocart.php') !== -1) {
        pathPrefix = '../../../';
    }

    // Database stores paths like: /restro/admin/images/item_xxx.jpg
    var imagedefault = pathPrefix + "restro/admin/images/defaultitem.jpg";

    for (var k in data) {
        var image_veg = "";
        var veg_badge = "";
        if (data[k]["veg"] == 1) {
            image_veg = pathPrefix + 'restro/admin/images/nonveg.png';
            veg_badge = '<span class="badge badge-danger" style="position:static; margin-left:5px; font-size:9px;">Non-Veg</span>';
        } else if (data[k]["veg"] == 0) {
            image_veg = pathPrefix + 'restro/admin/images/veg.png';
            veg_badge = '<span class="badge badge-success" style="position:static; margin-left:5px; font-size:9px;">Veg</span>';
        }

        // Robust Image Path Construction
        var itemImage = data[k]["image"];
        if (itemImage) {
            // Extract just the filename to be robust against any prefix
            itemImage = itemImage.split('/').pop();

            // Rebuild correct path
            itemImage = pathPrefix + 'restro/admin/images/' + itemImage;
        } else {
            itemImage = imagedefault;
        }

        html += `
            <div class="cart-product">
                <div class="row no-gutters align-items-center">
                    <div class="col-4 col-md-3">
                        <img src="${itemImage}" 
                             alt="${data[k][language]}" 
                             onerror="this.onerror=null; this.src='${imagedefault}';"
                             style="width: 100%; height: 120px; object-fit: cover; object-position: center;"/>
                    </div>
                    <div class="col-8 col-md-9">
                        <div class="p-3">
                            <div class="d-flex justify-content-between align-items-start mb-2">
                                <div style="flex: 1;">
                                    <h6 class="mb-1" style="font-weight: 600; color: #1a1a1a; font-size: 1rem;">
                                        <img src="${image_veg}" height="16" width="16" style="margin-right: 6px;"/>
                                        ${data[k][language]}
                                    </h6>
                                    ${veg_badge}
                                    <p class="mb-0 mt-2" style="color: #00d2ff; font-weight: 700; font-size: 1.2rem;">
                                        ₹${data[k]["totalprice"]}
                                    </p>
                                </div>
                                <button class="btn btn-sm btn-outline-danger dlt-btn" data-id="${k}" 
                                        style="width: 36px; height: 36px; padding: 0; display: flex; align-items: center; justify-content: center;">
                                    <i class="fa fa-trash"></i>
                                </button>
                            </div>
                            <div class="d-flex justify-content-between align-items-center mt-3">
                                <small style="color: #666; font-weight: 600;">Quantity</small>
                                <div class="btn-group" role="group">
                                    <button type="button" data-qid="quantity_${k}" data-id="${k}" 
                                            class="btn btn-sm btn-outline-secondary minus-btn" style="width: 36px; height: 36px;">
                                        <i class="fa fa-minus"></i>
                                    </button>
                                    <input type="number" id="quantity_${k}" class="quantity-text" 
                                           value="${data[k]["quantity"]}" min="1" max="50" readonly/>
                                    <button type="button" data-id="${k}" data-qid="quantity_${k}" 
                                            class="btn btn-sm btn-outline-secondary plus-btn" style="width: 36px; height: 36px;">
                                        <i class="fa fa-plus"></i>
                                    </button>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        `;
    }

    if (html == "") {
        document.getElementById("itemcontainer").innerHTML = `
            <div class="text-center py-5" style="background: white; border-radius: 16px; padding: 60px 20px;">
                <i class="fa fa-shopping-cart" style="font-size: 72px; color: #e0e0e0;"></i>
                <h5 class="mt-4" style="color: #666; font-weight: 600;">Your Cart Is Empty</h5>
                <p style="color: #999; margin-top: 8px;">Add delicious items from the menu!</p>
                <a href="javascript:history.back()" class="btn btn-warning mt-3" style="border-radius: 12px; padding: 12px 32px; font-weight: 600;">
                    <i class="fa fa-arrow-left"></i> Browse Menu
                </a>
            </div>
        `;
    } else {
        document.getElementById("itemcontainer").innerHTML = html;
    }
    countcartitem();
    totalprice();
    // Update second total display
    $("#totalprice2").html($("#totalprice").html());
}

$(document).ready(function () {
    // Plus button handler
    $(document).on("click", ".plus-btn", function (e) {
        var qid = $(this).data("qid");
        var itemid = $(this).data("id");
        var change = "#".concat(qid);
        var quantity = parseInt($(change).val());
        $(change).val(quantity + 1);
        quantity = parseInt($(change).val());
        var data = JSON.parse(localStorage.getItem("cartitems"));
        data[itemid]["totalprice"] = data[itemid]["price"] * quantity;
        data[itemid]["quantity"] = quantity;
        localStorage.setItem("cartitems", JSON.stringify(data));
        fatchitem();
        // Also sync menu if visible
        if (typeof syncMenuQuantities === "function") syncMenuQuantities();
    });

    // Minus button handler
    $(document).on("click", ".minus-btn", function (e) {
        var qid = $(this).data("qid");
        var itemid = $(this).data("id");
        var change = "#".concat(qid);
        var quantity = parseInt($(change).val());
        if (quantity > 1) {
            $(change).val(quantity - 1);
            quantity = parseInt($(change).val());
            var data = JSON.parse(localStorage.getItem("cartitems"));
            data[itemid]["totalprice"] = data[itemid]["price"] * quantity;
            data[itemid]["quantity"] = quantity;
            localStorage.setItem("cartitems", JSON.stringify(data));
            fatchitem();
            // Also sync menu if visible
            if (typeof syncMenuQuantities === "function") syncMenuQuantities();
        }
    });

    // Delete button handler
    $(document).on("click", ".dlt-btn", function (e) {
        var itemid = $(this).data("id");
        var data = JSON.parse(localStorage.getItem("cartitems"));
        delete data[itemid];
        localStorage.setItem("cartitems", JSON.stringify(data));
        fatchitem();
        // Also sync menu if visible
        if (typeof syncMenuQuantities === "function") syncMenuQuantities();
    });

    // Initial sync
    syncMenuQuantities();
});

// Add to cart function
function addToCart(itemId, itemName, itemNameHindi, itemNameGuj, price, image, veg) {
    var cartitems = localStorage.getItem("cartitems");
    var data = {};

    if (cartitems) {
        data = JSON.parse(cartitems);
    }

    if (data[itemId]) {
        // Item already in cart, increase quantity and update details
        data[itemId]["quantity"] += 1;
        data[itemId]["totalprice"] = data[itemId]["price"] * data[itemId]["quantity"];
        // Update details in case they changed
        data[itemId]["image"] = image;
        data[itemId]["name_eng"] = itemName;
        data[itemId]["name_hindi"] = itemNameHindi;
        data[itemId]["name_guj"] = itemNameGuj;
        data[itemId]["price"] = price;
        data[itemId]["veg"] = veg;
    } else {
        // New item
        data[itemId] = {
            id: itemId,
            name_eng: itemName,
            name_hindi: itemNameHindi,
            name_guj: itemNameGuj,
            price: price,
            totalprice: price,
            quantity: 1,
            image: image,
            veg: veg
        };
    }

    localStorage.setItem("cartitems", JSON.stringify(data));
    countcartitem();
    syncMenuQuantities();
}

// Place order button handler
$("#placeorderbtn").click(function () {
    var cartitems = JSON.parse(localStorage.getItem("cartitems"));
    if (cartitems && Object.keys(cartitems).length > 0) {
        // Pre-fill existing data
        $("#fullname").val(localStorage.getItem("fullname") || "");
        $("#mobileno").val(localStorage.getItem("number") || "");
        $("#restrootp").val(localStorage.getItem("restrootp") || "");

        var tableno = localStorage.getItem("tableno");
        if (tableno && tableno !== 'null') {
            $("#tableno").val(tableno);
            // If we have an ID but no name, grab it from the select now
            if (!localStorage.getItem("tablename") || localStorage.getItem("tablename") === 'null') {
                var nameFromSelect = $("#tableno option:selected").text().trim();
                if (nameFromSelect && nameFromSelect !== 'Choose your table') {
                    localStorage.setItem("tablename", nameFromSelect);
                }
            }
        }

        // Always show the modal for confirmation
        $("#notvalid").trigger("click");
    } else {
        alert("No Item In Cart");
    }
});

// Place order for non-validated users
$("#placeorder").click(function () {
    var mobile = $("#mobileno").val();
    var restrootp = $("#restrootp").val();
    var tableno = $("#tableno").val();
    var fullname = $("#fullname").val();
    var tablename = $("#tableno option:selected").text().replace('Choose your table', '').trim() || "Table " + tableno;
    var uservalid = getCookie("uservalid");

    // Reset error messages
    $("#mobile_e").html("");
    $("#fullname_e").html("");
    $("#restrootp_e").html("");
    $("#table_e").html("");
    $("#error").html("");

    // Validation
    if (fullname.trim() == "") {
        $("#fullname_e").html("Please Enter Your Name");
        return;
    }

    if (mobile.length > 0 && mobile.length < 10) {
        $("#mobile_e").html("Please Enter Valid 10 Digit Number (or leave empty)");
        return;
    }

    if (tableno == 0 || tableno == 'null' || !tableno) {
        $("#table_e").html("Please Select Table Number");
        return;
    }

    // If User is ALREADY Valid, Skip OTP Check
    if (uservalid == "true") {
        localStorage.setItem("number", mobile);
        localStorage.setItem("tableno", tableno);
        localStorage.setItem("tablename", tablename);
        localStorage.setItem("fullname", fullname);
        $("#comfirmorder .close").click();
        confirmorder();
        return;
    }

    // Normal Validation (Require OTP)
    if (restrootp != "") {
        // Determine AJAX path prefix
        var ajaxPrefix = '../assets/code/';
        if (window.location.pathname.toLowerCase().indexOf('addtocart.php') !== -1) {
            ajaxPrefix = '';
        }

        $.ajax({
            type: "POST",
            data: { mobile, restrootp, tableno },
            url: ajaxPrefix + "verifyrescode.php",
            success: function (response) {
                if ("Success" == jQuery.trim(response)) {
                    setCookie("uservalid", "true", 2);
                    localStorage.setItem("number", mobile);
                    localStorage.setItem("tableno", tableno);
                    localStorage.setItem("tablename", tablename);
                    localStorage.setItem("fullname", fullname);
                    $("#comfirmorder .close").click();
                    confirmorder();
                } else {
                    $("#error").html(response);
                }
            },
        });
    } else {
        $("#restrootp_e").html("Call Waiter For This code");
    }
});

// Confirm order function
function confirmorder() {
    var cartitems = JSON.parse(localStorage.getItem("cartitems"));
    var number = localStorage.getItem("number");
    var fullname = localStorage.getItem("fullname");
    var tableno = localStorage.getItem("tableno");
    var tablename = localStorage.getItem("tablename");
    var mess = $("#mess").val();
    var date = new Date();
    var components = [
        date.getYear(),
        date.getMonth(),
        date.getDate(),
        date.getHours(),
        date.getMinutes(),
        date.getSeconds(),
        date.getMilliseconds(),
    ];
    var id = components.join("");
    var final = [
        {
            orderid: id,
            tableid: tableno,
            tablename: tablename,
            fullname: fullname,
            number: number,
            mess: mess,
            item: cartitems,
        },
    ];

    // Determine AJAX path prefix
    var ajaxPrefix = '../assets/code/';
    if (window.location.pathname.toLowerCase().indexOf('addtocart.php') !== -1) {
        ajaxPrefix = '';
    }

    $.ajax({
        type: "POST",
        data: { final },
        url: ajaxPrefix + "placeorder.php",
        success: function (response) {
            if ("success" == jQuery.trim(response)) {
                alert("Your Order Is Confirmed");
                $("#mess").val("");
                removecartitem();
                window.location.reload();
            }
        },
    });
}

function removecartitem() {
    localStorage.removeItem("cartitems");
    fatchitem();
}

$("#language").change(function () {
    var language = $("#language").val();
    localStorage.setItem("language", language);
    fatchitem();
});

// Function to sync menu UI with cart state
function syncMenuQuantities() {
    var cartData = localStorage.getItem("cartitems");
    if (cartData) {
        var data = JSON.parse(cartData);

        // Reset all items to default state first
        $(".add-to-cart-btn").show();
        $(".quantity-controls").hide();

        // Update items that are in cart
        for (var id in data) {
            if ($("#add-btn-" + id).length) {
                $("#add-btn-" + id).hide();
                $("#qty-controls-" + id).css("display", "flex");
                $("#qty-" + id).text(data[id]["quantity"]);
            }
        }
    } else {
        $(".add-to-cart-btn").show();
        $(".quantity-controls").hide();
    }
    // Also perform validation on cart images
    countcartitem();
}

// Function to update item quantity from menu
function updateItemQty(itemId, change) {
    var cartData = localStorage.getItem("cartitems");
    var data = {};
    if (cartData) {
        data = JSON.parse(cartData);
    }

    if (data[itemId]) {
        data[itemId]["quantity"] += change;

        if (data[itemId]["quantity"] <= 0) {
            delete data[itemId];
        } else {
            data[itemId]["totalprice"] = data[itemId]["price"] * data[itemId]["quantity"];
        }

        localStorage.setItem("cartitems", JSON.stringify(data));
        syncMenuQuantities();
        if (typeof totalprice === 'function') totalprice();
    }
}
