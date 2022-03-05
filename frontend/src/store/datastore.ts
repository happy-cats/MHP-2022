import { InjectionKey } from 'vue';
import { createStore, Store } from 'vuex';
import { v4 as uuidv4 } from 'uuid';

export interface State {
  showAddScenarioDialog: Boolean,
  showAddItemDialog: Boolean,
  showAssignScenarioItemDialog: Boolean,
  currentView: string,
  scenarios: Scenario[],
  items: Item[],
}

export interface Scenario {
  id: string,
  title: string,
  items: Item[]
}

export interface Item {
  id: string,
  name: string,
  image: string, // base64,
  ssid: string
}

export const key: InjectionKey<Store<State>> = Symbol();

export const store = createStore<State>({
  state: {
    currentView: 'Scenario',
    showAddScenarioDialog: false,
    showAddItemDialog: false,
    showAssignScenarioItemDialog: false,
    scenarios: [
      {
        id: uuidv4(), title: 'Work',
        items: [
          {id: uuidv4(), name: 'Keys', image: '@/assets/images/keys.png',ssid: '123'},
          {id: uuidv4(), name: 'Wallet', image: '',ssid: '123'},
          {id: uuidv4(), name: 'Briefcase', image: '',ssid: '123'},
          {id: uuidv4(), name: 'Headphones', image: '',ssid: '123'},
          {id: uuidv4(), name: 'Sunglasses', image: '',ssid: '123'},
        ],
      },
      {
        id: uuidv4(), title: 'Going out', items: [
          {id: uuidv4(), name: 'Keys', image: '',ssid: '123'},
          {id: uuidv4(), name: 'Wallet', image: '',ssid: '123'},
          {id: uuidv4(), name: 'Briefcase', image: '',ssid: '123'},
          {id: uuidv4(), name: 'Headphones', image: '',ssid: '123'},
          {id: uuidv4(), name: 'Sunglasses', image: '',ssid: '123'},
        ],
      },
      {
        id: uuidv4(), title: 'Exam', items: [
          {id: uuidv4(), name: 'Keys', image: '',ssid: '123'},
          {id: uuidv4(), name: 'Wallet', image: '',ssid: '123'},
          {id: uuidv4(), name: 'StudentId', image: '',ssid: '123'},
          {id: uuidv4(), name: 'Pencil', image: '',ssid: '123'},
        ],
      },
    ],
    items:[
      {id: uuidv4(), name: 'Keys',image:'', ssid:'device 1'},
      {id: uuidv4(), name: 'Wallet',image:'', ssid:'device 2'},
      {id: uuidv4(), name: 'Briefcase',image:'', ssid:'device 3'},
      {id: uuidv4(), name: 'Headphones',image:'', ssid: 'device 4'},
      {id: uuidv4(), name: 'Sunglasses',image:'', ssid: 'device 5'},
      {id: uuidv4(), name: 'StudentId',image:'', ssid: 'device 6'},
      {id: uuidv4(), name: 'Pencil',image:'', ssid: 'device 7'},
    ]
  },
});