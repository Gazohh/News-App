<?php
setlocale(LC_ALL, array('nl_NL.UTF-8', 'nl_NL@euro', 'nl_NL', 'dutch'));
$rss = new DOMDocument();
$feed = array();
$urlArray = array(
    array('name' => 'NOS', 'url' => 'http://feeds.nos.nl/nosnieuwsalgemeen'),
    array('name' => 'NU.nl', 'url' => 'https://www.nu.nl/rss/Algemeen'),
    array('name' => 'De Telegraaf', 'url' => 'https://www.telegraaf.nl/nieuws/rss'),
);

foreach ($urlArray as $url) {
    $rss->load($url['url']);

    foreach ($rss->getElementsByTagName('item') as $node) {
        $item = array(
            'site' => $url['name'],
            'title' => $node->getElementsByTagName('title')->item(0)->nodeValue,
            'desc' => $node->getElementsByTagName('description')->item(0)->nodeValue,
            'image' => $node->getElementsByTagName('enclosure')->item(0) ? $node->getElementsByTagName('enclosure')->item(0)->getAttribute('url') : "",
            'link' => $node->getElementsByTagName('link')->item(0)->nodeValue,
            'date' => $node->getElementsByTagName('pubDate')->item(0)->nodeValue,
        );
        array_push($feed, $item);
    }
}

//Sorteert op basis van datum.
usort($feed, function ($a, $b) {
    return strtotime($b['date']) - strtotime($a['date']);
});

$limit = 130;
echo '<ul>';
for ($x = 0; $x < $limit; $x++) {
    $site = $feed[$x]['site'];
    $title = str_replace(' & ', ' &amp; ', $feed[$x]['title']);
    $link = $feed[$x]['link'];
    $description = str_replace('&nbsp;', ' ', $feed[$x]['desc']);
    $feed[$x]['date'] = date( "Y-m-d H:i:s", strtotime($feed[$x]['date']) + 60*60);
    $date = $feed[$x]['date'];
}
file_put_contents("algemeen.json", json_encode($feed));
echo '</ul>';

$connect = mysqli_connect("localhost", "gazohonlin_root", "bQ4YR4c5ro", "gazohonlin_ionic");
$jsondata = file_get_contents("algemeen.json");
$data = json_decode($jsondata, true);
foreach ($data as $row) {
    $titel = $row['title'];
    $schonetitel = preg_replace('~//<!\[CDATA\[\s*|\s*//\]\]>~', '', $titel);
    $schoneomscrhijving = preg_replace('~//<!\[CDATA\[\s*|\s*//\]\]>~', '', $row['desc']);
    $sql= "INSERT INTO article (site, title, description, image, link, datum) VALUES ('" . $row["site"] . "', '" . $schonetitel . "', '" . $schoneomscrhijving . "', '" . $row['image'] . "', '" . $row["link"] . "', '" . $row["date"] . "')";
    mysqli_query($connect, "SET NAMES 'utf8'");
    if(mysqli_query($connect, $sql))
    {
        $sql1 = "UPDATE article SET description = REPLACE(description, '&nbsp;', ' ') WHERE description LIKE '%&nbsp;%'";
        $sql2 = "UPDATE article SET description = REPLACE(description, '&amp;', '&') WHERE description LIKE '%&amp;%'";
        mysqli_query($connect, $sql1);
        mysqli_query($connect, $sql2);
    }
}