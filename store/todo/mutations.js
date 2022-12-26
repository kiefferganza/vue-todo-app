export default {
  addTodo(state, todo) {
    state.todos.push(todo);
  },
  completeTodo(state, index) {
    const todos = state.todos.filter(todo => !todo.completed)
    todos[index].completed = true
  },
}
