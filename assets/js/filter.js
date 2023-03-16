import { services } from "./data.js";
export function setupFilter() {
//   const filterEl = document.querySelector('[data-role="filter"]') || null
  const buttons = Array.from(document.querySelectorAll('[data-filter]'))
  const list = document.querySelector('[data-role="filter-list"]')
  const cards = list ? list.querySelectorAll('.card') : null
  if (!buttons || !list || !cards) return

  document.addEventListener('click', (event) => {
    if (!buttons.includes(event.target)) return

    buttons.forEach((button) => button.classList.remove('active'))
    event.target.classList.add('active')

    filterCards(event.target, cards)
  })

  function filterCards(button, cards) {
    if (button.dataset.filter === 'all') return cards.forEach((card) => card.classList.remove('hidden'))

    cards.forEach((card) => {
      const cardTag = card.querySelector('.card__tag').dataset.tag
      if (cardTag === button.dataset.filter) return card.classList.remove('hidden')
      if (cardTag != button.dataset.filter) return card.classList.add('hidden')
    })
  }
}

export function setupSearch() {
  const input = document.querySelector('[data-role="search"]') || null
  const list = document.querySelector('[data-role="cards_list"]')
  const cards = list ? list.querySelectorAll('.card') : null
  if (!input || !list || !cards) return

  input.addEventListener('input', () => searchCards(input))

  function searchCards(input) {
    cards.forEach((card) => {
      if (
        !card
          .querySelector('.card__title')
          .textContent.trim()
          .toLowerCase()
          .includes(input.value.trim().toLowerCase())
      )
        return card.classList.add('hidden')
      card.classList.remove('hidden')
    })
  }
}


/* export function setupFilter() {
    const buttons = document.querySelector('[data-filter]')
    const list = document.querySelector('[data-role="filter-list"]')
    
    let newList = ''
    services.electric.forEach(serv => {
        const tagval = serv.tag === 'черновые' ? 'draft' : 'finish'

        const elString = `
            <a href="./single.html" class="card">
                <div class="card__body">
                    <img src="${serv.image}" alt="${serv.title}" class="card__image">
                </div>
                <div class="card__footer">
                    <h3 class="card__title">${serv.title}</h3>
                    <span class="card__price">${serv.price}</span>
                    <span class="card__tag" data-tag="${tagval}">${serv.tag}</span>
                </div>
            </a>
        `
        newList += elString
    })
    list.innerHTML = newList
} */