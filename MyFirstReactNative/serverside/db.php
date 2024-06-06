<?php
error_reporting(E_ALL);
ini_set('display_errors', 'On');

$dsn = "mysql:host=bvm25.cci.drexel.edu;dbname=wk77_INFO300_202103";
$username = "wk77"; 
$password = ""; 

$db = new PDO($dsn,$username,$password);
$query = "select * from mjs679_products";
$products = $db->query($query); 
//echo "connected to database"; 