<template>
  <v-container class="main">
    <v-img src="@/assets/svg/Breeze.svg" alt="image" class="splash-screen" @click="hideSplash()"/>
  </v-container>
</template>

<script lang="ts">
import {Options, Vue} from 'vue-class-component';
import {useStore} from "vuex";
import {key} from "@/store/datastore";

@Options({
  name: "splash-screen-component"
})
export default class SplashScreenComponent extends Vue {
  private store = useStore(key);

  private hideSplash() {
    this.store.state.showSplashScreen = false;
  }

}
</script>

<style lang="scss" scoped>
.v-container {
  padding: 0;
}

.main {
  width: 100%;
  text-align: center;
  font-family: "Post no bills", Helvetica, Arial, serif;
  font-size: 3rem;
  color: var(--main-text-colour);
}

.splash-screen {
  height: 100%;
  width: 100%;
}
</style>