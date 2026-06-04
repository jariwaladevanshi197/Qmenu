<?php
$type = $_POST['type'];
$cookiename = $_POST['cookiename'];

if ($type == 'set') {
    $value = $_POST['cookievalue'];
    $hours = $_POST['hours'];
    setcookie($cookiename, $value, time() + (3600 * $hours));
    $_COOKIE[$cookiename] = $value;
    echo $value;
} elseif ($type == 'get') {
    if (isset($_COOKIE[$cookiename])) {
        echo $_COOKIE[$cookiename];
    } else {
        echo '';
    }
}
