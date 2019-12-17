<template>
    <div>
        <input v-model="todoname"/>
    </div>
</template>
<script lang="ts">
import {Vue , Component} from 'vue-property-decorator'
@Component
export default class NewTodo extends Vue {
    todoname:string = ''
}


</script>