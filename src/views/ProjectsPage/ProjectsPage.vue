<template>
    <section class="projects">
        <h1 class="title">Projetos</h1>
        <router-link to="/projects/new" class="button">
            <span class="icon is-small">
              <i class="fas fa-plus"></i>
            </span>
            <span>Novo projeto</span>
        </router-link>
        <table class="table is-fullWidth">
            <thead>
                <tr>
                    <th>ID</th>
                    <th>Nome</th>
                    <th>Ações</th>
                </tr>
            </thead>
            <tbody>
                <tr v-for="project in projectsList" :key="project.id">
                    <td>{{ project.id }}</td>
                    <td>{{ project.name }}</td>
                    <td>
                        <router-link :to="`/projects/${project.id}`" class="button">
                            <span class="icon is-small">
                              <i class="fas fa-pencil-alt"></i>
                            </span>
                        </router-link>
                    </td>
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
  setup () {
    const store = useStore()
    return {
        projectsList: computed(() => store.state.projectsList)
    }
  }
});
</script>

<style scoped>
.projects {
    padding: 1.25rem;
}
h1 {
    color: var(--text-primary);
}
table {
    margin-top: 1.25rem;
    border-radius: 6px 6px 0 0;
}
</style>
