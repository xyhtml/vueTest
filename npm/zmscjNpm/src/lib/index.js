import Alert from './alert/alert.vue'
import Loading from './loading/loading.vue'
import LoadingMiddle from './loadingMiddle/loadingMiddle.vue'
import Toasts from './toast/'

// var components = [Alert, Loading, LoadingMiddle, Toasts]
// var zmscj = function install (Vue) {
//   components.forEach(function (data) {
//     Vue.component(data.name, data)
//   })
// }
// if (typeof window !== 'undefined' && window.Vue) {
//   window.Vue.use(paykeyboard)
// }
// export default zmscj

var version = '1.6.24';
var components = [Alert, Loading, LoadingMiddle, Toasts];

var install = function install (Vue) {
  components.forEach(function (Component) {
    Vue.use(Component);
  });
};
/* istanbul ignore if */


if (typeof window !== 'undefined' && window.Vue) {
  install(window.Vue);
}

export { install, version, Alert, Loading, LoadingMiddle, Toasts };
export default {
  install: install,
  version: version
};