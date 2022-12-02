export function modal(selector) {
    const modal = document.querySelector('.modal')
    if(!modal) return

    document.addEventListener('click', event => {
        if(event.target.dataset.toggle === 'modal' && !modal.classList.contains('active')) modal.classList.add('active')
        if(event.target.dataset.role === 'close-modal' && modal.classList.contains('active')) modal.classList.remove('active')
    })
    
}