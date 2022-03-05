<template>
  <v-dialog v-model="store.state.showAddItemDialog" class="add-scenario-dialog">
    <div class="add-item-dialog-container">
      <v-card class="add-item-dialog-content">
        <v-card-title class="text-h5 text">
          Add Item
        </v-card-title>

        <v-card-text class="card-body">
          <label for="name" class="text input-label">Name</label>
          <input
            type="text"
            id="name"
            class="text input-field"
            v-model="name"
            placeholder=" Item name"
          />

          <label for="ssid" class="text input-label">Connect Bluetooth</label>
          <input
            type="text"
            id="ssid"
            class="text input-field"
            v-model="ssid"
            placeholder=" Bluetooth SSID"
          />

          <label for="image" class="text input-label">Image</label>
          <input
            type="text"
            id="image"
            class="text input-field"
            v-model="image"
            placeholder=" Upload Image"
          />
        </v-card-text>

        <v-divider></v-divider>

        <v-card-actions>
          <v-btn class="text button" @click="testBeep()">Test Beep</v-btn>
          <v-spacer></v-spacer>
          <v-btn class="text button" @click="addItem()">Add Item</v-btn>
        </v-card-actions>
      </v-card>
    </div>
  </v-dialog>
</template>

<script lang="ts">
import { Options, Vue } from 'vue-class-component'
import { useStore } from 'vuex'
import { key } from '@/store/datastore'
import { v4 as uuidv4 } from 'uuid'

@Options({
  name: 'add-item-dialog'
})
export default class AddItemDialog extends Vue {
  private store = useStore(key)
  private name = ''
  private image = ''
  private ssid = ''

  private addItem() {
    this.store.state.items.push({
      id: uuidv4(),
      name: this.name,
      image: this.image,
      ssid: this.ssid
    })
    this.ssid = ''
    this.name = ''
    this.image = ''
    this.store.state.showAddItemDialog = false
  }

  private testBeep() {}
}
</script>

<style lang="scss" scoped>
.add-item-dialog {
  color: var(--main-text-colour);
}

.add-item-dialog-container {
  display: flex;
  justify-content: center;
}

.add-item-dialog-content {
  background-color: var(--main-color);
  display: flex;
  flex-direction: column;
  max-width: 90%;
  min-width: 85vw;
  border: 2px solid var(--main-text-colour);
  border-radius: 15px;
}

.card-body {
  display: flex;
  color: var(--main-text-colour);
  flex-direction: column;
}

.text {
  color: var(--main-text-colour);
}

.input-label {
  font-size: 1.2rem;
  padding-bottom: 5px;
}

.input-field {
  background-color: var(--main-input-colour);
  height: 2rem;
  font-size: 1.3rem;
}

.button {
  background-color: var(--main-button-colour);
  border-radius: 10px;
  border: 1px solid;
  margin-right: 10px;
}
</style>
