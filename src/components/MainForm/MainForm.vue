<template>
  <div class="box">
    <div class="columns">
      <div
        class="column is-8"
        role="form"
        aria-label="Formulário para criação de uma nova tarefa"
      >
        <input
          type="text"
          class="input"
          placeholder="Qual tarefa você deseja iniciar?"
        />
      </div>
      <div class="column">
        <div
          class="is-flex is-align-items-center is-justify-content-space-between"
        >
          <section>
            <strong>
              {{ timePassed }}
            </strong>
          </section>
          <button class="button" @click="play">
            <span class="icon">
              <i class="fas fa-play"></i>
            </span>
            <span>play</span>
          </button>
          <button class="button" @click="stop">
            <span class="icon">
              <i class="fas fa-stop"></i>
            </span>
            <span>stop</span>
          </button>
        </div>
      </div>
    </div>
  </div>
</template>

<script lang="ts">
import { defineComponent } from "vue";

export default defineComponent({
  name: 'MainForm',
  data () {
    let timeSeconds = 0;
    let timer = 0;
    return {
      timeSeconds,
      timer
    }
  },
  computed: {
    timePassed () : string {
      return new Date(this.timeSeconds * 1000).toISOString().substr(11, 8)
    }
  },
  methods: {
    play () {
      this.timer = setInterval(() => {
        this.timeSeconds++
      }, 1000)
    },
    stop () {
      clearInterval(this.timer)
    }
  },
})
</script>

<style scoped>

</style>