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
@Component ({
    props:{
        list: Array
    }
})
export default class TodoList extends Vue{
    statusChange(item,event){
        console.log(item,event)
        
    }
}
</script>