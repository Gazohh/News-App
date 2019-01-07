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

if($source == "De Telegraaf")
{
    $sql = "UPDATE sources SET TGF = 0 WHERE userId = '$userId'";
    if($con->query($sql))
    {
        $res = "unsubscribed";
    }
}
else if ($source == "NU.NL")
{
    $sql = "UPDATE sources SET NUNL = 0 WHERE userId = '$userId'";
    if($con->query($sql))
    {
        $res = "unsubscribed";
    }
}
else if($source == "NOS")
{
    $sql = "UPDATE sources SET NOS = 0 WHERE userId = '$userId'";
    if($con->query($sql))
    {
        $res = "unsubscribed";
    }
}

echo json_encode($res);