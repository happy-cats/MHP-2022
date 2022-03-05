<template>
  <v-container class="view-selection-container">
    <div class="view-selection">
      <div v-on:click="setView('Scenario')"
           class="menu-entry"
           :class="{'selected-menu-entry':store.state.currentView === 'Scenario' }">
        Scenarios
      </div>
      <div class="view-selection-separator">|</div>
      <div v-on:click="setView('Items')"
           class="menu-entry"
           :class="{'selected-menu-entry':store.state.currentView === 'Items' }">Items</div>
    </div>
  </v-container>
  <scenarios-component v-if="store.state.currentView === 'Scenario'"></scenarios-component>
  <items-component v-if="store.state.currentView === 'Items'"></items-component>
</template>

<script lang="ts">
import { Options, Vue } from 'vue-class-component';
import { useStore } from 'vuex';
import { key } from '@/store/datastore';

@Options({
  name: 'main-component',
})
export default class MainComponent extends Vue {
  private store = useStore(key);

  private setView(view: string) {
    this.store.state.currentView = view;
  }
}
</script>

<style lang="scss" scoped>
.view-selection-container {
  padding: 1.5em;
  display: flex;
  justify-content: center;
  font-family: "Saira", Helvetica, Arial, serif;
  font-size: 1.2rem;
  font-weight: bold;
}

.view-selection {
  display: flex;
  color: var(--main-text-colour);
  width: 100%;
  justify-content: space-around;
  background-color: var(--main-selection-colour);
  padding: 5px;
  border-radius: 15px;
}

.selected-menu-entry {
  background-color: var(--main-color);
  border-radius: 10px;
}

.menu-entry {
  padding: 0 10px;
}

.view-selection-separator {
  margin: 0 -15%;
}
</style>