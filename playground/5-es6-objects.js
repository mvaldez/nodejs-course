// object property shorthand

const name = 'Mark'
const age = 47

const user = {
    name: name,
    age: age,
    location: 'Austin'
}

console.log(user)

// Object destructuring

const product = {
    label: 'Red Notebook',
    price: 3,
    stock: 201,
    salePrice: undefined
}

const {label:productLabel, stock, rating=5} = product

console.log(productLabel)
console.log(stock)
console.log(rating)

const transaction = (type, { label, stock }) => {
    console.log(type)
    console.log(label)
}

transaction('order', product)

