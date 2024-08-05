function transformToUpper(name) {
    let toArr = name.split('')
    let nameUpper = ''

    toArr.forEach(character => {
        nameUpper += character.toUpperCase()
    })

    return nameUpper
}

function getName() {
    const name = document.querySelector('.name-input-container > input').value
    
    return transformToUpper(name)
}

export {
    getName
}