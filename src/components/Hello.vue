<template>
  <div id="app">
    <h2>To Do</h2>
    <form>
      <input type="text" v-model="newItem" />
      <button v-on:click="addItem">Add</button>
    </form>
    <ul>
      <li v-for="(todo,index) in todos">
        <input type="checkbox" v-model="todo.isDone">
        <span v-bind:class="{done:todo.isDone}">{{ todo.item }}</span>
        <button v-on:click="deleteItem(index)">Delete</button>
      </li>
    </ul>
  </div>

</template>

<script>
export default {
  name: 'Hello',
  data () {
    return {
      msg: 'Welcome to Your Vue.js App',
      todos : [],
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
