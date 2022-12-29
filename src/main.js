import { createApp } from 'vue'
import { createPinia } from 'pinia'

import App from './App.vue'
import router from './router/router'

import { library } from '@fortawesome/fontawesome-svg-core'
import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome'
import { faUserSecret, faEyeSlash, faEye, faMagnifyingGlass, faEllipsisVertical, faPlay, faHeart, faUser, faCompass, faSquare, faRepeat, faBackwardStep,faForwardStep, faShuffle, faPause, faEllipsis} from '@fortawesome/free-solid-svg-icons'
import GAuth from 'vue3-google-oauth2'


import './assets/main.css'

const gAuthOptions = { 
    clientId: '691962768596-05ut935kgospb4o1fab9lun0pgmnusi3.apps.googleusercontent.com',
    scope: 'profile email', 
    prompt: 'consent', 
    fetch_basic_profile: true,
    plugin_name:'App Name that you used in google developer console API'
}

const app = createApp(App)

library.add(faUserSecret, faEyeSlash, faEye, faMagnifyingGlass, faEllipsisVertical, faPlay, faHeart, faUser, faCompass, faSquare, faRepeat, faBackwardStep, faForwardStep, faShuffle, faPause, faEllipsis)
app.component('font-awesome-icon', FontAwesomeIcon)
app.use(createPinia())
app.use(router)
app.use(GAuth, gAuthOptions)
app.mount('#app')
