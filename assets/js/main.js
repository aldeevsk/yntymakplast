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

window.addEventListener('DOMContentLoaded', () => {
    const input = document.querySelector('input[type=tel]')

    s/* etTimeout(() => {
        const event = document.createEvent('TouchEvent')
        document.querySelector('input[type=tel]').dispatchEvent(event)
    }, 1000); */

    simulateTouch = function () {
      var param = {
        type: 'touchstart',
        canBubble: true,
        cancelable: true,
        view: window,
        detail: 0,
        screenX: 0,
        screenY: 0,
        clientX: 0,
        clientY: 0,
        ctrlKey: false,
        altKey: false,
        shiftKey: false,
        metaKey: false,
        touches: 0,
        targetTouches: 0,
        changedTouches: 0,
        scale: 0,
        rotation: 0,
        touchItem: 0,
      }

      var event = document.createEvent('TouchEvent')

      event.initTouchEvent(
        param.touchItem,
        param.touchItem,
        param.touchItem,
        param.type,
        param.view,
        param.screenX,
        param.screenY,
        param.clientX,
        param.clientY,
        param.ctrlKey,
        param.altKey,
        param.shiftKey,
        param.metaKey
      )

      input.dispatchEvent(event)
    }

})