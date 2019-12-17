interface User{
    id:number;
    name:string;
}

type Action2 = {
    type: 'ADD';
    payload: number;
}|{
    type: 'ADD_STRING';
    payload: number;
}|{
    type:'ADD_DATE';
    payload: User;
}
