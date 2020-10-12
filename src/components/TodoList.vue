<template>
  <div>
    <div class="todo_box">
      <add-todo/>
      <ul class="todos">
        <todo v-for="todo in doingTodos" :todo="todo" :key="todo.id"/>
      </ul>
    </div>
  </div>
</template>

<script>
import { mapGetters } from 'vuex'
import AddTodo from './AddTodo.vue'
import Todo from './Todo.vue'

export default {
  components:{
    Todo,
    AddTodo
  },
  computed: {
    ...mapGetters([
      'doingTodos'
    ])
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
.tooo_box{
  background-color: #dfb5d4;
  width: 200px;
  font-size: 1rem;
  height: 30px;
  margin: auto;
  margin-top:10px ;
}
#app ul {
  list-style: none;
}
#app li>span.done{
  text-decoration: line-through;
}

</style>
