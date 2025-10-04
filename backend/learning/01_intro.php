<?php

    echo "Hello world";

    $age = 11;


    switch ($age){
        case 10:
            echo "you are 10 years old";
            break;
        case 12: 
            echo "you are 12 years old";
            break;
        case 16:
            echo "you are 16 years old";
            break;
        default:
            echo "you are neither 12,10,or 16";
    }









    echo "<hr>";


    
    // for($index = 0;$index < count($friends);$index++){
        //     $element = $friends[$index];
        //     echo "Hy $element <br>";
        // }

        
        
        // $index = 0;
        // while($index < count($friends)){
            
        //     $friend = $friends[$index];
        //     echo "Hy $friend <hr>";
        
        //     $index++;
        // }
        
        
            
            
        // $index = 0;
        // do{
            
        //     $friend = $friends[$index];
        //     echo "<li> Hy $friend </li>";
            
        //     $index++;
        // }while($index < count($friends));
        
        
        
        // $friends = ["Hassan", "Ali","Shokat"];

        // foreach($friends as $item){
            
        //     echo "hello $item <br>";
        // }




        function myfunc ($n1,$n2) {

            $sum = $n1 + $n2;
            return $sum;
        }

        $num1 = 19;
        $num2 = 34;
        $result  = myfunc($num1,$num2);
        echo $result;


        class Ronaldo {
            public $age = 34;

            public function myage () {
                echo "my age is " . $this->age;
            }
        }

        class Buffon extends Ronaldo {

        }


        $vini = new Ronaldo();
         $vini->myage();
         echo $vini->age;

         $neur = new Buffon();
         $neur->myage();
        

        





        ?>