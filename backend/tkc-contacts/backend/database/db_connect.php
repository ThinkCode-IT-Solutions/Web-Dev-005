<?php
/**
 * connecting a database requires these 4 types of information
 */

$host = "localhost";
$user = "crindalwalt";
$password = "sojohenzo";
$db_name = "tkc_contacts";


$connection = mysqli_connect(
    $host,
    $user,
    $password,
    $db_name,
);

if(!$connection){
    echo "database connection failed";
}else{
    echo "database connection succeded";
}




?>