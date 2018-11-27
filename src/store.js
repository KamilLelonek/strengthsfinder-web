import Vue from 'vue'
import Vuex from 'vuex'

import client from './api'

Vue.use(Vuex)

const state = {
  name: null,
  people: [],
  isLoading: false,
  error: null
}

function setState(name, people, isLoading, error) {
  state.name = name
  state.people = people
  state.isLoading = isLoading
  state.error = error
}

const mutations = {
  startLoading(state, name) {
    setState(name, [], true, null)
  },
  finishLoading(state, people) {
    setState(null, people, false, null)
  },
  interruptLoading(state, error) {
    setState(null, [], false, error)
  }
}

const actions = {
  load({commit}, name) {
    commit('startLoading', name)

    return client
      .get(`/${name}`)
      .then(({data}) => {
        commit('finishLoading', data)
        return true
      })
      .catch(function(error) {
        if (error.response && error.response.status === 400) {
          commit('interruptLoading', error.response.data)
        } else {
          commit('interruptLoading', error.message)
        }
        return false
      })
  }
}

const getters = {}

const store = new Vuex.Store({
  state,
  mutations,
  actions,
  getters
})

export default store
