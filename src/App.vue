<template>
  <div id="app">
    <v-toolbar>
      <v-toolbar-items>
        <v-btn to="/" exact flat>Wyszukiwanie</v-btn>
      </v-toolbar-items>
    </v-toolbar>
    <v-alert
      :value=error
      type="error">
      {{error}}
    </v-alert>
        <v-app data-app>
      <router-view/>
    </v-app>
  </div>
</template>

<style>
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #00c853;
}
</style>

<script>
import {mapState} from 'vuex'

const App = {
  computed: {
    ...mapState(['error'])
  }
}

export default App
</script>
