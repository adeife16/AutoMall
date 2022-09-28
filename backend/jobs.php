<?php
  require 'functions.php';

  $json = array();
  $data = array();

  $session_id = $_SESSION['id'];
  $session_type = $_SESSION['session_type'];

  // search job post
  if(isset($_POST['job-type']) && isset($_POST['job-cat']))
  {
    $type = $_POST['job-type'];
    $cat = $_POST['job-cat'];
    if($type == "" && $cat == "")
    {
      $stmt = mysqli_query($con, "SELECT c.company_name,c.logo, j.* FROM company c, job_post j WHERE c.company_id = j.company_id");

      if($stmt)
      {
        if(mysqli_num_rows($stmt) > 0)
        {
          while($row = mysqli_fetch_assoc($stmt))
          {
            array_push($data, $row);
          }
          $json = array("request" => "success", "data" => $data);

        }
        else
        {
          $json = array("request" => "error");
        }
      }
      else
      {
        $json = array("request" => "error");
      }
    }
    elseif($type == "")
    {
      $stmt = "SELECT c.company_name, c.logo, j.* FROM company c, job_post j WHERE c.company_id = j.company_id AND category = ?";
      $get_stmt = mysqli_prepare($con, $stmt);
      mysqli_stmt_bind_param($get_stmt, 's', $cat);
      mysqli_execute($get_stmt);
      $result = mysqli_stmt_get_result($get_stmt);
      if($result)
      {
        if(mysqli_num_rows($result) > 0)
        {
          while($row = mysqli_fetch_assoc($result))
          {
            array_push($data, $row);
          }
          $json = array("request" => "success", "data" => $data);

        }
        else
        {
          $json = array("request" => "error");
        }
      }
    }
    elseif($cat == "")
    {
      $stmt = "SELECT c.company_name, c.logo, j.* FROM company c, job_post j WHERE c.company_id = j.company_id AND type = ?";
      $get_stmt = mysqli_prepare($con, $stmt);
      mysqli_stmt_bind_param($get_stmt, 's', $type);
      mysqli_execute($get_stmt);
      $result = mysqli_stmt_get_result($get_stmt);
      if($result)
      {
        if(mysqli_num_rows($result) > 0)
        {
          while($row = mysqli_fetch_assoc($result))
          {
            array_push($data, $row);
          }
          $json = array("request" => "success", "data" => $data);

        }
        else
        {
          $json = array("request" => "error");
        }
      }
    }
    print json_encode($json);
  }
