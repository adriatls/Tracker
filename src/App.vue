<template>
  <main 
    class="columns is-gapless is-multiline"
    :class="{'dark-mode': isDarkMode}"
  >
    <div class="column is-one-quarter">
      <lateral-bar @themeChanged="changeTheme"/>
    </div>
    <div class="column is-three-quarter content">
      <router-view/>
    </div>
  </main>
</template>

<script lang="ts">
import { defineComponent } from 'vue'
import LateralBar from './components/LateralBar/LateralBar.vue'

export default defineComponent({
  name: 'App',
  components: {
    LateralBar,
  },
  data () {
    let isDarkMode = false
    return {
      isDarkMode
    }
  },
  methods: {
    changeTheme (isDarkMode: boolean) {
      this.isDarkMode = isDarkMode
    },
  },
});
</script>

<style scoped>

.main {
  --bg-primary: #fff;
  --bg-secondary: #fff;
  --text-primary: #000;
}
main.dark-mode {
  --bg-primary: #2b2d42;
  --bg-secondary: #353851;
  --text-primary: #ddd;
}
.content {
  background-color: var(--bg-secondary);
}
</style>
