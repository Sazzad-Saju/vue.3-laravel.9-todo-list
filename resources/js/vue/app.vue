<template>
    <div class="todolistContainer">
        <div class="heading">
            <h2 id="title">Todo List</h2>
            <add-item-form @autoload="getList()"/>
        </div>
        <list-vue 
          :items="items"
           @itemChanged="getList()"
        />
        <!-- :itemChanged="getList() is infinite call" -->
    </div>
</template>

<script>
import addItemForm from "./addItemForm.vue"
import listVue from "./listVue.vue"

    export default {
        components:{
            addItemForm,
            listVue
        },
        data(){
            return{
                items: []
            }
        },
        methods:{
            getList(){
                axios.get('api/items')
                .then(response =>{
                    this.items = response.data;
                    // console.log(this.items.length);
                    for (var i=0; i<this.items.length;i++){
                        this.items[i].completed = this.items[i].completed == 1 ? true : false
                        // console.log(this.items[i]) //here checkbox solved
                    }
                })
                .catch(error =>{
                    console.log(error);
                })
            }
        },
        created() {
            // when this component created call getList
            this.getList();
            
        }
    }
</script>

<style scoped>
.todolistContainer{
    width: 350px;
    margin: auto;
}

.heading{
    background: #e6e6e6;
    padding: 10px;
}
#title{
    text-align: center;
}
</style>