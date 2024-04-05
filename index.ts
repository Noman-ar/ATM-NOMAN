#! /usr/bin/env node

let mypin = 3241
let mybalance = 10000 

import inquirer from "inquirer"

let answer = await inquirer.prompt([    
    {
      name : "pin",
      type : "number",
      message :"enter your pin",
    }
]);
    if (answer.pin === mypin){
    console.log("correct pincode...");
let operations = await inquirer.prompt([ 
    {
        name : "operation",
        type : "list",
        message :"please select one option",
        choices : [ "withdraw cash", "fast cash", "check balance"]
    } 
]);
console.log(operations.operation);
//1st option
    if (operations.operation==="withdraw cash"){
    let amountans = await inquirer.prompt([
        {
            name :"amount",
            type : "number" ,
            message : "enter your amount",
        }
    ]);
    if (amountans.amount > mybalance ){
        console.log("you have insufficient balance.");
    } 
    else {
        mybalance -= amountans.amount;
        console.log(`yuor remaining balance is ${mybalance}`);
    }
}
//2 option    
    else if (operations.operation === "fast cash"){
    let fast = await inquirer.prompt([
        {
            name : "fastcash",
            message: "enter your amount",
            type : "list",
            choices :  [500, 1000, 2000, 3000, 5000, 7000, 1000]
        }
    ]);
    mybalance -= fast.fastcash;
    console.log(`you have succesfully withdrawl ${fast.fastcash}.your remaining balance is ${mybalance}`);
 }
 else if (operations.operation === "check balance"){
    console.log(`your current balance is ${mybalance}`)
 }
}
else {
    console.log("incorrect pin number")
}






