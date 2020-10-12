<template>
  <div class="todo_box">
    <li class="todo">
      <input class="checkbox" type="checkbox" v-model="todo.done">
      <span class="detail">{{ todo.text }}</span>
    </li>
  </div>
</template>

<script>
export default {
  props: {
    todo: {
    }
  }
}
</script>

<style scoped>
.todo_box{
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