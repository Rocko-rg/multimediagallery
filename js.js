

//------------------------------ Projects window & Menu window ------------------------------ 

let projects_icon = document.querySelector(".projects-icon")
let projects_window = document.querySelector(".projects-window")
let projects_header = document.querySelector(".projects-header")
let menu_window = document.querySelector(".menu-window")
let menu_icon = document.querySelector(".menu-icon")

let m = '<i class="fa-solid fa-bars"></i>'
let x = '<i class="fa-solid fa-xmark"></i>'
let plus = '<i class="fa-solid fa-plus"></i>'
let minus = '<i class="fa-solid fa-minus"></i>'

// Projects window slide

projects_icon.addEventListener("click", function(){
    if(projects_icon.innerHTML == plus){
        projects_icon.innerHTML = minus
        projects_window.style.right = "0"
        projects_header.style.right = "0"
        menu_window.style.left = "100%"
        menu_icon.innerHTML = m
    }
    else{
        projects_icon.innerHTML = plus
        projects_window.style.right = "100%"
        projects_header.style.right = "100%"
    }
})

// Menu window slide

menu_icon.addEventListener("click", function(){
    if(menu_icon.innerHTML == m){
        menu_icon.innerHTML = x
        menu_window.style.left = "0"
        projects_icon.innerHTML = plus
        projects_window.style.right = "100%"
        projects_header.style.right = "100%"
    }
    else{
        menu_icon.innerHTML = m
        menu_window.style.left = "100%"
    }
})


// Portfolio open slide

let portfolio = document.querySelector("#portfolio")
let about = document.querySelector("#about")
let contact = document.querySelector("#contact")
let portfolio_ul = document.querySelector(".portfolio-ul")
let fullscreen_slider = document.querySelector(".fullscreen-slider")
let classic_feed = document.querySelector(".classic-feed")

portfolio_ul.style.height = "0"

portfolio.addEventListener("click", function(){
    if(portfolio_ul.style.height == "0px"){
        portfolio_ul.style.height = "100px"
    } 
    else {
        portfolio_ul.style.height = "0px"
    }
})

// Menu active button color

if (window.location.pathname.endsWith("/index.html")){
    fullscreen_slider.style.color = "var(--color-2)"
    portfolio.style.color = "var(--color-2)"
}
if (window.location.pathname.endsWith("classic-feed.html")){
    classic_feed.style.color = "var(--color-2)"
    portfolio.style.color = "var(--color-2)"
}
if (window.location.pathname.endsWith("about.html")){
    about.style.color = "var(--color-2)"
}
if (window.location.pathname.endsWith("contact.html")){
    contact.style.color = "var(--color-2)"
}


//---------------------------------------- About ---------------------------------------- 

let dt = document.querySelectorAll("dt")
let dd = document.querySelectorAll("dd")

let i_up = '<i class="fa-solid fa-angle-up"></i>'
let i_down = '<i class="fa-solid fa-angle-down"></i>'

for(let j of dd){
    j.style.display = "none" 
} 

for(let i of dt){
    i.addEventListener("click", function(){
        let description = this.nextElementSibling
        if(description.style.display == "none"){
            description.style.display = "flex"
            this.style.color = "var(--color-2)"
            this.style.borderTop = "1px solid var(--color-2)"
            this.querySelector("i").outerHTML = i_up;
        }
        else{
            description.style.display = "none"
            this.style.color = "var(--color-5)"
            this.style.borderTop = "1px solid var(--color-4)"
            this.querySelector("i").outerHTML = i_down;
        }
    })
}