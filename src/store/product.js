import firebase from 'firebase/app'

export default {
  state: {
    prodArr: [], // массив продуктов, для продавца
    arrForUsers: [] // массив продуктов, для покупателей
  },
  getters: {
    prodArr (state) {
      return state.prodArr
    },
    arrForUsers (state) {
      return state.arrForUsers
    }
  },
  mutations: {
    setProd (state, data) {
      const keys = Object.keys(data)
      const value = Object.values(data)

      for (let i = 0; i < keys.length; i++) {
        const item = JSON.parse(JSON.stringify(value[i]))
        item.id = keys[i]
        state.prodArr.push(item)
      }
      console.log(state.prodArr)
    },
    clearArr (state) {
      state.prodArr.splice(0, state.prodArr.length)
    },
    changeConfirmEddit (state, id) {
      const obj = state.prodArr.find(el => el.id === id)
      obj.confirmEddit = !obj.confirmEddit
    },
    cancelEddit (state, id) {
      const obj = state.prodArr.find(el => el.id === id)
      obj.confirmEddit = !obj.confirmEddit
    },
    setProdForUsers (state, users) {
      state.arrForUsers = Object.assign(users.prod)
      console.log(state.arrForUsers)
    }
  },
  actions: {
    clearArr ({ commit }) {
      console.log('yes')
      commit('clearArr')
    },
    async fetchProdForUsers ({ commit, dispatch }) {
      const res = await fetch('http://localhost:3080/api/users')
      const data = await res.json()
      commit('setProdForUsers', data)
    },
    cancelEddit ({ commit }, id) {
      commit('cancelEddit', id)
    },
    changeConfirmEddit ({ commit }, id) {
      commit('changeConfirmEddit', id)
    },
    async deleteProd ({ dispatch, commit }, id) {
      try {
        const uid = await dispatch('getUid')
        commit('saveUid', uid)
        await firebase.database().ref(`/users/${uid}/products/${id}`).remove()
        await dispatch('fetchProd')
      } catch (e) {}
    },
    async fetchProd ({ dispatch, commit }) {
      try {
        const uid = await dispatch('getUid')
        commit('saveUid', uid)
        const data = (await firebase.database().ref(`/users/${uid}/products`).once('value')).val()
        await commit('setProd', data)
      } catch (e) {}
    },
    async saveProduct ({ dispatch, commit },
      { typeProduct, nameProd, count, price, downloadURL, description, confirmEddit, confirmDelete, confirmCart }) {
      try {
        const uid = await dispatch('getUid')
        commit('saveUid', uid)
        const product = await firebase.database().ref(`/users/${uid}/products`).push({
          typeProduct, nameProd, count, price, downloadURL, description, confirmEddit, confirmDelete, confirmCart
        })
        return { typeProduct, nameProd, count, price, downloadURL, description, id: product.key }
      } catch (e) {
        commit('setError', e)
        throw e
      }
    },
    addImage ({ dispatch },
      { typeProduct, nameProd, count, price, img, description, confirmEddit, confirmDelete, confirmCart, id }) {
      const metadata = {
        contentType: img.type
      }
      const storageRef = firebase.storage().ref()
      const uploadTask = storageRef.child('/images/' + img.name).put(img, metadata)

      uploadTask.on(firebase.storage.TaskEvent.STATE_CHANGED,
        (snapshot) => {
          const progress = (snapshot.bytesTransferred / snapshot.totalBytes) * 100
          console.log('Upload is ' + progress + '% done')
          switch (snapshot.state) {
            case firebase.storage.TaskState.PAUSED: // or 'paused'
              console.log('Загрузка приостановлена')
              break
            case firebase.storage.TaskState.RUNNING: // or 'running'
              console.log('Выполняется загрузка')
              break
          }
        },
        (error) => {
          switch (error.code) {
            case 'storage/unauthorized':
              console.log('У Вас нет прав доступа')
              break
            case 'storage/canceled':
              console.log('Вы отменили загрузку')
              break

            case 'storage/unknown':
              console.log('Произошла неизвестная ошибка')
              break
          }
        },
        () => {
          uploadTask.snapshot.ref.getDownloadURL().then((downloadURL) => {
            if (!confirmEddit) {
              dispatch('saveProduct', { typeProduct, nameProd, count, price, downloadURL, description, confirmEddit, confirmDelete, confirmCart })
            } else {
              dispatch('updateProd', { typeProduct, nameProd, count, price, downloadURL, description, id, confirmEddit, confirmDelete, confirmCart })
            }
          })
        }
      )
    },
    saveChange ({ dispatch, commit, state },
      { nameProd, count, price, img, description, id, confirmEddit, typeProduct, confirmDelete, confirmCart }) {
      const obj = state.prodArr.find(el => el.id === id)
      console.log(obj)
      if (obj.downloadURL !== img) {
        dispatch('addImage', { nameProd, count, price, img, description, id, confirmEddit, typeProduct, confirmDelete, confirmCart })
      } else {
        dispatch('updateProd', { nameProd, count, price, img, description, id, confirmDelete, confirmCart, confirmEddit, typeProduct })
      }
    },
    async updateProd ({ dispatch, commit, state },
      { nameProd, count, price, img, downloadURL, description, id, confirmEddit, typeProduct, confirmDelete, confirmCart }) {
      confirmEddit = false
      if (!downloadURL) {
        try {
          const uid = await dispatch('getUid')
          commit('saveUid', uid)
          const downloadURL = img

          // const arrArg = [nameProd, count, price, description, downloadURL]
          // console.log('111')
          // for (let i = 0; i < state.prodArr.length; i++) {
          //   console.log(state.prodArr[i].nameProd)
          //   const isNameProd = arrArg.includes(state.prodArr.nameProd)

          //   const isCount = arrArg.includes(state.prodArr.count)
          //   const isPrice = arrArg.includes(state.prodArr.price)
          //   const isDescription = arrArg.includes(state.prodArr.description)
          //   const isDownloadUrl = arrArg.includes(state.prodArr.downloadURL)

          //   if (isNameProd) {
          //     console.log('2')
          //     await firebase.database().ref(`/users/${uid}/products/${id}/`).update({
          //       nameProd
          //     })
          //   }
          //   if (!isCount) {
          //     console.log('22')
          //     await firebase.database().ref(`/users/${uid}/products/${id}/`).update({
          //       count
          //     })
          //   }
          //   if (!isPrice) {
          //     console.log('222')
          //     await firebase.database().ref(`/users/${uid}/products/${id}/`).update({
          //       price
          //     })
          //   }
          //   if (!isDescription) {
          //     console.log('2222')
          //     await firebase.database().ref(`/users/${uid}/products/${id}/`).update({
          //       description
          //     })
          //   }
          //   if (!isDownloadUrl) {
          //     console.log('22222')
          //     await firebase.database().ref(`/users/${uid}/products/${id}/`).update({
          //       downloadURL
          //     })
          //   }
          // }

          await firebase.database().ref(`/users/${uid}/products/${id}/`).update({
            nameProd, count, price, description, downloadURL
          })
          await dispatch('fetchProd')
        } catch (e) {
          commit('setError', e)
          throw e
        }
      } else {
        try {
          const uid = await dispatch('getUid')
          commit('saveUid', uid)
          await firebase.database().ref(`/users/${uid}/products/${id}/`).set({
            nameProd, count, price, description, downloadURL, confirmEddit, typeProduct, confirmDelete, confirmCart
          })
          await dispatch('fetchProd')
        } catch (e) {
          commit('setError', e)
          throw e
        }
      }
    }
  }
}
