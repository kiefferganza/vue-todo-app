import {mapActions, mapState} from "vuex";

export default {
  data() {
    return {
      newTodo: '',
    };
  },
  computed: {
    ...mapState('todo', ['todos']),
    unfinishedTodoList() {
      return this.todos.filter(todo => !todo.completed)
    },
    completedTodoList() {
      return this.todos.filter(todo => todo.completed)
    }
  },
  methods: {
    ...mapActions('todo',['addTodo', 'completeTodo']),
    createTodo() {
      this.addTodo({ text: this.newTodo, completed: false });
      this.newTodo = '';
    },
    toggleShowCompleted(val) {
      this.$emit('toggle', val)
    },
  },
};
