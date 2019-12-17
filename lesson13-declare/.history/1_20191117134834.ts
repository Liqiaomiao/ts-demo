import {aaa,bbb} from './importjs'
import { Server } from 'https';
{
    interface V{
        (arg1:number,arg2:number):number
    }
    interface Import{
        (a:string):string
    }
    // let a:V = require('./v')
   
    let fn:Import = aaa
    aaa('dd')
    bbb('bb')
   // a(1,2) 
}
// 全局赋值
declare global{
    interface Window{
        server: {
            host: string
        }
    }    
}
window.server = {
    host: '172.1.6.52.181'
}
console.log(window.server)

