import Vue from 'vue'
import App from './App.vue'
import vuetify from './plugins/vuetify'
import AOS from 'aos';
import 'aos/dist/aos.css' 

Vue.config.productionTip = false

new Vue({
  vuetify,
  created(){
    AOS.init({once: true});
  },
  render: h => h(App)
}).$mount('#app')
