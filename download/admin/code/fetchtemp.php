<?php
if (isset($_SERVER['HTTP_REFERER'])) {
      require '../../connect.php';
      
      
      $query = '';
      if(isset($_POST['search'])){
            $search = $_POST['search'];
            if($search != ''){
                  $query = "select * from theme where 
                  title LIKE '%" . $search . "%' OR 
                  id LIKE '%" . $search . "%' ";
            }else{
                  $query = 'select * from theme';
            }
      }else{
            $query = 'select * from theme';
      }
      
      $result = mysqli_query($con,$query);
      $html ='';
      while($value = mysqli_fetch_array($result)){
            
            // $status = '';
            // if($value['status'] == 1){
                  //       $status ='<td><button type="button" data-id='.$value['id'].' data-status="active" class="btn btn-success btnstatus"><span class="d-none d-md-block"> isActive  </span><i class="fa fa-eye d-md-none"></i></button></td>';
                  
            // }else{
                  //       $status ='<td><button type="button" data-id='.$value['id'].' data-status="deactive" class="btn btn-danger btnstatus"><span class="d-none d-md-block">Deactive</span><i class="fa fa-eye-slash d-md-none"></i></button></td>';
            // }
            $html .= '
            <div style="display:none">
                  <span id="s_id'.$value['id'].'">'.$value['id'].'</span>
                  <span id="s_image'.$value['id'].'">'.$value['image'].'</span>
                  <span id="s_title'.$value['id'].'">'.$value['title'].'</span>
                  <span id="s_url'.$value['id'].'">'.$value['url'].'</span>
                 
            </div>
            ';
            
            $html .= '<div class="col-12 col-sm-6 col-md-4">
            <div class="card">
                <a href="/'.$value['url'].'"><img class="card-img-top card-img-size" src="'.$value['image'].'" alt="Card image cap"></a>
                <div class="card-body">
                <h5 class="card-title temp-title">'.$value['title'].'</h5>
                    <button type="button" data-id='.$value['id'].' class="btn btn-primary mng-btn btnedt" data-toggle="modal" data-target="#edittemp"><span class="">Edit</span></button>
                    <button type="button" data-id='.$value['id'].' style="float: right;" class="btn btn-warning mng-btn btndlt"><span class="">Delete</span></button>
                </div>
                </div>
        </div>';

      }

      echo $html;
} else {
      header('location:../index.php');
      exit;
}
?>
