function blockEnter(event) {
    if(event.key == 'Enter' || event.key == '') {
        event.preventDefault()
    }
}
window.addEventListener('keydown', blockEnter)
