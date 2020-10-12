const todos = {
  state: {
    todos: [
      {id:1, text : 'テスト', done: false},
      {id:2, text : 'テスト２', done: true}
    ]
  },
  getters: {
    doneTodos: state =>
      state.todos.filter(todo => todo.done),//todoがdoneになってるものだけfilterをかけて抽出！

    doingTodos: state =>
      state.todos.filter(todo => !todo.done),//todoがdoneになってないものだけfilterをかけて抽出！
  },
  mutations: {
    ADD_TODO (state, text) {//状態を第一引数として受け取る。第二引数をtextが受け渡し
      let todo = {
        id: Math.max(0, ...state.todos.map(t => t.id)) + 1,//todoのid番号に1足したものをidとする
        text: text,
        done: false
      }
      state.todos.push(todo);
    },
  },
  actions: {
    addTodo (context, todo) {
      context.commit('ADD_TODO',todo.text);//ミューテーションの中の動きをコミットする
    }
  }
};

export default todos;
