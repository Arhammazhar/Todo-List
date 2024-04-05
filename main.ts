#! usr/bin/env node

import inquirer from "inquirer";

let todos = [];
let condition = true;
while (condition) {
  let todoQuestions = await inquirer.prompt([
    {
      name: "FirstQuestion",
      type: "input",
      message: "What would you like to add in your todos?",
    },
    {
      name: "SecondQuestion",
      type: "confirm",
      message: "Would you like to add anything else in your todos?",
      default: "true",
    },
  ]);
  if (todoQuestions.FirstQuestion != "") {
    todos.push(todoQuestions.FirstQuestion);
  }
  console.log(todos);
  condition = todoQuestions.SecondQuestion;
}

todos.forEach((oneTodo) => console.log(oneTodo));
