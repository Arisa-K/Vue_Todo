<template>
  <div>
    <form>
      <button v-on:click="addTodo()">ADD TASK</button>
      <button @click="removeTodo()">DELETE FINISHED TASKS</button>
      <p>input: <input type="text" v-model="newTodo"></p>
      <p>task: {{ newTodo }}</p>
    </form>
    <div class="task-list">
      <label class="task-list__item"
              v-for="todo in todos"
              v-bind:class="{ 'task-list__item--checked': todo.done }"
              >
        <input type="checkbox" v-model="todo.done">
        <input type="checkbox" v-model="todo.editing">
        <input v-if="todo.editing" v-model="todo.text" @keyup.enter="todo.editing =!todo.editing">
        <span v-else>{{ todo.text }}</span>

      </label>
    </div>
  </div>
</template>

<script>
export default {
  name: 'HelloWorld',
  data () {
    return {
      msg: 'Welcome to Your Vue.js App',
      todos : [
        {text : 'vue-router', done: false},
        {text : 'vuex', done: false},
        {text : 'vue-loeader', done: false},
        {text : 'awesome-vue', done: true},
      ],
      newTodo:""
    }
  },
  methods: {
    addTodo: function(event){
      let text = this.newTodo && this.newTodo.trim()
      if (!text){
        return
      }
      this.todos.push({
        text: text,
        done: false,
        editing: false
      })
      this.newTodo = ''
    },
    removeTodo: function(event) {
      for(let i = this.todos.length -1; i>= 0; i--){
        if (this.todos[i].done)this.todos.splice(i,1)
      }
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
@mixin flex-vender() {
  display: flex;
  display: -webkit-flex;
  display: -moz-flex;
  display: -ms-flex;
  display: -o-flex;
}
.task-list {
  @include flex-vender;
  flex-direction: column;
  align-items: center;
  &__item {
    width: 270px;
    text-align: left;
    
  }
}
</style>
