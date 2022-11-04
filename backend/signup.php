<?php
use PHPMailer\PHPMailer\PHPMailer;
use PHPMailer\PHPMailer\Exception;
use PHPMailer\PHPMailer\SMTP;

require '../vendor/autoload.php';
  require_once 'functions.php';

  $data = array();

  if(isset($_POST['fname']) && $_POST['fname'] != "")
  {
    $fname = $_POST['fname'];
    $lname = $_POST['lname'];
    $email = $_POST['email'];
    $pass = $_POST['pass'];
    $con_pass = $_POST['conPass'];
    $phone = $_POST['phone'];
    $address = $_POST['address'];
    $state = $_POST['state'];
    $buyer_id = "automall". str_shuffle(substr(md5(time().mt_rand().time()), 0,20));
    $token = str_shuffle(substr(md5(time().mt_rand().time()), 0,50));

    if ($pass != $con_pass)
    {

    }
    else
    {
      // upload picture
      $picture = picture_upload('picture', $buyer_id);
      if($picture == "success")
      {
        $tmp = explode('/',$_FILES['picture']['name']);
        $ext = strtolower(end($tmp));
        if($ext == "jpeg")
        {
          $ext = "jpeg";
        }
        $picture = strval($buyer_id) . '.' . $ext;
        // send mail
        if(send_mail($email, $fname, $lname, $token))
        {
          // save token
          $stmt = "INSERT INTO am_verify(email, token) VALUES(?,?)";
          $save_token = mysqli_prepare($con, $stmt);
          mysqli_stmt_bind_param($save_token, 'ss', $email, $token);
          if(mysqli_execute($save_token))
          {
            // save profile
            $pass = password_hash($pass, PASSWORD_DEFAULT);
            $stmt = "INSERT INTO am_buyer(buyer_id, fname, lname, email, password, phone, address, state, picture, date_created, date_updated) VALUES(?,?,?,?,?,?,?,?,?,NOW(),NOW())";
            $new_buyer = mysqli_prepare($con, $stmt);
            mysqli_stmt_bind_param($new_buyer, 'sssssssis', $buyer_id, $fname, $lname, $email, $pass, $phone, $address, $state, $picture);
            if(mysqli_execute($new_buyer))
            {
              $res =  "success";
            }
            else
            {
              print mysqli_error($con);
            }
          }
          else
          {
            $res = "error verify";
          }

        }
        else
        {
          $res = "error mail";
        }
      }
      elseif($picture == "fatal")
      {
        $res =  "error picture";
      }
      print json_encode($res);
    }
  }
// send verification mail
function send_mail($email, $fname, $lname, $token){
        global $email_link;
        global $web_link;
        $body = '<!DOCTYPE html>
        <html lang="en">
        <head>
        <meta charset="UTF-8">
        <title>Automall Account Activation</title>
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
        <a href="'.$web_link.'verify.php?email='.$email.'&token='.$token.'&type=buyer" style = "color: #fff;">Activate Account</a>
        </div>
        </body>
        </html>';

      $mail = new PHPMailer(true);

      // set up phpmailer
      try
      {
          //Server settings
          // $mail->SMTPDebug = SMTP::DEBUG_SERVER;                    //Enable verbose debug output
          $mail->isSMTP();                                            //Send using SMTP
          $mail->Host       = 'smtp-mail.outlook.com';                     //Set the SMTP server to send through
          $mail->SMTPAuth   = true;                                   //Enable SMTP authentication
          $mail->Username   = $email_link;                     //SMTP username
          $mail->Password   = 'Nifemi64';                               //SMTP password
          $mail->SMTPSecure = PHPMailer::ENCRYPTION_STARTTLS;         //Enable TLS encryption; `PHPMailer::ENCRYPTION_SMTPS` encouraged
          $mail->Port       = 587;
          // TCP port to connect to, use 465 for `PHPMailer::ENCRYPTION_SMTPS` above

          // Recipients
          // $mail->setFrom($email_link, 'automall.com.ng');
          $mail->setFrom($email_link, 'AutoMall');
          // $mail->addAddress('joe@example.net', 'Joe User');     //Add a recipient
          $mail->addAddress($email, $fname . $lname);               //Name is optional
          $mail->addReplyTo($email_link, 'AutoMall');
          // $mail->addCC('cc@example.com');
          // $mail->addBCC('bcc@example.com');

          // Attachments
          // $mail->addAttachment('/var/tmp/file.tar.gz');         //Add attachments
          // $mail->addAttachment('/tmp/image.jpg', 'new.jpg');    //Optional name

          // Content
          $mail->isHTML(true);                                  //Set email format to HTML
          $mail->Subject = 'Activate Your AutoMall Account!';
          $mail->Body    =  $body;
          $mail->AltBody = 'This is the body in plain text for non-HTML mail clients';

          $sent = $mail->send();
          // if mail sent, fill database
          if($sent)
          {
            return true;
          }
        }
      catch (Exception $e)
      {
        // print "error";
        // print "Message could not be sent. Mailer Error: {$mail->ErrorInfo}";
        return false;
      }
}
