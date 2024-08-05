let graduation = ''

function graduationList() {
    const inputGraduationList = [... document.querySelectorAll('.graduation-radio-container__graduation-item > input')]

    return inputGraduationList
}

function getGraduation() {
    return graduation
}

function getGraduationText(input) {
    switch (input.id) {
        case 'ten-input':
            graduation = '1° TEN'
            break;

        case 's-ten-input':
            graduation = 's-ten-input'
            break

        case 'sgt-input':
            graduation = '3° SGT'
            break

        case 'al-input':
            graduation = 'AL CFST'
            break

        case 'cb-input':
            graduation = 'CB'
            break

        case 'ep-input':
            graduation = 'SD EP'
            break

        case 'ev-input':
            graduation = 'SD EV'
            break
    
        default:
            break;
    }

    getGraduation()
}

function isChecked(input) {
    if(input.checked) {
        getGraduationText(input)
    }
}

function scrollGraduationList() {
    graduationList().forEach((input) => {
        isChecked(input)
    })
}

export {
    scrollGraduationList,
    getGraduation,
}
