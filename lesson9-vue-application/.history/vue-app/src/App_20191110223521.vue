<template>
  <div id="app">
    <NewTodo @addtodo = "addtodo"></NewTodo>
    <TodoList :list = 'list' @statusChange = 'statusChange'></TodoList>
  </div>
</template>

<script lang="ts">
import { Component, Vue ,Watch} from 'vue-property-decorator';
import HelloWorld from './components/HelloWorld.vue';
import NewTodo from './components/NewTodo.vue';
import TodoList from './components/TodoList.vue';
import Todo from './components/tudoType'
@Component({
  components:{
    NewTodo,
    TodoList
  },
  watch:{
    list(value){
       localStorage.setItem('data',JSON.stringify(value))
    }
  } 
})
export default class App extends Vue {

  list:Todo[] = localStorage.getItem('data') ? JSON.parse(<string>localStorage.getItem('data')):[]
  // @Watch('list')
  // onPropertyChanged(value: string, oldValue: string) {
  //   localStorage.setItem('data',JSON.stringify(value))
  // }
  addtodo(todoname:string){
    this.list.push({
      name: todoname,
      status: 'undone'
    })
  }
 statusChange(todoItem:Todo,obj:Partial<Todo>){
   console.log(todoItem,obj)
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
