import { TodoItem } from './TodoItem'
export class TodoCollection {
    private nextId: number = 1;
    private itemMap = new Map<number,TodoItem>()
    constructor(public userName: string,
        public todoItems: TodoItem[] = []
    ) { 
        this.todoItems.forEach(item=>this.itemMap.set(item.id,item))
    }
    addToDo(task: string): number {
        while (this.getTodoById(this.nextId)) {
            this.nextId++
        }
        this.itemMap.set(this.nextId,new TodoItem(this.nextId, task))
        return this.nextId
    }
    getTodoById(id: number):TodoItem {
        console.log(this.itemMap,id)
        return this.itemMap.get(id)
    }
    markComplete (id:number,complete:boolean){
        const todoItem = this.getTodoById(id)
        if(todoItem){
            todoItem.complete = complete
        }
    }
}