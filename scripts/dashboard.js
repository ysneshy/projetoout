import { Requests } from "./models/api.js";
import { Login } from "./models/login.js";
import { Render } from "./models/render.js"
import { EditUserInfo } from "./models/editUser.js"

Requests.getUserCompanyInfo()
Login.logout();
Login.redirect();
Render.departmentInfos();
Render.userInfos();
EditUserInfo.edit();

const btnMenuMobile         = document.querySelector(".menu-itens__btn-mobile");
const menuMobile            = document.querySelector(".menu-itens__btns"); 

btnMenuMobile.addEventListener('click', ()=>{
    menuMobile.classList.toggle("active")
})

function handleDarkTheme(){
    const btnDarkMode = document.querySelector(".dark-theme-toggle");
    const html = document.querySelector("html");

    btnDarkMode.addEventListener('click', ()=>{
        btnDarkMode.classList.toggle('checked')
        html.classList.toggle('dark')
    })    
}

handleDarkTheme();

const btnEmpresa = document.querySelectorAll(".container-btns a")[0];
const btnDeparts = document.querySelectorAll(".container-btns a")[1];
const btnPerfil = document.querySelectorAll(".container-btns a")[2];

const sectionEmpresa = document.querySelector("#empresa");
const sectionDeparts = document.querySelector("#departamento");
const sectionPerfil = document.querySelector("#info-usuario");

btnEmpresa.addEventListener('click', (event) =>{
    event.preventDefault();
    sectionEmpresa.style.visibility = "visible";
    sectionDeparts.style.visibility = "hidden";
    sectionPerfil.style.visibility = "hidden";
})

btnDeparts.addEventListener('click', (event) =>{
    event.preventDefault();
    sectionEmpresa.style.visibility = "hidden";
    sectionDeparts.style.visibility = "visible";
    sectionPerfil.style.visibility = "hidden";
})

btnPerfil.addEventListener('click', (event) =>{
    event.preventDefault();
    sectionEmpresa.style.visibility = "hidden";
    sectionDeparts.style.visibility = "hidden";
    sectionPerfil.style.visibility = "visible";
})