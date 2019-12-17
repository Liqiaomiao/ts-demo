<template>
  <div id="app">
    <NewTodo @addtodo = "addtodo"></NewTodo>
    <TodoList :list = 'list'></TodoList>
  </div>
</template>

<script lang="ts">
import { Component, Vue } from 'vue-property-decorator';
import HelloWorld from './components/HelloWorld.vue';
import NewTodo from './components/NewTodo.vue';
import TodoList from './components/TodoList.vue';
  interface Todo{
    name: string;
    status: 'done'|'undone'|'deleted';
  }
@Component({
  components:{
    NewTodo,
    TodoList
  }
})
export default class App extends Vue {

  list:Todo[] = [
    {name:'lesson 1',status:'done'},
    {name:'lesson 2',status:'undone'}
  ]
  addtodo(todoname:string){
    this.list.push({
      name: todoname,
      status: 'undone'
    })
  
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
