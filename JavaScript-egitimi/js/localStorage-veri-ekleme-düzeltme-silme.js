//local storage: Web Storage terimi web sayfasında yapılan değişikliklerin kaydının tutulmasına karşılık gelmektedir.
let user = {userName: "rabiatop", isActive: true}

localStorage.setItem('userInfo', JSON.stringify(user))

let userInfo = localStorage.getItem('userInfo')
userInfo = JSON.parse(userInfo)
console.log( userInfo )

