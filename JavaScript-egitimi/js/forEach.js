
const PRODUCTS = ["laptop","phone","desktop PC","speaker","server"]

PRODUCTS.forEach( (product, index,array) => {
array[index] = product + "--"
})

PRODUCTS.forEach( (product, index,array) => {
    array[index] = `${product.toUpperCase()}`
});

console.log(PRODUCTS)

const userListDOM = document.querySelector("#userList")

PRODUCTS.forEach(item => {
    const liDOM = document.createElement('li')
    liDOM.innerHTML = item
    userListDOM.append(liDOM)
})