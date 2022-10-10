const pwEl = document.querySelector('#pw'),
    copyEl = document.querySelector('#copy'),
    lenEl = document.querySelector('#len'),
    upperEl = document.querySelector('#upper'),
    lowerEl = document.querySelector('#lower'),
    numberEl = document.querySelector('#number'),
    symbolEl = document.querySelector('#symbol'),
    generateEl = document.querySelector('#generate')

const upperLetters = "ABCDEFGHIJKLMNOPQRSTUVWXYZ"
const lowerLetters = upperLetters.toLowerCase()
const numbers = "0123456789"
const symbols = "~!@#$%^&*()_+=|"

function getLowerCase() {
    return lowerLetters[Math.floor(Math.random() * lowerLetters.length)]
}

function getUpperCase() {
    return upperLetters[Math.floor(Math.random() * upperLetters.length)]
}

function getNumber() {
    return numbers[Math.floor(Math.random() * numbers.length)]
}

function getSymbol() {
    return symbols[Math.floor(Math.random() * symbols.length)]
}

function generatePassword() {
    const len = lenEl.value
    let password = ''
    for (let i = 0; i < len; i++){
        const x = generateX()
        password += x
    }
    pwEl.textContent = password
}

function generateX() {
    const xs = []
    if (upperEl.checked) {
        xs.push(getUpperCase())
    }
    if (lowerEl.checked) {
        xs.push(getLowerCase())
    }
    if (numberEl.checked) {
        xs.push(getNumber())
    }
    if (symbolEl.checked) {
        xs.push(getSymbol())
    }
    if (xs.length === 0){ 
        alert('Check at least one box')
        return
    }
    return xs[Math.floor(Math.random() * xs.length)]
}

generateEl.addEventListener('click', generatePassword)
copyEl.addEventListener('click', () => {
    const textarea = document.createElement('textarea')
    const password = pwEl.textContent
    if (!password) return
    textarea.value = password
    document.body.appendChild(textarea)
    textarea.select()
    document.execCommand("copy")
    textarea.remove()
    alert("Password copied to clipboard")
})
