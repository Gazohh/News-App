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
    $LBL = $row['LBL'];
    $BTYL = $row['BTYL'];
}

// Get Libelle Articles if subscription to LBL is true
if ($LBL == 1) {
    $sqlgetLBL = "SELECT *, DATE(datum) AS datumdag, TIME(datum) as datumtijd, (CASE
WHEN EXISTS (
  SELECT *
  FROM likes
  WHERE likes.userId = '$userId'
    AND likes.articleId = article.id
) THEN TRUE
  ELSE FALSE END) AS liked FROM article WHERE datum BETWEEN subdate(CURDATE(),3) AND subdate(CURDATE(),2) AND verborgen = 0 AND site = 'Libelle'";
    $resultLBL = mysqli_query($con, $sqlgetLBL);

    while ($row = mysqli_fetch_assoc($resultLBL)) {
        array_push($artikelendata, $row);
    }
}

// Get BeautyLab Articles if subscription to BTYL is true
if ($BTYL == 1) {
    $sqlgetBTYL = "SELECT *, DATE(datum) AS datumdag, TIME(datum) as datumtijd, (CASE
WHEN EXISTS (
  SELECT *
  FROM likes
  WHERE likes.userId = '$userId'
    AND likes.articleId = article.id
) THEN TRUE
  ELSE FALSE END) AS liked FROM article WHERE datum BETWEEN subdate(CURDATE(),3) AND subdate(CURDATE(),2) AND verborgen = 0 AND site = 'Beautylab'";
    $resultBTYL = mysqli_query($con, $sqlgetBTYL);

    while ($row = mysqli_fetch_assoc($resultBTYL)) {
        array_push($artikelendata, $row);
    }
}

echo json_encode($artikelendata);
