#! /usr/bin/env/ node
import inquirer from "inquirer";
let TODO = [];
let loop = true;
while (loop) {
    const answer = await inquirer.prompt([
        {
            type: "input",
            name: "Todo list",
            message: "What you want to add in your to-do list? "
        },
        {
            type: "confirm",
            name: "addmore",
            message: "Do you want to add more things in your to-do list? ",
        }
    ]);
    const { TODO, addmore } = answer;
    console.log(answer);
    loop = addmore;
    if (TODO) {
        TODO.push(TODO);
    }
    else {
        console.log("Kindly add valid input in your to-do list \n");
    }
}
if (TODO.length > 0) {
    console.log("Your To-do list: \n");
    TODO.forEach(todo => {
        console.log(TODO);
    });
}
else {
    console.log("There is no To-do work found in your list!!!\n");
}
