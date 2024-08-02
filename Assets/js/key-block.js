function blockEnter(event) {
    if(event.code === 'NumpadEnter' || event.code === 'Enter') {
        alert('deu enter')
        console.log('Deu enter')
        event.preventDefault()
    }
    alert(event.code)
}

window.addEventListener('keyup', blockEnter)
