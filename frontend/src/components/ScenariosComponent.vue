<template>
  <v-container class="scenario-selection">
    <div class="scenario-item-container">
      <v-row v-for="scenario in getScenarios()" :key="scenario" class="scenario-item-entry">
        <v-col class="scenario-item">
          <div class="scenario-item-title">
            <div class="scenario-item-text" v-on:click="setScenario(scenario.id)">{{ scenario.title }}</div>
            <div></div>
            <v-icon class="scenario-item-delete-icon" v-on:click="removeScenario(scenario.id)">mdi-delete</v-icon>
          </div>
          <div v-if="currentScenario === scenario.id">
            <div class="scenario-item-item"
                 v-for="item in scenario.items" :key="item">
              <item-component :item="item" :scenario="scenario"></item-component>
            </div>
            <div class="icon-container--center">
              <v-icon class="scenario-item-add-icon icon--small" v-on:click="assignScenarioItem()">mdi-plus</v-icon>
            </div>
          </div>
        </v-col>
      </v-row>
      <v-row class="scenario-item-entry">
        <v-icon class="scenario-item-add-icon" v-on:click="addScenario()">mdi-plus</v-icon>
      </v-row>
    </div>
    <assign-scenario-item-dialog :scenario="getSelectedScenario()"></assign-scenario-item-dialog>
  </v-container>
</template>

<script lang="ts">
import { Options, Vue } from 'vue-class-component';
import { useStore } from 'vuex';
import { key, Scenario } from '@/store/datastore';

@Options({
  name: 'scenarios-component',
})
export default class ScenariosComponent extends Vue {
  private store = useStore(key);
  private currentScenario: string = '';

  private getScenarios(): Scenario[] {
    return this.store.state.scenarios;
  }

  private getSelectedScenario(): Scenario {
    return this.store.state.scenarios.filter((it) => it.id === this.currentScenario)[0];
  }

  private addScenario() {
    this.store.state.showAddScenarioDialog = true;
  }

  private removeScenario(uuid: string) {
    this.store.state.scenarios = this.store.state.scenarios.filter((it) => it.id !== uuid);
  }

  private setScenario(uuid: string) {
    if (this.currentScenario === uuid) {
      this.currentScenario = '';
    } else {
      this.currentScenario = uuid;
    }
  }

  private assignScenarioItem() {
    this.store.state.showAssignScenarioItemDialog = true;
  }
}
</script>

<style scoped>
.scenario-selection {
  color: var(--main-text-colour);
  background-color: var(--secondary-color);
  height: 100%;
}

.scenario-item-container {
  margin-top: 25px;
}

.scenario-item-entry {
  display: flex;
  margin: 0;
  padding: 10px;
  justify-content: center;
}

.scenario-item {
  color: var(--main-text-colour);
  border: 2px solid;
  border-radius: 15px;
}

.scenario-item-item {
  margin: 10px 0;
}

.scenario-item-item .v-container {
  color: var(--main-text-colour);
  padding: 5px;
  border: 2px solid;
  border-radius: 10px;
}

.scenario-item-title {
  display: flex;
  justify-content: space-between;
  font-family: "Saira", Helvetica, Arial, serif;
  font-size: 1.5rem;
  max-width: 100%;
}

.scenario-item-text {
  margin-left: 5%;
}

.scenario-item-add-icon {
  display: flex;
  color: var(--main-text-colour);
  background-color: var(--main-button-colour);
  width: 40px;
  height: 40px;
  border-radius: 20px;
  border: 2px solid;
}


.icon--small {
  width: 20px;
  height: 20px;
  border-radius: 10px;
  border: 1px solid;
}

.icon-container--center {
  display: flex;
  width: 100%;
  justify-content: center;
}

.scenario-item-delete-icon {
  color: var(--main-button-colour);
  display: flex;
  align-self: center;
  font-size: 2rem;
  margin-right: 10px;
}
</style>