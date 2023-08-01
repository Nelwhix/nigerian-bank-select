import { createApp } from 'vue'
import App from './App.vue'
import { VueSelect } from "vue-select";
import "vue-select/dist/vue-select.css";

createApp(App)
    .component("v-select", VueSelect)
    .mount('#app')
