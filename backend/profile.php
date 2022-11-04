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
  if($session_type == "buyer")
  {
    $stmt = "SELECT b.*, s.state_name FROM am_buyer b, am_state s WHERE b.state = s.id AND b.buyer_id = ? AND b.status = 'active'";
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
elseif(isset($_POST['merchant_id']) && $_POST['merchant_id'] == $session_id)
{
  $firstname = validate($_POST['ufname']);
  $lastname = validate($_POST['ulname']);
  $address = validate($_POST['uaddress']);
  $phone = validate($_POST['uphone']);
  $state = validate($_POST['ustate']);

  if($address == "" || $phone == "" || $firstname == "" || $lastname == "" || $phone == "" || $state == "")
  {

  }
  elseif(phone_validate($phone) == true)
  {
    print 'phone';
  }
  else
  {
    // Update Profile Details (Company)
    if($session_type == "merchant")
    {
      $acct_name = validate($_POST['acct-name']);
      $acct_num = validate($_POST['acct-num']);
      $bank = validate($_POST['bank']);

      if(is_uploaded_file($_FILES['myfile']['tmp_name']))
      {
        $picture = logo_upload('myfile', $session_id);
        $tmp = explode('/',$_FILES['myfile']['type']);
        $ext = strtolower(end($tmp));
        if($ext == "jpeg")
        {
          $ext = "jpeg";
        }
        $picture = strval($session_id) . '.' . $ext;
        $stmt = "UPDATE am_merchant SET fname = ?, lname = ?, address = ?, phone = ?, state = ?, account_name = ?, account_number = ?, bank = ?, logo = ? WHERE merchant_id = '$session_id'";
        $update_stmt = mysqli_prepare($con, $stmt);
        mysqli_stmt_bind_param($update_stmt,"ssssissis", $firstname, $lastname, $address, $phone, $state, $acct_name, $acct_num, $bank, $picture);
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
      else
      {
        $stmt = "UPDATE am_merchant SET fname = ?, lname = ?, address = ?, phone = ?, state = ?, account_name = ?, account_number = ?, bank = ? WHERE merchant_id = '$session_id'";
        $update_stmt = mysqli_prepare($con, $stmt);
        mysqli_stmt_bind_param($update_stmt,"ssssissi", $firstname, $lastname, $address, $phone, $state, $acct_name, $acct_num, $bank);
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
    // Update Profile Details (Buyer)
    elseif($session_type == "buyer")
    {
      if(is_uploaded_file($_FILES['myfile']['tmp_name']))
      {
        $picture = picture_upload('myfile', $session_id);
        $tmp = explode('.',$_FILES['myfile']['name']);
        $ext = strtolower(end($tmp));
        $picture = strval($session_id) . '.' . $ext;
        $stmt = "UPDATE am_buyer SET fname = ?, lname = ?, address = ?, phone = ?, state = ?, picture = ? WHERE buyer_id = '$session_id'";
        $update_stmt = mysqli_prepare($con, $stmt);
        mysqli_stmt_bind_param($update_stmt,"ssssis", $firstname, $lastname, $address, $phone, $state, $picture);
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
      else
      {
        $stmt = "UPDATE am_buyer SET fname = ?, lname = ?, address = ?, phone = ?, state = ? WHERE buyer_id = '$session_id'";
        $update_stmt = mysqli_prepare($con, $stmt);
        mysqli_stmt_bind_param($update_stmt,"ssssi", $firstname, $lastname, $address, $phone, $state);
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
  }
}

// Update Password
if(isset($_POST['update-pass']))
{
  $old_pass = $_POST['oldPass'];
  $new_pass = $_POST['newPass'];
  $con_pass = $_POST['conPass'];

  if($old_pass == "" || $new_pass == "")
  {

  }
  else
  {
    if($session_type == "merchant")
    {
      $table = "am_merchant";
      $id = "merchant_id";
    }
    else
    {
      $table = "am_buyer";
      $id = "buyer_id";
    }
    $get_stmt = mysqli_query($con, "SELECT password FROM $table WHERE $id = '$session_id'");
    $row = mysqli_fetch_assoc($get_stmt);
    $old_password = $row['password'];

    if(password_verify($old_pass, $old_password))
    {
      $new_pass = password_hash($new_pass, PASSWORD_DEFAULT);
      $stmt = "UPDATE $table SET password = ? WHERE $id = '$session_id'";
      $update_stmt = mysqli_prepare($con, $stmt);
      mysqli_stmt_bind_param($update_stmt, "s", $new_pass);

      if(mysqli_execute($update_stmt))
      {
        print json_encode("success");
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
function phone_validate($phone)
{
  global $con;
  global $session_id;
  $check = false;
  $stmt1 = "SELECT * FROM am_merchant WHERE phone = ? AND merchant_id != ? ";
  $stmt2 = "SELECT * FROM am_buyer WHERE phone = ? AND buyer_id != ? ";
  $check1 = mysqli_prepare($con, $stmt1);
  mysqli_stmt_bind_param($check1, 'ss', $phone, $session_id);
  mysqli_execute($check1);
  $result1 = mysqli_stmt_get_result($check1);
  if(mysqli_num_rows($result1) > 0)
  {
    $check = true;
  }
  else
  {
    $check2 = mysqli_prepare($con, $stmt2);
    mysqli_stmt_bind_param($check2, 'ss', $phone, $session_id);
    mysqli_execute($check2);
    $result2 = mysqli_stmt_get_result($check2);
    if(mysqli_num_rows($result2) > 0)
    {
      $check = true;
    }
    else
    {
      $check = false;
    }
  }
  // mysqli_close($con);
  return $check;
}
