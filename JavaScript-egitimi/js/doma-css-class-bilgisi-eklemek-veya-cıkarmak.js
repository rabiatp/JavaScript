//*******  DOM'A CSS CLASS BİLGİSİ EKLMEK VEYA ÇIKARMAK ******

let greeting = document.querySelector("#greeting")

greeting.classList.add("text-primary")
greeting.classList.add("new-info" , "second-class", "third-class") //birden fazla class eklemek
greeting.classList.remove("text-primary","third-class") //birden fazla class silmek
console.log(greeting.classList)