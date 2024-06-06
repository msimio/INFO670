<?php
header("Access-Control-Allow-Origin: *"); // Allow any origin
header("Access-Control-Allow-Methods: GET, POST, OPTIONS"); // Allow specific HTTP methods
header("Access-Control-Allow-Headers: Content-Type, Authorization"); // Allow specific headers

require("db.php"); 

// 1. Process data from GET
$name = $_GET["name"];
$cid = $_GET["cat_id"]; 
$price = $_GET["price"]; 

// 2. Insert data into database
$sql = "insert into mjs679_products (cat_id, name, price) "
        . "           values ($cid,  '$name',     $price) "; 
//echo $sql; 
$n = $db->exec($sql); 

// 3. Return data (status) of the database operation
header("Content-Type: text/plain"); 
echo $n; 