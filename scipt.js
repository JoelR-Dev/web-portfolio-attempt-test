const btnMenu = document.getElementById("menu")

btnMenu.addEventListener("click", ()=>{
    document.querySelector(".responsive-list").classList.toggle("see") 
    document.querySelector("header").classList.toggle("see") 

})