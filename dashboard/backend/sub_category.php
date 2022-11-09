<?php
  require_once 'functions.php';

  $data = array();

  // get all sub categories
  if(isset($_GET['getAllSubCats']))
  {
    $stmt = "SELECT s.*, c.cat_name FROM am_sub_category s, am_category c WHERE s.cat_id = c.id";
    $get_sub_cat = mysqli_prepare($con, $stmt);
    mysqli_execute($get_sub_cat);
    $result = mysqli_stmt_get_result($get_sub_cat);
    if($result)
    {
      while($row = mysqli_fetch_assoc($result))
      {
        array_push($data, $row);
      }
      $json = array("status" => "success", "data" => $data);
    }
    else
    {
      $json = array("status" => mysqli_error($con));
    }
    print json_encode($json);
  }

// get_all categories
  else if(isset($_GET['getAll']))
  {
    $stmt = "SELECT id, cat_name FROM am_category WHERE status = 'active'";
    $get_cats = mysqli_prepare($con, $stmt);
    mysqli_execute($get_cats);
    $result = mysqli_stmt_get_result($get_cats);
    if($result)
    {
      while($row = mysqli_fetch_assoc($result))
      {
        array_push($data, $row);
      }
      $json = array("status" => "success", "data" => $data);
    }
    else
    {
      $json = array("status" => "error");
    }
    print json_encode($json);
  }

// create new sub Category
  if(isset($_POST['sub-cat-name']) && $_POST['sub-cat-name'] != "")
  {
    $sub_cat_name = ucwords($_POST['sub-cat-name']);
    $cat_id = $_POST['cat-name'];

    $stmt = "SELECT * FROM am_sub_category WHERE cat_id = ?, sub_cat_name = ?";
    $check = mysqli_prepare($con, $stmt);
    mysqli_stmt_bind_param($check, 's', $cat_name);
    mysqli_execute($check);
    $result = mysqli_stmt_get_result($check);
    if(mysqli_num_rows($result) == 1)
    {
      $json = array("status" => "exist");
    }
    else
    {
      $stmt = "INSERT INTO am_sub_category(cat_id, sub_cat_name, date_created, date_updated) VALUES(?,?, NOW(), NOW())";
      $new_sub_cat = mysqli_prepare($con, $stmt);
      mysqli_stmt_bind_param($new_sub_cat, 'is', $cat_id, $sub_cat_name);
      if(mysqli_execute($new_sub_cat))
      {
        $json = array("status" => "success");
      }
      else
      {
        $json = array("status" => mysqli_error($con));
      }
    }
    print json_encode($json);
  }
  elseif (isset($_GET['getSubCat']) && $_GET['getSubCat'] != "")
  {
    $id = $_GET['getSubCat'];
    $stmt = "SELECT s.*, c.cat_name FROM am_sub_category s, am_category c WHERE s.cat_id = c.id AND s.id = ?";
    $get_cat = mysqli_query($con, "SELECT * FROM am_category");
    $get_sub_cat = mysqli_prepare($con, $stmt);
    mysqli_stmt_bind_param($get_sub_cat,'i', $id);
    mysqli_execute($get_sub_cat);
    $result = mysqli_stmt_get_result($get_sub_cat);
    if($result)
    {
      $row = mysqli_fetch_assoc($result);
      array_push($data, $row);
      $data2 = array();
      while($row = mysqli_fetch_assoc($get_cat))
      {
        array_push($data2, $row);
      }
      $json = array("status" => "success", "data" => $data, "categories" => $data2);
    }
    else
    {
      $json = array("status" => mysqli_error($con));
    }
    print json_encode($json);
  }
