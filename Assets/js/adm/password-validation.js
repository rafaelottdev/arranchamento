const body = document.querySelector('body')
const admBtn = document.querySelector('.adm-password-container > button')

function validation() {
    const password = 'FmlAdm4846'
    const passwordValue = document.querySelector('.adm-password-container > input').value
    const lockCover = document.querySelector('.lock-cover')

    if(passwordValue == password) {
        body.style.cssText = 'overflow: visible;'
        lockCover.style.cssText = `top: -1080px;`
    }
}

admBtn.addEventListener('click', validation)
