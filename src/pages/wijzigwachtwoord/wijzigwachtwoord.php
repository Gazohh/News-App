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
    $oldpassword = $request->oldpassword;
    $newpassword = $request->newpassword;
    $hashedPassword = password_hash($newpassword, PASSWORD_DEFAULT);
    $sqluser = "SELECt * FROM users WHERE id = '$userId'";
    $result = mysqli_query($con,$sqluser);

    $row = mysqli_fetch_array($result,MYSQLI_ASSOC);

    $count = mysqli_num_rows($result);

    if($count > 0)
    {
        $hashedPasswordCheck = password_verify($oldpassword, $row["password"]);
        if($hashedPasswordCheck == false)
        {
            $response = "No matching password";
        }
        else if($hashedPasswordCheck == true)
        {
            $sql = "UPDATE users SET password = '$hashedPassword' WHERE id = '$userId'";
            if($con->query($sql) === TRUE)
            {
                $response = 'password updated';
            }
            else
            {
                $response= "Error: " . $sql . "<br>" . $db->error;
            }
        }
    }
}
else
{
    $response = "no data set!";
}
echo json_encode( $response);