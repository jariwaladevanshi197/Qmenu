<?php
require '../../../connect.php';
session_start();
$restroid = isset($_SESSION['restroid']) ? $_SESSION['restroid'] : 0;
$slug = isset($_SESSION['slug']) ? $_SESSION['slug'] : (isset($_GET['restroid']) ? $_GET['restroid'] : '');
$name = isset($_SESSION['name']) ? $_SESSION['name'] : 'Restaurant';

if (!isset($_SESSION['restroid'])) {
  header("Location: ../pagenotfound.php");
}
?>
<!DOCTYPE html>
<html lang="en">

<head>
  <title>Cart | <?php echo $name; ?></title>
  <meta charset="UTF-8" />
  <meta name="viewport" content="width=device-width, initial-scale=1.0" />

  <!-- favicon -->
  <link rel="icon" type="image/png" href="/light.png" />
  <link rel="shortcut icon" href="/light.png" type="image/x-icon" />

  <!-- external links -->
  <link rel="stylesheet" href="https://fonts.googleapis.com/icon?family=Material+Icons" />
  <link rel="stylesheet" href="https://stackpath.bootstrapcdn.com/bootstrap/4.5.0/css/bootstrap.min.css" />
  <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/4.7.0/css/font-awesome.min.css" />
  
  <style>
    * {
      box-sizing: border-box;
      margin: 0;
      padding: 0;
    }
    
    body {
      font-family: 'Inter', -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, sans-serif;
      background: #f8f9fa;
      padding-top: 70px;
      padding-bottom: 30px;
      min-height: 100vh;
    }
    
    /* Premium Navbar */
    .navbar {
      background: white;
      position: fixed;
      top: 0;
      width: 100%;
      z-index: 1000;
      padding: 15px 0;
      box-shadow: 0 2px 8px rgba(0,0,0,0.06);
      border-bottom: 1px solid #e9ecef;
    }
    
    .navbar h3 {
      margin: 0;
      color: #1a1a1a;
      font-weight: 700;
      font-size: 1.2rem;
      letter-spacing: -0.5px;
    }
    
    .back-btn {
      display: inline-flex;
      align-items: center;
      justify-content: center;
      width: 40px;
      height: 40px;
      background: #f8f9fa;
      border-radius: 10px;
      color: #333;
      transition: all 0.2s;
      text-decoration: none;
    }
    
    .back-btn:hover {
      background: #00d2ff;
      color: white;
      transform: translateX(-2px);
      text-decoration: none;
    }
    
    /* Section Headers */
    .section-header {
      margin-bottom: 20px;
    }
    
    .section-header h5 {
      font-size: 1.1rem;
      font-weight: 700;
      color: #1a1a1a;
      margin: 0;
    }
    
    .section-header h5 i {
      margin-right: 8px;
      color: #00d2ff;
    }
    
    /* Cart Product Cards */
    .cart-product {
      background: white;
      margin-bottom: 16px;
      border-radius: 16px;
      box-shadow: 0 2px 8px rgba(0,0,0,0.04);
      border: 1px solid #f0f0f0;
      transition: all 0.3s cubic-bezier(0.4, 0, 0.2, 1);
      overflow: hidden;
    }
    
    .cart-product:hover {
      box-shadow: 0 8px 24px rgba(0,0,0,0.08);
      transform: translateY(-2px);
      border-color: #00d2ff;
    }
    
    .cart-product img {
      border-radius: 12px 0 0 12px;
    }
    
    /* Summary Cards */
    .sticky-sidebar {
      position: sticky;
      top: 90px;
    }
    
    .summary-card {
      background: white;
      padding: 24px;
      border-radius: 16px;
      box-shadow: 0 2px 8px rgba(0,0,0,0.04);
      border: 1px solid #f0f0f0;
      margin-bottom: 16px;
    }
    
    .card-title {
      font-size: 1rem;
      font-weight: 700;
      color: #1a1a1a;
      margin-bottom: 16px;
      display: flex;
      align-items: center;
    }
    
    .card-title i {
      margin-right: 8px;
      color: #00d2ff;
      font-size: 1.1rem;
    }
    
    .summary-row {
      display: flex;
      justify-content: space-between;
      align-items: center;
      margin-bottom: 12px;
      color: #666;
      font-size: 0.95rem;
    }
    
    .summary-row.total-row {
      font-size: 1.2rem;
      font-weight: 700;
      color: #1a1a1a;
      margin-bottom: 0;
    }
    
    .summary-row .price {
      font-weight: 600;
      color: #1a1a1a;
    }
    
    .summary-row.total-row .price {
      color: #00d2ff;
      font-size: 1.4rem;
    }
    
    /* Form Controls */
    .form-control {
      border-radius: 12px;
      border: 1px solid #e0e0e0;
      padding: 12px 16px;
      font-size: 0.95rem;
      transition: all 0.2s;
      background: #fafafa;
    }
    
    .form-control:focus {
      border-color: #00d2ff;
      box-shadow: 0 0 0 3px rgba(251, 192, 45, 0.1);
      background: white;
      outline: none;
    }
    
    /* Buttons */
    .button-full {
      width: 100%;
      padding: 16px;
      background: linear-gradient(135deg, #00d2ff 0%, #f9a825 100%);
      border: none;
      border-radius: 12px;
      font-weight: 700;
      font-size: 1rem;
      cursor: pointer;
      margin-top: 20px;
      color: #1a1a1a;
      transition: all 0.3s;
      box-shadow: 0 4px 12px rgba(251, 192, 45, 0.25);
      letter-spacing: 0.3px;
    }
    
    .button-full:hover {
      background: linear-gradient(135deg, #f9a825 0%, #f57f17 100%);
      transform: translateY(-2px);
      box-shadow: 0 8px 20px rgba(251, 192, 45, 0.35);
    }
    
    .button-full:active {
      transform: translateY(0);
    }
    
    .button-full i {
      margin-right: 8px;
    }
    
    .btn-outline-danger {
      transition: all 0.2s;
      border-radius: 50%;
    }
    
    .btn-outline-danger:hover {
      transform: scale(1.1);
      background-color: #dc3545;
      border-color: #dc3545;
    }
    
    .btn-outline-secondary {
      border-color: #e0e0e0;
      color: #666;
      border-radius: 8px;
    }
    
    .btn-outline-secondary:hover {
      background-color: #00d2ff;
      border-color: #00d2ff;
      color: white;
    }
    
    .quantity-text {
      width: 50px;
      text-align: center;
      border: 1px solid #e0e0e0;
      padding: 6px;
      font-weight: 700;
      background: white;
      border-radius: 8px;
      font-size: 0.95rem;
    }
    
    /* Badge Styling */
    .badge {
      font-size: 0.7rem;
      padding: 4px 8px;
      border-radius: 6px;
      font-weight: 600;
    }
    
    /* Responsive */
    @media (max-width: 992px) {
      .sticky-sidebar {
        position: relative;
        top: 0;
        margin-top: 20px;
      }
    }
    
    @media (max-width: 768px) {
      .navbar h3 {
        font-size: 1rem;
      }
      
      body {
        padding-top: 65px;
      }
      
      .summary-card {
        padding: 20px;
      }
      
      .cart-product img {
        border-radius: 12px 12px 0 0;
      }
    }
  </style>
</head>

<body>
  <!-- Premium Navbar -->
  <div class="navbar">
    <div class="container">
      <div class="row align-items-center">
        <div class="col-2 col-md-1">
          <a href="#" onclick="window.history.back(); return false;" class="back-btn">
            <i class="fa fa-arrow-left"></i>
          </a>
        </div>
        <div class="col-8 col-md-10 text-center">
          <h3><?php echo $name; ?> - Cart</h3>
        </div>
        <div class="col-2 col-md-1">
          <!-- Spacer for symmetry -->
        </div>
      </div>
    </div>
  </div>

  <!-- Cart Content -->
  <div class="container" style="margin-top: 20px; margin-bottom: 80px;">
    <div class="row">
      <!-- Cart Items Section -->
      <div class="col-12 col-lg-7">
        <div class="section-header">
          <h5><i class="fa fa-shopping-bag"></i> Your Items</h5>
        </div>
        <div id="itemcontainer">
          <!-- Items will be loaded here by JavaScript -->
        </div>
      </div>
      
      <!-- Order Summary Section -->
      <div class="col-12 col-lg-5">
        <div class="sticky-sidebar">
          <!-- Extra Notes Card -->
          <div class="summary-card">
            <h5 class="card-title"><i class="fa fa-pencil"></i> Special Instructions</h5>
            <textarea class="form-control" id="mess" rows="4" placeholder="Any special requests? (e.g., no onions, extra spicy)"></textarea>
          </div>
          
          <!-- Bill Summary Card -->
          <div class="summary-card">
            <h5 class="card-title"><i class="fa fa-receipt"></i> Order Summary</h5>
            <div class="summary-row">
              <span>Subtotal</span>
              <span class="price">₹<span id="totalprice">0</span></span>
            </div>
            <div class="summary-row">
              <span>Taxes & Fees</span>
              <span class="price">₹0</span>
            </div>
            <hr style="margin: 15px 0; border-color: #e0e0e0;">
            <div class="summary-row total-row">
              <span>Total Amount</span>
              <span class="price">₹<span id="totalprice2">0</span></span>
            </div>
            <button class="button-full" id="placeorderbtn" type="button">
              <i class="fa fa-check-circle"></i> Place Order
            </button>
            <div style="display: none;">
              <button class="button-full" data-toggle="modal" data-target="#comfirmorder" id="notvalid" type="button">
                <i class="fa fa-check-circle"></i> Place Order
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>

  <!-- Order Confirmation Modal -->
  <div class="modal fade" id="comfirmorder" tabindex="-1" role="dialog">
    <div class="modal-dialog modal-dialog-centered" role="document">
      <div class="modal-content" style="border-radius: 12px; border: none;">
        <div class="modal-header" style="background: linear-gradient(135deg, #00d2ff 0%, #f9a825 100%); border-radius: 12px 12px 0 0;">
          <h5 class="modal-title" style="font-weight: 600;"><i class="fa fa-clipboard-check"></i> Confirm Your Order</h5>
          <button type="button" class="close" data-dismiss="modal">
            <span>&times;</span>
          </button>
        </div>
        <div class="modal-body" style="padding: 25px;">
          <form>
            <div class="form-group">
              <label style="font-weight: 600; color: #333;"><i class="fa fa-user"></i> Full Name <span class="text-danger">*</span></label>
              <input type="text" class="form-control" id="fullname" placeholder="Enter your name (Mandatory)">
              <div class="text-danger small mt-1" id="fullname_e"></div>
            </div>
            
            <div class="form-group">
              <label style="font-weight: 600; color: #333;"><i class="fa fa-phone"></i> Mobile Number <small class="text-muted">(Optional)</small></label>
              <input type="number" class="form-control" id="mobileno" placeholder="10-digit mobile number">
              <div class="text-danger small mt-1" id="mobile_e"></div>
            </div>
            
            <div class="form-group" style="display:none">
              <label style="font-weight: 600; color: #333;"><i class="fa fa-key"></i> Restaurant Code</label>
              <input type="text" class="form-control" id="restrootp" placeholder="Ask your waiter for code">
              <div class="text-danger small mt-1" id="restrootp_e"></div>
            </div>
            
            <div class="form-group" style="display:none">
              <label style="font-weight: 600; color: #333;"><i class="fa fa-table"></i> Select Table</label>
              <select class="form-control" id="tableno">
                <option value="0">Choose your table</option>
                <?php
                $query = "select * from tables where restroid ='$restroid'";
                $result = mysqli_query($con, $query);
                while ($value = mysqli_fetch_array($result)) {
                  echo "<option value='" . $value['id'] . "'>" . $value['name'] . "</option>";
                }
                ?>
              </select>
              <div class="text-danger small mt-1" id="table_e"></div>
            </div>
            
            <div id="error" class="text-danger small mb-2"></div>
            <button class="btn btn-warning btn-block btn-lg" type="button" id="placeorder" style="border-radius: 8px; font-weight: 600;">
              <i class="fa fa-check"></i> Confirm Order
            </button>
          </form>
        </div>
      </div>
    </div>
  </div>

  <!-- Scripts -->
  <script src="https://code.jquery.com/jquery-3.5.1.min.js"></script>
  <script src="https://cdn.jsdelivr.net/npm/popper.js@1.16.0/dist/umd/popper.min.js"></script>
  <script src="https://stackpath.bootstrapcdn.com/bootstrap/4.5.0/js/bootstrap.min.js"></script>
  <script src="../js/cart.js?v=<?php echo time(); ?>"></script>
  <script>
    // Cookie functions from main.js
    function setCookie(cookiename, cookievalue, hours) {
      var result = "";
      var type = "set";
      $.ajax({
        type: "POST",
        async: false,
        data: { cookiename, type, cookievalue, hours },
        url: "../../../restro/code/getsetcookies.php",
        success: function (response) {
          result = response;
        },
      });
      return result;
    }
    
    function getCookie(cookiename) {
      var result = "";
      var type = "get";
      $.ajax({
        type: "POST",
        async: false,
        data: { cookiename, type },
        url: "../../../restro/code/getsetcookies.php",
        success: function (response) {
          result = response;
        },
      });
      return result;
    }
  </script>
</body>
</html>
