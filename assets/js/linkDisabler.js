export function linksDisabler(links=[]) {
    if(links === []) return console.log('[linkDisabler]: links array is empty')

    links.forEach(link => {
        document.addEventListener('click', event => {
            if(event.target.tagName === 'A') {
                event.preventDefault()
                const href = event.target.href.split('/').at(-1)
                console.log(href)
            }
        })
    })
}