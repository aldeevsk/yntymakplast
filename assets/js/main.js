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
    document.querySelector('input[type=tel]').focus()
    document.querySelector('input[type=tel]').click()

})