import { createApp } from 'vue'
import App from './App.vue'
import router from './router/index.js'
import { registerAsyncComponent } from '@/utils/import.js'
import { auth } from '@/configs/firebase.js'
import VueNumberFormat from 'vue-number-format'

import '@/assets/styles/index.css'
import '@/style.css'

let app;
auth.onAuthStateChanged(() => {
    if(!app){
        app = createApp(App)
        
        registerAsyncComponent(app)
        app.use(VueNumberFormat, {precision: 0, prefix: '', suffix: 'đ', decimal: '.', thousand: ','})
        app.use(router)

        app.mount('#app')
    }
});


