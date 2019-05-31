import 'babel-polyfill';
import Vuetify from 'vuetify';
import Vue from 'vue';
import VueTippy from 'vue-tippy'
import './plugins/vuetify';
import App from './App.vue';
import router from './router';
import axios from 'axios';

axios.defaults.headers.post['Content-Type'] ='application/x-www-form-urlencoded';

Vue.config.productionTip = false;

Vue.use(Vuetify, {
    theme: {
        primary: "#212121",
        secondary: "#009688",
        error: "#f44336",
        accent: "#3498db",
        warning: "#ffc107",
        info: "#2196f3",
        success: "#4caf50"
    },
    options: {
        customProperties: true
    }
});

Vue.use(VueTippy);

new Vue({
  router,
  el: "#app",
  render: h => h(App)
}).$mount('#app');
