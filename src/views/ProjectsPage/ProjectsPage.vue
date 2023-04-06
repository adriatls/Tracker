<template>
    <section class="projects">
        <h1 class="title">Projetos</h1>
        <form @submit.prevent="saveProject">
            <div class="field">
                <label for="projectName" class="label"> Nome do Projeto </label>
                <input
                    id="projectName"
                    type="text"
                    class="input"
                    v-model="projectName"
                    placeholder="Insira o nome do projeto"
                />
            </div>
            <div class="field">
                <button class="button" type="submit">
                    Salvar
                </button>
            </div>
        </form>
        <table class="table is-fullWidth">
            <thead>
                <tr>
                    <th>ID</th>
                    <th>Nome</th>
                </tr>
            </thead>
            <tbody>
                <tr v-for="project in projectsList" :key="project.id">
                    <td>{{ project.id }}</td>
                    <td>{{ project.name }}</td>
                </tr>
            </tbody>
        </table>
    </section>
</template>

<script lang="ts">
import { computed, defineComponent } from "vue";
import { useStore } from "@/store";

export default defineComponent({
  name: "ProjectsPage",
  data () {
    return {
        projectName: '',
    }
  },
  methods: {
    saveProject () {
        this.store.commit('SAVE_PROJECT', this.projectName)
        this.projectName = ''
    }
  },
  setup () {
    const store = useStore()
    return {
        store,
        projectsList: computed(() => store.state.projectsList)
    }
  }
});
</script>

<style scoped>
.projects {
    padding: 1.25rem;
}
h1, label {
    color: var(--text-primary);
}
table {
    margin-top: 1.25rem;
    border-radius: 6px 6px 0 0;
}
</style>
