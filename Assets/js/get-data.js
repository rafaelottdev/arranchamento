import { sendBtn } from "./modules/variables.js"
import { scrollGraduationList, getGraduation } from "./modules/graduation.js"
import { getName } from "./modules/war-name.js"
import { scrollMeaList, getMealList } from "./modules/meals.js"
import { toObj } from "./modules/addLocalStorage.js"

function functionExecution() { // guardar no localstorage
    scrollGraduationList()
    scrollMeaList()

    toObj()
}

sendBtn.addEventListener('click', functionExecution)
