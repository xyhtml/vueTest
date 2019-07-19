
import Alert from './alert/index'
import Loading from './loading/index'
import LoadingMiddle from './loading-middle/index'
import Toast from './toast/index'

// var components = [Alert, Loading, LoadingMiddle, Toast]
// var install = function install (Vue) {
//   components.forEach(function (Component) {
//     Vue.use(Component);
//   });
// };
// /* istanbul ignore if */

// if (typeof window !== 'undefined' && window.Vue) {
//   install(window.Vue);
// }

export { install, Alert, Loading, LoadingMiddle, Toast }
// export default install