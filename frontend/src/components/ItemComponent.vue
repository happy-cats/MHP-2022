<template>
  <v-container>
    <div class="item">
      <div>
        <v-icon v-on:click="activateBeeper()"
                v-bind:class="{'beeper-active': beeperActive === true}"
                class="sound-icon">mdi-volume-high
        </v-icon>
        <span v-on:click="showImage()">| </span>
        <span v-on:click="showImage()"> {{ item.name }}</span>
      </div>
      <v-icon class="item-delete-icon" v-on:click="removeItem(item.id)">mdi-delete</v-icon>
    </div>
    <div v-if="displayImage">
      <hr class="separation-line"/>
      <v-img src="@/assets/images/keys.png" alt="image" class="image"/>
    </div>
  </v-container>
</template>

<script lang="ts">
import { Options, Vue } from 'vue-class-component';
import { Item, key, Scenario } from '@/store/datastore';
import { Prop } from 'vue-property-decorator';
import { useStore } from 'vuex';

@Options({
  name: 'item-component',
})
export default class ItemComponent extends Vue {
  @Prop() private scenario: Scenario = {id: '', title: '', items: []};
  @Prop() private item: Item = {id: '', name: '', image: '', ssid: ''};

  private beeperActive = false;
  private displayImage = false;
  private store = useStore(key);

  private showImage() {
    this.displayImage = !this.displayImage;
  }

  private async activateBeeper() {
    this.beeperActive = !this.beeperActive;
    const requestOptions = {
      method: 'POST',
      headers: {'Content-Type': 'application/json'},
      body: JSON.stringify({
        title: 'Activate beeper from design A',
        name: this.item.name,
        ssid: this.item.ssid,
        active: this.beeperActive,
      }),
    };
    await fetch('https://iid.kateonai.eu/receiver', requestOptions);
  }

  private removeItem(itemId: string) {
    if (this.scenario.id !== '') {
      this.scenario.items = this.scenario.items.filter(
          (it: Item) => it.id !== itemId,
      );
    } else {
      this.store.state.items = this.store.state.items.filter(
          (it) => it.id !== itemId,
      );
    }
  }
}
</script>

<style scoped>
.item {
  display: flex;
  justify-content: space-between;
}

.sound-icon {
  color: var(--main-text-colour);
  font-size: 1.3rem;
}

.separation-line {
  color: var(--main-text-colour);
}

.beeper-active {
  background: var(--main-button-colour);
  border-radius: 15px;
}

.item-delete-icon {
  color: var(--main-button-colour);
  font-size: 1.5rem;
  align-self: center;
  display: flex;
}

.image {
  max-height: 150px;
  margin-top: 5px;
}
</style>
