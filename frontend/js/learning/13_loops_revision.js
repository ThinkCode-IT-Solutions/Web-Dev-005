console.log("Hello to the Loops page");

// console.log(friendNames[3]);
// let newFriend = "Sinwar";
// friendNames.push(newFriend);
// console.log(friendNames);
// console.log(friendNames.length)
// friendNames.pop();
// console.log(friendNames);

// let bilkulHiNewFriend = "Roman";

// friendNames.unshift(bilkulHiNewFriend);

// console.log(friendNames);

// friendNames.shift();
// console.log(friendNames);

// there are three types of loops
// three things required for a loop
/**
 * controling varialbe
 * condition
 * update to the variable
*/

// let age = parseInt(prompt("Enter your age"));
// console.log(age);



//for loop
// for(let index = 0;index < 5;index++){
    //     console.log("Hello");
    // }
    // while loop
    // let index = 0;
    // while(index < 5){
        
    //     console.log(`${index}: Hala Madrid`);
    
    //     index++;
    // }
    // do while loop
    // let index = 0;
    // do{
        
    //     console.log(`${index}: Hala Madrid`);
    
    //     index++;
    // }while(index < 5);
    
    
    
    
let friendNames = ["Zaid", "Muhtshim", "Ali Imran", "Yahya Sinwar"];
friendNames.push("Asad");
friendNames.push("Ahmad");
friendNames.push("Wasif");
for(let index = 0;index < friendNames.length;index++){
    console.log(friendNames[index] + " Hello");
}
















let table = parseInt(prompt("Write a number"));

console.log(table);


for(let index = 1;index < 11;index++){
    let multiply = table * index;
    console.log(`${table} X ${index} = ${multiply}`);           
}




// 6 X 1 = 6

// 6 X 10 = 6





