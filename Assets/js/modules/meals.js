function mealList() {
    let inputList = document.querySelectorAll('.inputMeal')

    return inputList
}

function ToList(input) {
    let tuesday, windsday, quinta, sexta, sabado, domingo, segunda = [] //arrumar isso, colocar esses array dentro de outro
 
    switch (input.id.slice(-1)) {
        case '1':
            tuesday.push(input.id)
            break

        case '2':
            tuesday.push(input.id)
            break;

        case '3':
            tuesday.push(input.id)
            break

        case '4':
            tuesday.push(input.id)
            break;

        case '5':
            tuesday.push(input.id)
            break

        case '6':
            tuesday.push(input.id)
            break;

        case '7':
            tuesday.push(input.id)
            break
    
        default:
            break;
    }

    console.log(tuesday)

}

function isChecked(input) {
    if(input.checked) {
        ToList(input)
    }
}

function scrollMeaList() {
    mealList().forEach((input) => {
        isChecked(input)
    })
}

export {
    scrollMeaList
}