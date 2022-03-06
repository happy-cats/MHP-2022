<template>
  <v-container class="home-screen-component">
    <h1>some content</h1>
  </v-container>
</template>

<script lang="ts">
import { Options, Vue } from 'vue-class-component'
import { useStore } from 'vuex'
import { key } from '@/store/datastore'

@Options({
  name: 'home-screen-component'
})
export default class HomeScreenComponent extends Vue {
  private store = useStore(key)
}
</script>

<style lang="scss" scoped>
.footer-component {
  width: 100%;
  background-color: var(--secondary-color);
}

.home-screen-component {
  display: flex;
  height: 50vh;
}
</style>
