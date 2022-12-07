import * as Vue from 'vue'
import App from '~/App'
import Button from '~/components/Button'

const app = Vue.createApp(App)
app.component('Btn', Button)
app.mount('#app')
