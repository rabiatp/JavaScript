/**
 * Listeye boş karakter eklenemiyor. Bununla birlikte hiçbir şey yazılmadığında da aynı hatayı veriyor.
 * Yazacağınız JavaScript kodu içerisinde element eklemeyi sağlayan bir fonksiyon, 
 * element silmeyi sağlayan bir fonksiyon, 
 * yapıldı işaretlenmesini sağlayan bir fonksiyon olması gerekiyor.
 * Element eklendiğinde ve hata verirken sağ üstte uyarı verdiğini fark etmişsinizdir. 
 * Bunu sağlayan Bootstrap Toast bildirimdir. Sayfaya gidip toast nedir nasıl yapılır bunu araştırın ve kodunuza ekleyin.
 * Önce ana fonksiyonlar için uğraşın. Yapıldı, toast bildirim bunlar biraz daha için artistliği. Öncelikli amacını sağlıyor olması lazım.
 * Yaptığınız yapıya Local Storage'ı da ekleyip verilerin kaybolmamasını sağlayın.
*/

let liveToast  = document.querySelector("#liveToast")
let taskDOM = document.querySelector("#task")
var myNodelist = document.getElementsByTagName("LI");
closeFunc()
checkedItem()
 
function newElement()
{ 
    if(taskDOM.value === ""){
        $(".error").toast("show");
    } 
    else{
        $(".success").toast("show");
        
        createElement() // listeye eleman ekleme
        closeFunc() // listeye eleman silme
    }
}  
//Bir "kapat" düğmesi oluşturun ve bunu her liste öğesine ekleyin  
function RemoveButton() {
    this.parentElement.remove()
    }

function closeFunc()
    {
        for (var i = 0; i < myNodelist.length; i++) {
            var span = document.createElement("SPAN"); //etiketi belge yada metnin bir kısmını işlemek için kullanılır.
            var txt = document.createTextNode("\u00D7"); //listedeki çarpı işareti oluşturukdu
            span.className = "close";
            span.appendChild(txt);
            myNodelist[i].appendChild(span);
            span.onclick = RemoveButton
        }   
    }

function createElement()
{
    var myNodelist = document.getElementsByTagName("LI"); //tüm kayıtları dizi olarak getirir.
    let li = document.createElement('li') //HTML etiketi oluşturma
    const taskInput = document.getElementById('task').value 
    var t = document.createTextNode(taskInput)    
    li.appendChild(t)//HTML etiketi ekleme
    document.getElementById("list").appendChild(li)
}    

function checkedItem()
{
    var list = document.querySelector('ul');
    list.addEventListener('click', function(ev) {
        if (ev.target.tagName === 'LI') {
        ev.target.classList.toggle('checked');
  }
}, false);
}
     