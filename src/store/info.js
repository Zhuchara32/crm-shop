import firebase from 'firebase/app'

export default {
  state: {
    info: {},
    typeProd: {
      electronics: 'электроника',
      furniture: 'мебель',
      householdProd: 'товары для дома',
      clothes: 'одежда'
    }
  },
  getters: {
    info (state) {
      return state.info
    },
    typeProd (state) {
      return state.typeProd
    }
  },
  mutations: {
    setInfo (state, info) {
      state.info = info
    },
    clearInfoAndUid (state) {
      state.info = {}
      state.uid = null
    },
    pushProd (state, product) {
      if (!state.info.arrProd) {
        state.info.arrProd = []
      }
      state.info.arrProd.push(product)
    }
  },
  actions: {
    async fetchInfo ({ dispatch, commit }) {
      try {
        const uid = await dispatch('getUid')
        commit('saveUid', uid)
        const info = (await firebase.database().ref(`/users/${uid}/info`).once('value')).val()
        commit('setInfo', info)
      } catch (e) {}
    }
  }
}
