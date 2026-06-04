<?php
if (isset($_SERVER['HTTP_REFERER'])) {

      require '../../connect.php';
      session_start();

      $restroid = $_SESSION['usersession'];
      $language = $_POST['language'];
      $query = "select * from category where restroid = '$restroid'";
      $result = mysqli_query($con, $query);
      $categoryid = array();
      $categoryname = array();
      $catinhindi = array();
      $catinguj = array();
      $catineng = array();
      while ($value = mysqli_fetch_array($result)) {
            array_push($categoryid, $value['id']);
            array_push($categoryname, $value[$language]);
            array_push($catineng, $value['name_eng']);
            array_push($catinguj, $value['name_guj']);
            array_push($catinhindi, $value['name_hindi']);
      }
      // print_r($allcategory);

      $j = 0;
      $html = '';
      foreach ($categoryid as $catid) {
            if ($j == 0) {
                  $show = 'show';
            } else {
                  $show = '';
            }

            $query = "select * from menuitems where categoryid = '$catid'";
            $result = mysqli_query($con, $query);
            $i = 1;
            $item = "";
            while ($value = mysqli_fetch_array($result)) {
                  $itemname = $value[$language];
                  $item .= '
            <div style="display:none">
            <span id="s_item_hindi' . $value['id'] . '">' . $value['name_hindi'] . '</span>
            <span id="s_item_eng' . $value['id'] . '">' . $value['name_eng'] . '</span>
            <span id="s_item_guj' . $value['id'] . '">' . $value['name_guj'] . '</span>
            <span id="s_itemprice' . $value['id'] . '">' . $value['price'] . '</span>
            <span id="s_itemid' . $value['id'] . '">' . $value['id'] . '</span>
            <span id="s_itemcategory' . $value['id'] . '">' . $value['categoryid'] . '</span>
            </div>
            ';
                  $item .= '<tr>
                        <td class="text-muted" style="width: 50px; vertical-align: middle;">' . $i . '</td>
                        <td style="vertical-align: middle;">
                              <div class="item-name" style="font-size: 15px; font-weight: 600;">' . $itemname . '</div>
                        </td>
                        <td class="text-right" style="vertical-align: middle;">
                              <span style="font-weight: 700; color: #333;">&#8377;' . $value['price'] . '</span>
                        </td>
                        <td class="text-right" style="width: 120px; vertical-align: middle;">
                              <button type="button" data-id="' . $value['id'] . '" class="btn btn-sm btn-primary edtbtn shadow-sm mr-2" data-toggle="modal" data-target="#editMenu">
                                    <i class="fa fa-pencil"></i>
                              </button>
                              <button type="button" data-id="' . $value['id'] . '" class="btn btn-sm btn-warning dltbtn shadow-sm">
                                    <i class="fa fa-trash"></i>
                              </button>
                        </td>
                  </tr>';
                  $i++;
            }

            $html .= '
            <div style="display:none">
            <span id="s_cat_hindi' . $catid . '">' . $catinhindi[$j] . '</span>
            <span id="s_cat_eng' . $catid . '">' . $catineng[$j] . '</span>
            <span id="s_cat_guj' . $catid . '">' . $catinguj[$j] . '</span>
            <span id="s_catid' . $catid . '">' . $catid . '</span>
            </div>
      ';



            $html .= '<div class="card mb-3 shadow-sm">
                        <div class="card-header d-flex justify-content-between align-items-center" style="background: #fff; border-bottom: 1px solid #eee;">
                              <div class="collapsible-header-btn" data-toggle="collapse" data-target="#peter' . $j . '" style="cursor:pointer; flex-grow: 1;">
                                    <h5 class="mb-0">
                                          <i class="fa fa-cutlery mr-2 text-warning"></i> 
                                          <span class="category-title" style="font-weight: 700;">' . $categoryname[$j] . '</span>
                                          <i class="fa fa-caret-down ml-1 text-muted"></i> 
                                    </h5>
                              </div>
                              <div class="action-icons d-flex">
                                    <i class="fa fa-pencil catbtnedt text-primary p-2 mr-1" type="button" data-id="' . $catid . '" data-toggle="modal" data-target="#editCategory" style="cursor:pointer;"></i>
                                    <i class="fa fa-trash catbtndlt text-danger p-2" type="button" data-id="' . $catid . '" style="cursor:pointer;"></i>
                              </div>
                        </div>
                        <div class="collapse ' . $show . '" id="peter' . $j . '" data-parent="#accordion">
                              <div class="card-body p-0">
                                    <table class="table mb-0">
                                          <tbody>
                                                ' . $item . '
                                          </tbody>
                                    </table>
                              </div>
                        </div>
                  </div>';
            $j++;
      }

      echo $html;
      // <div class="collapse ' . $show . '" id="peter' . $j . '" data-parent="#accordion">
      // ' . $categoryname[$j] . '
      // ' . $j . '
} else {
      header('location:../index.php');
      exit;
}
