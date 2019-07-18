import './index.css'
let objmr
let show = true
function Toast (obj) {
  if (!obj || typeof obj == 'function' || !show) {
    return
  }
  if (typeof obj == 'string') {
    objmr = {
      txt: obj,
      duration: 3000
    }
  } else if (typeof obj == 'object') {
    objmr = {
      txt: '小提示',
      duration: 3000
    }
  } else {
    objmr = {
      txt: '',
      duration: 3000
    }
  }
  show = false
  var a = document.createElement('div')
  a.classList = 'zms-toast'
  var b = document.createElement('span')
  a.appendChild(b)
  var c = document.createTextNode(objmr.txt)
  b.appendChild(c)
  document.body.appendChild(a)
  setTimeout(() => {
    a.classList.add('zms-toastHide')
    setTimeout(() => {
      document.body.removeChild(a)
      show = true
    }, 600)
  }, objmr.duration)
}
export default Toast
