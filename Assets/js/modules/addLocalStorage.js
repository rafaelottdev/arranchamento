import { getGraduation } from "./graduation.js"
import { getName } from "./war-name.js"
import { getMealList } from "./meals.js"

let nObj = 1

function addLocalStorage(obj) {
    
    localStorage.setItem(nObj, JSON.stringify(obj))
    nObj++

    console.log(nObj)
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
