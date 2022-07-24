//*******  PROMPT İLE KULLANICIDAN BİLGİ ALMAK ******

let fullName = prompt("lütfen adınızı giriniz:")

let greeting = document.querySelector("#greeting")
greeting.innerHTML = `${greeting.innerHTML} <small style="color:red"> ${fullName}</small>`
