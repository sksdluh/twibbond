let modal = document.getElementById('welcome-modal')
let span = document.getElementsByClassName('close')[0]
span.onclick = function(){
  modal.style.display = "none"
}

window.onclick = function(e){
  if(e.target != modal){
    modal.style.display = "none"
  }
}
