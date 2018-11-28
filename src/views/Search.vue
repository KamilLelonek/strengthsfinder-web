<template>
  <v-content>
    <v-container fluid fill-height>
      <v-layout align-center justify-center>
        <v-flex xs12 sm8 md4>
          <v-card class="elevation-12">
            <v-toolbar dark color="primary">
              <v-toolbar-title>Bliźniacy talentowi</v-toolbar-title>
              <v-spacer></v-spacer>
            </v-toolbar>
            <v-card-text>
              <v-form>
                <v-text-field
                  v-model="name"
                  :rules="[rules.required]"
                  maxlength="20"
                  prepend-icon="person"
                  name="name"
                  label="Imię i nazwisko"
                  type="text">
                </v-text-field>
              </v-form>
            </v-card-text>
            <v-card-actions>
              <v-spacer ></v-spacer>
              <v-btn
                color="primary"
                :disabled="hasName || isLoading"
                :loading="isLoading"
                @click="search">
                Szukaj
              </v-btn>
            </v-card-actions>
          </v-card>
        </v-flex>
      </v-layout>
    </v-container>
  </v-content>
</template>


<script>
import {mapActions, mapState} from 'vuex'

const Search = {
  data() {
    return {
      rules: {
        required: value => !!value || 'Wymagane!'
      }
    }
  },
  methods: {
    search() {
      this.load(this.name).then(result => {
        if (result) {
          this.openResults()
        }
      })
    },
    openResults() {
      this.$router.push({name: 'results', query: {name: this.name}})
    },
    query(name) {
      return {query: {name}}
    },
    ...mapActions(['load'])
  },
  computed: {
    hasName() {
      return !this.name
    },
    name: {
      get() {
        return this.$route.query.name
      },
      set(name) {
        this.$router.replace(this.query(name))
      }
    },
    ...mapState(['isLoading'])
  }
}

export default Search
</script>
