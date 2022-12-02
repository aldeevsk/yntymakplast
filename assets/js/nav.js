export function nav(selector) {
    const nav = document.querySelector(selector)

    const openButton = document.querySelector('.nav__open')

    const closeButton = nav.querySelector('.nav__close')

    openButton.addEventListener('click', () => nav.classList.add('active'))
    closeButton.addEventListener('click', () => nav.classList.remove('active'))
}