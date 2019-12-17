<template>
  <div id="app">
    <img alt="Vue logo" src="./assets/logo.png">
    <HelloWorld></HelloWorld>
   {{hello}}
  </div>
</template>

<script lang="ts">
import { Component, Vue } from 'vue-property-decorator';
import HelloWorld from './components/HelloWorld.vue';
import NewTodo from './components/NewTodo.vue';
import TodoList from './components/TodoList.vue';

@Component({
  components:{
    NewTodo,
    TodoList
  }
})
export default class App extends Vue {
  hello:string = 'hello'
  mounted(){
    console.log('mounted')
    console.log(this.hello)
  }
}
</script>

<style lang="scss">
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
