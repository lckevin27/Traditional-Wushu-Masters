import { createStore } from 'vuex'
import { masters } from './localData/masters'

export default createStore({
  state: {
    masters: masters
  },
  getters: {
    allMasters: (state) => state.masters
  }
})
