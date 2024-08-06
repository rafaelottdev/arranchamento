import { getGraduation } from "./graduation.js"
import { getName } from "./war-name.js"
import { getMealList } from "./meals.js"

function addLocalStorage(obj) {
    localStorage.setItem(obj.name, JSON.stringify(obj))
}

function toObj() {
    const userDataObj = {
        graduation: getGraduation(),
        name: getName(),
        mealList: getMealList()
    }

    addLocalStorage(userDataObj)
}

export {
    toObj
}
