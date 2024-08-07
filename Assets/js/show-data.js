let localStorageData = false

function localStorageVerify() {
    if(localStorage.length > 0) {
        localStorageData = true
    }
}

function sectionCreate() {
    const section = document.createElement('section')
    section.classList.add('meal-data-container')    
}

function containerDivNameCreate() {
    const div = document.createElement('div')
    div.classList.add('name')
}

function htmlCreator() {
    sectionCreate()

    containerDivNameCreate()
}

if(localStorageData) {
    htmlCreator()
}

localStorageVerify()

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
