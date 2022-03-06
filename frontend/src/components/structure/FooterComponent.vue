<template>
  <v-container class="footer-component">
    <v-toolbar elevation="16" outlined class="footer-toolbar">
      <v-btn
        class="footer-btn"
        v-on:click="setView('Home')"
        :class="{ 'selected-menu-entry': store.state.currentView === 'Home' }"
      >
        <v-icon class="icon">mdi-home</v-icon>
      </v-btn>
      <v-btn
        class="footer-btn"
        v-on:click="setView('Challenges')"
        :class="{
          'selected-menu-entry': store.state.currentView === 'Challenges'
        }"
      >
        <v-icon class="icon">mdi-medal</v-icon>
      </v-btn>
      <v-btn
        class="footer-btn"
        v-on:click="setView('Map')"
        :class="{ 'selected-menu-entry': store.state.currentView === 'Map' }"
      >
        <v-icon class="icon">mdi-play</v-icon>
      </v-btn>
      <v-btn
        class="footer-btn"
        v-on:click="setView('Stats')"
        :class="{ 'selected-menu-entry': store.state.currentView === 'Stats' }"
      >
        <v-icon class="icon">mdi-poll</v-icon>
      </v-btn>
      <v-btn
        class="footer-btn"
        v-on:click="setView('Account')"
        :class="{
          'selected-menu-entry': store.state.currentView === 'Account'
        }"
      >
        <v-icon class="icon">mdi-account</v-icon>
      </v-btn>
    </v-toolbar>
  </v-container>
</template>

<script lang="ts">
import { Options, Vue } from 'vue-class-component'
import { useStore } from 'vuex'
import { key } from '@/store/datastore'

@Options({
  name: 'footer-component'
})
export default class FooterComponent extends Vue {
  private store = useStore(key)

  private setView(view: string) {
    this.store.state.currentView = view
  }
}
</script>

<style lang="scss" scoped>
.footer-component {
  width: 100%;
  background-color: var(--secondary-color);
  box-shadow: 0px -3px 8px rgba(96, 97, 112, 0.16);
}

.footer-toolbar {
  display: flex;
  flex-direction: row;
  justify-content: space-between;
}

.icon {
  color: var(--icon-color);
  font-size: 2rem !important;
}
</style>

<style lang="scss">
.footer-toolbar .v-btn--elevated {
  box-shadow: none;
}
</style>
