<template>
  <div class="box form">
    <div class="columns controls-section">
      <div
        class="column is-5 input-container"
        role="form"
        aria-label="Formulário para criação de uma nova tarefa"
      >
        <input
          type="text"
          class="input"
          placeholder="Qual tarefa você deseja iniciar?"
          v-model="taskTitle"
        />
      </div>
      <div class="column is-3">
        <div class="select">
          <select v-model="projectId">
            <option value="">Selecione o projeto</option>
            <option
              :value="project.id"
              v-for="project in projectsList"
              :key="project.id"
            >
              {{ project.name }}
            </option>
          </select>
        </div>
      </div>
      <div class="column">
        <timer-crontrol @finished-task="finishTask"/>
      </div>
    </div>
  </div>
</template>

<script lang="ts">
import { computed, defineComponent } from "vue";
import TimerCrontrol from "../TimerControl/TimerCrontrol.vue";
import { useStore } from "vuex";
import { key } from "@/store";

export default defineComponent({
  name: 'MainForm',
  components: {
    TimerCrontrol
  },
  emits: ['newTaskFinished'],
  data () {
    return {
      taskTitle: '',
      projectId: ''
    }
  },
  methods: {
    finishTask (timeSeconds: number) : void {
      this.$emit('newTaskFinished', {
        timeSeconds,
        taskTitle: this.taskTitle,
        project: this.projectsList.find (proj => proj.id === this.projectId)
      })
      this.taskTitle = ''
    }
  },
  setup () {
    const store = useStore(key)
    return {
      projectsList: computed(() => store.state.projectsList),
    }
  },
})
</script>

<style>
.form {
  color: var(--text-primary);
  background-color: var(--bg-primary);
  border-radius: 0px 6px;
}

@media only screen and (max-width: 1024px) {
  .controls-section {
    display: flex;
    flex-direction: column;
  }
  .input-container {
    width: 100% !important;
  }
}
</style>