
<?php 
    $title = "Rust Learning";  
    $successMessage = "<h1>Kam ho gya</h1>"  ;
    $friends = ["Ali", "Muhtshim", "Zaid"];
?>


<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title><?php echo $title;  ?></title>
    <style>
        *{
            margin:0;
            padding: 0;
        }
        .list-item{
            background-color: lightblue;
            padding: 1rem;
            border-radius: .4rem;
            margin: .4rem;
            list-style:none;
        }
    </style>
</head>
<body>
    <h1><?php echo $title;  ?></h1>
    <hr>
    <h3>My Frinds</h3>
    <ul>
        <?php  

            foreach($friends as $item){

                echo "<li class='list-item'>$item</li>";
            }
        ?>
        
    </ul>
</body>
</html>