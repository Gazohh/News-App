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
    $articleId = $request->articleId;
    $userId = $request->userId;
    $comment = $request->comment;
    $date = date("Y-m-d H:i:s");

    $sql = "INSERT INTO comments (articleId, userId, comment, commentDate) VALUES ('$articleId', '$userId', '$comment', '$date')";
    $sql1 = "UPDATE article SET comments = comments + 1 WHERE id='$articleId'";
    if($con->query($sql) === TRUE && $con->query($sql1) === TRUE)
    {
        $response = 'comment published';
    }
    else
    {
        $response= "Error: " . $sql . "<br>" . $db->error;
    }
}
else
{
    $response = "no data set!";
}
echo json_encode( $response);