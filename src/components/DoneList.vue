<template>
  <div>
    <div class="todo_list">
      <ul class="todos">
        <todo v-for="todo in doneTodos" :todo="todo" :key="todo.id"/>
      </ul>
    </div>
  </div>
</template>

<script>
import { mapGetters } from 'vuex'
import Todo from './Todo.vue'

export default {
  components:{
    Todo
  },
  computed: {
    ...mapGetters([
      'doneTodos'
    ])
  }
}
</script>

<style scoped>
.todo_list{
  align-items: center;
  margin: 0;
}
.todos{
  list-style: none;
  display: inline-block;
  width: 40vw;
  padding: 2em 2em;
  color: #2c2c2f;
  /* background: #cecece7d; */
  border-radius: 10px;
}
</style>
