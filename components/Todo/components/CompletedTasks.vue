<template>
  <div>
    <v-list>
      <v-list-item v-for="(todo, index) in completedTodoList" :key="index">
        <v-checkbox :input-value="todo.completed" @change="completeTodo(index)" />
        <v-list-item-content>
          {{ todo.text }}
        </v-list-item-content>
      </v-list-item>
    </v-list>
  </div>
</template>


<script>
import { mapActions, mapState } from 'vuex'
import TodoMixin from "~/mixins/TodoMixin";
export default {
  mixins: [TodoMixin],
};
</script>
