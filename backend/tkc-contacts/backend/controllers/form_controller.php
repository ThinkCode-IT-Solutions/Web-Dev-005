<?php

echo "Form Handler";

echo "<br>";

# server method checking 
if($_SERVER['REQUEST_METHOD'] == "POST"){

    # retrieve data from client
    $name = $_POST['name'];
    $email = $_POST['email'];
    $phone = $_POST['phone'];
    $address = $_POST['address'];

    # show the data
    echo $name . "<br>";
    echo $email . "<br>";
    echo $phone . "<br>";
    echo $address . "<br>";


    # validate the data
    if(
        $name == null ||
        $email == null ||
        $phone == null ||
        $address == null 
    ){
        echo "fields are missing";
    }else{
        echo "fields are OK";
    }


    # sending data to the database
    require "db_connext.php";
    $insertion_query = "INSERT INTO `contacts` ( `name`, `email`, `phone`, `address`) VALUES ( '$name', '$email', '$phone', '$address' );";
    $insertion_query_run = mysqli_query($connection,$insertion_query);
    if($insertion_query_run){
        echo "<br>";
        echo "data saved to the database successfully";



        header("location:../Add-Contact.php?message=success");
    }else{
        echo "data saving failed";
        header("location:../Add-Contact.php?message=failed");
    }

}else{
    echo "server does not suppport this reqquest type, please use POST";
}



?>