export function initForms(selector) {
    const forms = document.querySelectorAll(selector)
    if(!forms) return

    forms.forEach(form => {
        form.addEventListener('submit', event => {
            event.preventDefault()
        })
    })
}