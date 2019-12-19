import { TodoItem } from './todoItem'
import { TodoCollection } from './todoCollection'
import  * as inquirer from 'inquirer'
const todos = [
    new TodoItem(1, 'Buy flowers'), new TodoItem(2, 'Get Shoes'),
    new TodoItem(3, 'collect tickets'), new TodoItem(4, 'call joe', true)
]
let collection = new TodoCollection('Adam',todos);
let newId = collection.addToDo('go for fun');
let todoItem = collection.getTodoById(newId)
let showCompleted = true
// collection.removeComplete()
function diaplayTodoList():void{
    console.log(`${collection.userName}'s Todo List `
        + `(${ collection.getItemCounts().incomplete } items to do)`);
    collection.getTodoItems(showCompleted).forEach(item=>item.printDetails())
}

enum Commands{
    Add = 'Add New Task',
    Toggle = "Show/Hide Completed",
    Quite='Quit',
    Complete = 'Complete Task',
    Purge = 'Remove Complete Tasks'
}
function promptAdd():void {
    console.clear()
    inquirer.prompt({
        type:'input',
        name:'add',
        message:'enter task'
    }).then(answer =>{
        if(answer.add!=''){
            collection.addToDo(answer.add)
        }
        promptUser()
    })
}
function promptComplete():void {
    console.clear()
    inquirer.prompt({
        type:'checkbox',
        name:'complete',
        message:'mark tasks complete',
        choices:collection.getTodoItems(showCompleted).map(item=>({
            name:item.task,
            value:item.id,
            checked:item.complete
        }))
    }).then(answer=>{
        let completedTasks = answer['complete'] as number[];
        collection.getTodoItems(true).forEach(item=>
           collection.markComplete(
               item.id,
               completedTasks.find(id=> id===item.id)!=undefined
               )
        )
        promptUser()
    })
}
function promptUser():void {
    // console.clear()
    diaplayTodoList()
    inquirer.prompt({
        type:'list',
        name:'command',
        message:'choose option',
        choices: Object.values(Commands)
    }).then(answers => {
        switch (answers['command']) {
            case Commands.Toggle:
                showCompleted = !showCompleted;
                promptUser();
                break;
            case Commands.Add:
                promptAdd()
                break
            case Commands.Complete:
                promptComplete()
                break
            case Commands.Purge:
                collection.removeComplete()
                promptUser()
                break
        }
    })

}
promptUser()

