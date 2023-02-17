document.getElementById('calculate').addEventListener('click', (e) => {
    e.preventDefault()
    const foodValue = document.getElementById('food').value
    const rentValue = document.getElementById('rent').value
    const clothesValue = document.getElementById('clothes').value
    const food = parseInt(foodValue)
    const rent = parseInt(rentValue)
    const clothes = parseInt(clothesValue)
    const totalExpness = food + rent + clothes
    console.log('totalExpness', totalExpness)
})