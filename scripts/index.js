import { Login } from "./models/login.js";
import {Register} from "./models/cadastro.js"
import {ListaEmpresas} from "./models/listarEmpresas.js"

Login.logUser()
Register.newUser()
ListaEmpresas.listarTodasEmpresas()
ListaEmpresas.listarPorSetorSelecionado()

const btnMenuMobile         = document.querySelector(".menu-itens__btn-mobile");
const menuMobile            = document.querySelector(".menu-itens__btns"); 
const login                 = document.querySelectorAll(".container-btns a")[0];
const register              = document.querySelectorAll(".container-btns a")[1];
const companies             = document.querySelectorAll(".container-btns a")[2];
const btnGoToRegister       = document.querySelectorAll(".button_redirect")[0];
const btnGoToLogin          = document.querySelectorAll(".button_redirect")[1];
const sectionLogin          = document.querySelector("#login-section");
const sectionRegister       = document.querySelector("#cadastro-section");
const sectionCompanies      = document.querySelector("#empresas");

btnMenuMobile.addEventListener('click', ()=>{
    menuMobile.classList.toggle("active")
})

function openLoginForm(){
    sectionLogin.style.visibility = "visible"
    sectionRegister.style.visibility = "hidden";
    sectionCompanies.style.visibility = "hidden"
}

function openRegisterForm(){
    sectionRegister.style.visibility = "visible"
    sectionLogin.style.visibility = "hidden";
    sectionCompanies.style.visibility = "hidden";
}

function openCompaniesForm(){
    sectionCompanies.style.visibility = "visible"
    sectionLogin.style.visibility = "hidden";
    sectionRegister.style.visibility = "hidden";
}

login.addEventListener('click', (event) =>{
    event.preventDefault();
    openLoginForm();
})

btnGoToLogin.addEventListener('click', (event) =>{
    event.preventDefault();
    openLoginForm();
})

register.addEventListener('click', (event) =>{
    event.preventDefault();
    openRegisterForm();
})

btnGoToRegister.addEventListener('click', (event) =>{
    event.preventDefault();
    openRegisterForm();
})

companies.addEventListener('click', (event) =>{
    event.preventDefault();
    openCompaniesForm();
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