export function setupSliders() {
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

    // const options = slider.dataset.options ? JSON.parse(slider.dataset.options) : null

    // if(options) console.log(options.title)

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
