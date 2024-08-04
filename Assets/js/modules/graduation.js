function graduationList() {
    const inputGraduationList = [... document.querySelectorAll('.graduation-radio-container__graduation-item > input')]

    return inputGraduationList
}

function getGraduationText(input) {
    switch (input.id) {
        case 'ten-input':
            return 'TEN'
            break;

        case 's-ten-input':
            return 's-ten-input'
            break

        case 'sgt-input':
            return '3° SGT'
            break

        case 'al-input':
            return 'AL CFST'
            break

        case 'cb-input':
            return 'CB'
            break

        case 'ep-input':
            return 'SD EP'
            break

        case 'ev-input':
            return 'SD EV'
            break
    
        default:
            break;
    }
}

function isChecked(input) {
    if(input.checked) {
        console.log(getGraduationText(input))
    }
}

function getGraduation() {
    graduationList().forEach((input) => {
        isChecked(input)
    })
}

export {
    getGraduation
}
