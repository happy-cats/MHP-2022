<template>
  <v-container class="view-selection-container">
    <header-component></header-component>
    <dashboard-component class="dashboard" v-if="getView() === 'Home'"></dashboard-component>
    <home-screen-component class="dashboard" v-if="getView() === 'HomeScreen'"></home-screen-component>
    <footer-component class="footer"></footer-component>
  </v-container>
</template>

<script lang="ts">
import { Options, Vue } from 'vue-class-component'
import { useStore } from 'vuex'
import { key } from '@/store/datastore'
import HeaderComponent from '@/components/structure/HeaderComponent.vue'
import FooterComponent from '@/components/structure/FooterComponent.vue'
import DashboardComponent from '@/components/DashboardComponent.vue'
import HomeScreenComponent from "@/components/screens/HomeScreen.vue";

@Options({
  name: 'main-component',
  components: {HomeScreenComponent, FooterComponent, HeaderComponent, DashboardComponent }
})
export default class MainComponent extends Vue {
  private store = useStore(key)

  private getCurrentUser() {
    return this.store.state.currentUser
  }

  private getView() {
    return this.store.state.currentView;
  }
}
</script>

<style lang="scss" scoped>
.view-selection-container {
  padding: 0 !important;
  display: flex;
  justify-content: center;
  flex-direction: column;
  font-size: 1.2rem;
  font-weight: bold;
}

.dashboard {
  min-height: 60vh;
}
</style>
