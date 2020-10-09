<template>
  <div id="app">
    <h2>DoneList</h2>
    <div v-if!="isDone">

      <todo  
        v-for ="t in todos"
        :todo ="t"
      />
    </div>
  
    
  </div>

</template>

<script>
import Todo from "@/components/Todo.vue"

export default {
   components: {
    Todo,
  },
  data () {
    return {
      msg: 'Welcome to Your Vue.js App',
      todos : [
        {item: "aaa", isDone: true},{item: "iiiii",isDone: true}
      ],
      newItem:""
    }
  },
}
</script>