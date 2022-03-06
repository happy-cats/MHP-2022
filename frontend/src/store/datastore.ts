import { InjectionKey } from 'vue';
import { createStore, Store } from 'vuex';

export interface State {
  showSplashScreen: Boolean,
  currentUser: String,
  showAssignScenarioItemDialog: Boolean,
  currentView: string,
}


export const key: InjectionKey<Store<State>> = Symbol();

export const store = createStore<State>({
  state: {
    currentView: 'Home',
    showAssignScenarioItemDialog: false,
    showSplashScreen: true,
    currentUser: ''
  },
});