import { TodoItem } from './todoItem'
import { TodoCollection } from './todoCollection'
const todos = [
    new TodoItem(1, 'Buy flowers'), new TodoItem(2, 'Get Shoes'),
    new TodoItem(3, 'collect tickets'), new TodoItem(4, 'call joe', true)
]
let collection = new TodoCollection('Adam',todos);
let newId = collection.addToDo('go for fun');
let todoItem = collection.getTodoById(newId)
// collection.removeComplete()
console.log(`${collection.userName}'s Todo List `
    + `(${ collection.getItemCounts().incomplete } items to do)`);
collection.getTodoItems(true).forEach(item=>item.printDetails())
