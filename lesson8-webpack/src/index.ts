import Vue from 'vue'
import Helllo from './Hello.vue'
let div = document.createElement('div')

div.id = 'app'
document.body.append(div)

new Vue({
	render:(h)=> h(Helllo)
}).$mount('#app')