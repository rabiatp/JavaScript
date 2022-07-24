//*******  LİSTE İÇERİSİNDEKİ SON ELEMANA ULAŞMAK VEYA ELEMAN EKLEMEK ******


//  --> listedeki son elemanını ve ilk elemanını bulmaya çalışalım

// let item = document.querySelector("ul#list>li:last-child") //son eleman

// let item = document.querySelector("ul>#list>li>first-child") //ilk eleman

// --> oge degistirme

/*  */
let lastChild = document.querySelector("ul#list>li:last-child")
lastChild.innerHTML = "son oge degistirildi"

let firstChild = document.querySelector("ul#list>li:first-child")
firstChild.innerHTML  = "ilk oge degistirildi"


// --> listeye ulaşıp yeni eleman ekleme

let ulDom = document.querySelector("ul#list")

let liDom = document.createElement('li')

liDom.innerHTML = "kendi olusturdugumuz oge" //bir obje oluşturuldu

// ulDom.append(liDom) //objeyi sona eklemek için 
ulDom.prepend(liDom) //objeyi başa eklemek için