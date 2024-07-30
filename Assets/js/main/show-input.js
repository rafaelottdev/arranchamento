const admBtn = document.querySelector('.footer-btn')

function showInputPass() {
    const admPassElement = document.querySelector('.adm-password-container')

    if(admBtn.classList.contains('clicado')) {
        admPassElement.style.cssText = `left: 10px;`
    }

    else {
        admPassElement.style.cssText = `left: -240px;`
    }
}

function addClass() {
    admBtn.classList.toggle('clicado')

    showInputPass()
}

admBtn.addEventListener('click', addClass)
