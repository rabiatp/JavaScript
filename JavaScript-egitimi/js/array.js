
let items = [10, 20, 30,40, ]

// Array : sona oge eklemek --> push
items.push(50)
console.log("50:",items)

// Array : basa oge eklemek
items.unshift(5)
console.log("5:",items)

// Array : sondaki ogeyi cıkarmak --> pop
let lastItem = items.pop() //son elemanı lasItem içerisine ekledik
console.log(lastItem , items)

// Array: bastaki ogeyi çıkar --> shit
let firstItem = items.shift() //son elemanı lasItem içerisine ekledik
console.log(firstItem , items)

// Array içerisinde Array:
let femaleUsers = ["ayse", "hulya", "merve"]
let maleUsers = ["ahmet", "hasan", "mehmet"]
items.unshift(femaleUsers)
console.log(items)
items.push(maleUsers)
console.log(items)

// Array icerisinden oge ayırmak --> splice(pos,item?)
let newItems = items.splice(10,50)

console.log("new ıtems:",newItems)
console.log("items:",items)

// Array icerisindeki ogenin index bilgisini bulmak --> indexof('value')
items.unshift("lorem")
items.push("ipsum")
console.log("items:",items)
console.log("index bilgisi: ", items.indexOf("lorem"))

// Array koplamak: --> slice, [...ES6]
let copyItems = items
copyItems  = items.slic() //kopyalama yaptı
copyItems.pop()
console.log("copyItems",copyItems)
console.log("items",items)

let es6Items = [...items] // es6 ve sonrasında gelen kopyalama islemi
console.log("es6Items",es6Items)

//iki array yapısını birleştirmek
let allUsers = [...femaleUsers, ...maleUsers] //es6 birden fazla array yapısını birleştirmek
console.log(allUsers)

// Array içerisindeki bilgiyi String'e çevirmek -> toString, join
console.log(allUsers.toString())
console.log(allUsers.join(" --- "))

// Istediğiniz index bilgisine öğe eklemek -> splice(index,0,value)
allUsers.splice(allUsers.length - 1, 0, "melisa")
console.log(allUsers)