<template>
  <v-container class="main">
    <v-img
      src="@/assets/svg/logo.svg"
      alt="image"
      class="splash-screen"
      @click="hideSplash()"
    />
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
