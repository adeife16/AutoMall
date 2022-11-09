<?php
  require_once 'functions.php';

  $data = array();

  // get all products
    if(isset($_GET['getAdmins']) && $_GET['getAdmins'] == 'all')
    {
      $stmt = "SELECT * from am_admin";
      $products = mysqli_prepare($con, $stmt);
      mysqli_execute($products);
      $result = mysqli_stmt_get_result($products);
        if($result)
        {
          while($row = mysqli_fetch_assoc($result))
          {
            unset($row['password']);
            array_push($data, $row);
          }
          $json = array("status" => "success", "data" => $data);
        }
        else
        {
          $json = array('status' => 'error');
        }
        print json_encode($json);
      }
