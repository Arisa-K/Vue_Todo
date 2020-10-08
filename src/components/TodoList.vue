<template>
  <div id="app">
    <h2>To Do</h2>
    <form>
      <input type="text" v-model="newItem" />
      <button v-on:click="addItem">Add</button>
    </form>
    <todo  
      v-for ="t in todos"
      :todo ="t"
    />
  </div>

</template>

<script>
import Todo from "@/components/Todo.vue"

export default {
  components: {
    Todo,
  },
  name: 'Hello',
  data () {
    return {
      msg: 'Welcome to Your Vue.js App',
      todos : [
        {item: "aaa"},{item: "iiiii"}
      ],
      newItem:""
    }
  },
  methods:{
    addItem: function(event){
      //alert();
      if(this.newItem == '') return;
      
      var todo = {
        item: this.newItem,
        isDone: false
      };

      this.todos.push(todo);
      this.newItem = '';
    }, 
    deleteItem: function(index){
      // alert(index);
      this.todos.splice(index,1)
    }
  },
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
#app ul {
  list-style: none;
}
#app li>span.done{
  text-decoration: line-through;
}

</style>
