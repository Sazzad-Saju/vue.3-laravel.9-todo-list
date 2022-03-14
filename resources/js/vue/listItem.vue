<template>
    <div class="designItem">
        <input
            type="checkbox"
            @change="updateCheck()"
            v-model="item.completed"
        >
         <!-- v-if = "item.completed == true" checked -->
        <span :class="[item.completed ? 'completed': '', 'itemText']">
            <!-- {{item.name}} {{item.completed}} -->
            {{item.name}}
        </span>
        <button @click="removeItem"
        class="trashcan">
            <i class="fa fa-trash" aria-hidden="true"></i>
        </button>
    </div>
</template>

<script>
export default {
    props:['item'],
    // created(){
    //     this.item.completed = this.item.completed == 1 ? true : false
    // },
    methods:{
        updateCheck(){
            // this.item.completed = !this.item.completed;
            axios.put('api/item/'+ this.item.id, {
                item: this.item
            })
            .then(response =>{
                if(response.status == 200){
                    // this.$emit('itemChanged'); //don't need to do anything
                }
            })
            .catch(error =>{
                console.log(error);
            })
        },
        removeItem(){
            if(confirm('Detele "'+this.item.name+'" ?')){
            axios.delete('api/item/'+this.item.id)
            .then(response =>{
                if(response.status ==200){
                    this.$emit('itemChanged');
                }
            })
            .catch(error=>{
                console.log(error);
            })
            }
        }
    }
}
</script>

<style scoped>
    .completed{
        text-decoration: line-through;
        color: #999999;
    }
    .itemText{
        width: 100%;
        margin-left: 20px;
    }
    .designItem{
        display: flex;
        justify-content: center;
        align-items: center;
    }
    .trashcan{
        background: #e6e6e6;
        border: none;
        color: #ff0000;
        outline: none;

    }
</style>