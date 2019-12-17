<template>
    <div>
        <input v-model="todoname"/>
        <button @click="addtodo">add</button>
    </div>
</template>
<script lang="ts">
import {Vue , Component} from 'vue-property-decorator'
@Component
export default class NewTodo extends Vue {
    todoname:string = ''
    addtodo(){
        this.$emit('addtodo',this.todoname)
    }
}


</script>