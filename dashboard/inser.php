<?php
 require_once 'backend/config.php';

$admin_id = "automallAdmin" . str_shuffle(substr(md5(time().mt_rand().time()), 0,12));
$fname= "Opeyemi";
$lname = "Dada";
$email = "dadaadeife@gmail.com";
$password = password_hash("goradoom", PASSWORD_DEFAULT);
$picture = $admin_id . "jpg";

 $insert = mysqli_query($con, "INSERT INTO am_admin(admin_id, first_name, last_name, email, password, picture) VALUES('$admin_id', '$fname',' $lname','$email', '$password', '$picture')");

 if($insert)
 {
   print("Success");
 }
 else
 {
    print(mysqli_error($con));
 }
