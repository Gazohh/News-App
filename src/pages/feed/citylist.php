<?php
/**
 * Created by PhpStorm.
 * User: Batu
 * Date: 06/12/2018
 * Time: 15:41
 */

$json_data[] = file_get_contents("city.list.json");
$filtered_data = [];
array_push($filtered_data, $json_data);
print_r($filtered_data);