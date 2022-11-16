import { createApp } from 'vue'
import App from './App.vue'
import './index.css' //tailwind用
import router from './router.js'; // Add

const app = createApp(App);
app.use(router);
app.mount('#app');
