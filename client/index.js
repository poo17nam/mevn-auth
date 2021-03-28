import Vue from 'vue'

import './styles/main.css'

import router from './routes'

import Router from 'vue-router'

import Main from './pages/Main.vue'

import Validator from 'vee-validate'

import Button from '@components/Button.vue'

import Loader from '@components/Loader.vue'

import store from './store'

import TextInput from '@components/TextInput.vue'

Vue.use(Router)

Vue.use(Validator)
//Vue.use('ValidationProvider', ValidationProvider);

Vue.component('text-input', TextInput)
Vue.component('btn', Button)
Vue.component('loader', Loader)

const app = new Vue({
    el: '#app',
    router,
    store,
    render: h => h(Main)
})