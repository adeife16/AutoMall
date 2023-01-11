<?php
require_once 'functions.php';
$session_id = $_SESSION['id'];
$data = array();


// get all categories
if(isset($_GET['get_category']))
{
  if($_GET['get_category'] == "all")
  {
    $stmt = "SELECT id, cat_name FROM am_category";
    $cat = mysqli_prepare($con, $stmt);
    if(mysqli_stmt_execute($cat))
    {
      $result = mysqli_stmt_get_result($cat);
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
}// get sub categories
if(isset($_GET['get_sub_category']))
{
  $cat_id = $_GET['get_sub_category'];

    $stmt = "SELECT id, sub_cat_name FROM am_sub_category WHERE cat_id = ?";
    $sub_cat = mysqli_prepare($con, $stmt);
    mysqli_stmt_bind_param($sub_cat, 'i', $cat_id);
    if(mysqli_stmt_execute($sub_cat))
    {
      $result = mysqli_stmt_get_result($sub_cat);
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
// get all makes
elseif(isset($_GET['get_make']) && $_GET['get_make'] != "")
{
  $make = $_GET['get_make'];

  if($make == "all")
  {
    $stmt = "SELECT make_id, make_name FROM am_makes";
    $all_makes = mysqli_prepare($con, $stmt);
    mysqli_execute($all_makes);
    $result = mysqli_stmt_get_result($all_makes);
    if($result)
    {
      while($row = mysqli_fetch_assoc($result))
      {
        array_push($data, $row);
      }
      $json = array('status' => "success", "data" => $data);
    }
    else
    {
      $json = array("status" => "error");
    }
    print json_encode($json);
  }
}

// get all models
elseif(isset($_GET['get_model']) && $_GET['get_model'] != "")
{
  $model = $_GET['get_model'];
    $stmt = "SELECT model_id, model_name FROM am_models WHERE make_id = ?";
    $models = mysqli_prepare($con, $stmt);
    mysqli_stmt_bind_param($models, 'i', $model);
    mysqli_execute($models);
    $result = mysqli_stmt_get_result($models);
    if($result)
    {
      while($row = mysqli_fetch_assoc($result))
      {
        array_push($data, $row);
      }
      $json = array('status' => "success", "data" => $data);
    }
    else
    {
      $json = array("status" => "error");
    }
    print json_encode($json);
}

// get all years
elseif(isset($_GET['get_year']) && $_GET['get_year'] != "")
{
  $model = $_GET['get_year'];
    $stmt = "SELECT year_id, year FROM am_year WHERE model_id = ?";
    $years = mysqli_prepare($con, $stmt);
    mysqli_stmt_bind_param($years, 'i', $model);
    mysqli_execute($years);
    $result = mysqli_stmt_get_result($years);
    if($result)
    {
      while($row = mysqli_fetch_assoc($result))
      {
        array_push($data, $row);
      }
      $json = array('status' => "success", "data" => $data);
    }
    else
    {
      $json = array("status" => "error");
    }
    print json_encode($json);
}

// get all trims
elseif(isset($_GET['get_trim']) && $_GET['get_trim'] != "")
{
    $year = $_GET['get_trim'];
    $stmt = "SELECT trim_id, trim_level FROM am_trim WHERE year_id = ?";
    $trims = mysqli_prepare($con, $stmt);
    mysqli_stmt_bind_param($trims, 'i', $year);
    mysqli_execute($trims);
    $result = mysqli_stmt_get_result($trims);
    if($result)
    {
      while($row = mysqli_fetch_assoc($result))
      {
        array_push($data, $row);
      }
      $json = array('status' => "success", "data" => $data);
    }
    else
    {
      $json = array("status" => "");
    }
    print json_encode($json);
}

// get all other details
elseif(isset($_GET['get_others']) && $_GET['get_others'] != "")
{
    $status = 1;
    $trim = $_GET['get_others'];
    $stmt = "SELECT t.type_id, t.type, f.fuel_id, f.fuel, d.drive_id, d.drive, s.seat_id, s.seat, c.cylinder_id, c.cylinder, h.hp_id, h.hp FROM am_type t, am_fuel f, am_drive d, am_seat s, am_cylinder c, am_hp h WHERE t.trim_id = ? AND f.trim_id = '$trim' AND d.trim_id = '$trim' AND s.trim_id = '$trim' AND c.trim_id = '$trim' AND h.trim_id = '$trim'";

    $type = mysqli_query($con, "SELECT type_id, type FROM am_type WHERE trim_id = '$trim'");
    $fuel = mysqli_query($con, "SELECT fuel_id, fuel FROM am_fuel WHERE trim_id = '$trim'");
    $drive = mysqli_query($con, "SELECT drive_id, drive FROM am_drive WHERE trim_id = '$trim'");
    $seat = mysqli_query($con, "SELECT seat_id, seat FROM am_seat WHERE trim_id = '$trim'");
    $cylinder = mysqli_query($con, "SELECT cylinder_id, cylinder FROM am_cylinder WHERE trim_id = '$trim'");
    $hp = mysqli_query($con, "SELECT hp_id, hp FROM am_hp WHERE trim_id = '$trim'");


    $others = array($type, $fuel, $drive, $seat, $cylinder, $hp);
    $label = array("type", "fuel", "drive", "seat", "cylinder");

    for($i = 0; $i < count($others); $i++)
    {
      if(mysqli_num_rows($others[$i]) > 0)
      {
        while($row = mysqli_fetch_assoc($others[$i]))
        {
          array_push($data, $row);
        }
      }
      else
      {
        array_push($data, array());
      }
    }
    $json = array('status' => "success", "data" => $data);
    print json_encode($json);
    //
    // mysqli_stmt_bind_param($others, 'i', $trim);
    //
    // mysqli_execute($others);
    // $result = mysqli_stmt_get_result($others);
    // if($result)
    // {
    //   while($row = mysqli_fetch_assoc($result))
    //   {
    //   }
    // }
    // else
    // {
    //   $json = array("status" => mysqli_error($con));
    // }
}

// save product form details
elseif(isset($_POST['makes']) && $_POST['makes'] != "")
{
  $product_id = $session_id. str_shuffle(substr(md5(time().mt_rand().time()), 0,20));
  // $cat = 1;
  $cat = $_POST['category'];
  $sub_cat = $_POST['sub_category'];
  $make = $_POST['makes'];
  $model = $_POST['models'];
  $year = $_POST['years'];
  $trim  = $_POST['trims'];
  $condition = $_POST['condition'];
  $register = $_POST['register'];
  $vin = $_POST['vin'];
  $type = $_POST['type'];
  $seat = $_POST['seat'];
  $trans = $_POST['trans'];
  $drive = $_POST['drive'];
  $engine = $_POST['engine'];
  $hp = $_POST['hp'];
  $cylinder = $_POST['cylinder'];
  $fuel = $_POST['fuel'];
  $mile = $_POST['mileage'];
  $price = $_POST['price'];
  $location = $_POST['location'];
  $desc = $_POST['desc'];

  $stmt = "INSERT INTO am_product(product_id, product_category, product_sub_category, product_make, product_model, product_year, product_trim, product_condition, product_register, product_vin, product_type, product_seat, product_trans, product_drive, product_engine, product_hp, product_cylinder, product_fuel, product_mileage, product_price, product_location, product_desc, user_id, date_created, date_updated) VALUES(?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,NOW(), NOW())";

  $save = mysqli_prepare($con, $stmt);
  mysqli_stmt_bind_param($save, 'siiiiiissisisssiisiiiss', $product_id, $cat, $sub_cat, $make, $model, $year, $trim, $condition, $register, $vin, $type, $seat, $trans, $drive, $engine, $hp, $cylinder, $fuel, $mile, $price, $location, $desc, $session_id);

  if(mysqli_stmt_execute($save))
  {
    $json = array("status" => "success", "data" => $product_id);
  }
  else
  {
    $json = array("status" => mysqli_error($con));
  }
  mysqli_close($con);
  print json_encode($json);
}

// save product picture
elseif ($_POST['savepictures'] && $_POST['savepictures'] != "")
{

  $data = $_POST['savepictures'];
  $product_id = $_POST['id'];
  $error = 0;
  $i = 0;
  $folder = '../../img/product/' . $session_id;
  $width = 1024;
  $height = 1024;
  if (!file_exists($folder)) {
      mkdir($folder, 0777, true);
  }
  $folder = $folder . '/';
  while($i < count($data))
  {
    $pic = base64_decode($data[$i]['base64']);
    $type = $data[$i]['type'];
    $name = $data[$i]['name'];


    if(file_put_contents($folder . $name, $pic) != false)
    {
      $stmt = "INSERT INTO am_product_pictures(product_id, user_id, picture, date_created, date_updated) VALUES(?,?,?,NOW(), NOW())";
      $save = mysqli_prepare($con, $stmt);
      mysqli_stmt_bind_param($save, 'sss', $product_id, $session_id, $name);
      if(mysqli_stmt_execute($save))
      {
        $json = array("status" => "success");
      }
      else
      {
        $json = array("status" => "error");
      }
      if(!watermark($folder . $name, $type, $name))
      {
        $json = array("status" => "picture error");
        print "picture error";
        break;
      }
    }
    else
    {
      $json = array("status" => "error");
      break;
    }
    $i++;
  }
  print json_encode($json);
}

// get all colors
elseif(isset($_GET['colors']) && $_GET['colors'] == "all")
{
  $stmt = "SELECT * FROM am_color";
  $color = mysqli_prepare($con, $stmt);
  if(mysqli_stmt_execute($color))
  {
    $result = mysqli_stmt_get_result($color);
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