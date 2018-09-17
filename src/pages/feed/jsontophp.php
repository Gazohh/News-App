<?php
/**
 * Created by PhpStorm.
 * User: Batu
 * Date: 14/09/2018
 * Time: 19:01
 */
/*$file = file_get_contents("rss.json");
$json = json_decode($file);
file_put_contents("rssfinal.xml", $json);
echo "<pre>";
var_dump($json);
echo "</pre>";

return $json->row();*/

//read the JSON file
$jsonFile = file_get_contents('rss.json');

//decode the data
$jsonFile_decoded = json_decode($jsonFile, true);

//create a new ugh object
$xml = new SimpleXMLElement('<news/>');

//loop through the data, and add each record to the xml object
foreach($jsonFile_decoded AS $news){
        $site = $news['site'];
        $title = $news['title'];
        $desc = $news['desc'];
        $link = $news['link'];
        $date = $news['date'];

        $article = $xml->addChild('news');
        $article->addChild('site', $site);
        $article->addChild('title', $title);
        $article->addChild('desc', $desc);
        $article->addChild('link', $link);
        $article->addChild('date', $date);
}

$xml->asXML("rssfinal.xml");