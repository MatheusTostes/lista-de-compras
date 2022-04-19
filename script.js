const historic = document.getElementById('historic')
const items = document.getElementsByClassName('item')
const total = document.getElementById('total-price')

const attValue = (event) => {
    const element = event.target
    const parent = element.parentNode
    const itemValue = parseFloat(parent.getElementsByClassName('item-price')[0]
    .innerText.replace('R$ ', ''))

    const totalValue = parseFloat(total.innerText.replace('R$ ', ''))
    if (element.checked) {
        total.innerText = (itemValue+totalValue).toFixed(2)
    } else {
        total.innerText = (totalValue-itemValue).toFixed(2)
    }
}

for (let item of items) {
    let element = item.getElementsByClassName('item-input')[0]
    element.addEventListener("click", attValue)
}