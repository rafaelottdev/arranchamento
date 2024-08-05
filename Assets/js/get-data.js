import { sendBtn } from "./modules/variables.js"
import { scrollGraduationList, getGraduation } from "./modules/graduation.js"
import { getName } from "./modules/war-name.js"
import { scrollMeaList } from "./modules/meals.js"

function functionExecution() {
    scrollGraduationList()
    scrollMeaList()
}

sendBtn.addEventListener('click', functionExecution)
