import * as Vue from 'vue'
import App from '~/App'
import Btn from '~/components/Btn'

const app = Vue.createApp(App)
app.component('Btn', Btn)
app.mount('#app')
