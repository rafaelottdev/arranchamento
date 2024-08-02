function blockEnter(event) {
    if(event.code == 'NumpadEnter' || event.code == 'Enter') {
        alert('deu enter')
        alert(event.code)
        event.preventDefault()
    }
}

window.addEventListener('keyup', blockEnter)
