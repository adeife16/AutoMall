<?php
require_once 'functions.php';
// session_start();
$json = array();
$data = array();

$session_id = $_SESSION['id'];
$session_type = $_SESSION['session_type'];

// Get Profile Details
if(isset($_GET['getProfile']) && $_GET['getProfile'] == $session_id)
{
  if( $session_type == "merchant")
  {
    $stmt = "SELECT m.*, s.state_name FROM am_merchant m, am_state s WHERE m.state = s.id AND m.merchant_id = ? AND m.status = 'active'";
    $get_stmt = mysqli_prepare($con, $stmt);
    mysqli_stmt_bind_param($get_stmt,"s", $session_id);
    mysqli_execute($get_stmt);
    $result = mysqli_stmt_get_result($get_stmt);

    if($result)
    {
      while($row = mysqli_fetch_assoc($result))
      {
        unset($row['password']);
        array_push($json, $row);
      }
      print json_encode($json);
    }
    else
    {
      print mysqli_error($con);
    }
  }
  if($session_type == "rider")
  {
    $stmt = "SELECT r.*, l.lga_name, s.state_name FROM rider r, local_governments l, states s WHERE r.city = l.id AND r.state = s.id AND rider_id = ? AND status = 'active'";
    $get_stmt = mysqli_prepare($con, $stmt);
    mysqli_stmt_bind_param($get_stmt,"s", $session_id);
    mysqli_execute($get_stmt);
    $result = mysqli_stmt_get_result($get_stmt);

    if($result)
    {
      while($row = mysqli_fetch_assoc($result))
      {
        unset($row['password']);
        array_push($json, $row);
      }
      print json_encode($json);
    }
    else
    {
      print mysqli_error($con);
    }

  }
}

// Update Profile Details (Company)
if(isset($_POST['update_profile']) && $_POST['update_profile'] == "company")
{
  $address = validate($_POST['address']);
  $phone1 = validate($_POST['phone1']);
  $phone2 = validate($_POST['phone2']);
  $employees = validate($_POST['employees']);
  $state = validate($_POST['state']);
  $city = validate($_POST['city']);

  if($address == "" || $phone1 == "" || $employees == "" || $state == "" || $city == "")
  {

  }
  else
  {
    $stmt = "UPDATE company SET company_address = ?, company_number = ?, company_number_optional = ?, employees = ?, state = ?, city = ? WHERE company_id = '$session_id'";
    $update_stmt = mysqli_prepare($con, $stmt);
    mysqli_stmt_bind_param($update_stmt,"sssiii", $address, $phone1, $phone2, $employees, $state, $city);
    if(mysqli_execute($update_stmt))
    {
      print "success";
    }
    else
    {
      // print mysqli_error($con);
      print "error";
    }

  }
}

// Update Profile Details (Rider)
if(isset($_POST['update_profile']) && $_POST['update_profile'] == "rider")
{
  $firstname = validate($_POST['firstname']);
  $lastname = validate($_POST['lastname']);
  $address = validate($_POST['address']);
  $phone1 = validate($_POST['phone1']);
  $phone2 = validate($_POST['phone2']);
  $experience = validate($_POST['experience']);
  $about = validate($_POST['about']);
  $company_name = validate($_POST['company_name']);
  $company_address = validate($_POST['company_address']);
  $company_phone = validate($_POST['company_phone']);
  $state = validate($_POST['state']);
  $city = validate($_POST['city']);

  if($address == "" || $phone1 == "" || $experience == "" || $firstname == "" || $lastname == "" || $about == "" || $company_name == "" || $company_address == "" || $company_phone == "" || $state == "" || $city == "" )
  {

  }
  else
  {
    $stmt = "UPDATE rider SET address = ?, phone = ?, phone_option = ?, state = ?, city = ?, experience = ?, first_name = ?, last_name = ?, about = ?, previous_employment = ?, previous_employment_address = ?, previous_employment_phone = ? WHERE rider_id = '$session_id'";
    $update_stmt = mysqli_prepare($con, $stmt);
    mysqli_stmt_bind_param($update_stmt,"sssiiissssss", $address, $phone1, $phone2, $state, $city, $experience, $firstname, $lastname, $about, $company_name, $company_address, $company_phone);
    if(mysqli_execute($update_stmt))
    {
      print "success";
    }
    else
    {
      print mysqli_error($con);
      // print "error";
    }

  }
}

