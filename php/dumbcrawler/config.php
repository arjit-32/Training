<?php
ob_start();
$host = "localhost";
$user = "root";
$password = "";
$dbname = "db";

try{
    $dsn = "mysql:hosts=".$host.";dbname=".$dbname;
    $con = new PDO($dsn, $user, $password);
    $con->setAttribute(PDO::ATTR_ERRMODE, PDO::ERRMODE_WARNING);

}catch(PDOException $e){
    echo "Connection Failed: " . $e->getMessage();
}

?>