<template>
    <div
      class="is-flex is-align-items-center is-justify-content-space-between"
    >
      <timer-form :timeSeconds="timeSeconds"/>
      <button class="button" @click="play" :disabled="isTimerRunning">
        <span class="icon">
          <i class="fas fa-play"></i>
        </span>
        <span>play</span>
      </button>
      <button class="button" @click="stop" :disabled="!isTimerRunning">
        <span class="icon">
          <i class="fas fa-stop"></i>
        </span>
        <span>stop</span>
      </button>
    </div>
</template>

<script lang="ts">
import { defineComponent } from "vue";
import TimerForm from '../TimerForm/TimerForm.vue'

export default defineComponent({
  name: 'TimerControl',
  emits: ['finishedTask'],
  components: {
    TimerForm
  },
  data () {
    let timeSeconds = 0;
    let timer = 0;
    let isTimerRunning = false
    return {
      timeSeconds,
      timer,
      isTimerRunning
    }
  },
  methods: {
    play () {
      this.isTimerRunning = true;
      this.timer = setInterval(() => {
        this.timeSeconds++
      }, 1000)
    },
    stop () {
      clearInterval(this.timer)
      this.isTimerRunning = false;
      this.$emit('finishedTask', this.timeSeconds)
      this.timeSeconds = 0
    }
  },
})
</script>
