<template>
  <v-container class="footer-component">
    <v-toolbar
        elevation="16"
        outlined
        class="footer-toolbar"
    >
      <v-btn v-on:click="setView('Home')"
             :class="{'selected-menu-entry':store.state.currentView === 'Home' }"
      >
        <v-icon>mdi-home</v-icon>
      </v-btn>
      <v-btn v-on:click="setView('Challenges')"
             :class="{'selected-menu-entry':store.state.currentView === 'Challenges' }"
      >
        <v-icon>mdi-medal</v-icon>
      </v-btn>
      <v-btn v-on:click="setView('Map')"
             :class="{'selected-menu-entry':store.state.currentView === 'Map' }"
      >
        <v-icon>mdi-play</v-icon>
      </v-btn>
      <v-btn v-on:click="setView('Stats')"
             :class="{'selected-menu-entry':store.state.currentView === 'Stats' }"
      >
        <v-icon>mdi-poll</v-icon>
      </v-btn>
      <v-btn v-on:click="setView('Account')"
             :class="{'selected-menu-entry':store.state.currentView === 'Account' }"
      >
        <v-icon>mdi-account</v-icon>
      </v-btn>
    </v-toolbar>
  </v-container>
</template>

<script lang="ts">
import {Options, Vue} from 'vue-class-component';
import {useStore} from 'vuex';
import {key} from '@/store/datastore';

@Options({
  name: 'footer-component',
})
export default class FooterComponent extends Vue {
  private store = useStore(key);

  private setView(view: string) {
    this.store.state.currentView = view;
  }
}
</script>

<style lang="scss" scoped>
.footer-component {
  width: 100%;
  background-color: var(--secondary-color);
  border-top: 2px solid #000;
}

.footer-toolbar {
  display: flex;
  flex-direction: row;
}

</style>