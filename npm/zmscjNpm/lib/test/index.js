import Alert from './index.vue'
let install = function install (Vue) {
  /* istanbul ignore if */
  if (typeof window !== 'undefined' && window.Vue) {
    Vue = window.Vue
  }
  Vue.component(Alert.name, Alert)
}
export default install