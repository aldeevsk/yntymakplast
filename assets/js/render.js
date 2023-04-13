import { services } from "./data.js";

export function render(containerSel, data = {}) {
    const container = document.querySelector(containerSel)
    const {title, price, image, tag} = data
    if( !container || !data) return
    
    const htmlstring = `
        <div class="card">
            <div class="card__body">
                <img src="${image}" alt="${title}" class="card__image">
            </div>
            <div class="card__footer">
                <h3 class="card__title">${title}</h3>
                <span class="card__price">${price}<sup>2</sup></span>
                <span class="card__tag" data-tag="${tag}">${tag}</span>
            </div>
        </div>
    `

    container.insertAdjacentHTML('beforeend', htmlstring)
}

export function rerender(containerSel, array) {
    const container = document.querySelector(containerSel)
    container.innerHTML = ''
    array.map( item => {
        render(containerSel, item)
    })
}

export function autoRerender(containerSel) {
  const container = document.querySelector(containerSel)
  if(!container) return console.log('[autoRerender]: container not found')
  const array = services[container.dataset.name]
  container.innerHTML = ''
  array.map((item) => {
    render(containerSel, item)
  })
}