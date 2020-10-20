<template>
  <div class="todo_box">
    <li class="todo">
      <input class="checkbox" type="checkbox" v-model="todo.done">
      <span class="detail">{{ todo.newTodo }}</span>
    </li>
  </div>
</template>

<script>
import db from "@/firebase";
export default {
  props: {
    todo: {
    }
  },
}
</script>

<style scoped>
.todo_box{
  color: #77516d;
  width: 300px;
  font-size: 1rem;
  height: 40px;
  margin: 10px auto;
  background: #f7f7f7;
}
.todo {
  display: flex;
}
.checkbox{
  margin: auto 0px;
  line-height: 40px;
}
.detail{
  width: 187px;
  line-height: 40px;
}
.delete{
  display: none;
}
</style>