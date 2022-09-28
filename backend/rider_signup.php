<?php
use PHPMailer\PHPMailer\PHPMailer;
use PHPMailer\PHPMailer\Exception;
use PHPMailer\PHPMailer\SMTP;

require '../vendor/autoload.php';

$json = array();
$data = array();
$error = 0;
require_once "functions.php";

if(isset($_POST['employee_firstname']) && $_POST['employee_firstname'])
{
  $firstname = $_POST['employee_firstname'];
  $lastname = $_POST['employee_lastname'];
  $address = $_POST['employee_address'];
  $gender = $_POST['employee_gender'];
  $dob = $_POST['employee_dob'];
  $email = $_POST['employee_email'];
  $password = $_POST['employee_password'];
  $password_confirm = $_POST['employee_password_confirm'];
  $phone = $_POST['employee_phone_compulsory'];
  $phone_optional = $_POST['employee_phone_optional'];
  $state = $_POST['employee_state'];
  $city = $_POST['employee_state'];
  $about = $_POST['employee_about'];
  $experience = $_POST['employee_experience'];
  $employer = $_POST['employee_previous_employment'];
  $employer_address = $_POST['employee_previous_address'];
  $employer_phone = $_POST['employee_previous_phone'];
  $reference = $_POST['employee_reference_name'];
  $reference_address = $_POST['employee_reference_address'];

  $rider_id = str_shuffle(substr(md5(time().mt_rand().time()), 0,8));

  // $secret = "6LeCKM0aAAAAAJ2qRi_POLAqKnlkc01mLOIUgXjF";

  // $data = json_decode(file_get_contents("https://www.google.com/recaptcha/api/siteverify?secret=". $secret . "&response=" . $captcha_response), true);

  // if($firstname == "" || $lastname == "" || $address == "" || $gender == "" || $dob == "" || $email == "" || $password < 8 || $password != $password_confirm || $phone == "" || $state == "" || $city == "" || $about == "" || $experience == "" || $employer == "" || $employer_address == "" || $employer_phone == "")
  // {
  //    print "empty";
  // }

  // check if form elements are empty
  if($firstname == "")
  {

  }
  elseif($lastname == "")
  {

  }
  elseif($address == "")
  {

  }
  elseif($gender == "")
  {

  }
  elseif($dob == "")
  {

  }
  elseif($email == "")
  {

  }
  elseif( strlen($password) < 8)
  {

  }
  elseif($password != $password_confirm)
  {

  }
  elseif ($phone == "")
  {

  }
  elseif ($state == "")
  {

  }
  elseif ($city == "")
  {

  }
  elseif ($about == "")
  {

  }
  elseif ($experience == "")
  {

  }
  elseif ($employer == "")
  {

  }
  elseif ($employer_address == "")
  {

  }
  elseif ($employer_phone == "")
  {

  }
  else
  {
    $validate_mail = validate_mail($email);
    $validate_phone = validate_phone($phone);
    if($validate_mail == true && $validate_phone == true)
    {
      if(isset($_FILES['employee_picture']) && $_FILES['employee_picture'] != "")
      {
        $profile_upload = profile_upload('employee_picture', $rider_id);
        if($profile_upload == "success")
        {
          $tmp = explode('/',$_FILES['employee_picture']['type']);
          $ext = strtolower(end($tmp));
          if($ext == "jpeg")
          {
            $ext = "jpg";
          }
          $profile_pic = $rider_id . '.' . $ext;
        }

      }
      if(isset($_FILES['employee_cv']) && $_FILES['employee_cv'] != "")
      {
        $cv_upload = cv_upload('employee_cv', $rider_id);
        if($cv_upload == "success")
        {
          $tmp = explode('/',$_FILES['employee_cv']['type']);
          $ext = strtolower(end($tmp));
          if($ext == "jpeg")
          {
            $ext = "jpg";
          }
          $cv = $rider_id . '.' . $ext;
        }
      }
      if(isset($_FILES['employee_license']) && $_FILES['employee_license'] != "")
      {
        $license_upload = license_upload('employee_license', $rider_id);
        if($license_upload == "success")
        {
          $tmp = explode('/',$_FILES['employee_license']['type']);
          $ext = strtolower(end($tmp));
          if($ext == "jpeg")
          {
            $ext = "jpg";
          }
          $license = $rider_id . '.' . $ext;
        }
      }

      if($profile_upload == "success" || $cv_upload == "success" || $license_upload == "success")
      {

        $hash_link = str_shuffle(substr(md5(time().mt_rand().time()), 0,25));
        $password = password_hash($password, PASSWORD_DEFAULT);

        $body = '<!DOCTYPE html>
        <html lang="en">
        <head>
        <meta charset="UTF-8">
        <title>JAAD Account Activation</title>
        <style>
        .wrapper{
          padding: 20px;
          color: #444;
          font-size: 1.3em;
        }
        a{
          background: #3a9663;
          text-decoration: none;
          padding: 8px 15px;
          border_radius: 5px;
          color: white;
        }
        </style>
        </head>

        <body>
        <div class="wrapper">
        <p>Thank you for signing up on our website. Please click on the link below to activate your account.<p>
        <a href="'.$web_link.'verify.php?token='.$hash_link.'?type=rider" style = "color: #fff;">Activate Account</a>
        <p>You can also copy the link below and paste in your browser</p>
        </div>
        </body>
        </html>';

        $mail = new PHPMailer(true);

        // send verification mail
        try {
          //Server settings
          // $mail->SMTPDebug = SMTP::DEBUG_SERVER;                      //Enable verbose debug output
          $mail->isSMTP();                                            //Send using SMTP
          // $mail->Host       = 'smtp-mail.outlook.com';                     //Set the SMTP server to send through
          $mail->Host       = 'smtp-mail.outlook.com';                     //Set the SMTP server to send through
          $mail->SMTPAuth   = true;                                   //Enable SMTP authentication
          $mail->Username   = $email_link;                     //SMTP username
          $mail->Password   = 'Nifemi64';                               //SMTP password
          $mail->SMTPSecure = PHPMailer::ENCRYPTION_STARTTLS;         //Enable TLS encryption; `PHPMailer::ENCRYPTION_SMTPS` encouraged
          // TCP port to connect to, use 465 for `PHPMailer::ENCRYPTION_SMTPS` above
          $mail->Port       = 587;

          // Recipients
          $mail->setFrom($email_link, 'JAAD Logistics');
          // $mail->addAddress('joe@example.net', 'Joe User');     //Add a recipient
          $mail->addAddress($email, $firstname);               //Name is optional
          $mail->addReplyTo($email_link, 'JAAD Logistics');
          $mail->setFrom($email_link, 'JAAD Logistics');
          // $mail->addAddress('joe@example.net', 'Joe User');     //Add a recipient
          // $mail->addAddress($company_email, $company_name);               //Name is optional
          // $mail->addReplyTo($email_link, 'JAAD Logistics');
          // $mail->addCC('cc@example.com');
          // $mail->addBCC('bcc@example.com');

          // Attachments
          // $mail->addAttachment('/var/tmp/file.tar.gz');         //Add attachments
          // $mail->addAttachment('/tmp/image.jpg', 'new.jpg');    //Optional name

          // Content
          $link = $web_link."verify.php?token=".$hash_link;
          $mail->isHTML(true);                                  //Set email format to HTML
          $mail->Subject = 'Activate Your JAAD Account!';
          $mail->Body    =  $body;
          $mail->AltBody = 'This is the body in plain text for non-HTML mail clients';

          // $sent = $mail->send();
          $sent = false;
          // if mail sent, fill database
          if(true)
          {
            $stmt = "INSERT INTO rider(code,rider_id,first_name,last_name,address,gender,dob,email,password,phone,phone_option,state,city,about,experience,previous_employment,previous_employment_address,previous_employment_phone,picture,cv,license,reference_name,reference_address,date_registered) VALUES(?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,NOW())";

            $insert_stmt = mysqli_prepare($con, $stmt);

            mysqli_stmt_bind_param($insert_stmt, "sssssssssssiisissssssss", $hash_link, $rider_id,$firstname, $lastname, $address, $gender, $dob, $email, $password, $phone, $phone_optional, $state, $city, $about, $experience, $employer, $employer_address, $employer_phone, $profile_pic, $cv, $license, $reference, $reference_address);
            $result = mysqli_stmt_execute($insert_stmt);
            if($result)
            {
              print "success";
            }
            else
            {
              print mysqli_error($con);
            }

          }
          // echo 'Message has been sent to '.$link.'message --->'.$mail->Body;
        }
        catch (Exception $e)
        {
          print "error";
          // print "Message could not be sent. Mailer Error: {$mail->ErrorInfo}";
        }
      }
      else
      {
        print "error";
      }
    }
    else
    {

      if($validate_mail == false)
      {
        print "duplicate mail";
      }
      else if($validate_phone == false || $validate_phone_option == false)
      {
        print "duplicate phone";
      }
    }
  }
}
// verify account
if(isset($_POST['rider_verify']) && $_POST['rider_verify'] != "")
{
  $token = $_POST['rider_verify'];
  if($token != "")
  {
    $stmt = "SELECT * FROM rider WHERE code = ?";
    $copy_stmt = mysqli_prepare($con, $stmt);
    mysqli_stmt_bind_param($copy_stmt, 's', $token);
    mysqli_stmt_execute($copy_stmt);
    $result = mysqli_stmt_get_result($copy_stmt);
    if($result)
    {
      if(mysqli_num_rows($result) == 1)
      {
        $stmt = "UPDATE rider SET status='active' WHERE code=?";
        $update_stmt = mysqli_prepare($con, $stmt);
        mysqli_stmt_bind_param($update_stmt, "s", $token);
        $result = mysqli_stmt_execute($update_stmt);
        if($result)
        {
          print "success";
        }
        else
        {

        }
      }
      else
      {

      }

    }
    else
    {
      print mysqli_error($con);
    }
  }
  else
  {
  }
}
