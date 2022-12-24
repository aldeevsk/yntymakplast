export function initDragEls() {
  const targetBox = document.querySelector('.row-2 .col:last-child')
  const srcBox = document.querySelector('.row-2 .col:first-child')
  
  /* console.log(srcBox.offsetTop, srcBox.offsetHeight, srcBox.offsetLeft, srcBox.offsetWidth) */
  /* console.log(srcBox.offsetTop, srcBox.offsetHeight) */

  document.addEventListener('dragend', event => {
    if(!event.target.classList) return
    const badge = event.target.classList && event.target.classList.contains('badge') ? event.target : event.target.closest('.badge') || null
    // const badge = event.target || null
    if(!badge) return


    if (
      event.pageX > targetBox.offsetLeft &&
      event.pageX < targetBox.offsetLeft + targetBox.offsetWidth &&
      event.pageY > targetBox.offsetTop &&
      event.pageY < targetBox.offsetTop+ targetBox.offsetHeight
    ) {
      targetBox.append(badge)
    }
    if(event.pageX > srcBox.offsetLeft && event.pageX < srcBox.offsetLeft + srcBox.offsetWidth &&
        event.pageY > srcBox.offsetTop && event.pageY < srcBox.offsetTop + srcBox.offsetHeight
        ) {
        srcBox.append(badge)
    }

    /* document.addEventListener('dragover', event => {
        if (
          event.pageX > targetBox.offsetLeft &&
          event.pageX < targetBox.offsetLeft + targetBox.offsetWidth &&
          event.pageY > targetBox.offsetTop &&
          event.pageY < targetBox.offsetTop + targetBox.offsetHeight
        ) {
            console.log(event.target)
          event.target.style.cursor = 'copy'
        }
    }) */

    document.addEventListener('drop', event => {
        ev.preventDefault()
        event.dataTransfer.dropEffect = 'move'
        event.target.style.cursor = 'move'
    })

  })





document.addEventListener('timeout', () => console.log('timeout'))


setTimeout(() => {
    const timeout = new Event('timeout')
    document.dispatchEvent(timeout)
}, 4000);

}