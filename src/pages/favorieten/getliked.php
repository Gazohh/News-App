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

$likedata = array();

$sql = "SELECT article.id AS articleId, article.title AS articleTitle, article.site AS publisher, article.description AS articleDesc, article.image AS articleImg, article.likes AS articleLikes, article.comments AS articleComments, article.verborgen AS articleVerborgen,likes.id AS likeId, likes.articleId AS likedArticleId, likes.userId AS likedUserId, likes.likeDate AS likeDate, (CASE likes.userId WHEN '$userId' THEN 1 END) AS liked FROM article INNER JOIN likes on likes.articleId = article.id WHERE likes.userId = '$userId'";

$result = mysqli_query($con, $sql);

while ($row = mysqli_fetch_assoc($result)) {
    $likedata[] = $row;
}

echo json_encode($likedata);
