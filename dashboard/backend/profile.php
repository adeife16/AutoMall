<?php
  require 'functions.php';
  $json = array();
  $data = array();

  $session_id = $_SESSION['id'];

if(isset($_GET['gettrims']))
{
  $trim = $_GET['gettrims'];
  $stmt = "SELECT * FROM am_trim WHERE id = ?";
  $type = mysqli_prepare($con, $stmt);
  mysqli_stmt_bind_param($type, 'i', $trim);
  mysqli_execute($type);
  $result = mysqli_stmt_get_result($type);
  while($row = mysqli_fetch_assoc($result))
  {
    array_push($data, $row);
  }
  print json_encode($data);
}


if(isset($_POST['cylinder']))
{
  $cylinders = $_POST['cylinder'];
  $trim_id = $cylinders['trim'];
  $cylinder = $cylinders['cylinder'];
  // $type_name = $type['value'];
  // print count($models);
  for($i=0; $i<count($cylinder); $i++)
  {
    $current_cylinder = $cylinder[$i]['value'];
    $current_cylinder_id = strval($cylinder[$i]['id']);
    // $current_model_id = $current_model_id * 0.5;

    $stmt = "INSERT INTO am_cylinder(trim_id, cylinder_id, cylinder, date_created, date_updated) VALUES(?,?,?,NOW(),NOW())";
    $save = mysqli_prepare($con, $stmt);
    mysqli_stmt_bind_param($save, 'iis', $trim_id, $current_cylinder_id, $current_cylinder);

    // $save = mysqli_query("INSERT INTO am_models(make_id, model_id, model_name, category, date_created, date_updated) VALUES('$make', '$current_model_id', '$current_model', 1, NOW(), NOW())");

    if(mysqli_execute($save))
    {
      print $trim_id." ".$current_cylinder." cylinder is saved \n";
    }
    else
    {
      print $trim_id." ".$current_cylinder." cylinder is not saved \n";
      print mysqli_error($con);
      print "\n";
    }
  }
}

if(isset($_POST['type']))
{
  $types = $_POST['type'];
  $trim_id = $types['trim'];
  $type = $types['type'];
  // $type_name = $type['value'];
  // print count($models);
  for($i=0; $i<count($type); $i++)
  {
    $current_type = $type[$i]['value'];
    $current_type_id = strval($type[$i]['id']);
    // $current_model_id = $current_model_id * 0.5;

    $stmt = "INSERT INTO am_type(trim_id, type_id, type, date_created, date_updated) VALUES(?,?,?,NOW(),NOW())";
    $save = mysqli_prepare($con, $stmt);
    mysqli_stmt_bind_param($save, 'iis', $trim_id, $current_type_id, $current_type);

    // $save = mysqli_query("INSERT INTO am_models(make_id, model_id, model_name, category, date_created, date_updated) VALUES('$make', '$current_model_id', '$current_model', 1, NOW(), NOW())");

    if(mysqli_execute($save))
    {
      print $trim_id." ".$current_type." type is saved \n";
    }
    else
    {
      print $trim_id." ".$current_type." type is not saved \n";
      print mysqli_error($con);
      print "\n";
    }
  }
}


if(isset($_POST['size']))
{
  $sizes = $_POST['size'];
  $trim_id = $sizes['trim'];
  $size = $sizes['size'];
  // $type_name = $type['value'];
  // print count($sizes);
  for($i=0; $i<count($size); $i++)
  {
    $current_size = $size[$i]['value'];
    $current_size_id = strval($size[$i]['id']);
    // $current_size_id = $current_size_id * 0.5;

    $stmt = "INSERT INTO am_size(trim_id, size_id, size, date_created, date_updated) VALUES(?,?,?,NOW(),NOW())";
    $save = mysqli_prepare($con, $stmt);
    mysqli_stmt_bind_param($save, 'iis', $trim_id, $current_size_id, $current_size);

    // $save = mysqli_query("INSERT INTO am_sizes(make_id, size_id, size_name, category, date_created, date_updated) VALUES('$make', '$current_size_id', '$current_size', 1, NOW(), NOW())");

    if(mysqli_execute($save))
    {
      print $trim_id." ".$current_size." size is saved \n";
    }
    else
    {
      print $trim_id." ".$current_size." size is not saved \n";
      print mysqli_error($con);
      print "\n";
    }
  }
}

