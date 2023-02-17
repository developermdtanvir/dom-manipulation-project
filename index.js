document.getElementById('calculate').addEventListener('click', (e) => {
    e.preventDefault()
    const food = valueIdentifiy('food')
    const rent = valueIdentifiy('rent')
    const clothes = valueIdentifiy('clothes')
    const income = valueIdentifiy('income')
    const totalExpness = Expness(food, rent, clothes)
    const balance = income - totalExpness
    document.getElementById('balance').innerText = balance
})
const valueIdentifiy = (id) => {
    const value = parseInt(document.getElementById(id).value)
    return value
}

document.getElementById('save-button').addEventListener('click', () => {
    const incomeValue = document.getElementById('income').value
    const income = parseInt(incomeValue)
    const saveValue = document.getElementById('save').value
    const savePercent = saveValue / 100
    const totalSave = income * savePercent
    document.getElementById('saving').innerText = totalSave
    console.log(totalSave)
})

const Expness = (food, rent, clothes) => {
    const totalExpness = food + rent + clothes
    document.getElementById('expanse').innerText = totalExpness
    return totalExpness
}