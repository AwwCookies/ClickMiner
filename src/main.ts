import { createApp } from 'vue'
import App from './App.vue'

const app = createApp(App)

app.config.globalProperties.$filters = {
  formatNumber(value: string) {
    return value.toLocaleString()
  }
}

app.mount('#app')
