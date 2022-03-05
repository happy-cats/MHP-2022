<template id="app">
  <div class="splash-screen-component" v-if="getShowSplashScreen()">
    <splash-screen-component></splash-screen-component>
  </div>
  <div class="main" v-if="!getShowSplashScreen()">
    <div class="login" v-if="getShowLoginScreen()">
      <login-component></login-component>
    </div>
    <div class="login" v-if="!getShowLoginScreen()">
      <main-component></main-component>
      <add-scenario-dialog></add-scenario-dialog>
      <add-item-dialog></add-item-dialog>
    </div>
  </div>
</template>

<script lang="ts">
import {Options, Vue} from 'vue-class-component'
import {useStore} from "vuex";
import {key} from "@/store/datastore";
import LoginComponent from "@/components/LoginComponent.vue";

@Options({
  components: {LoginComponent}
})
export default class HomeComponent extends Vue {
  private store = useStore(key);

  private getShowSplashScreen() {
    return this.store.state.showSplashScreen;
  }

  private getShowLoginScreen() {
    return this.store.state.currentUser === '';
  }
}
</script>

<style>
@font-face {
  font-family: 'Post no bills';
  src: local('Post no bills'),
  url(../assets/fonts/post-no-bills/postnobillscolombo-regular.ttf) format('truetype');
}

@font-face {
  font-family: 'Post no bills';
  font-weight: bold;
  src: local('Post no bills'),
  url(../assets/fonts/post-no-bills/postnobillscolombo-bold.ttf) format('truetype');
}

@font-face {
  font-family: 'Post no bills';
  font-weight: 150;
  src: local('Post no bills'),
  url(../assets/fonts/post-no-bills/postnobillscolombo-semibold.ttf) format('truetype');
}

@font-face {
  font-family: 'Saira';
  src: local('Saira'),
  url(../assets/fonts/saira/Saira-Regular.ttf) format('truetype');
}

@font-face {
  font-family: 'Saira';
  font-weight: bold;
  src: local('Saira'),
  url(../assets/fonts/saira/Saira-Bold.ttf) format('truetype');
}

@font-face {
  font-family: 'Saira';
  font-weight: 150;
  src: local('Saira'),
  url(../assets/fonts/saira/Saira-SemiBold.ttf) format('truetype');
}

:root {
  --main-color: #62D4A1;
  --secondary-color: #FFF;
  --icon-color: #D4D3EA;
  --main-text-colour: #000000;
  --secondary-text-colour: #FFF;
  --main-button-colour: #8A3EEC;
  --main-selection-colour: #62D4A1;
  --main-input-colour: #FFF;
}

#app {
  background-color: var(--main-color);
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;

  width: 100vw;
  height: 100vh;
}
</style>
