<template>
  <main class="columns is-gapless is-multiline">
    <div class="column is-one-quarter">
      <lateral-bar />
    </div>
    <div class="column is-three-quarter">
      <main-form />
    </div>
  </main>
</template>

<script lang="ts">
import { defineComponent } from 'vue';
import LateralBar from './components/LateralBar/LateralBar.vue';
import MainForm from './components/MainForm/MainForm.vue'

export default defineComponent({
  name: 'App',
  components: {
    LateralBar,
    MainForm,
  }
});
</script>

<style scoped>

</style>
