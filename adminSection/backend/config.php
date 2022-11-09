<?php
    mysqli_report(MYSQLI_REPORT_STRICT);
    error_reporting(1);
    // error_reporting(0);

    //
    // $hostname = 'sql107.epizy.com';
    // $user = 'epiz_32934750';
    // $pass = 'svUJfcewEiY4C';
    // $dbname = 'epiz_32934750_automall';

    $hostname = 'localhost';
    $user = 'root';
    $pass = '';
    $dbname = 'aseyoriNiTemi';

    // $success = array();
    // $error = array();

    $con = mysqli_connect($hostname,$user,$pass,$dbname);

        if (!$con) {

            header("location: error.php");
            echo "<script>alert('Database not connected!')";
            // array_push($error, mysqli_error($con));

    }

    $email_link = 'apextech2010@outlook.com';

    // $web_link = 'https://jaadlogistics.herokuapp.com/';
      $web_link = 'http://www.automall.rf.gd/';
      // $web_link = 'http://adeinfo.hyperphp.com/';

    session_start();
