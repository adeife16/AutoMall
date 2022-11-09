<?php
  require_once 'functions.php';

  $data = array();

// get all categories
  if(isset($_GET['getAll']))
  {
    $stmt = "SELECT * FROM am_category";
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

// create a category

  elseif (isset($_POST['cat-name']) && $_POST['cat-name'] != "")
  {
    $cat_name = ucwords($_POST['cat-name']);

    $stmt = "SELECT * FROM am_category WHERE cat_name = ?";
    $check = mysqli_prepare($con, $stmt);
    mysqli_stmt_bind_param($check, 's', $cat_name);
    mysqli_execute($check);
    $result = mysqli_stmt_get_result($check);
    if(mysqli_num_rows($result) == 1){
      $json = array("status" => "exist");
    }
    else
    {
      $stmt = "INSERT INTO am_category(cat_name, date_created, date_updated) VALUES(?, NOW(), NOW())";
      $new_cat = mysqli_prepare($con, $stmt);
      mysqli_stmt_bind_param($new_cat, 's', $cat_name);
      if(mysqli_execute($new_cat))
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

  // delete Category
  elseif(isset($_POST['deleteCat']) && $_POST['deleteCat'])
  {
    $id = $_POST['deleteCat'];

    $stmt = "DELETE FROM am_category WHERE `id` = ?";
    $delete_cat = mysqli_prepare($con, $stmt);
    mysqli_stmt_bind_param($delete_cat, 'i', $id);

    if(mysqli_execute($delete_cat))
    {
      $json = array("status" => "success");
    }
    else
    {
      $json = array("status" => mysqli_error($con));
    }
    print json_encode($json);
  }

  elseif(isset($_POST['switchCat']) && $_POST['switchCat'] != "")
  {
    $id = $_POST['switchCat'];
    $power = $_POST['power'];

    $stmt = "UPDATE am_category SET status = ? WHERE id = ?";
    $switch_cat = mysqli_prepare($con, $stmt);
    mysqli_stmt_bind_param($switch_cat, 'si', $power, $id);
    if(mysqli_execute($switch_cat))
    {
      $json = array("status" => "success");
    }
    else
    {
      $json = array("status" => "error");
    }
    print json_encode($json);
  }

  // edit Category
  else if(isset($_GET['editCat']) && $_GET['editCat'] != "")
  {
    $id = $_GET['editCat'];

    $stmt = "SELECT * FROM am_category WHERE id=?";
    $get_cat = mysqli_prepare($con, $stmt);
    mysqli_stmt_bind_param($get_cat, 'i', $id);
    mysqli_execute($get_cat);
    $result = mysqli_stmt_get_result($get_cat);
    if($result)
    {
      $row = mysqli_fetch_assoc($result);
      array_push($data, $row);

      $json = array('status' => 'success', 'data' => $data);
    }
    else
    {
      $json = array("status" => "error");
    }
    print json_encode($json);
  }
  // update category
  elseif(isset($_POST['edit-cat-name']) && $_POST['edit-cat-name'] != "")
  {
    $id = $_POST['cat-id'];
    $name = ucwords($_POST['edit-cat-name']);

    $stmt = "UPDATE am_category SET cat_name = ? WHERE id = ?";
    $update_cat = mysqli_prepare($con, $stmt);
    mysqli_stmt_bind_param($update_cat, 'si', $name, $id);
    if(mysqli_execute($update_cat))
    {
      $json = array("status" => "success");
    }
    else
    {
      $json = array("status" => "error");
    }
    print json_encode($json);
  }
  //
  // while($row = mysqli_fetch_assoc($result))
  // {
  //   $id = $row['id'];
  //   $stmt2 = "SELECT * FROM am_sub_category WHERE cat_id = ?"
  //   $get_sub_cat = mysqli_prepare($con, $stmt);
  //   mysqli_stmt_bind_param($get_sub_cat, 'i', $id);
  //   mysqli_execute($get_cats);
  //   $result2
  // }
