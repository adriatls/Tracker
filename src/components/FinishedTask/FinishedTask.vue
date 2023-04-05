<template>
    <light-yellow-box>
        <div class="columns">
            <div class="column is-7">
                <p>{{ task.taskTitle || 'Tarefa sem título' }}</p>
            </div>
            <div class="column">
                <timer-form :timeSeconds="task.timeSeconds"/>
            </div>
        </div>
    </light-yellow-box>
</template>

<script lang="ts">
import { defineComponent, PropType } from "vue";
import TimerForm from "../TimerForm/TimerForm.vue";
import IFinishedTask from "@/Interfaces/IFinishedTask";
import LightYellowBox from "../LightYellowBox/LightYellowBox.vue";

export default defineComponent({
    name: 'FinishedTask',
    components: {
        TimerForm,
        LightYellowBox
    },
    props: {
        task: {
            type: Object as PropType<IFinishedTask>,
            required: true,
        },
    },
})
</script>
