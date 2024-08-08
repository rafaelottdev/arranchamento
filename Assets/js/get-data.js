import { sendBtn } from "./modules/variables.js"
import { scrollGraduationList, getGraduation } from "./modules/graduation.js"
import { getName } from "./modules/war-name.js"
import { scrollMeaList, getMealList } from "./modules/meals.js"
import { toObj } from "./modules/addLocalStorage.js"

function apagaFilho() {
    console.log('apagando filho')
}

function addElement(obj) {

    const main2 = document.querySelector('.arranchados')
    apagaFilho()

    const section = document.createElement('section')
    section.classList.add('meal-data-container')

    const div = document.createElement('div')
    div.classList.add('name')

    const h3 = document.createElement('h3')
    const span = document.createElement('span')

    section.appendChild(div)
    main2.appendChild(section)
    console.log('x')
}

function getFromLs() {
    let keys = Object.keys(localStorage)
    
    keys.forEach(item => {
        let obj = JSON.parse(localStorage.getItem(item))

        // adicionar na pagina (criar os elementos, setar as classes e adicionar o de cada um)
        addElement(obj)
    })
}

function functionExecution() { // guardar no localstorage
    scrollGraduationList()
    scrollMeaList()

    toObj()
    getFromLs()
}

sendBtn.addEventListener('click', functionExecution)

// criação de elemento e add as classes
//     const section = document.createElement('section')
//     section.classList.add('meal-data-container')

//     const div = document.createElement('div')
//     div.classList.add('name')

//     const h3 = document.createElement('h3')
//     h3.innerHTML = localStorage.
//     const span = document.createElement('span')

//     // inserindo os elementos dentro de outros
//     section.appendChild(div)
//     main.appendChild(section)