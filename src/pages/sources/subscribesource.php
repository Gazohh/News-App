<?php
if (isset($_SERVER["HTTP_ORIGIN"])) {

    header("Access-Control-Allow-Origin: {$_SERVER['HTTP_ORIGIN']}");

    header("Access-Control-Allow-Credentials: true");

    header('Access-Control-Max-Age: 86400');    // cache for 1 day

}

// Access-Control headers are received during OPTIONS requests

if ($_SERVER['REQUEST_METHOD'] == 'OPTIONS') {


    if (isset($_SERVER['HTTP_ACCESS_CONTROL_REQUEST_METHOD']))

        header('Access-Control-Allow-Methods: GET, POST, OPTIONS');

    if (isset($_SERVER['HTTP_ACCESS_CONTROL_REQUEST_HEADERS']))

        header("Access-Control-Allow-Headers:        {$_SERVER['HTTP_ACCESS_CONTROL_REQUEST_HEADERS']}");

    exit(0);

}

require "dbconnect.php";

$data = file_get_contents("php://input");

if (isset($data)) {
    $request = json_decode($data);

    $userId = $request->userId;
    $source = $request->sourceName;
}

if ($source == "De Telegraaf") {
    $sqlcheck = "SELECT EXISTS(SELECT * FROM sources WHERE userId = '$userId') AS 'check'";
    $result = $con->query($sqlcheck);
    if ($result->num_rows > 0) {
        $value = mysqli_fetch_object($result);
        if ($value->check == 1) {
            $sqlupdate = "UPDATE sources SET TGF = 1 where userId='$userId'";
            if ($con->query($sqlupdate)) {
                $res = "subscribed";
            }
        }
        else if ($value->check == 0) {
            $sql = "INSERT INTO sources (TGF,userId) VALUES (1,'$userId');";
            if ($con->query($sql)) {
                $res = "subscribed";
            }
        }
    }
} else if ($source == "NU.nl") {
    $sqlcheck = "SELECT EXISTS(SELECT * FROM sources WHERE userId = '$userId') AS 'check'";
    $result = $con->query($sqlcheck);
    if ($result->num_rows > 0) {
        $value = mysqli_fetch_object($result);
        if ($value->check == 1) {
            $sqlupdate = "UPDATE sources SET NUNL = 1 where userId='$userId'";
            if ($con->query($sqlupdate)) {
                $res = "subscribed";
            }
        }
        else if ($value->check == 0) {
            $sql = "INSERT INTO sources (NUNL,userId) VALUES (1,'$userId');";
            if ($con->query($sql)) {
                $res = "subscribed";
            }
        }
    }
}
else if ($source == "NOS") {
    $sqlcheck = "SELECT EXISTS(SELECT * FROM sources WHERE userId = '$userId') AS 'check'";
    $result = $con->query($sqlcheck);
    if ($result->num_rows > 0) {
        $value = mysqli_fetch_object($result);
        if ($value->check == 1) {
            $sqlupdate = "UPDATE sources SET NOS = 1 where userId='$userId'";
            if ($con->query($sqlupdate)) {
                $res = "subscribed";
            }
        }
        else if ($value->check == 0) {
            $sql = "INSERT INTO sources (NOS,userId) VALUES (1,'$userId');";
            if ($con->query($sql)) {
                $res = "subscribed";
            }
        }
    }
} else {
    $res = "error";
}

echo json_encode($res);