export function setupScroll() {
  const topButton = document.querySelector('.scrolltop-button')
  window.addEventListener('scroll', () => {
    const scrolled = window.scrollY
    const vh = document.documentElement.clientHeight
    if (scrolled > vh / 2) topButton.classList.remove('hidden')
    else topButton.classList.add('hidden')
  })
  document.addEventListener('click', (event) => {
    if (event.target === topButton || event.target.closest('.scrolltop-button')) {
      window.scrollTo({
        top: 0,
        behavior: 'smooth',
      })
    }
  })
}
