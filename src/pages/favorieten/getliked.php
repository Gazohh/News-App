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

        header("Access-Control-Allow-Headers: {$_SERVER['HTTP_ACCESS_CONTROL_REQUEST_HEADERS']}");

    exit(0);

}

require "dbconnect.php";

$data = file_get_contents("php://input");

if(isset($data))
{
    $request = json_decode($data);

    $userId = $request->user;
}


$sql = "SELECT *, (CASE likes.userId WHEN '$userId' THEN 1 END) AS liked FROM article INNER JOIN likes on likes.articleId = article.id WHERE likes.userId = '$userId'";

$result = mysqli_query($con,$sql);

while($row = mysqli_fetch_array($result)) { $likedata[] = json_encode($row); }

echo json_encode($likedata,JSON_UNESCAPED_UNICODE);