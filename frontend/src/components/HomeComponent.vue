<template id="app">
  <div class="wrapper">
    <div class="container">
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
    </div>
  </div>
</template>

<script lang="ts">
import { Options, Vue } from 'vue-class-component'
import { useStore } from 'vuex'
import { key } from '@/store/datastore'
import LoginComponent from '@/components/LoginComponent.vue'

@Options({
  components: { LoginComponent }
})
export default class HomeComponent extends Vue {
  private store = useStore(key)

  private getShowSplashScreen() {
    return this.store.state.showSplashScreen
  }

  private getShowLoginScreen() {
    return this.store.state.currentUser === ''
  }
}
</script>

<style>
@font-face {
  font-family: 'Post no bills';
  src: local('Post no bills'),
    url(../assets/fonts/post-no-bills/postnobillscolombo-regular.ttf)
      format('truetype');
}

@font-face {
  font-family: 'Post no bills';
  font-weight: bold;
  src: local('Post no bills'),
    url(../assets/fonts/post-no-bills/postnobillscolombo-bold.ttf)
      format('truetype');
}

@font-face {
  font-family: 'Post no bills';
  font-weight: 150;
  src: local('Post no bills'),
    url(../assets/fonts/post-no-bills/postnobillscolombo-semibold.ttf)
      format('truetype');
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
  --main-color: #62d4a1;
  --secondary-color: #fff;
  --subheader-color: #707d93;
  --icon-color: #d4d3ea;
  --main-text-colour: #000000;
  --secondary-text-colour: #fff;
  --main-button-colour: #8a3eec;
  --main-selection-colour: #62d4a1;
  --main-input-colour: #fff;
}

@import url('https://fonts.googleapis.com/css2?family=Lato:ital,wght@0,400;0,700;1,300;1,400;1,700&display=swap');

#app {
  background-color: var(--main-color);
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;

  width: 100vw;
  height: 100vh;
}

* {
  font-family: 'Lato', sans-serif !important;
}

.wrapper {
  width: 100%;
  display: flex;
  justify-content: center;
}

.container {
  width: 500px;
}
</style>
