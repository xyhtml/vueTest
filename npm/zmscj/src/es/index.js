import alert from '../es/alert.vue'
import loading from '../es/loading.vue'
import loadingMiddle from '../es/loadingMiddle.vue'

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