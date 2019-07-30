import './index.css'
let objmr
let show = true
function Toast (obj) {
  let mr = {
    txt: '请输入提示文字',
    duration: 3000
  }
  if (!obj || typeof obj == 'function' || !show) {
    return
  }
  if (typeof obj == 'string') {
    objmr = {
      txt: obj,
      duration: 3000
    }
  } else if (typeof obj == 'object') {
    let a = {
      txt: '',
      duration: 3000
    }
    if (obj) {
      obj.text ? a.txt = obj.text : a.txt = '请输入提示文字'
      obj.duration ? a.duration = obj.duration : a.duration = 3000
    } else {
      objmr = mr
    }
    objmr = a
  } else {
    objmr = mr
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
