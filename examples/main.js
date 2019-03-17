import Vue from 'vue'
import simple from './simple.vue'
import VueContextMenu from '../src/main'
Vue.use(VueContextMenu)

new Vue({
  el: '#app',
  render: h => h(simple)
})