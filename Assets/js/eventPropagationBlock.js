import { sendBtn } from "./modules/variables.js";

function enterBlock(event) {
    if(event.key == 'Enter' || event.key == '') {
        event.preventDefault()
    }
}

function clickBlock(event) {
    event.preventDefault()
}

window.addEventListener('keydown', enterBlock)
sendBtn.addEventListener('click', clickBlock)
