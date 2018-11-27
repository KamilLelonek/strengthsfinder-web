<template>
  <div id="app">
    <v-alert
      :value=error
      type="error">
      {{error}}
    </v-alert>
    <router-view data-app/>
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
