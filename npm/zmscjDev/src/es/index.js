import alert from './alert/alert.vue'
import loading from './loading/loading.vue'
import loadingMiddle from './loadingMiddle/loadingMiddle.vue'

var components = [alert, loading, loadingMiddle]
var zmscj = function install (Vue) {
  components.forEach(function (data) {
    console.log(data.name)
    Vue.component(data.name, data)
  })
}
if (typeof window !== 'undefined' && window.Vue) {
  window.Vue.use(paykeyboard)
}
export default zmscj