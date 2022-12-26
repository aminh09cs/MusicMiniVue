import { createApp } from 'vue'
import { createPinia } from 'pinia'

import App from './App.vue'
import router from './router/router'

import { library } from '@fortawesome/fontawesome-svg-core'

/* import font awesome icon component */
import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome'

/* import specific icons */
import { faUserSecret, faEyeSlash, faEye, faMagnifyingGlass, faEllipsisVertical, faPlay, faHeart, faUser, faCompass, faSquare, faRepeat, faBackwardStep,faForwardStep, faShuffle, faPause, faEllipsis} from '@fortawesome/free-solid-svg-icons'
/* add icons to the library */


import './assets/main.css'

const app = createApp(App)

library.add(faUserSecret, faEyeSlash, faEye, faMagnifyingGlass, faEllipsisVertical, faPlay, faHeart, faUser, faCompass, faSquare, faRepeat, faBackwardStep, faForwardStep, faShuffle, faPause, faEllipsis)
app.component('font-awesome-icon', FontAwesomeIcon)
app.use(createPinia())
app.use(router)
app.mount('#app')
