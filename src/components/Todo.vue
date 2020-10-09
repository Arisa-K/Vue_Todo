<template>
  <div class="toDo_box">
    <div class="todo" >
      <input class="checkbox" type="checkbox" v-model="todo.isDone">
      <div class="detail">
        {{ todo.item }}
      </div>


    </div>
  </div>
  
</template>
<script>
export default {
  props:{
    todo: {}
  },
  data(){
    return{

    }
  },
  methods:{
    deleteItem: function(index){
    // alert(index);
    this.todos.splice(index,1)
    }
  }
}
</script>

<style scoped>
.toDo_box{
  background-color: #dfb5d4;
  width: 200px;
  font-size: 1rem;
  height: 30px;
  margin: auto;
  margin-top:10px ;
}
.todo {
  display: flex;
}
.checkbox{
  height: 20px;
  line-height: 30px;
}
.detail{
  width: 187px;
  line-height: 30px;
}
.delete{
  display: none;
}
</style>