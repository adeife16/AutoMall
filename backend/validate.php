<?php
require_once 'functions.php';
// session_start();
$data = array();
if(isset($_POST['email']) && $_POST['email'] != "")
{
  $email = $_POST['email'];
  $check = false;
  $stmt1 = "SELECT * FROM am_merchant WHERE email = ? ";
  $stmt2 = "SELECT * FROM am_buyer WHERE email = ? ";
  $check1 = mysqli_prepare($con, $stmt1);
  mysqli_stmt_bind_param($check1, 's', $email);
  mysqli_execute($check1);
  $result1 = mysqli_stmt_get_result($check1);
  if(mysqli_num_rows($result1) > 0){
    $check = false;
  }
  else
  {
    $check2 = mysqli_prepare($con, $stmt2);
    mysqli_stmt_bind_param($check2, 's', $email);
    mysqli_execute($check2);
    $result2 = mysqli_stmt_get_result($check2);
    if(mysqli_num_rows($result2) > 0)
    {
      $check = false;
    }
    else
    {
      $check = true;
    }
  }
  print json_encode($check);
  mysqli_close($con);
}
if(isset($_POST['phone']) && $_POST['phone'] != "")
{
  $phone = $_POST['phone'];
  $check = false;
  $stmt1 = "SELECT * FROM am_merchant WHERE phone = ? ";
  $stmt2 = "SELECT * FROM am_buyer WHERE phone = ? ";
  $check1 = mysqli_prepare($con, $stmt1);
  mysqli_stmt_bind_param($check1, 's', $phone);
  mysqli_execute($check1);
  $result1 = mysqli_stmt_get_result($check1);
  if(mysqli_num_rows($result1) > 0){
    $check = false;
  }
  else
  {
    $check2 = mysqli_prepare($con, $stmt2);
    mysqli_stmt_bind_param($check2, 's', $phone);
    mysqli_execute($check2);
    $result2 = mysqli_stmt_get_result($check2);
    if(mysqli_num_rows($result2) > 0)
    {
      $check = false;
    }
    else
    {
      $check = true;
    }
  }
  print json_encode($check);
  mysqli_close($con);
}
