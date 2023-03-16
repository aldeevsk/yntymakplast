export function setupTogglers(options = {}) {
    const {togglerSel, togglableSel, activeClass, onSel, offSel} = {togglerSel: '[data-role="toggler"]', onSel: '[data-on]', offSel: '[data-off]', togglableSel: '[data-role="togglable"]', activeClass:'active', ...options}
    const togglers = Array.from(document.querySelectorAll(togglerSel))
    const togglables = Array.from(document.querySelectorAll(togglableSel))
    const onButtons = Array.from(document.querySelectorAll(onSel)) || []
    const offButtons = Array.from(document.querySelectorAll(offSel)) || []
    if(!togglers || !togglables) return


    document.addEventListener('click', event => {
        if(togglers.includes(event.target)) {
            const el = togglables.find(el => el.dataset.name === event.target.dataset.target)
            el.classList.toggle(activeClass)
        }
        if(onButtons.includes(event.target)) {
            const el = togglables.find(el => el.dataset.name === event.target.dataset.on)
            el.classList.add(activeClass)
        }
        if(offButtons.includes(event.target)) {
            const el = togglables.find(el => el.dataset.name === event.target.dataset.off)
            el.classList.remove(activeClass)
        }
    })
}