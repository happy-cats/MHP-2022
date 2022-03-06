<template>
  <v-container
    class="dashboard-component"
    v-bind:style="{
      backgroundImage: 'url(' + require('@/assets/images/Background.png') + ')'
    }"
  >
    <div class="spaced">
      <v-img src="@/assets/images/avatar.jpg" alt="image" class="user-icon" />
      <h2 class="text greeting-text">Hello {{ getCurrentUser() }}</h2>
      <p class="text main-text">Let's avoid some CO2 emissions today</p>
    </div>
  </v-container>
</template>

<script lang="ts">
import { Options, Vue } from 'vue-class-component'
import { useStore } from 'vuex'
import { key } from '@/store/datastore'

@Options({
  name: 'header-component'
})
export default class HeaderComponent extends Vue {
  private store = useStore(key)

  private getCurrentUser() {
    return this.store.state.currentUser
  }

  private setView(view: string) {
    this.store.state.currentView = view
  }
}
</script>

<style lang="scss" scoped>
.user-icon {
  width: 50px;
  height: 50px;
  border-radius: 25px;
  border: 2px solid var(--secondary-color);
}

.greeting-text {
  margin-top: 15px;
  font-size: 1.6rem;
  font-weight: 700;
}

.main-text {
  font-size: 0.9rem;
  font-weight: lighter;
  margin-top: 5px;
}

.spaced {
  padding: 1.5rem 0 124px 0;
}

.header-component {
  display: flex;
  flex-direction: column;
  min-height: 200px;
  height: 20vh;
}

.text {
  color: var(--secondary-text-colour);
}
</style>

<style lang="scss">
.user-icon .v-img__img--contain {
  object-fit: cover;
}
</style>
