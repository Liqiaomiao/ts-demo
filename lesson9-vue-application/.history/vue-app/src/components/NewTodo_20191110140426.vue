<template>
    <div>
       <input v-model="text"/>
    </div>
</template>
<script>
import {Vue , Component} from 'vue-property-decorator'
import { format } from 'path'
@Component({})
export default class NewTodo extends Vue {
    text:string = 'ss'
}


</script>