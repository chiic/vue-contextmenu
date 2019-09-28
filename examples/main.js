import Vue from 'vue'
import exam from './exam.vue'
import VueContextMenu from '../src/main'
Vue.use(VueContextMenu)

new Vue({
  el: '#app',
  render: h => h(exam)
})