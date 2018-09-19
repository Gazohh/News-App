<?php
setlocale(LC_ALL, 'nld_nld');
$rss = new DOMDocument();
$feed = array();
$urlArray = array(
    array( 'name' => 'NOS', 'url' => 'http://feeds.nos.nl/nosnieuwsalgemeen' ),
    array( 'name' => 'NU.nl', 'url' => 'https://www.nu.nl/rss/Algemeen' ),
    array( 'name' => 'De Telegraaf', 'url' => 'https://www.telegraaf.nl/nieuws/rss' ),
);

foreach ($urlArray as $url) {
    $rss->load($url['url']);

    foreach ($rss->getElementsByTagName('item') as $node) {
        $item = array (
            'site'  => $url['name'],
            'title' => $node->getElementsByTagName('title')->item(0)->nodeValue,
            'desc'  => $node->getElementsByTagName('description')->item(0)->nodeValue,
            'link'  => $node->getElementsByTagName('link')->item(0)->nodeValue,
            'date'  => $node->getElementsByTagName('pubDate')->item(0)->nodeValue,
        );
        array_push($feed, $item);
    }
}

//Sorteert op basis van datum.
usort($feed, function($a, $b) {
    return strtotime($b['date']) - strtotime($a['date']);
});

$limit = 30;
echo '<ul>';
for ($x = 0; $x < $limit; $x++) {
    $site = $feed[$x]['site'];
    $title = str_replace(' & ', ' &amp; ', $feed[$x]['title']);
    $link = $feed[$x]['link'];
    $description = $feed[$x]['desc'];
    $date = date('l F d, Y', strtotime($feed[$x]['date']));

    echo "<pre>";
    var_dump($feed);
    echo "</pre>";
}
file_put_contents("rss.json", json_encode($feed));
echo '</ul>';