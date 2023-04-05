<template>
  <main class="columns is-gapless is-multiline">
    <div class="column is-one-quarter">
      <lateral-bar />
    </div>
    <div class="column is-three-quarter">
      <main-form @newTaskFinished="saveTask"/>
      <div class="lista">
        <finished-task
          v-for="(task, index) in tasks"
          :task="task"
          :key="index"/>
      </div>
    </div>
  </main>
</template>

<script lang="ts">
import { defineComponent } from 'vue';
import LateralBar from './components/LateralBar/LateralBar.vue';
import MainForm from './components/MainForm/MainForm.vue'
import FinishedTask from './components/FinishedTask/FinishedTask.vue';
import IFinishedTask from './Interfaces/IFinishedTask'

export default defineComponent({
  name: 'App',
  components: {
    LateralBar,
    MainForm,
    FinishedTask
  },
  data () {
    const tasks = [] as IFinishedTask[]
    return {
      tasks
    }
  },
  methods: {
    saveTask (task: IFinishedTask) {
      this.tasks.push(task)
    }
  },
});
</script>

<style scoped>
.lista {
  padding: 1.25rem;
}
</style>
