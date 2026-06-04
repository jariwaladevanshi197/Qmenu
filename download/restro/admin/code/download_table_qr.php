<?php
if (isset($_GET['qr']) && isset($_GET['name'])) {
    $qr_url = $_GET['qr'];
    $table_name = $_GET['name'];

    // Fetch the QR image
    $qr_data = file_get_contents($qr_url);
    if (!$qr_data) {
        die("Failed to fetch QR code.");
    }

    $qr_img = imagecreatefromstring($qr_data);
    $width = imagesx($qr_img);
    $height = imagesy($qr_img);

    // Create a new image with extra height for the text
    $text_height = 80;
    $new_img = imagecreatetruecolor($width, $height + $text_height);

    // Fill background with white
    $white = imagecolorallocate($new_img, 255, 255, 255);
    imagefill($new_img, 0, 0, $white);

    // Copy QR code to new image
    imagecopy($new_img, $qr_img, 0, 0, 0, 0, $width, $height);

    // Add table name text
    $black = imagecolorallocate($new_img, 0, 0, 0);
    $font_size = 5; // Using built-in font
    
    // Center the text
    $text = "Table: " . $table_name;
    $text_width = imagefontwidth($font_size) * strlen($text);
    $x = ($width - $text_width) / 2;
    $y = $height + ($text_height / 2) - (imagefontheight($font_size) / 2);

    imagestring($new_img, $font_size, $x, $y, $text, $black);

    // Set headers for download
    header('Content-Type: image/png');
    header('Content-Disposition: attachment; filename="Table-' . $table_name . '-QR.png"');

    // Output the image
    imagepng($new_img);

    // Cleanup
    imagedestroy($qr_img);
    imagedestroy($new_img);
} else {
    echo "Missing parameters.";
}
?>
