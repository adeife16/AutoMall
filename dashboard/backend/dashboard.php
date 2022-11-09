<?php
require 'functions.php';

$json = array();
$data = array();
$riders_array = array();
$rider_employed_array = array();
$companies_array = array();
$request_array = array();

if(isset($_POST['dashboardData']))
{
  $riders = mysqli_query($con,"SELECT * FROM rider");
  $rider_employed = mysqli_query($con,"SELECT * FROM rider WHERE employment_status = 'Employed'");
  $companies = mysqli_query($con,"SELECT * FROM company ");
  $requests = mysqli_query($con, "SELECT * FROM employment WHERE status = 'pending'");
  if($riders)
  {
    while($row = mysqli_fetch_assoc($riders))
    {
      unset($row['password']);
      array_push($riders_array, $row);
    }
    array_push($json, array("riders" => $riders_array));
  }
  if($rider_employed)
  {
    while($row = mysqli_fetch_assoc($rider_employed))
    {
      unset($row['password']);
      array_push($rider_employed_array, $row);
    }
    array_push($json, array("ridersEmployed" => $rider_employed_array));
  }
  if($companies)
  {
    while($row = mysqli_fetch_assoc($companies))
    {
      unset($row['password']);
      array_push($companies_array, $row);
    }
    array_push($json, array("companies" => $companies_array));
  }
  if($requests)
  {
    while($row = mysqli_fetch_assoc($requests))
    {
      array_push($request_array, $row);
    }
    array_push($json, array("requests" => $request_array));
  }
  print json_encode($json);

}


// get all new requests
if(isset($_POST['getRequest']))
{
  $get_req = mysqli_query($con, "SELECT * FROM employment WHERE view = 'no' ORDER BY id DESC LIMIT 5");
  if($get_req)
  {
    while($row = mysqli_fetch_assoc($get_req))
    {
      array_push($json, $row);
    }
    print json_encode($json);
  }
  else
  {
    $get_req = mysqli_query($con, "SELECT * FROM employment WHERE view = 'yes' ORDER BY id DESC LIMIT 5");
    if($get_req)
    {
      while($row = mysqli_fetch_assoc($get_req))
      {
        array_push($json, $row);
      }
      print json_encode($json);
    }
    else
    {

    }
  }
}
