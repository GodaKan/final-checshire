"use strict"

const articles = document.getElementsByClassName("article")
const buttons = document.getElementsByClassName("tabBtn")


articles[0].style.display = "block"

document.querySelector(".articles").classList.add("articlesAnimation") //NEVEIKIA
buttons[0].classList.add("selected")

function showTab(evt, id) {
  
    for (let i = 0; i < articles.length; i++) {
        articles[i].style.display = "none"
        buttons[i].classList.remove("selected")
    }

    document.getElementById(id).style.display = "block"
    // NEVEIKIA ANIMACIJA
    document.querySelector(".articles").classList.remove("articlesAnimation")
    
    // setTimeout(function(){
    //     document.querySelector(".articles").classList.add("articlesAnimation")
    // },100)

    evt.currentTarget.classList.add("selected")

}
