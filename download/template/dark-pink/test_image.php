<?php
$imagePath = '../../restro/admin/images/item_1770902861321.png';
$absPath = '/xampp/qmenu/restro/admin/images/item_1770902861321.png';
?>
<!DOCTYPE html>
<html>
<head>
    <title>Image Test</title>
</head>
<body style="background: #333; color: white;">
    <h1>Image Path Test</h1>
    
    <h2>1. Relative Path (../../restro/...)</h2>
    <p>Path: <?php echo $imagePath; ?></p>
    <img src="<?php echo $imagePath; ?>" alt="Relative Test" style="border: 2px solid red; width: 200px;">
    
    <h2>2. Absolute Path (/xampp/qmenu/...)</h2>
    <p>Path: <?php echo $absPath; ?></p>
    <img src="<?php echo $absPath; ?>" alt="Absolute Test" style="border: 2px solid green; width: 200px;">
    
    <h2>3. Hardcoded Check</h2>
    <img src="../../restro/admin/images/item_1770902861321.png" alt="Hardcoded Relative" style="border: 2px solid blue; width: 200px;">
</body>
</html>
