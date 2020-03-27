var log = document.querySelector("#login");
var reg = document.querySelector("#register");

//  hide/show buttons in navbar
function login(){
  if (reg.classList.contains("show")) {
    reg.classList.toggle("show");
    log.classList.toggle("show");
    }
  else log.classList.toggle("show");
}
function register(){
  if (log.classList.contains("show")) {
    log.classList.toggle("show");
    reg.classList.toggle("show");
    }
  else reg.classList.toggle("show");
}

//  outside click closes dropdown menus

window.onclick = function(event){
  if (event.target.parentNode == log || event.target == log || event.target.matches(".login")) {
  }
  else if (event.target.parentNode == reg || event.target == reg || event.target.matches(".register")) {
  }
  else {
    log.classList.remove("show")
    reg.classList.remove("show")
  }
}
//popup gallery close

  let galleryClose = document.querySelector("#galleryPopupClose")
  galleryClose.onclick = function(){
      document.querySelector(".img_popup").classList.toggle("hide")

  }
  window.onclick = function close(event){
    if(event.target == document.querySelector(".img_popup")) {
      document.querySelector(".img_popup").classList.toggle("hide")
    }
  }
//popup gallery open

    //document.querySelector(".img_popup_photo").innerHTML=event.originalTarget.outerHTML


//  password strength checker
/*function checkPassword(){
  let digitFlag = 0
  var password = document.querySelector("#password").value
  for (let i=0;i<password.length;i++){
    if(password[i] >= '0' && password[i]<='9'){
      digitFlag++
    }
  }
  console.log(digitFlag)
  console.log(password.length)
  if(digitFlag<1 || password.length<8) {
    document.querySelector("#passwCheck").innerHTML="hasło musi zawierać 8 znaków i 1 cyfrę"
    }
  else {
    document.querySelector("#passwCheck").innerHTML="siła hasła: słabe"
    }
}
    */

//background img changer
for(var i=1;i<10;i++){

}

setInterval(imgChanger, 1000)
function imgChanger(){



}
