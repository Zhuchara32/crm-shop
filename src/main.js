import { createApp } from 'vue'
import App from './App.vue'
import './registerServiceWorker'
import router from './router'
import store from './store'
import messagePlugin from './utils/message.plugin'

import firebase from 'firebase'
import 'firebase/auth'
import 'firebase/database'

import { library } from '@fortawesome/fontawesome-svg-core'
import { faLock, faUser, faAt, faBars, faCaretDown, faCartShopping } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome'

library.add(faLock, faUser, faAt, faBars, faCaretDown, faCartShopping)

firebase.initializeApp({
  apiKey: 'AIzaSyBNW_WnEN2uuXcA-iL1PtQ6dNyLTL5GMQw',
  authDomain: 'crm - shop - 46faa.firebaseapp.com',
  databaseURL: 'https://crm-shop-46faa-default-rtdb.europe-west1.firebasedatabase.app/',
  projectId: 'crm-shop-46faa',
  storageBucket: 'crm-shop-46faa.appspot.com',
  messagingSenderId: '310245536732',
  appId: '1:310245536732:web:0b8a7d3b3a7412238e5519',
  measurementId: 'G-CWK5T5DSXB'
})

let app

firebase.auth().onAuthStateChanged(() => {
  if (!app) {
    app = createApp(App).use(store).use(router).use(messagePlugin).component('font-awesome-icon', FontAwesomeIcon).mount('#app')
  }
})
