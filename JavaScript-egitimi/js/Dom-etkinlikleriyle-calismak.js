let greeting = document.querySelector("#greeting")
greeting.addEventListener("click",domClick)

function domClick() {
    console.log("tıklandı")
    this.style.color == "red" ? this.style.color = "black" : this.style.color = "red"
}

greeting.addEventListener("mouseover",domClickV2)

function domClickV2() {
    this.style.color == "purple" ? this.style.color = "yellow" : this.style.color = "purple"
}