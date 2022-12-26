export default {
  addTodo({ commit }, todo) {
    commit('addTodo', todo);
  },
  completeTodo({ commit }, index) {
    commit('completeTodo', index);
  },
}
