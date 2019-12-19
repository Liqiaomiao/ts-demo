"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const todoItem_1 = require("./todoItem");
const todoCollection_1 = require("./todoCollection");
const inquirer = require("inquirer");
const todos = [
    new todoItem_1.TodoItem(1, 'Buy flowers'), new todoItem_1.TodoItem(2, 'Get Shoes'),
    new todoItem_1.TodoItem(3, 'collect tickets'), new todoItem_1.TodoItem(4, 'call joe', true)
];
let collection = new todoCollection_1.TodoCollection('Adam', todos);
let newId = collection.addToDo('go for fun');
let todoItem = collection.getTodoById(newId);
let showCompleted = true;
// collection.removeComplete()
function diaplayTodoList() {
    console.log(`${collection.userName}'s Todo List `
        + `(${collection.getItemCounts().incomplete} items to do)`);
    collection.getTodoItems(showCompleted).forEach(item => item.printDetails());
}
var Commands;
(function (Commands) {
    Commands["Add"] = "Add New Task";
    Commands["Toggle"] = "Show/Hide Completed";
    Commands["Quite"] = "Quit";
    Commands["Complete"] = "Complete Task";
    Commands["Purge"] = "Remove Complete Tasks";
})(Commands || (Commands = {}));
function promptAdd() {
    console.clear();
    inquirer.prompt({
        type: 'input',
        name: 'add',
        message: 'enter task'
    }).then(answer => {
        if (answer.add != '') {
            collection.addToDo(answer.add);
        }
        promptUser();
    });
}
function promptComplete() {
    console.clear();
    inquirer.prompt({
        type: 'checkbox',
        name: 'complete',
        message: 'mark tasks complete',
        choices: collection.getTodoItems(showCompleted).map(item => ({
            name: item.task,
            value: item.id,
            checked: item.complete
        }))
    }).then(answer => {
        let completedTasks = answer['complete'];
        collection.getTodoItems(true).forEach(item => collection.markComplete(item.id, completedTasks.find(id => id === item.id) != undefined));
        promptUser();
    });
}
function promptUser() {
    // console.clear()
    diaplayTodoList();
    inquirer.prompt({
        type: 'list',
        name: 'command',
        message: 'choose option',
        choices: Object.values(Commands)
    }).then(answers => {
        switch (answers['command']) {
            case Commands.Toggle:
                showCompleted = !showCompleted;
                promptUser();
                break;
            case Commands.Add:
                promptAdd();
                break;
            case Commands.Complete:
                promptComplete();
                break;
            case Commands.Purge:
                collection.removeComplete();
                promptUser();
                break;
        }
    });
}
promptUser();
