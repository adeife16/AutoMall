<?php
  require_once 'functions.php';

  $json = array();
  $data = array();

  if(isset($_POST['search']) && $_POST['search'] != "")
  {
    $keyword = validate($_POST['search']);

    $stmt = "SELECT * FROM rider WHERE first_name LIKE CONCAT('%',?,'%') OR last_name LIKE CONCAT('%',?,'%')";
    $select_stmt = mysqli_prepare($con, $stmt);
    mysqli_stmt_bind_param($select_stmt, 'ss', $keyword, $keyword);
    mysqli_execute($select_stmt);
    $result = mysqli_stmt_get_result($select_stmt);
    if($result)
    {
      while($row = mysqli_fetch_assoc($result))
      {
        array_push($json, $row);
      }
      print json_encode($json);
    }
    else
    {
      print mysqli_error($con);
    }
  }

// Delete User
if(isset($_POST['delRider']))
{
  $rider_id = $_POST['delRider'];
  if($rider_id != "")
  {
    $stmt = "DELETE FROM rider WHERE rider_id = ?";
    $del_stmt = mysqli_prepare($con, $stmt);
    mysqli_stmt_bind_param($del_stmt,'s',$rider_id);
    if(mysqli_execute($del_stmt))
    {
      print "success";
    }
    else
    {
      // print "error";
      print mysqli_error($con);
    }

  }
}
