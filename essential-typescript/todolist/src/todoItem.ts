export class TodoItem {
    constructor(public id: number,
        public task: string,
        public complete?:boolean
    ) { }
    printDetails():void{
        console.log(`${this.id}\t${this.task}${this.complete?"\t(complte)":""}`)
    }
}