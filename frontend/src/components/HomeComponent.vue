<template id="app">
  <header-component></header-component>
  <main-component></main-component>
  <add-scenario-dialog></add-scenario-dialog>
  <add-item-dialog></add-item-dialog>
</template>

<script lang="ts">
import { Options, Vue } from 'vue-class-component'

@Options({})
export default class Site extends Vue {}
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
  --main-color: #2d323c;
  --secondary-color: #1e1d1b;
  --main-text-colour: #fff;
  --main-button-colour: #ff4d00;
  --main-selection-colour: #161a2f;
  --main-input-colour: #242830;
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
