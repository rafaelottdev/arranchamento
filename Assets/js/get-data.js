import { sendBtn } from "./modules/variables.js"
import { getGraduation } from "./modules/graduation.js"

function functionExecution() {
    getGraduation()
}

sendBtn.addEventListener('click', functionExecution)
