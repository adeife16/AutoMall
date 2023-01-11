<?php
  require_once 'functions.php';
  $session_id = $_SESSION['id'];

  $data = array();
// get all products
  if(isset($_GET['getproducts']) && $_GET['getproducts'] == 'all')
  {
    // print "here";
    $stmt = "SELECT c.cat_name, s.sub_cat_name, m.make_name, mo.model_name, y.year, t.trim_level, p.*, i.picture FROM am_category c, am_sub_category s, am_makes m, am_models mo, am_year y, am_trim t, am_product p, am_product_pictures i  WHERE p.product_category = c.id AND p.product_sub_category = s.id AND p.product_make = m.make_id AND p.product_model = mo.model_id AND p.product_year = y.year_id AND p.product_trim = t.trim_id AND p.product_id = i.product_id AND p.user_id = ?";
    $products = mysqli_prepare($con, $stmt);
    mysqli_stmt_bind_param($products, 's', $session_id);
    mysqli_stmt_execute($products);
    $result = mysqli_stmt_get_result($products);
      if($result)
      {
        while($row = mysqli_fetch_assoc($result))
        {
          unset($row['product_owner']);
          array_push($data, $row);
        }

        //Filter
        $new_data = array();
        $init = "";
        for($i=0; $i<count($data); $i++)
        {
            $current = $data[$i]['product_id'];
            if($init != $current)
            {
              $init = $current;
              array_push($new_data, $data[$i]);
            }
        }
        $json = array("status" => "success", "data" => $new_data);
      }
      else
      {
        // $json = array('status' => 'error');
        $json = array('status' => mysqli_error($con));
      }
      print json_encode($json);
    }
// get details for a product
  elseif($_GET['getproduct'] && $_GET['getproduct'] != "")
  {
    $product_id = $_GET['getproduct'];
    $stmt = "SELECT DISTINCT c.cat_name, s.sub_cat_name, m.make_name, mo.model_name, y.year, t.trim_level, p.* FROM am_category c, am_sub_category s, am_makes m, am_models mo, am_year y, am_trim t, am_product p  WHERE p.product_category = c.id AND p.product_sub_category = s.id AND p.product_make = m.make_id AND p.product_model = mo.model_id AND p.product_year = y.year_id AND p.product_trim = t.trim_id AND p.user_id = ? AND p.product_id = ?";

    $product = mysqli_prepare($con, $stmt);
    mysqli_stmt_bind_param($product, 'ss', $session_id, $product_id);
    mysqli_execute($product);
    $result = mysqli_stmt_get_result($product);
      if($result)
      {
        while($row = mysqli_fetch_assoc($result))
        {
          array_push($data, $row);
        }

        //Filter
        $new_data = array();
        $init = "";
        for($i=0; $i<count($data); $i++)
        {
            $current = $data[$i]['product_id'];
            if($init != $current)
            {
              $init = $current;
              array_push($new_data, $data[$i]);
            }
        }
        $json = array("status" => "success", "data" => $new_data);
      }
      else
      {
        // $json = array('status' => 'error');
        $json = array('status' => mysqli_error($con));
      }
      print json_encode($json);


  }

  // function showProduct(data){
  //   if(data.)
  // }