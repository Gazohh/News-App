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
    $TGF = $row['TGF'];
    $NUNL = $row['NUNL'];
    $NOS = $row['NOS'];
    $VLKK = $row['VLKK'];
    $KNVB = $row['KNVB'];
    $TWKS = $row['TWKS'];
    $NUNLFIN = $row['NUNLFIN'];
    $VLKKE = $row['VLKKE'];
    $LBL = $row['LBL'];
    $BTYL = $row['BTYL'];
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

// Get NU.NL Articles if subscription to NUNL is true
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

// Get KNVB Articles if subscription to TGF is true
if ($KNVB == 1) {
    $sqlgetKNVB = "SELECT *, DATE(datum) AS datumdag, TIME(datum) as datumtijd, (CASE
WHEN EXISTS (
  SELECT *
  FROM likes
  WHERE likes.userId = '$userId'
    AND likes.articleId = article.id
) THEN TRUE
  ELSE FALSE END) AS liked FROM article WHERE datum > CURDATE() AND verborgen = 0 AND site = 'KNVB'";
    $resultKNVB = mysqli_query($con, $sqlgetKNVB);

    while ($row = mysqli_fetch_assoc($resultKNVB)) {
        array_push($artikelendata, $row);
    }
}

// Get Tweakers Articles if subscription to TWKS is true
if ($TWKS == 1) {
    $sqlgetTWKS = "SELECT *, DATE(datum) AS datumdag, TIME(datum) as datumtijd, (CASE
WHEN EXISTS (
  SELECT *
  FROM likes
  WHERE likes.userId = '$userId'
    AND likes.articleId = article.id
) THEN TRUE
  ELSE FALSE END) AS liked FROM article WHERE datum > CURDATE() AND verborgen = 0 AND site = 'Tweakers'";
    $resultTWKS = mysqli_query($con, $sqlgetTWKS);

    while ($row = mysqli_fetch_assoc($resultTWKS)) {
        array_push($artikelendata, $row);
    }
}

// Get Volkskrant Articles if subscription to VLKK is true
if ($VLKK == 1) {
    $sqlgetVLKK = "SELECT *, DATE(datum) AS datumdag, TIME(datum) as datumtijd, (CASE
WHEN EXISTS (
  SELECT *
  FROM likes
  WHERE likes.userId = '$userId'
    AND likes.articleId = article.id
) THEN TRUE
  ELSE FALSE END) AS liked FROM article WHERE datum > CURDATE() AND verborgen = 0 AND site = 'Volkskrant'";
    $resultVLKK = mysqli_query($con, $sqlgetVLKK);

    while ($row = mysqli_fetch_assoc($resultVLKK)) {
        array_push($artikelendata, $row);
    }
}

// Get NU.NL Economie Articles if subscription to NUNLFIN is true
if ($NUNLFIN == 1) {
    $sqlgetNUNLFIN = "SELECT *, DATE(datum) AS datumdag, TIME(datum) as datumtijd, (CASE
WHEN EXISTS (
  SELECT *
  FROM likes
  WHERE likes.userId = '$userId'
    AND likes.articleId = article.id
) THEN TRUE
  ELSE FALSE END) AS liked FROM article WHERE datum > CURDATE() AND verborgen = 0 AND site = 'NU.nl Economie'";
    $resultNUNLFIN = mysqli_query($con, $sqlgetNUNLFIN);

    while ($row = mysqli_fetch_assoc($resultNUNLFIN)) {
        array_push($artikelendata, $row);
    }
}

// Get Volkskrant Economie Articles if subscription to VLKKE is true
if ($VLKKE == 1) {
    $sqlgetVLKKE = "SELECT *, DATE(datum) AS datumdag, TIME(datum) as datumtijd, (CASE
WHEN EXISTS (
  SELECT *
  FROM likes
  WHERE likes.userId = '$userId'
    AND likes.articleId = article.id
) THEN TRUE
  ELSE FALSE END) AS liked FROM article WHERE datum > CURDATE() AND verborgen = 0 AND site = 'Volkskrant Economie'";
    $resultVLKKE = mysqli_query($con, $sqlgetVLKKE);

    while ($row = mysqli_fetch_assoc($resultVLKKE)) {
        array_push($artikelendata, $row);
    }
}

// Get Beautylab Articles if subscription to BTYL is true
if ($BTYL == 1) {
    $sqlgetBTYL = "SELECT *, DATE(datum) AS datumdag, TIME(datum) as datumtijd, (CASE
WHEN EXISTS (
  SELECT *
  FROM likes
  WHERE likes.userId = '$userId'
    AND likes.articleId = article.id
) THEN TRUE
  ELSE FALSE END) AS liked FROM article WHERE datum > CURDATE() AND verborgen = 0 AND site = 'Beautylab'";
    $resultBTYL = mysqli_query($con, $sqlgetBTYL);

    while ($row = mysqli_fetch_assoc($resultBTYL)) {
        array_push($artikelendata, $row);
    }
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
  ELSE FALSE END) AS liked FROM article WHERE datum > CURDATE() AND verborgen = 0 AND site = 'Libelle'";
    $resultLBL = mysqli_query($con, $sqlgetLBL);

    while ($row = mysqli_fetch_assoc($resultLBL)) {
        array_push($artikelendata, $row);
    }
}

echo json_encode($artikelendata);
