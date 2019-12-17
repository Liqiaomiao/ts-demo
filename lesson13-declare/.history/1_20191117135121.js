"use strict";
exports.__esModule = true;
var importjs_1 = require("./importjs");
{
    // let a:V = require('./v')
    var fn = importjs_1.aaa;
    importjs_1.aaa('dd');
    importjs_1.bbb('bb');
    // a(1,2) 
}
window.server = {
    host: '172.1.6.52.181'
};
console.log(window.server);
