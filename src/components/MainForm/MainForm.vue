<template>
  <div class="box form">
    <div class="columns controls-section">
      <div
        class="column is-8 input-container"
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
      <div class="column">
        <timer-crontrol @finished-task="finishTask"/>
      </div>
    </div>
  </div>
</template>

<script lang="ts">
import { defineComponent } from "vue";
import TimerCrontrol from "../TimerControl/TimerCrontrol.vue";

export default defineComponent({
  name: 'MainForm',
  components: {
    TimerCrontrol
  },
  emits: ['newTaskFinished'],
  data () {
    let taskTitle = ''
    return {
      taskTitle
    }
  },
  methods: {
    finishTask (timeSeconds: number) : void {
      this.$emit('newTaskFinished', {timeSeconds, taskTitle: this.taskTitle   })
      this.taskTitle = ''
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