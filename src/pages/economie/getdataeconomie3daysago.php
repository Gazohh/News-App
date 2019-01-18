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
}

$artikelendata = array();

$sqlcheck = "SELECT * FROM sources WHERE userId = '$userId'";
$resultcheck = mysqli_query($con, $sqlcheck);

while ($row = mysqli_fetch_assoc($resultcheck)) {
    $NUNLFIN = $row['NUNLFIN'];
}

// Get NU.NL Finance Articles if subscription to NUNLFIN is true
if ($NUNLFIN == 1) {
    $sqlgetNUNLFIN = "SELECT *, DATE(datum) AS datumdag, TIME(datum) as datumtijd, (CASE
WHEN EXISTS (
  SELECT *
  FROM likes
  WHERE likes.userId = '$userId'
    AND likes.articleId = article.id
) THEN TRUE
  ELSE FALSE END) AS liked FROM article WHERE datum BETWEEN subdate(CURDATE(),3) AND subdate(CURDATE(),2) AND verborgen = 0 AND site = 'NU.nl Economie'";
    $resultNUNLFIN = mysqli_query($con, $sqlgetNUNLFIN);

    while ($row = mysqli_fetch_assoc($resultNUNLFIN)) {
        array_push($artikelendata, $row);
    }
}

echo json_encode($artikelendata);
