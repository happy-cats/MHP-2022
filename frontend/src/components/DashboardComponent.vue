<template>
  <v-container class="dashboard-container">
    <div class="data-wrapper">
      <div class="numbers">
        <v-img
          src="@/assets/svg/data.svg"
          alt="image"
          class="data-image"
          @click="hideSplash()"
        />
      </div>
      <div>
        <div class="text">
          Almost there!
        </div>

        <div class="text">
          Keep breezing to get a 5€ discount!
        </div>
      </div>
    </div>

    <div class="subsection">
      <div class="subheader">
        New journey
      </div>
      <v-toolbar dense class="search-bar">
        <v-icon class="search-icon">mdi-magnify</v-icon>
        <input type="text" class="search-text" placeholder="Search" />
      </v-toolbar>
      <div class="journey-buttons">
        <v-btn class="text button" @click="setView('HomeScreen')">Home</v-btn>
        <v-btn class="text button" @click="setView('HomeScreen')">Work</v-btn>
      </div>
    </div>

    <div class="subsection">
      <div class="subheader">
        Challenges
      </div>

      <div class="card">
        <div class="card-line">
          <div class="text text--left text--bigger">10 days without a car</div>
          <div></div>
          <div class="text text-secondary">15/50 members</div>
        </div>
        <div class="card-line card-separator">
          <div class="challenge-bg"><div class="challenge-line"></div></div>
        </div>
      </div>
    </div>

    <div class="subsection">
      <div class="subheader">
        Your journeys
      </div>

      <div class="card">
        <div>
          <div class="card-line">
            <div class="card-inline">
              <v-icon class="card-inline-icon">mdi-car</v-icon>
              <div class="text text--left text--bigger card-inline--text">
                8 points
              </div>
            </div>
            <div></div>
            <div class="text text-secondary card-inline--subheader">
              06.03.2022
            </div>
          </div>
        </div>
      </div>

      <div class="card">
        <div>
          <div class="card-line">
            <div class="card-inline">
              <v-icon class="card-inline-icon purple">mdi-shoe-print</v-icon>
              <div class="text text--left text--bigger card-inline--text">
                8 points
              </div>
            </div>
            <div></div>
            <div class="text text-secondary card-inline--subheader">
              04.03.2022
            </div>
          </div>
        </div>
      </div>
    </div>
  </v-container>
</template>

<script lang="ts">
import { Options, Vue } from 'vue-class-component'
import { useStore } from 'vuex'
import { key } from '@/store/datastore'

@Options({
  name: 'dashboard-component',
  components: {}
})
export default class DashboardComponent extends Vue {
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
.dashboard-container {
  display: flex;
  flex-direction: column;
  background-color: var(--secondary-color);
  padding-bottom: 25px;
}

.text-field {
  width: 150px;
  background-color: var(--secondary-color);
}

.search-bar {
  padding: 5px;
  border: 2px solid #dee5ef;
  border-radius: 10px;
  width: 100%;
  margin-bottom: 10px;
}

.search-icon {
  color: var(--main-button-colour);
}

.search-text {
  font-weight: lighter;
}

.subsection {
  padding-top: 30px;
  display: flex;
  flex-direction: column;
}

.subheader {
  color: var(--subheader-color);
  font-size: 1rem;
  font-weight: lighter;
  padding-bottom: 7px;
}

.journey-buttons {
  display: flex;
  flex-direction: row;
  justify-content: space-between;
}

.card {
  display: flex;
  flex-direction: column;
  box-shadow: 0px 0px 2px rgba(40, 41, 61, 0.04),
    0px 4px 8px rgba(96, 97, 112, 0.16);
  border-radius: 8px;
  padding: 5px 0;
}

.card-line {
  display: flex;
  flex-direction: row;
  padding: 8px;
  justify-content: space-between;
}

.card-inline {
  display: flex;
  flex-direction: row;
}

.card-inline--text {
  margin-top: 4px;
}

.card-inline--subheader {
  margin-top: 8px !important;
}

.text {
  font-weight: lighter;
}

.card-separator {
  margin-bottom: 5px;
}

.text-right {
  margin-left: 35px;
}

.text-secondary {
  font-size: 0.8rem;
  color: var(--subheader-color);
  margin-top: 4px;
}

.range {
  width: 100%;
  margin-left: 14px;
}

.text--bigger {
  font-size: 1.1rem;
}

.text--left {
  margin-left: 5px;
}

.card-inline-icon {
  background-color: #f5c844;
  color: var(--secondary-color);
  height: 2rem;
  width: 2rem;
  border-radius: 6px;
}

.purple {
  background-color: #ec5495;
}

.buttons {
  display: flex;
  justify-content: space-around;
}

.button {
  padding: 0.25rem 3.5rem;
  color: var(--secondary-color);
  background-color: var(--main-button-colour);
  border-radius: 10px;
  text-transform: capitalize;
  letter-spacing: 0px;
  font-weight: 400;
  font-size: 16px;
  width: 48%;
}

.data-wrapper {
  margin-top: -100px;
  background-color: white;
  display: flex;
  box-shadow: 0px 0px 2px rgba(40, 41, 61, 0.04),
    0px 4px 8px rgba(96, 97, 112, 0.16);
  border-radius: 8px;
  padding: 16px;
  align-items: center;
}

.data-image {
  width: 200px;
  margin-right: 24px;
}

.challenge-bg {
  height: 12px;
  width: 100%;
  background-color: #dbe6f0;
  border-radius: 20px;
}

.challenge-line {
  height: 100%;
  width: 25%;
  background-color: #62d4a1;
  border-radius: 20px;
}
</style>
