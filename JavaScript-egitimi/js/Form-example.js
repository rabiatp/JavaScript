/**
 * formu seç
 * input bilgisini ul içerisine ekle
 * form içerisindeki bilgiyi sıfırla
 * eğer forma bilgi girilmezse kullanıcıyı uyar
 */

let userFormDom = document.querySelector("#userForm")
userFormDom.addEventListener('submit',formHandler)
const alertDom = document.querySelector("#alert")

const ALERT = (message) => `<div class="alert alert-danger d-flex align-items-center" role="alert">
<svg class="bi flex-shrink-0 me-2" role="img" aria-label="Danger:"><use xlink:href="#exclamation-triangle-fill"/></svg>
<div>
  ${message}
</div>`


function formHandler(event)
{
        
    event.preventDefault()
   
    const USER_NAME = document.querySelector("#username")
    const SCORE = document.querySelector("#score")
    if(USER_NAME.value && SCORE.value)
    {
        addItem(USER_NAME.value , SCORE.value)
        USER_NAME.value =""
        SCORE.value = ""
    }else{
        alertDom.innerHTML = ALERT('hatalı girdin')
    }
    
  
   

}

                    /*    <li class="list-group-item d-flex justify-content-between align-items-start">
                          <div class="ms-2 me-auto">
                            <div class="fw-bold">Subheading</div>
                            Content for list item
                          </div>
                          <span class="badge bg-primary rounded-pill">14</span>
                        </li>
                     */

let userListDom = document.querySelector("#userList")       

const addItem = (userName,score) => {
    let liDom = document.createElement('li') // DOM ile elaman oluşturuldu
    liDom.innerHTML = `
    ${userName} 
    <span class="badge bg-primary rounded-pill">${score}</span> `
    liDom.classList.add('list-group-item', 'd-flex', 'justify-content-between', 'align-items-start')
    userListDom.append(liDom) // yeni elemanlar eklendi

}
