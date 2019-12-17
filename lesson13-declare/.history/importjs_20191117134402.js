function aaa(a){
    console.log('aaa',a)
    return a
}
function bbb(b){
    console.log('bbb',b)
    return b
}
window.server = {
    hello:{name:'andy'}
}
module.exports = {
    aaa,
    bbb
} 