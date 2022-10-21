<?php
  require_once 'functions.php';

  $data = array();

  if(isset($_POST['verify']) && $_POST['verify'] != "")
  {
    $verify = $_POST['verify'];
    $email = $verify['mail'];
    $token = $verify['token'];
    $type = $verify['type'];

    $stmt = "SELECT * FROM am_verify WHERE email = ? AND token = ?";
    $prep = mysqli_prepare($con, $stmt);
    mysqli_stmt_bind_param($prep, 'ss', $email, $token);
    mysqli_execute($prep);
    $result = mysqli_stmt_get_result($prep);
    if(mysqli_num_rows($result) == 1)
    {
      if($type == "buyer")
      {
        $activate = mysqli_query($con, "UPDATE am_buyer SET status = 'active' WHERE email='$email'");
      }
      else
      {
        $activate = mysqli_query($con, "UPDATE am_merchant SET status = 'active' WHERE email='$email'");
      }
      $stmt = "DELETE FROM am_verify WHERE email = ?";
      $del = mysqli_prepare($con, $stmt);
      mysqli_stmt_bind_param($del, 's', $email);
      mysqli_execute($del);
      if(mysqli_affected_rows($con) == 1)
      {
        $res = "success";
      }
      else
      {
        $res = "error";
      }
    }
    else
    {
      // $res = mysqli_error($con);
      $res = "error";
    }
    print json_encode($res);
  }
