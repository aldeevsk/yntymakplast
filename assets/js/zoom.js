export function setupZoomer() {
  const els = Array.from(document.querySelectorAll('[data-zoom]'))
  if (!els) return console.log('[zoom]: zoomable elements not found')

  document.addEventListener('click', (event) => {
    if (els.includes(event.target)) {
      const modal = document.createElement('div')
      modal.classList.add('zoom-modal')
      modal.classList.add('modal')
      const content = `
        <div class="modal__content">
          <button class="button--nulled" style="position: absolute; top: 10px; right: 10px;"><i class="icon-cross"></i></button>
          <img class="zoom__image" src="${event.target.src}"/>
        </div>`
      // modal.innerHTML = ``
      modal.innerHTML = content
      modal.classList.add('active')
      document.body.append(modal)

      // modal.querySelector('.zoom__close').addEventListener('click', () => {
      //     modal.remove()
      // })
      modal.addEventListener('click', (event) => {
        if (event.target.tagName != 'IMG') modal.remove()
      })
    }
  })
}
