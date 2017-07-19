import VueContextMenu from './VueContextMenu.vue'
export default VueContextMenu
if (typeof window !== 'undefined' && window.Vue) {
  window.Vue.component('count-to', CountTo)
}