//let h2 = document.getElementsByTagName('h2')

let title = document.getElementById('title')
title.innerHTML = "değişen bilgi"
console.log(title.innerHTML)

let link = document.querySelector("#kodluyoruzLink")
link.innerHTML += "degisti"
link.style.color = "red"
link.classList('btn')