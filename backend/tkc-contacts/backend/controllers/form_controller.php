<?php
echo "form is submitted";
if($_SERVER['REQUEST_METHOD'] == "POST"){
    echo "the request method is post, good job";


    # recieving the data
    $name = $_POST['name'];
    $email = $_POST['email'];
    $phone = $_POST['phone'];
    $address = $_POST['address'];

    # showing the details

    echo "<hr>";
    echo "<h2>$name</h2>";
    echo "<h2>$email</h2>";
    echo "<h2>$phone</h2>";
    echo "<h2>$address</h2>";
    echo "<hr>";


    # validate the input
    if($name == null || $email == null || $phone == null || $address == null){
        echo "field missing";
    }else{
        echo "all fields are OK";
    }

    # data to save in the database
    $insertion_query = "INSERT INTO `contacts` ('name','email','phone','address') VALUES ('Alina','alina@gmail.com','987656789','bahawapur');";

}else{
    echo "we do not accept get request at this url";
}


?>