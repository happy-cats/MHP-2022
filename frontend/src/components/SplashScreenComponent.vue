<template>
<<<<<<< HEAD
  <v-container class="main">
    <v-img
      src="@/assets/svg/logo.svg"
      alt="image"
      class="splash-screen"
      @click="hideSplash()"
    />
=======
  <v-container class="main" v-bind:style="{ backgroundImage: 'url(' + require('@/assets/svg/Breeze.svg') + ')' }">
    <div></div>
>>>>>>> fcd7996dd073591fe3a4da9dc41b35f2a92d46e5
  </v-container>
</template>

<script lang="ts">
import { Options, Vue } from 'vue-class-component'
import { useStore } from 'vuex'
import { key } from '@/store/datastore'

@Options({
  name: 'splash-screen-component'
})
export default class SplashScreenComponent extends Vue {
  private store = useStore(key)

  private hideSplash() {
    this.store.state.showSplashScreen = false
  }
}
</script>

<style lang="scss" scoped>
.v-container {
  padding: 0;
}

.main {
  width: 100%;
  height: 100vh;
  text-align: center;
  font-size: 3rem;
  color: var(--main-text-colour);
  display: flex;
  align-items: center;
  justify-content: center;
}

.splash-screen {
  max-width: 300px;
}
</style>
