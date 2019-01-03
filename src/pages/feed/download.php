<?php
/**
 * Created by PhpStorm.
 * User: Batu
 * Date: 19/12/2018
 * Time: 14:31
 */

$file_name = $_GET['filename'];
$file_url = 'http://gazoh.net/' . $file_name;
header('Content-Type: application/octet-stream');
header("Content-Transfer-Encoding: Binary");
header("Content-disposition: attachment; filename=\"".$file_name."\"");
readfile($file_url);
exit;
