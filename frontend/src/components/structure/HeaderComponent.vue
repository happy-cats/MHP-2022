<template>
  <v-container class="dashboard-component">
    <div class="spaced">
      <v-img src="@/assets/images/keys.png" alt="image" class="user-icon"/>
      <h2 class="text"> Hello {{ getCurrentUser() }}</h2>
      <p class="text">Let's avoid some CO2 emissions today</p>
    </div>
  </v-container>
</template>

<script lang="ts">
import {Options, Vue} from 'vue-class-component';
import {useStore} from 'vuex';
import {key} from '@/store/datastore';

@Options({
  name: 'header-component',
})
export default class HeaderComponent extends Vue {
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
.user-icon {
  width: 50px;
  height: 50px;
}

.spaced {
  padding: 1.5rem;
}

.header-component {
  display: flex;
  flex-direction: column;
  min-height: 200px;
  height: 20vh;
}

.text {
  color: var(--secondary-text-colour);
}
</style>