<template>
  <v-dialog
      v-model="store.state.showAssignScenarioItemDialog"
      class="add-scenario-dialog">
    <div class="add-scenario-dialog-container">
      <v-card class="add-scenario-dialog-content">
        <v-card-title class="text-h5 text">
          Assign Scenario Item
        </v-card-title>

        <v-card-text class="card-body">
          <label for="item" class="text input-label">Item</label>
          <select id="item" class="text input-field" v-model="selectedItem">
            <option v-for="item in items" :key="item" :value="item.id">
              {{ item.name }}
            </option>
          </select>
        </v-card-text>

        <v-divider></v-divider>

        <v-card-actions>
          <v-spacer></v-spacer>
          <v-btn
              class="text button"
              @click="assignScenarioItem()"
          >Assign Item
          </v-btn>
        </v-card-actions>
      </v-card>
    </div>
  </v-dialog>
</template>

<script lang="ts">
import { Options, Vue } from 'vue-class-component';
import { useStore } from 'vuex';
import { Item, key, Scenario } from '@/store/datastore';
import { Prop } from 'vue-property-decorator';

@Options({
  name: 'assign-scenario-item-dialog',
})
export default class AssignScenarioItemDialog extends Vue {
  @Prop() private scenario: Scenario = {id: '', title: '', items: []};

  private store = useStore(key);
  private selectedItem = '';
  private items: Item[] = [];

  updated() {
    if (this.store.state.items[0]) {
      this.items = this.store.state.items;
      this.selectedItem = this.store.state.items[0].id;
    }
  }

  private assignScenarioItem() {
    const item = this.items.filter((it) => it.id === this.selectedItem)[0];
    this.scenario.items.push(item);
    this.store.state.showAssignScenarioItemDialog = false;
  }
}
</script>

<style scoped>
select {
  padding-left: 10px;
}

.add-scenario-dialog {
  color: var(--main-text-colour);
}

.add-scenario-dialog-container {
  display: flex;
  justify-content: center;
}

.add-scenario-dialog-content {
  background-color: var(--main-color);
  display: flex;
  flex-direction: column;
  max-width: 90%;
  min-width: 85vw;
  border: 2px solid var(--main-text-colour);
  border-radius: 15px;
}

.card-body {
  display: flex;
  color: var(--main-text-colour);
  flex-direction: column;
}

.text {
  color: var(--main-text-colour);
}

.input-label {
  font-size: 1.2rem;
  padding-bottom: 5px;
}

.input-field {
  background-color: var(--main-input-colour);
  height: 2rem;
  font-size: 1.3rem;
}

.button {
  background-color: var(--main-button-colour);
  border-radius: 10px;
  border: 1px solid;
  margin-right: 10px;
}
</style>