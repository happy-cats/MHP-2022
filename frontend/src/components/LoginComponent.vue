<template>
  <v-container
    class="login-component"
    v-bind:style="{
      backgroundImage: 'url(' + require('@/assets/images/Background.png') + ')'
    }"
  >
    <form class="main">
      <div class="header">Log in</div>
      <div class="input">
        <label for="username" class="text input-label">Username</label>
        <div class="combined_input">
          <v-icon class="combined_input--icon">
            mdi-account
          </v-icon>
          <input
            type="text"
            id="username"
            class="text input-field"
            v-model="username"
            required
          />
        </div>
      </div>
      <div class="input">
        <label for="password" class="text input-label">Password</label>
        <div class="combined_input">
          <v-icon class="combined_input--icon">
            mdi-lock
          </v-icon>
          <input
            type="password"
            id="password"
            class="text input-field"
            v-model="password"
            required
          />
        </div>
      </div>
      <button type="submit" class="login-button" @click="login()">
        Log in
      </button>
    </form>
  </v-container>
</template>

<script lang="ts">
import { Options, Vue } from 'vue-class-component'
import { useStore } from 'vuex'
import { key } from '@/store/datastore'

@Options({
  name: 'login-component'
})
export default class LoginComponent extends Vue {
  private store = useStore(key)
  private username = ''
  private password = ''

  private login() {
    if (this.password !== '' && this.username !== '')
      this.store.state.currentUser = this.username
  }
}
</script>

<style lang="scss" scoped>
.v-container {
  padding: 0;
}

.background {
  position: fixed;
  z-index: 5;
}

.main {
  display: flex;
  flex-direction: column;
  padding: 0 10%;
  z-index: 10;
}

.text {
  color: var(--secondary-color);
}

.input {
  display: flex;
  flex-direction: column;
  padding-bottom: 10px;
}

.combined_input {
  color: var(--main-text-colour);
  background-color: var(--secondary-color);
  padding: 7px;
  border-radius: 7px;
}

.combined_input--icon {
  padding-right: 5px;
  color: var(--main-button-colour);
}

.input-label {
  padding-bottom: 5px;
}

.input-field {
  color: var(--main-text-colour);
  background-color: var(--secondary-color);
}

.header {
  color: var(--secondary-color);
  font-weight: bold;
  padding-top: 18vh;
  padding-bottom: 10%;
  font-size: 1.6rem;
}

.login-button {
  background-color: var(--main-button-colour);
  padding: 7px;
  border-radius: 7px;
  color: var(--secondary-color);
  margin-top: 25px;
}
</style>
