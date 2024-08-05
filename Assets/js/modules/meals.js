let dayList = [[], [], [], [], [], [], []] // tentar fazer com OBJ (mais facil?)

function mealList() {
    let inputList = document.querySelectorAll('.inputMeal')

    return inputList
}

function textConvert(dayList) {
    dayList.forEach((list) => {
        list.forEach((item, i) => {
            switch (item.slice(0, -2)) {
                case 'breakfast':
                    list[i] = 'Café'
                    break;

                case 'lunch':
                    list[i] = 'Almoço'
                    break;

                case 'dinner':
                    list[i] = 'Janta'
                    break;
            
                default:
                    break;
            }
        })
    })
    
    console.log(dayList) // agora tentar fazer um obj pra cada dia ( ex: dayObj = {tuesday: [café, almoço], wednesday: [janta]} ) isso vai deixar mais facil de acessar quando for pra mostrar na pagina
}

function addList(input) {
    switch (input.id.slice(-1)) {
        case '1':
            dayList[0].push(input.id)
            break

        case '2':
            dayList[1].push(input.id)
            break;

        case '3':
            dayList[2].push(input.id)
            break

        case '4':
            dayList[3].push(input.id)
            break;

        case '5':
            dayList[4].push(input.id)
            break

        case '6':
            dayList[5].push(input.id)
            break;

        case '7':
            dayList[6].push(input.id)
            break
    
        default:
            break;
    }
}

function isChecked(input) {
    if(input.checked) {
        addList(input)
    }
}

function scrollMeaList() {
    dayList = [[], [], [], [], [], [], []]

    mealList().forEach((input) => {
        isChecked(input)
    })

    textConvert(dayList)
}

export {
    scrollMeaList
}
