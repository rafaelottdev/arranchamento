import { sendBtn } from "./modules/variables.js"
import { scrollGraduationList, getGraduation } from "./modules/graduation.js"
import { getName } from "./modules/war-name.js"
import { scrollMeaList, getMealList } from "./modules/meals.js"
import { toObj } from "./modules/addLocalStorage.js"

const main2 = document.querySelector('.arranchados')

function apagaFilho(main2) {
    main2.innerHTML = ''
}

function addElement(obj) {
    const section = document.createElement('section')
    section.classList.add('meal-data-container')

    const div = document.createElement('div')
    div.classList.add('name')

    const h3 = document.createElement('h3')
    const span = document.createElement('span')

    section.appendChild(div)
    main2.appendChild(section) // verificar se os numeros que estão na pagina são os mesmo que estão nas keys, se for os mesmos, não adicionar mas se não for igual adiciona - dar um jeito de inserir os numeros da key na pagina tbm, pra fazer a verificação (ex: user a com a key 2 foi adicionado na pagina, adicionar a key 2 na pagina tbm)
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
    apagaFilho(main2)
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