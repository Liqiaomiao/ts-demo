<template>
  <div class="hello">
   <input v-model="msg">
   <button @click="greet">Greet</button>
  </div>
</template>

<script lang="ts">
import {Component, Vue } from 'vue-property-decorator';
import Mymixin from './mymixn'
import { mixins } from 'vue-class-component';
@Component

export default class HelloWorld extends mixins(Mymixin) {
   // initial data
   msg:string = '123'

  // lifecycle hook
  mounted () {
   //  this.greet()
    console.log('mounted',this)
  }

  // computed
  get computedMsg () {
    return 'computed ' + this.msg
  }

  // method
  greet=()=>{
   
    console.log('greeting: ' , this.msg)
  }

  // created
  created(){
    console.log('created',this.mixinvalue)
  }
  
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="scss">
h3 {
  margin: 40px 0 0;
}
ul {
  list-style-type: none;
  padding: 0;
}
li {
  display: inline-block;
  margin: 0 10px;
}
a {
  color: #42b983;
}
</style>
