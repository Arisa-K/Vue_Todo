<template>
  <form>
     <!-- <pre>{{ $data }}</pre> -->
    <div class="addTodo_field">
      <input
      class ="add_todo_box"
      type="text"
      placeholder="todo内容"
      v-model="newTodo"
    >
    <link href="https://use.fontawesome.com/releases/v5.6.1/css/all.css" rel="stylesheet">
    <button class="addtodo_btn" @click="add">
        <i class="far fa-check-square"></i>
    </button>
    </div>
  </form>
   

</template>
<script>
import { mapActions } from 'vuex'
import db from "@/firebase";
import firebase from "firebase"; 

export default {
  data() {
    return {
      newTodo: ""//inputに入った内容をここに入力してる
    }
  },
  methods: {
      ...mapActions([
        'addTodo'
      ]),
      add() {
        let text = this.newTodo && this.newTodo.trim()//テキストに入っている&空白じゃない
        if (!text) {//テキスト入力されてなかったら動作なし！
          return
        };
        let trimedText = this.removeBlank();
        this.addTodo({
          newTodo: trimedText
        });
        this.makeTodoEmpty();//追加した後にinputの中を空欄にする！
        //firebaseに接続
       db.collection('todos').add({
        newTodo: text,
        done: false,
        createdAt: firebase.firestore.FieldValue.serverTimestamp()
      })
      },
      removeBlank(){
        return this.newTodo.trim();//後ろにブランク入ってたら消すよ〜って感じ！
      },
      makeTodoEmpty(){
        this.newTodo = '';//todoの欄を空欄に戻す！
      }
    }
}
</script>

<style scoped>
  .addTodo_field{
    width: 300px;
    margin: auto;
  }
  .add_todo_box {
    height:2em;
    width: 250px;
  }
  .addtodo_btn{
    background:none;
    color:#666;
    border:none;
    font-size:20px
  }
</style>

