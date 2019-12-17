<template>
    <div>
        <input v-model="todoname"/>
    </div>
</template>
<script lang="ts">
import {Vue , Component} from 'vue-property-decorator'
import { format } from 'path'
@Component
export default class NewTodo extends Vue {
    todoname:string = 'ss'
}


</script>