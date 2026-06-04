<?php
if (isset($_SERVER['HTTP_REFERER'])) {

    require '../../connect.php';
    session_start();
    $restroid = $_SESSION['restroid'];
    $language = $_POST['language'];
    $query = "select * from category where restroid = '$restroid' ";
    $result = mysqli_query($con, $query);

    if ($language == "name_eng") {
        $html = '<a data-id="0" class="activemenu z-depth-1" onclick="call(this,0)">All</a>';
        $html .= '<a data-id="0" class=" z-depth-1" onclick="call(this,1)">Veg </a>';
        $html .= '<a data-id="0" class=" z-depth-1" onclick="call(this,2)">Non Veg</a>';
    } elseif ($language == "name_hindi") {
        $html = '<a data-id="0" class="activemenu z-depth-1" onclick="call(this,0)">सब</a>';
        $html .= '<a data-id="0" class=" z-depth-1" onclick="call(this,1)">वेज </a>';
        $html .= '<a data-id="0" class=" z-depth-1" onclick="call(this,2)">नॉन-वेज</a>';
    } elseif ($language == "name_guj") {
        $html = '<a data-id="0" class="activemenu z-depth-1" onclick="call(this,0)">બધુજ</a>';
        $html .= '<a data-id="0" class=" z-depth-1" onclick="call(this,1)">વેજ </a>';
        $html .= '<a data-id="0" class=" z-depth-1" onclick="call(this,2)">નોન-વેજ </a>';
    }

    $i = 0;
    while ($value = mysqli_fetch_array($result)) {
        $i++;
        //   $html .= '<div style="display:none" >
        //     <span id="s_cat_hindi' . $value['id'] . '">' . $value['name_hindi'] . '</span>
        //     <span id="s_cat_eng' . $value['id'] . '">' . $value['name_eng'] . '</span>
        //     <span id="s_cat_guj' . $value['id'] . '">' . $value['name_guj'] . '</span>
        //     <span id="s_catid' . $value['id'] . '">' . $value['id'] . '</span>
        //       </div>
        //       ';
        $html .= '<a data-id=' . $value['id'] . ' class="z-depth-1" onclick="call(this,' . $value['id'] . ')">' . $value[$language] . '</a>';
    }



    echo $html;
} else {
    header('location:../index.php');
    exit;
}
