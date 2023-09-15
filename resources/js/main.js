import '/node_modules/admin-lte/plugins/jquery/jquery.min.js'
import '/node_modules/admin-lte/plugins/bootstrap/js/bootstrap.bundle.min.js'
import '/node_modules/admin-lte/dist/js/adminlte.min.js'

import { createApp } from 'vue'
import { createPinia } from 'pinia'

import App from './App.vue'
import router from './router'

const app = createApp(App)

app.use(createPinia())
app.use(router)

app.mount('#app')
