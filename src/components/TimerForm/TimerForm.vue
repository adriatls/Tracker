<template>
    <section>
      <strong class="display">
        {{ timePassed }}
      </strong>
    </section>
</template>

<script lang="ts">
import { defineComponent } from "vue";

export default defineComponent({
    name: 'TimerForm',
    props: {
        timeSeconds: {
            type: Number,
            default: 0
        }
    },
    computed: {
      timePassed () : string {
        return new Date(this.timeSeconds * 1000).toISOString().substr(11, 8)
      }
    },

})
</script>

<style scoped>
.display {
  color: var(--text-primary);
  background-color: var(--bg-primary);
  padding: 4px;
  border-radius: 6px;
}
</style>