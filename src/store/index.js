import { createStore } from 'vuex'
import { masters } from './localData/masters'
import { mastersEN } from './localData/mastersEN'

export default createStore({
  state: {
    masters: masters,
    mastersEN: mastersEN
  },
  getters: {
    allMasters: (state) => state.masters,
    allMastersEN: (state) => state.mastersEN
  }
})
