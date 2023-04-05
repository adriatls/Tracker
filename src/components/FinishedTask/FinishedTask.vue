<template>
  <div class="box has-text-weight-bold">
    <div class="columns">
        <div class="column is-7">
            <p>{{ task.taskTitle || 'Tarefa sem título' }}</p>
        </div>
        <div class="column">
            <timer-form :timeSeconds="task.timeSeconds"/>
        </div>
    </div>
  </div>
</template>

<script lang="ts">
import { defineComponent, PropType } from "vue";
import TimerForm from "../TimerForm/TimerForm.vue";
import IFinishedTask from "@/Interfaces/IFinishedTask";

export default defineComponent({
    name: 'FinishedTask',
    components: {
        TimerForm,
    },
    props: {
        task: {
            type: Object as PropType<IFinishedTask>,
            required: true,
        },
    },
})
</script>

<style scoped>
.box {
    background-color: #FAF0CA;
}
</style>