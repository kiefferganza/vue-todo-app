<template>
  <div>
    <v-container class="d-flex justify-center">
      <v-card class="mx-5 my-5 pb-5" max-width="374">
        <v-card-title>Checklist</v-card-title>
        <todo-toggle @toggle="toggleTaskLists"/>
        <pending-task v-if="!showCompleted"/>
        <completed-tasks v-else />
        <TodoForm class="ml-3" />
      </v-card>
    </v-container>
  </div>
</template>

<script>
import PendingTask from "~/components/Todo/components/PendingTask";
import CompletedTasks from "~/components/Todo/components/CompletedTasks";
import TodoForm from "~/components/Todo/components/TodoForm";
import TodoToggle from "~/components/Todo/components/TodoToggle";
import TodoMixin from "~/mixins/TodoMixin";
export default {
  mixins: [TodoMixin],
  components: { PendingTask, CompletedTasks, TodoForm, TodoToggle },
  data() {
    return {
      showCompleted: false,
    }
  },
  methods: {
    toggleTaskLists(data) {
      this.showCompleted = data
    },
  }
};
</script>
