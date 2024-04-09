(function () {

    function setupSliders() {
        const sliders = document.querySelectorAll('.slider')
        if (!sliders) return
        sliders.forEach((slider) => {
            const container = slider.querySelector('.slides')
            const axis = slider.dataset.axis || 'horizontal'
            const items = slider.dataset.items || 3
            const nextButton = slider.querySelector('.next') || false
            const prevButton = slider.querySelector('.prev') || false
            const navContainer = slider.querySelector('.slider__nav') || false
            const nav = navContainer ? true : false
            const controls = slider.querySelector('.slider__buttons') || false
            const autoplay = slider.dataset.autoplay ? true : false
            const gutter = slider.dataset.gutter || 10
            const direction = slider.dataset.direction || 'forward' // or 'backward'
            const responsive = slider.dataset.responsive
            ? JSON.parse(slider.dataset.responsive)
            : {}

            if (navContainer)
            container
                .querySelectorAll('.slide')
                .forEach((slide) =>
                navContainer.insertAdjacentHTML(
                    'beforeend',
                    '<span class="dot"></span>'
                )
                )

            const t_slider = tns({
            container: container,
            items: items,
            controls: false,
            mouseDrag: true,
            autoplay: autoplay,
            autoplayDirection: direction,
            autoplayButtonOutput: false,
            autoplayTimeout: 4000,
            speed: 1500,
            gutter: gutter,
            axis: axis,
            nextButton: nextButton,
            prevButton: prevButton,
            nav: nav,
            navContainer: navContainer,
            autoplayHoverPause: true,
            responsive: responsive,
            })

            prevButton.addEventListener('click', () => t_slider.goTo('prev'))
            nextButton.addEventListener('click', () => t_slider.goTo('next'))
        })
    }

    function setupTogglers(options = {}) {
      const { togglerSel, togglableSel, activeClass, onSel, offSel } = {
        togglerSel: '[data-role="toggler"]',
        onSel: '[data-on]',
        offSel: '[data-off]',
        togglableSel: '[data-role="togglable"]',
        activeClass: 'active',
        ...options,
      }
      const togglers = Array.from(document.querySelectorAll(togglerSel))
      const togglables = Array.from(document.querySelectorAll(togglableSel))
      const onButtons = Array.from(document.querySelectorAll(onSel)) || []
      const offButtons = Array.from(document.querySelectorAll(offSel)) || []
      if (!togglers || !togglables) return

      document.addEventListener('click', (event) => {
        if (togglers.includes(event.target)) {
          const el = togglables.find(
            (el) => el.dataset.name === event.target.dataset.target
          )
          el.classList.toggle(activeClass)
        }
        if (onButtons.includes(event.target)) {
          const el = togglables.find(
            (el) => el.dataset.name === event.target.dataset.on
          )
          el.classList.add(activeClass)
        }
        if (offButtons.includes(event.target)) {
          const el = togglables.find(
            (el) => el.dataset.name === event.target.dataset.off
          )
          el.classList.remove(activeClass)
        }
      })
    }

    function setupScroll() {
      const topButton = document.querySelector('.scrolltop-button')
      window.addEventListener('scroll', () => {
        const scrolled = window.scrollY
        const vh = document.documentElement.clientHeight
        if (scrolled > vh / 2) topButton.classList.remove('hidden')
        else topButton.classList.add('hidden')
      })
      document.addEventListener('click', (event) => {
        if (
          event.target === topButton ||
          event.target.closest('.scrolltop-button')
        ) {
          window.scrollTo({
            top: 0,
            behavior: 'smooth',
          })
        }
      })
    }

    function setupZoomer() {
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

          modal.innerHTML = content
          modal.classList.add('active')
          document.body.append(modal)

          modal.addEventListener('click', (event) => {
            if (event.target.tagName != 'IMG') modal.remove()
          })
        }
      })
    }

    function setupFilter() {
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
        if (button.dataset.filter === 'all')
          return cards.forEach((card) => card.classList.remove('hidden'))

        cards.forEach((card) => {
          const cardTag = card.querySelector('.card__tag').dataset.tag
          if (cardTag === button.dataset.filter)
            return card.classList.remove('hidden')
          if (cardTag != button.dataset.filter)
            return card.classList.add('hidden')
        })
      }
    }

    function setupSearch() {
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






    setupSliders()
    setupTogglers()
    setupScroll()
    setupZoomer()
    setupFilter()
})()
