<template>
    <div class="addItemForm">
        <input type="text" v-model="item.name">
        <i class="fas fa-plus-square" 
        :class="[item.name ? 'active' : 'inactive' , 'plus']"
        @click="addItem()"></i>
    </div>
</template>

<script>
export default {
    data(){
        return{
            item:{
                name: ""
            }
        }
    },
    methods:{
        addItem(){
            if(this.item.name == ""){
                return;
            }
            axios.post('api/item/store',{
                item: this.item
            })
            .then(response => {
                if(response.status == 201){
                    this.item.name = "";
                    this.$emit('autoload'); 
                }
            })
            .catch(error => {
                console.log(error);
            })
        }
    }
}
</script>

<style scoped>
    .addItemForm{
        display: flex;
        justify-content: center;
        align-items: center;
    }
    input{
        background: #f7f7f7;
        border: 0px;
        outline: none;
        margin-right: 10px;
        padding: 5px;
        width: 100%;
    }
    .plus{
        font-size: 26px;
    }
    .active{
        color:#00ce25;
    }
    .inactive{
        color: #999999;
    }
</style>