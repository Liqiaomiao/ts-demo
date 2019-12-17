<template>
    <ol>
        <li v-for="(item,index) in list" :key="index">
            <input type="checkbox" name="status" :checked="item.status==='done'" @change="statusChange(item,$event)"/>
            {{item.name}}
        </li>  
    </ol>
</template>
<script lang="ts">
import {Vue , Component} from 'vue-property-decorator'
import Todo from './tudoType'
@Component ({
    props:{
        list: Array
    }
})
export default class TodoList extends Vue{
    statusChange(item:Todo){
        let ifChecked = (<HTMLInputElement>event.target).checked;
        this.$emit('statusChange',item,ifChecked) 
    }
}
</script>