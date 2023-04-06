import IProject from '@/Interfaces/IProject';
import { createStore, Store } from 'vuex';
import { InjectionKey } from 'vue';

interface State {
    projectsList: IProject[]
}

export const key: InjectionKey<Store<State>> = Symbol()

export const store = createStore<State>({
    state: {
        projectsList: [
            {
                id: new Date().toISOString(),
                name: 'TypeScript'
            },
            {
                id: new Date().toISOString(),
                name: 'Vue'
            },
            {
                id: new Date().toISOString(),
                name: 'Vuex'
            }
        ],
    }
})