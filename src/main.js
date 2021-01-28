import { createApp } from 'vue'
import Main from './Main.vue'
import router from './router'
import store from './store'
import axios from 'axios';

axios.defaults.baseURL = 'http://localhost:3000';

createApp(Main).use(store).use(router).mount('#app')
