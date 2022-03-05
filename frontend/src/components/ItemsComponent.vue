<template>
  <v-container class="items-selection">
    <div class="item-container">
      <v-row v-for="item in getItems()" :key="item" class="item-entry">
        <v-col class="item">
          <item-component :item="item"></item-component>
        </v-col>
      </v-row>
      <v-row class="item-entry">
        <v-icon class="item-add-icon" v-on:click="addItem()">
          mdi-plus
        </v-icon>
      </v-row>
    </div>
  </v-container>
</template>

<script lang="ts">
import { Options, Vue } from 'vue-class-component'
import { useStore } from 'vuex'
import { key, Item } from '@/store/datastore'

@Options({
  name: 'items-component'
})
export default class ItemsComponent extends Vue {
  private store = useStore(key)
  private currentItem: string = ''

  private getItems(): Item[] {
    return this.store.state.items
  }

  private addItem() {
    this.store.state.showAddItemDialog = true
  }
}
</script>

<style lang="scss" scoped>
.items-selection {
  color: var(--main-text-colour);
  background-color: var(--secondary-color);
  height: 100%;
}

.item-container {
  margin-top: 25px;
}

.item-entry {
  display: flex;
  margin: 0;
  padding: 10px;
  justify-content: center;
}

.item {
  display: flex;
  justify-content: space-between;
  font-family: 'Saira', Helvetica, Arial, serif;
  font-size: 1.5rem;
  max-width: 90%;
  border: 2px solid;
  border-radius: 15px;
  padding: 5px;
}

.item-text {
  margin-left: 5%;
}

.item-add-icon {
  display: flex;
  color: var(--main-text-colour);
  background-color: var(--main-button-colour);
  width: 40px;
  height: 40px;
  border-radius: 20px;
  border: 2px solid;
}

.item .v-container {
  padding: 0;
}

.item-delete-icon {
  color: var(--main-button-colour);
  display: flex;
  align-self: center;
  font-size: 2rem;
  margin-right: 10px;
}

.item-beep-icon {
  color: var(--main-button-colour);
  display: flex;
  align-self: center;
  margin-right: 10px;
}
</style>
