<?php
echo "form is submitted";
if($_SERVER['REQUEST_METHOD'] == "POST"){
    echo "the request method is post, good job";
}else{
    echo "we do not accept get request at this url";
}


?>