<template>
  <div>
    <v-form @submit.prevent="createTodo">
      <v-row class="align-center">
        <v-col cols="12" md="6">
          <v-text-field class="pt-5" v-model="newTodo"  placeholder="Add an item here"/>
        </v-col>
        <v-col cols="12" md="6">
          <v-btn rounded type="submit" color="primary">Add item</v-btn>
        </v-col>
      </v-row>
    </v-form>
  </div>
</template>

<script>
import TodoMixin from "~/mixins/TodoMixin";

export default {
mixins: [TodoMixin],
}
</script>
