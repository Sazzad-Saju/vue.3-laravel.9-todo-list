require('./bootstrap');
// import Vue from 'vue'
import { createApp } from 'vue'
// import * as Vue from 'vue'
import App from './vue/app'

// const app = new Vue({
//     el: '#app',
//     component: { App }
// });

const app = createApp(App)
    // app.use( Vue, Vuex, store,drizzleVuePlugin, { store, drizzleOptions })
app.mount('#app')