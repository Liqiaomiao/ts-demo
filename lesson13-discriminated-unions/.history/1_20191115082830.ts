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
function reducer(state:any, action: Action2){
    switch(action.type){
        case 'ADD':
            action.payload;
            break;
        case 'ADD_STRING':
            action.payload;
            break;
        case 'ADD_DATE':
            action.payload;
            break;    
    }
}
