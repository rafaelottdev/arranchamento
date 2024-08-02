function blockEnter(event) {
    // if(event.code == 'NumpadEnter' || event.code == 'Enter') {
    //     alert('deu enter')
        
    //     event.preventDefault()
    // }

    if(event.code == '') {
        alert('apertou o enter o celular')
    }

    alert(event.code)
}

window.addEventListener('keyup', blockEnter)
