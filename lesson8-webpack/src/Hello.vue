<template>
    <div>
      {{msg}}
        <button @click="add">+</button>
    </div>
</template>
<script lang="ts">
    let a:number=2
    console.log(a);
    export default {
        data(): Object {
            return {
                msg: "hello world,what?"
            };
        },
        methods:{
            add(){
                let num:number=0;
                num++
                alert(num)
            }
        }

    };
</script>