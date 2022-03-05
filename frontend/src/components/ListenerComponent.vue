<template>
  <div v-if="active || listening"> {{ title }}</div>
  <div v-if="active"> Beeper active {{ name }}</div>
  <div v-if="active">
    <iframe height="345" src="https://www.youtube.com/embed/oHg5SJYRHA0?rel=0&autoplay=1" frameborder="0"
            allowfullscreen></iframe>
  </div>
  <div class="button-container">
    <button class="button" v-on:click="startListening()">Start listening</button>
  </div>
</template>

<script lang="ts">
import { Options, Vue } from 'vue-class-component';
import axios from 'axios';

@Options({
  name: 'listener-component',
})
export default class ListenerComponent extends Vue {
  private title: string = '';
  private name: string = '';
  private listening: boolean = false;
  private active: boolean = false;

  private infiniteLoop: boolean = true;

  async startListening() {
    this.title = 'listening';
    this.listening = true;
    while (this.infiniteLoop) {
      const response = await axios.get('https://iid.kateonai.eu/receiver');
      if (response.data.name) {
        this.title = response.data.title;
        this.name = response.data.name;
        this.active = response.data.active;
        console.log('Title: ' + response.data.title + 'Name: ' + response.data.name);
      }
      if(this.active) {
        const beep = new Audio(
            'http://www.soundjay.com/buttons/sounds/beep-01a.mp3');
        await beep.play()
      }
      if (!this.infiniteLoop) {
        break;
      }
      await new Promise(resolve => setTimeout(resolve, 1000));
    }
  }
}
</script>

<style scoped>
div {
  color: var(--main-text-colour);
}

iframe {
  width: 100%
}

.button-container {
  display: flex;
  width: 100%;
  justify-content: center;
  position: absolute;
  top: 80vh;
}

.button {
  background-color: var(--main-button-colour);
  padding: 10px 5px;
}
</style>