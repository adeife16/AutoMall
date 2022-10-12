<?php
  require_once 'functions.php';

  $data = array();
// get all products
  if(isset($_POST['getProducts']) && $_POST['getProducts'] == 'all')
  {
    $stmt = "SELECT *p., c.cat_name, i.* FROM am_product p, am_category c, am_product_pictures i WHERE p.product_category = c.id AND p.product_id = i.product_id";
    $products = mysqli_prepare($con, $stmt);
    mysqli_execute($products);
    $result = mysqli_stmt_get_result($products){
      if($result)
      {
        while($row = mysqli_fetch_assoc($result))
        {
          unset($row['product_owner']);
          array_push($data, $row);
        }
        $json = array("status" => "success", "data" => $data);
      }
      else
      {
        $json = array('status' => 'error');
      }
    }
  }
