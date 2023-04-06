<template>
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
</template>
  
<script lang="ts">
import { defineComponent } from 'vue'
import MainForm from '../../components/MainForm/MainForm.vue'
import FinishedTask from '../../components/FinishedTask/FinishedTask.vue'
import IFinishedTask from '../../Interfaces/IFinishedTask'
import LightYellowBox from '../../components/LightYellowBox/LightYellowBox.vue'

export default defineComponent({
  name: 'App',
  components: {
    MainForm,
    FinishedTask,
    LightYellowBox
  },
  data () {
    const tasks = [] as IFinishedTask[]
    return {
      tasks,
    }
  },
  methods: {
    saveTask (task: IFinishedTask) {
      this.tasks.push(task)
    },
  },
});
</script>

<style scoped>
.lista {
  padding: 1.25rem;
}

.content {
  background-color: var(--bg-secondary);
}

.lista {
  height: calc(100vh - 168px);
  overflow-y: auto;
}
::-webkit-scrollbar {
  width: 5px;
}

::-webkit-scrollbar-thumb {
  background: #888; 
}
::-webkit-scrollbar-thumb:hover {
  background: #555; 
}
@media only screen and (max-width: 768px) {
  .lista {
    max-height: calc(100vh - 364px);
  }
}
</style>
