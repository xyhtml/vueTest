import Vue from 'vue';
function Toasts (obj) {
  var a = document.createElement("div")
  a.classList = 'zms-toast'
  var b = document.createElement("span")
  a.appendChild(b)
  var c = document.createTextNode(obj.txt)
  b.appendChild(c)
  document.body.appendChild(a)
  setTimeout(() => {
    a.classList.add('zms-toastHide')
    setTimeout(() => {
      document.body.removeChild(a)
    }, 1000)
  }, obj.duration);
}
Vue.prototype.$toasts = Toasts;
export default Toasts;