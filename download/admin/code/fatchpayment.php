<?php
if (isset($_SERVER['HTTP_REFERER'])) {
      require '../../connect.php';
      
      
      $query = '';
      if(isset($_POST['search'])){
            $search = $_POST['search'];
            if($search != ''){
                  $query = "select * from restro where 
                  restroname LIKE '%" . $search . "%' OR 
                  mobileno LIKE '%" . $search . "%' OR
                  address LIKE '%" . $search . "%' ORDER BY expdate";
            }else{
                  $query = 'select * from restro ORDER BY expdate';
            }
      }else{
            $query = 'select * from restro ORDER BY expdate';
      }
      
      $result = mysqli_query($con,$query);
      $html ='';
      while($value = mysqli_fetch_array($result)){

            $status = '';
            if($value['status'] == 1){
                  $status ='<td><button type="button" data-id='.$value['id'].' data-status="active" class="btn btn-success btnstatus"><span class="d-none d-md-block"> isActive  </span><i class="fa fa-eye d-md-none"></i></button></td>';
                  
            }else{
                  $status ='<td><button type="button" data-id='.$value['id'].' data-status="deactive" class="btn btn-danger btnstatus"><span class="d-none d-md-block">Deactive</span><i class="fa fa-eye-slash d-md-none"></i></button></td>';
            }
            $html .= '
            <div style="display:none">
                  <span id="s_restroname'.$value['id'].'">'.$value['restroname'].'</span>
                  <span id="s_address'.$value['id'].'">'.$value['address'].'</span>
                  <span id="s_mobileno'.$value['id'].'">'.$value['mobileno'].'</span>
                  <span id="s_password'.$value['id'].'">'.$value['password'].'</span>
                  <span id="s_themecode'.$value['id'].'">'.$value['themecode'].'</span>
                  <span id="s_id'.$value['id'].'">'.$value['id'].'</span>
            </div>
            ';
            
            $sql = "select title from theme where id = ".$value['themecode']." limit 1";
            $query = mysqli_query($con,$sql);

            $row1 = mysqli_fetch_array($query);
            $x = $row1[0];
            // <td>'.$link.'</td>
            $link = 'http://surat.best/minires/suratbest/template/'.$x.'/index.php?restroid='.$value['id'].'';
            
         
            $html .= '<tr>
                  <td>'.$value['id'].'</td>
                  <td>'.$value['restroname'].'</td>
                  <td>'.$value['expdate'].'</td>
                  <td>'.$value['price'].'</td>
                  <td>'.$value['mobileno'].'</td>
                  <td><button type="button" data-id='.$value['id'].' class="btn btn-success renewbtn " data-toggle="modal" data-target="#renewmodel"><span class="d-none d-md-block">Renew</span><i class="fa fa-recycle d-md-none"></i></button></td>
                  <td><button type="button" data-id='.$value['id'].' data-status="deactive" class="btn btn-info btnhistory" data-toggle="modal" v data-target=".historymd"><span class="d-none d-md-block">History</span><i class="fa fa-history d-md-none"></i></button></td>
                  </tr>';
      }
      echo $html;
} else {
      header('location:../index.php');
      exit;
}
      ?>