// Update Password (Company)

if(isset($_POST['update_password']) && $_POST['update_password'] == "company")
{
  $old_pass = $_POST['old_pass'];
  $new_pass = $_POST['new_pass'];

  if($old_pass == "" || $new_pass == "")
  {

  }
  else
  {
    $get_stmt = mysqli_query($con, "SELECT  password FROM company WHERE company_id = '$session_id'");
    $row = mysqli_fetch_assoc($get_stmt);
    $old_password = $row['password'];

    if(password_verify($old_pass, $old_password))
    {
      $new_pass = password_hash($new_pass, PASSWORD_DEFAULT);
      $stmt = "UPDATE company SET password = ? WHERE company_id = '$session_id'";
      $update_stmt = mysqli_prepare($con, $stmt);
      mysqli_stmt_bind_param($update_stmt, "s", $new_pass);

      if(mysqli_execute($update_stmt))
      {
        print "success";
      }
    }
  }
}
if(isset($_POST['update_password']) && $_POST['update_password'] == "rider")
{
  $old_pass = $_POST['old_pass'];
  $new_pass = $_POST['new_pass'];

  if($old_pass == "" || $new_pass == "")
  {

  }
  else
  {
    $get_stmt = mysqli_query($con, "SELECT  password FROM rider WHERE rider_id = '$session_id'");
    $row = mysqli_fetch_assoc($get_stmt);
    $old_password = $row['password'];

    if(password_verify($old_pass, $old_password))
    {
      $new_pass = password_hash($new_pass, PASSWORD_DEFAULT);
      $stmt = "UPDATE rider SET password = ? WHERE rider_id = '$session_id'";
      $update_stmt = mysqli_prepare($con, $stmt);
      mysqli_stmt_bind_param($update_stmt, "s", $new_pass);

      if(mysqli_execute($update_stmt))
      {
        print "success";
      }
    }
  }
}

// Update Profile picture
if(isset($_FILES['uploadImage']['name']) && $_FILES['uploadImage']['name'] != '')
{
  if($session_type == "company")
  {
    $upload = logo_upload('uploadImage', $session_id);

    if($upload == "success")
    {
      $split_name = explode("/", $_FILES['uploadImage']['type']);
      $photo_ext = $split_name[1];
      if($photo_ext == 'jpeg')
      {
        $photo_ext = 'jpg';
      }
      $photo = $session_id.".".$photo_ext;

      $stmt = "UPDATE company SET logo = ? WHERE company_id = '$session_id'";
      $update_stmt = mysqli_prepare($con, $stmt);
      mysqli_stmt_bind_param($update_stmt, 's', $photo);
      if(mysqli_execute($update_stmt))
      {
        print "success";
      }
      else
      {
        print "error";
      }
    }
    else
    {
      print "error";
    }
  }
  if($session_type == "rider")
  {
    $upload = profile_upload('uploadImage', $session_id);

    if($upload == "success")
    {
      $split_name = explode("/", $_FILES['uploadImage']['type']);
      $photo_ext = $split_name[1];
      if($photo_ext == 'jpeg')
      {
        $photo_ext = 'jpg';
      }
      $photo = $session_id.".".$photo_ext;

      $stmt = "UPDATE rider SET picture = ? WHERE rider_id = '$session_id'";
      $update_stmt = mysqli_prepare($con, $stmt);
      mysqli_stmt_bind_param($update_stmt, 's', $photo);
      if(mysqli_execute($update_stmt))
      {
        print "success";
      }
      else
      {
        print "error";
      }
    }
    else
    {
      print "error";
    }
  }
}
