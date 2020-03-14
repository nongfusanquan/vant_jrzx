import Vue from 'vue'
import App from './App.vue'
import router from './router'
import 'amfe-flexible'
import './assets/css/normalize.css'
import './assets/css/common.css'
import Vant from 'vant';
import { Toast } from 'vant';
import 'vant/lib/index.css';
import  axios from 'axios'



Vue.use(Vant);
Vue.use(Toast)

Vue.prototype.$toast= Toast


Vue.config.productionTip = false
Vue.prototype.$http=axios
new Vue({
  router,
  render: h => h(App)
}).$mount('#app')
