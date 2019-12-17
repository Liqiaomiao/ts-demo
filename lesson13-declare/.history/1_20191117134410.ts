import {aaa,bbb} from './importjs'
{
    interface V{
        (arg1:number,arg2:number):number
    }
    interface Import{
        (a:string):string
    }
    // let a:V = require('./v')
   
    let fn:Import = aaa
    aaa('1')
    bbb('bb')
   // a(1,2) 
}

{ // 

}
