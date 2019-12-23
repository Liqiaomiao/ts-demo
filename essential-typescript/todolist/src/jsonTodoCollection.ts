import {TodoItem} from "./todoItem";
import {TodoCollection} from "./todoCollection";
import * as lowdb from 'lowdb'
import * as FileSync from "lowdb/adapters/FileSync";

type schemaType = {
    tasks: { id: number; task: string; complete: boolean }[]
}
export class JsonTodoCollection extends TodoCollection{
    private database: lowdb.LowdbSync<schemaType>
    constructor(public userName:string, todoItmes:TodoItem[]=[]){
        super(userName,[])
        this.database = lowdb(new FileSync('Todos.json'))
        if(this.database.has('tasks').value()){
            let dbItems = this.database.get('tasks').value();
            dbItems.forEach(item=>this.itemMap.set(item.id,new TodoItem(item.id,item.task,item.complete)))
        }else{
            this.database.set('tasks',todoItmes).write()
            todoItmes.forEach(item=>this.itemMap.set(item.id,item))
        }
    }
    private storeTasks(){
        this.database.set('tasks',[...this.itemMap.values()]).write()
    }
    addToDo(task: string): number {
        let result = super.addToDo(task);
        this.storeTasks()
        return result
    }
    markComplete(id: number, complete: boolean) {
        super.markComplete(id, complete);
        this.storeTasks()
    }
    removeComplete() {
        super.removeComplete();
        this.storeTasks()
    }
}
