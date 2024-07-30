const admBtn = document.querySelector('.adm-password-container > button')

function validation() {
    const password = 'FmlAdm4846'
    const passwordValue = document.querySelector('.adm-password-container > input').value
    const lockCover = document.querySelector('.lock-cover')

    if(passwordValue == password) {
        lockCover.style.cssText = `top: -1080px;`
        console.log('ta certo')
    }
}

admBtn.addEventListener('click', validation)
