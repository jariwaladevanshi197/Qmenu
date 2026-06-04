<?php
if (function_exists('imagecreatefrompng')) {
    echo "GD is enabled";
} else {
    echo "GD is NOT enabled";
}
?>
