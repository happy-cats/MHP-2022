<template>
  <v-container class="header">
    <h3>FIND-IT</h3>
    <hr class="header-line">
  </v-container>
</template>

<script lang="ts">
import {Options, Vue} from 'vue-class-component';

@Options({
  name: "header-component"
})
export default class HeaderComponent extends Vue {

}
</script>

<style lang="scss" scoped>
.v-container {
  padding: 0;
}

.header {
  width: 100%;
  text-align: center;
  font-family: "Post no bills", Helvetica, Arial, serif;
  font-size: 3rem;
  color: var(--main-text-colour);
}

.header-line {
  width: 100%;
  height: 5px;
  background-color: var(--main-button-colour);
  border: none;
}
</style>