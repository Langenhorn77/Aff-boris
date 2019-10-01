import Vue from 'vue'
import App from './App.vue'
import PageHeader from "./components/PageHeader";
import PageMain from "./components/PageMain";
import PageFooter from "./components/PageFooter";
import style from './style.css'


Vue.component('page-header', PageHeader);
Vue.component('page-main', PageMain);
Vue.component('page-footer', PageFooter);

const VueScrollTo = require('vue-scrollto');
Vue.use(VueScrollTo);

new Vue({
  el: '#app',
  render: h => h(App)
})
