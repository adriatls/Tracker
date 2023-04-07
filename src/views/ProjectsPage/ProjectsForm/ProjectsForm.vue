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
    </section>
</template>

<script lang="ts">
import { defineComponent } from "vue";
import { useStore } from "@/store";

export default defineComponent({
  name: "ProjectsForm",
  data () {
    return {
        projectName: '',
    }
  },
  props: {
    id: {
        type: String,
    }
  },
  mounted () {
    if (this.id) {
        const project = this.store.state.projectsList
            .find( proj => proj.id === this.id)
        this.projectName = project?.name || ''
    }
  },
  methods: {
    saveProject () {
        if (this.id) {
            this.store.commit('EDIT_PROJECT', {
                id: this.id,
                name: this.projectName
            })
        } else {
            this.store.commit('SAVE_PROJECT', this.projectName)
        }
        this.projectName = ''
        this.$router.push('/projects')
    }
  },
  setup () {
    const store = useStore()
    return {
        store,
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
</style>
