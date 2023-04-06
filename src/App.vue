<template>
  <main 
    class="columns is-gapless is-multiline"
    :class="{'dark-mode': isDarkMode}"
  >
    <div class="column is-one-quarter">
      <lateral-bar @themeChanged="changeTheme"/>
    </div>
    <div class="column is-three-quarter content">
      <main-form @newTaskFinished="saveTask"/>
      <div class="lista">
        <finished-task
          v-for="(task, index) in tasks"
          :task="task"
          :key="index"
        />
        <light-yellow-box v-if="!tasks.length">
          <p>Você não realizou tarefas ainda</p>
        </light-yellow-box>
      </div>
    </div>
  </main>
</template>

<script lang="ts">
import { defineComponent } from 'vue'
import LateralBar from './components/LateralBar/LateralBar.vue'
import MainForm from './components/MainForm/MainForm.vue'
import FinishedTask from './components/FinishedTask/FinishedTask.vue'
import IFinishedTask from './Interfaces/IFinishedTask'
import LightYellowBox from './components/LightYellowBox/LightYellowBox.vue'

export default defineComponent({
  name: 'App',
  components: {
    LateralBar,
    MainForm,
    FinishedTask,
    LightYellowBox
  },
  data () {
    const tasks = [] as IFinishedTask[]
    let isDarkMode = false
    return {
      tasks,
      isDarkMode
    }
  },
  methods: {
    saveTask (task: IFinishedTask) {
      this.tasks.push(task)
    },
    changeTheme (isDarkMode: boolean) {
      this.isDarkMode = isDarkMode
    },
  },
});
</script>

<style scoped>
.lista {
  padding: 1.25rem;
}

.main {
  --bg-primary: #fff;
  --text-primary: #000;
}
main.dark-mode {
  --bg-primary: #2b2d42;
  --text-primary: #ddd;
}
.content {
  background-color: var(--bg-primary);
}
</style>
