<template>
  <v-row class="py-2 px-1" justify="start">
    <v-col
      cols="12"
      sm="10"
      md="8"
    >
        <v-chip-group
          mandatory
          active-class="primary--text"
        >
          <v-chip @click="toggleShowCompleted(false)">
            Pending
          </v-chip>
          <v-chip @click="toggleShowCompleted(true)">
            Completed
          </v-chip>
        </v-chip-group>
    </v-col>
  </v-row>
</template>

<script>
import TodoMixin from "~/mixins/TodoMixin";

export default {
  mixins: [TodoMixin]
}
</script>
