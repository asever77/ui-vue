import { createApp } from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import global from '@/assets/js/global.js'
import mixins from './mixins/mixins.js'

createApp(App).use(store).use(global).use(router).mixin(mixins).mount('#app')
