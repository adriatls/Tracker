import IProject from '@/Interfaces/IProject';
import { createStore, Store, useStore as vuexUseStore } from 'vuex';
import { InjectionKey } from 'vue';

interface State {
    projectsList: IProject[]
}

export const key: InjectionKey<Store<State>> = Symbol()

export const store = createStore<State>({
    state: {
        projectsList: [],
    },
    mutations: {
        'SAVE_PROJECT'(state, projectName: string) {
            const newProject: IProject = {
                name: projectName,
                id: new Date().toISOString()
            }
            state.projectsList.push(newProject)
        }
    }
})

export function useStore(): Store<State> {
    return vuexUseStore(key)
}