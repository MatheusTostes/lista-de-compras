const historic = document.getElementById('historic')
const items = document.getElementsByClassName('item')
const total = document.getElementById('total-price')
const totalItems = [
    {
        qtd: 0,
        name: 'arroz',
        price: 18.39
    },
    {
        qtd: 0,
        name: '30 ovos',
        price: 19.90
    },
    {
        qtd: 0,
        name: 'parmegiana',
        price: 18.79
    },
    {
        qtd: 0,
        name: 'bisc. champagne',
        price: 12.99
    },
    {
        qtd: 0,
        name: 'bisc. wafer',
        price: 15.99
    },
    {
        qtd: 0,
        name: 'ovomaltine',
        price: 19.99
    },
    {
        qtd: 0,
        name: 'pão hamburguer',
        price: 6.99
    },
    {
        qtd: 0,
        name: 'bolo caneca',
        price: 3.69
    },
    {
        qtd: 0,
        name: 'tapioca',
        price: 4.99
    },
    {
        qtd: 0,
        name: 'maionese doypack',
        price: 12.98
    },
    {
        qtd: 0,
        name: 'molho parmesão',
        price: 10.99
    },
    {
        qtd: 0,
        name: 'tempero baiano',
        price: 6.39
    },
    {
        qtd: 0,
        name: 'milho',
        price: 2.69
    },
    {
        qtd: 0,
        name: 'barbecue',
        price: 7.79
    },
    {
        qtd: 0,
        name: 'azeite',
        price: 19.99
    },
    {
        qtd: 0,
        name: 'leite',
        price: 4.99
    },
    {
        qtd: 0,
        name: 'pão de alho',
        price: 10.59
    },
    {
        qtd: 0,
        name: 'presunto sadia',
        price: 7.99
    },
    {
        qtd: 0,
        name: 'queijo sadia',
        price: 8.92
    },
    {
        qtd: 0,
        name: 'aipim descascado',
        price: 5.99
    },
    {
        qtd: 0,
        name: 'escondqtdinho',
        price: 21.99
    },
    {
        qtd: 0,
        name: 'pão de queijo',
        price: 7.39
    },
    {
        qtd: 0,
        name: 'desodorante dry',
        price: 11.59
    },
]


const plusValue = (event) => {
    const element = event.target
    const parent = element.parentNode
    const name = parent.getElementsByClassName('item-name')[0].innerText.toLowerCase()
    let qtdValue = parseFloat(parent.getElementsByClassName('item-qtd')[0].innerText)
    let itemQtd = qtdValue += 1
    parent.getElementsByClassName('item-qtd')[0].innerText = itemQtd.toString()

    const item = totalItems.find((item) => item.name === name)
    item.qtd += 1

    setTotal()
}

const minusValue = (event) => {
    const element = event.target
    const parent = element.parentNode
    const name = parent.getElementsByClassName('item-name')[0].innerText.toLowerCase()
    let qtdValue = parseFloat(parent.getElementsByClassName('item-qtd')[0].innerText)
    let itemQtd = qtdValue -= 1
    parent.getElementsByClassName('item-qtd')[0].innerText = itemQtd.toString()

    const item = totalItems.find((item) => item.name === name)
    item.qtd -= 1

    setTotal()
}


for (let item of items) {
    let element = item.getElementsByClassName('plus')[0]
    element.addEventListener("click", plusValue)
}

for (let item of items) {
    let element = item.getElementsByClassName('minus')[0]
    element.addEventListener("click", minusValue)
}

const setTotal = () => {
    let totalValue = 0
    totalItems.forEach((item) => {
        totalValue += (item.price*item.qtd)
    })
    total.innerText = totalValue.toFixed(2).toString()
}

setTotal()
