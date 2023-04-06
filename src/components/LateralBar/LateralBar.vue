<template>
  <header>
    <h1>Tracker</h1>
    <button class="button" @click="changeTheme">
      {{ buttonText }}
    </button>
  </header>
</template>

<script lang="ts">
import { defineComponent } from "vue";

export default defineComponent({
  name: 'LateralBar',
  emits: ['themeChanged'],
  data () {
    let isDarkMode = false;
    return {
      isDarkMode
    }
  },
  computed: {
    buttonText () {
      if (this.isDarkMode) {
        return 'Desativar modo escuro'
      } else {
        return 'Ativar modo escuro'
      }
    }
  },
  methods: {
    changeTheme () {
      this.isDarkMode = !this.isDarkMode
      this.$emit('themeChanged', this.isDarkMode )
    }
  },
})
</script>

<style scoped>
header {
  padding: 1rem;
  background: #0d3b66;
  width: 100%;
  height: 100vh;
  text-align: center;
}
h1 {
  color: white;
  margin-bottom: 12px;
}
@media only screen and (max-width: 768px) {
  header {
    padding: 2.5rem;
    height: auto;
  }
}
</style>