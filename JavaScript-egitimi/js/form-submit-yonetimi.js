// FORM SUBMIT:

let formDOM = document.querySelector("#userForm")
formDOM.addEventListener('submit', formSubmit)

function formSubmit(event) {
    event.preventDefault() // default islemi engelledik...
    console.log("islem gerceklesti")
  //input içersindeki veriyi almak -->
  let scoreInputDOM = document.querySelector('#score')
  console.log(scoreInputDOM.value)  
  localStorage.setItem('score',scoreInputDOM.value)
}