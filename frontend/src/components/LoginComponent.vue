<template>
  <v-container>
    <form class="main">
      <div class="header">Log in</div>
      <div class="input">
        <label for="username" class="text input-label">Username</label>
        <input
            type="text"
            id="username"
            class="text input-field"
            v-model="username"
            placeholder="Username"
            required
        />
      </div>
      <div class="input">
        <label for="password" class="text input-label">Password</label>
        <input
            type="password"
            id="password"
            class="text input-field"
            v-model="password"
            placeholder="Password"
            required
        />
      </div>
      <button type="submit" class="login-button" @click="login()">Log in</button>
    </form>
  </v-container>
</template>

<script lang="ts">
import {Options, Vue} from 'vue-class-component';
import {useStore} from "vuex";
import {key} from "@/store/datastore";

@Options({
  name: "login-component"
})
export default class LoginComponent extends Vue {
  private store = useStore(key);
  private username = '';
  private password = '';

  private login() {
    if (this.password !== '' && this.username !== '')
      this.store.state.currentUser = this.username;
  }

}
</script>

<style lang="scss" scoped>
.v-container {
  padding: 0;
}

.main {
  display: flex;
  flex-direction: column;
  padding: 0 10%;
}

.text {
  color: var(--secondary-color);
}

.input {
  display: flex;
  flex-direction: column;
  padding-bottom: 25px;
}

.input-label {
  padding-bottom: 10px;
}

.input-field {
  color: var(--main-text-colour);
  background-color: var(--secondary-color);
}

.header {
  color: var(--secondary-color);
  font-weight: bold;
  padding-top: 20%;
  padding-bottom: 10%;
  font-size: 1.6rem;
}

.login-button {
  background-color: var(--main-button-colour);
}

</style>