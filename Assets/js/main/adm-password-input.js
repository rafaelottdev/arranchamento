const admPassBtn = document.querySelector('.adm-password-container > button')

function passwordValidation() {
    const password = 'FmlAdmpage4648'
    const inputValue = document.querySelector('.inputPass').value
    
    if(inputValue === password) {
        window.location.href = 'https://rafaelottdev.github.io/arranchamento/adm.html'
    }
}

admPassBtn.addEventListener('click', passwordValidation)
