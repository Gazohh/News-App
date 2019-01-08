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
    $NOS = $row['NOS'];
    $TGF = $row['TGF'];
    $NUNL = $row['NUNL'];
}

// Get NOS Articles if subscription to NOS is true
if ($NOS == 1) {
    $sqlgetNOS = "SELECT *, DATE(datum) AS datumdag, TIME(datum) as datumtijd, (CASE
WHEN EXISTS (
  SELECT *
  FROM likes
  WHERE likes.userId = '$userId'
    AND likes.articleId = article.id
) THEN TRUE
  ELSE FALSE END) AS liked FROM article WHERE datum > CURDATE() AND verborgen = 0 AND site = 'NOS'";
    $resultNOS = mysqli_query($con, $sqlgetNOS);

    while ($row = mysqli_fetch_assoc($resultNOS)) {
        array_push($artikelendata, $row);
    }
}

// Get De Telegraaf Articles if subscription to TGF is true
if ($TGF == 1) {
    $sqlgetTGF = "SELECT *, DATE(datum) AS datumdag, TIME(datum) as datumtijd, (CASE
WHEN EXISTS (
  SELECT *
  FROM likes
  WHERE likes.userId = '$userId'
    AND likes.articleId = article.id
) THEN TRUE
  ELSE FALSE END) AS liked FROM article WHERE datum > CURDATE() AND verborgen = 0 AND site = 'De Telegraaf'";
    $resultTGF = mysqli_query($con, $sqlgetTGF);

    while ($row = mysqli_fetch_assoc($resultTGF)) {
        array_push($artikelendata, $row);
    }
}

// Get De Telegraaf Articles if subscription to TGF is true
if ($NUNL == 1) {
    $sqlgetNUNL = "SELECT *, DATE(datum) AS datumdag, TIME(datum) as datumtijd, (CASE
WHEN EXISTS (
  SELECT *
  FROM likes
  WHERE likes.userId = '$userId'
    AND likes.articleId = article.id
) THEN TRUE
  ELSE FALSE END) AS liked FROM article WHERE datum > CURDATE() AND verborgen = 0 AND site = 'NU.NL'";
    $resultNUNL = mysqli_query($con, $sqlgetNUNL);

    while ($row = mysqli_fetch_assoc($resultNUNL)) {
        array_push($artikelendata, $row);
    }
}

echo json_encode($artikelendata);
