
function greetings(firstName,lastName){
    let info =` Merhaba ${firstName} ${lastName}`
    return info
}

let greetingsInfo = greetings("Ad","Soyad")
console.log(greetingsInfo)

function domIdWriteInfo(id,info) {
    let domObject = document.querySelector(`#${id}`)
    domObject.innerHTML = info
}

//domIdWriteInfo('greeting',greetings("ad","soyad")) //function kullanarak h1 ine bastırmak

let htmlInfo = `<span style="color:red">COLOR REDDDD</span>`

domIdWriteInfo('greeting',htmlInfo)
domIdWriteInfo('info',greetings("lorem","dol"))