if(isset($_POST['fuel']))
{
  $fuels = $_POST['fuel'];
  $trim_id = $fuels['trim'];
  $fuel = $fuels['fuel'];
  // $type_name = $type['value'];
  // print count($fuels);
  for($i=0; $i<count($fuel); $i++)
  {
    $current_fuel = $fuel[$i]['value'];
    $current_fuel_id = strval($fuel[$i]['id']);
    // $current_fuel_id = $current_fuel_id * 0.5;

    $stmt = "INSERT INTO am_fuel(trim_id, fuel_id, fuel, date_created, date_updated) VALUES(?,?,?,NOW(),NOW())";
    $save = mysqli_prepare($con, $stmt);
    mysqli_stmt_bind_param($save, 'iis', $trim_id, $current_fuel_id, $current_fuel);

    // $save = mysqli_query("INSERT INTO am_fuels(make_id, fuel_id, fuel_name, category, date_created, date_updated) VALUES('$make', '$current_fuel_id', '$current_fuel', 1, NOW(), NOW())");

    if(mysqli_execute($save))
    {
      print $trim_id." ".$current_fuel." fuel is saved \n";
    }
    else
    {
      print $trim_id." ".$current_fuel." fuel is not saved \n";
      print mysqli_error($con);
      mysqli_close();
      print "\n";
    }
  }
}

if(isset($_POST['drive']))
{
  $drives = $_POST['drive'];
  $trim_id = $drives['trim'];
  $drive = $drives['drive'];
  for($i=0; $i<count($drive); $i++)
  {
    $current_drive = $drive[$i]['value'];
    $current_drive_id = strval($drive[$i]['id']);
    // $current_drive_id = $current_drive_id * 0.5;

    $stmt = "INSERT INTO am_drive(trim_id, drive_id, drive, date_created, date_updated) VALUES(?,?,?,NOW(),NOW())";
    $save = mysqli_prepare($con, $stmt);
    mysqli_stmt_bind_param($save, 'iis', $trim_id, $current_drive_id, $current_drive);

    // $save = mysqli_query("INSERT INTO am_drives(make_id, drive_id, drive_name, category, date_created, date_updated) VALUES('$make', '$current_drive_id', '$current_drive', 1, NOW(), NOW())");

    if(mysqli_execute($save))
    {
      print $trim_id." ".$current_drive." drive is saved \n";
    }
    else
    {
      print $trim_id." ".$current_drive." drive is not saved \n";
      print mysqli_error($con);
      print "\n";
    }
  }
}


if(isset($_POST['seat']))
{
  $seats = $_POST['seat'];
  $trim_id = $seats['trim'];
  $seat = $seats['seat'];
  for($i=0; $i<count($seat); $i++)
  {
    $current_seat = $seat[$i]['value'];
    $current_seat_id = strval($seat[$i]['id']);
    // $current_seat_id = $current_seat_id * 0.5;

    $stmt = "INSERT INTO am_seat(trim_id, seat_id, seat, date_created, date_updated) VALUES(?,?,?,NOW(),NOW())";
    $save = mysqli_prepare($con, $stmt);
    mysqli_stmt_bind_param($save, 'iis', $trim_id, $current_seat_id, $current_seat);

    // $save = mysqli_query("INSERT INTO am_seats(make_id, seat_id, seat_name, category, date_created, date_updated) VALUES('$make', '$current_seat_id', '$current_seat', 1, NOW(), NOW())");

    if(mysqli_execute($save))
    {
      print $trim_id." ".$current_seat." seat is saved \n";
    }
    else
    {
      print $trim_id." ".$current_seat." seat is not saved \n";
      print mysqli_error($con);
      print "\n";
    }
  }
}


