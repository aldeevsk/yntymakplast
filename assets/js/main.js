import {logger} from './log.js'
import {nav} from './nav.js'
import {anchors} from './anchors.js'
import {modal} from './modal.js'
import {initForms} from './forms.js'

(function () {
    nav('.nav')
    anchors()
    modal('.modal')
    initForms('form')
})()

/* window.addEventListener('DOMContentLoaded', () => {
        const input = document.querySelector('input[type=tel]')
        
        
        input.addEventListener('click', event => {
          const e = document.createEvent('TouchEvent')
          e.initTouchEvent('touchstart', true, true)
          console.log(event.target)
        })
        input.click()
}) */

/* if (Touch.length < 1 || TouchEvent.length < 1)
  throw 'TouchEvent constructors not supported' */
const input = document.querySelector('input[type=tel]')
var touch = new Touch({
  identifier: 42,
  target: input,
  clientX: 200,
  clientY: 200,
  screenX: 300,
  screenY: 300,
  pageX: 200,
  pageY: 200,
  radiusX: 5,
  radiusY: 5,
})

var touchEvent = new TouchEvent('touchstart', {
  cancelable: true,
  bubbles: true,
  composed: true,
  touches: [touch],
  targetTouches: [touch],
  changedTouches: [touch],
})

input.dispatchEvent(touchEvent)
setTimeout(() => {
    input.dispatchEvent(touchEvent)
}, 2000);

/* input.addEventListener('touchstart', event => console.log('touch')) */