<template>
  <header>
    <div class="project-name">
      <img src="../../assets/chronograph-watch.png" alt="ícone de cronômetro" />
      <h1>Tracker</h1>
    </div>
    <div class="has-text-centerd">
      <button class="button" @click="changeTheme">
        {{ buttonText }}
      </button>
    </div>
    <nav class="panel mt-5">
      <ul>
        <li>
          <router-link to="/" class="link">
            <i class="fas fa-tasks"></i>
            Página Inicial
          </router-link>
        </li>
        <li>
          <router-link to="/projects" class="link">
            <i class="fas fa-project-diagram"></i>
            Projetos
          </router-link>
        </li>
      </ul>
    </nav>
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
  font-weight: bold;
  font-size: 28px;
  margin-bottom: 12px;
}
img {
  filter: invert(100%) sepia(0%) saturate(0%) hue-rotate(87deg) brightness(107%) contrast(101%);
}
.panel li {
  margin: 8px 0;
}
.link {
  color: #fff;
}
.link:hover {
  color: #FAF0CA;
}
.link.router-link-active {
  color: #FAF0CA;
}

@media screen and (min-width : 769px) and (max-width : 910px) {
  .button {
    padding: 7px;
  }
}

@media only screen and (max-width: 768px) {
  header {
    padding: 2.5rem;
    height: auto;
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    align-items: center;
  }
  .project-name {
    display: flex;
    justify-content: center;
    align-items: center;
    margin-bottom: 12px;
  }
  h1 {
    margin-bottom: 0;
  }
}
</style>