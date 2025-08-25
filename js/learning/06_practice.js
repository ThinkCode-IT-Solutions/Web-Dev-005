console.log("We are making our programs");


//  create a program that take a number as an input and print a table of it 

//? take input

// let number = parseInt(prompt("Enter a number"));


// plan how to generate table
// 2 x 1 = 2
// 2 x 2 = 4
// for (let index = 1; index <= 10; index++ ){
//     let multiply = number * index;
//     console.log(`${number} X ${index} = ${multiply}`);


// }




// ROCK PAPER SCICCER
let userWantToPlay = confirm("do you want to play rock,paper, scissor with me ");
if(userWantToPlay){
    let userChoice = prompt("Please select betwen\n1: rock\n2: paper\n3: scissor\nNOTE: please enter the index not the word");
    let randomNumber = Math.round(Math.random() * 10);
    console.log(randomNumber);
0.
    let computerChoice = ["rock","paper","scissor","rock","paper","scissor","rock","paper","scissor","rock"];
    let computerPick = computerChoice[randomNumber];
    console.log(`Computer chooses: ${computerPick}`);
    console.log(`You choose: ${userChoice}`);
    if(userChoice == computerPick){
        alert("Its a Draw");
    }else{
        // results
        if(userChoice == "rock" && computerPick == "paper"){
            alert("Computer Wins");
        }else if(userChoice == "rock" && computerPick == "scissor"){
            alert("you win");
        }else if (userChoice == "paper" && computerPick == "rock"){
            alert("you win");

        }else if (userChoice == "paper" && computerPick == "scissor"){
            alert("computer wins");
        }else if (userChoice == "scissor" && computerPick == "rock"){
            alert("computer win");
        }else if (userChoice == "scissor" && computerPick == "paper"){
            alert("you win");
        }
    }
}else{
    alert("Nai ty na sai");
}