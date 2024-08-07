// PUXAR O LOCALSTORAGE PRA CA
function getLocalStorageData(keys) {
    let kl = []

    keys.forEach((key) => {
        kl = [... localStorage.getItem(key)]
    })

    console.log(kl)
}

function getKeys() {
    let storageKeysList = []
    
    setInterval(() => {
        storageKeysList = Object.keys(localStorage)

        getLocalStorageData(storageKeysList)
    }, 29000)
}

getKeys()



// let localStorageData = false

// function localStorageVerify() {
//     if(localStorage.length > 0) {
//         localStorageData = true
//     }
// }

// function htmlCreator() {
//     const main = document.querySelector('main')

//     // criação de elemento e add as classes
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
    
// }

// localStorageVerify()

// if(localStorageData) {
//     htmlCreator()
// }



/* 
<h3>
    <span>SD EP</span>
    Rafael alves
</h3>

<div class="container-daily-meals">
    <div class="day-container">
        <p class="day">Terça:</p>
    </div>

    <ul class="meal-list">
        <li class="item item-1">Café</li>
        <li class="item item-2">Almoço</li>
        <li class="item item-3">Jantar</li>
    </ul>
</div>

<div class="container-daily-meals">
    <div class="day-container">
        <p class="day">Quarta:</p>
    </div>

    <ul class="meal-list">
        <li class="item item-1">Café</li>
        <li class="item item-2">Almoço</li>
        <li class="item item-3">Jantar</li>
    </ul>
</div>

<div class="container-daily-meals">
    <div class="day-container">
        <p class="day">Quinta:</p>
    </div>

    <ul class="meal-list">
        <li class="item item-1">Café</li>
        <li class="item item-2">Almoço</li>
        <li class="item item-3">Jantar</li>
    </ul>
</div>

<div class="container-daily-meals">
    <div class="day-container">
        <p class="day">Sexta:</p>
    </div>

    <ul class="meal-list">
        <li class="item item-1">Café</li>
        <li class="item item-2">Almoço</li>
        <li class="item item-3">Jantar</li>
    </ul>
</div>

<div class="container-daily-meals">
    <div class="day-container">
        <p class="day">Sabado:</p>
    </div>

    <ul class="meal-list">
        <li class="item item-1">Café</li>
        <li class="item item-2">Almoço</li>
        <li class="item item-3">Jantar</li>
    </ul>
</div>

<div class="container-daily-meals">
    <div class="day-container">
        <p class="day">Domingo:</p>
    </div>

    <ul class="meal-list">
        <li class="item item-1">Café</li>
        <li class="item item-2">Almoço</li>
        <li class="item item-3">Jantar</li>
    </ul>
</div>

<div class="container-daily-meals">
    <div class="day-container">
        <p class="day">Segunda:</p>
    </div>

    <ul class="meal-list">
        <li class="item item-1">Café</li>
        <li class="item item-2">Almoço</li>
        <li class="item item-3">Jantar</li>
    </ul>
</div>
*/