if(isset($_POST['hp']))
{
  $hps = $_POST['hp'];
  $trim_id = $hps['trim'];
  $hp = $hps['hp'];
  for($i=0; $i<count($hp); $i++)
  {
    $current_hp = $hp[$i]['value'];
    $current_hp_id = strval($hp[$i]['id']);
    // $current_hp_id = $current_hp_id * 0.5;

    $stmt = "INSERT INTO am_hp(trim_id, hp_id, hp, date_created, date_updated) VALUES(?,?,?,NOW(),NOW())";
    $save = mysqli_prepare($con, $stmt);
    mysqli_stmt_bind_param($save, 'iis', $trim_id, $current_hp_id, $current_hp);

    // $save = mysqli_query("INSERT INTO am_hps(make_id, hp_id, hp_name, category, date_created, date_updated) VALUES('$make', '$current_hp_id', '$current_hp', 1, NOW(), NOW())");

    if(mysqli_execute($save))
    {
      print $trim_id." ".$current_hp." horsepower is saved \n";
    }
    else
    {
      print $trim_id." ".$current_hp." horsepower is not saved \n";
      print mysqli_error($con);
      print "\n";
    }
  }
}


if(isset($_POST['years']))
{
  $year = $_POST['years'];
  $model = $year['model_id'];
  $years = $year['years'];
  // print count($models);
  for($i=0; $i<count($years); $i++)
  {
    $current_year = $years[$i]['value'];
    $current_year_id = strval($years[$i]['id']);
    // $current_model_id = $current_model_id * 0.5;

    $stmt = "INSERT INTO am_year(model_id, year_id, year, date_created, date_updated) VALUES(?,?,?,NOW(),NOW())";
    $save = mysqli_prepare($con, $stmt);
    mysqli_stmt_bind_param($save, 'iis', $model, $current_year_id, $current_year);

    // $save = mysqli_query("INSERT INTO am_models(make_id, model_id, model_name, category, date_created, date_updated) VALUES('$make', '$current_model_id', '$current_model', 1, NOW(), NOW())");

    if(mysqli_execute($save))
    {
      print $model." ".$current_year." is saved \n";
    }
    else
    {
      print $model." ".$current_year." is not saved \n";
      print mysqli_error($con);
      print "\n";
    }
  }
}

if(isset($_GET['getyears']))
{
  $stmt = "SELECT * FROM am_year";
  $makes = mysqli_prepare($con, $stmt);
  mysqli_execute($makes);
  $result = mysqli_stmt_get_result($makes);
  while($row = mysqli_fetch_assoc($result))
  {
    array_push($data, $row);
  }
  print json_encode($data);


}

if(isset($_POST['trim']))
{
  $trim = $_POST['trim'];
  $year_id = $trim['year_id'];
  $trims = $trim['trim'];
  // print count($models);
  for($i=0; $i<count($trims); $i++)
  {
    $current_trim = $trims[$i]['value'];
    $current_trim_id = strval($trims[$i]['id']);
    // $current_model_id = $current_model_id * 0.5;

    $stmt = "INSERT INTO am_trim(year_id, trim_id, trim_level, date_created, date_updated) VALUES(?,?,?,NOW(),NOW())";
    $save = mysqli_prepare($con, $stmt);
    mysqli_stmt_bind_param($save, 'iis', $year_id, $current_trim_id, $current_trim);

    // $save = mysqli_query("INSERT INTO am_models(make_id, model_id, model_name, category, date_created, date_updated) VALUES('$make', '$current_model_id', '$current_model', 1, NOW(), NOW())");

    if(mysqli_execute($save))
    {
      print $year_id." ".$current_trim." is saved \n";
    }
    else
    {
      print $year_id." ".$current_year." is not saved \n";
      print mysqli_error($con);
      print "\n";
    }
  }
}
