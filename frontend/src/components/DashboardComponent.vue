<template>
  <v-container class="dashboard-container">
    <v-card class="journey">
      <v-card-title class="text-h5 text">
        New journey
      </v-card-title>

      <v-card-text class="card-body">
        <v-toolbar dense class="search-bar">
          <v-btn icon>
            <v-icon>mdi-magnify</v-icon>
          </v-btn>
          <input type="text" class="text-field">
        </v-toolbar>
      </v-card-text>
      <v-card-actions>
        <v-btn class="text button" @click="testBeep()">Home</v-btn>
        <v-spacer></v-spacer>
        <v-btn class="text button" @click="addItem()">Work</v-btn>
      </v-card-actions>
    </v-card>
    <v-card class="challenges">
      <v-card-title class="text-h5 text">
        Challenges
      </v-card-title>

      <v-card-text class="card-body">
        <div>
          10 days without a car
        </div>
      </v-card-text>

      <v-divider></v-divider>
    </v-card>
    <v-card class="your-journeys">
      <v-card-title class="text-h5 text">
        Your journeys
      </v-card-title>

      <v-card-text class="card-body">
        <div>
          something something 8 pts
        </div>
        <v-divider></v-divider>
        <div>
          something something  7pts
        </div>
      </v-card-text>
    </v-card>
  </v-container>
</template>

<script lang="ts">
import {Options, Vue} from 'vue-class-component';
import {useStore} from 'vuex';
import {key} from '@/store/datastore';

@Options({
  name: 'dashboard-component',
  components: {},
})
export default class DashboardComponent extends Vue {
  private store = useStore(key);

  private getCurrentUser() {
    return this.store.state.currentUser;
  }

  private setView(view: string) {
    this.store.state.currentView = view;
  }
}
</script>

<style lang="scss" scoped>
.dashboard-container {
  display: flex;
  flex-direction: column;
  background-color: var(--secondary-color);
}

.text-field {
  width: 150px;
  background-color: var(--secondary-color);
}

.search-bar {
  border: 1px solid #000;
  width: 100%;
}

.buttons {
  display: flex;
  justify-content: space-around;
}

.button {
  padding: 0 2rem;
  color: var(--secondary-color);
  background-color: var(--main-button-colour);
}
</style>