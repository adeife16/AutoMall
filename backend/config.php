<?php
    mysqli_report(MYSQLI_REPORT_STRICT);
    error_reporting(-1);
    // error_reporting(0);


    // $hostname = 'sql307.epizy.com';
    // $user = 'epiz_32682260';
    // $pass = 'q5ziiZ90nSG';
    // $dbname = 'epiz_32682260_automall';

    $hostname = 'localhost';
    $user = 'root';
    $pass = '';
    $dbname = 'aseyoriNiTemi';

    // $success = array();
    // $error = array();

    $con = mysqli_connect($hostname,$user,$pass,$dbname);

        if (!$con) {

            // header("location: error.php");
            echo "<script>alert('Database not connected!')";
            // array_push($error, mysqli_error($con));

    }

    $email_link = 'apextech2010@outlook.com';

    // $web_link = 'http://localhost/automall/';
      $web_link = 'http://www.automall.epizy.com/';

    session_start();
