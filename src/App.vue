<template>
  <div id="app">
    <v-alert
      :value=error
      type="error">
      {{error}}
    </v-alert>
    <router-view/>
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
import {mapGetters} from 'vuex'

const App = {
  computed: {
    ...mapGetters(['error'])
  }
}

export default App
</script>
