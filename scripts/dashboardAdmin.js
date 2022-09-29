import { ListarSetores } from "./models/listarSetores.js";
import { CreateCompany } from "./models/criarEmpresa.js"
import { Render } from "./models/empresasAdmin.js"
import {Pesquisar} from "./models/pesquisarEmpresa.js"
import {Departamentos} from "./models/departamentos.js"
import { Login } from "./models/login.js"

ListarSetores.renderSetores();
CreateCompany.createNewCompany();
Render.renderCompanies();
Pesquisar.porNome();
Pesquisar.porSecao();
Departamentos.criarDepartamento();
Departamentos.listarDepartamentos();
Departamentos.renderWorkersFromDepartment();
Departamentos.contratar();
Departamentos.demitir();
Departamentos.editarFuncionario();
Departamentos.renderFuncionariosDisponiveis();
Departamentos.deletarFuncionario();
Departamentos.editarDepart();
Departamentos.excluirDepart();
Login.logout();
Login.redirect();

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

const btnSetores = document.querySelectorAll(".container-btns a")[0];
const btnEmpresas = document.querySelectorAll(".container-btns a")[1];
const btnDepartamentos = document.querySelectorAll(".container-btns a")[2];

const sectionSetores = document.querySelector("#setores");
const sectionEmpresas = document.querySelector("#empresas");
const sectionDepartamentos = document.querySelector("#departamentos")

btnSetores.addEventListener('click', (event) =>{
    event.preventDefault()
    sectionEmpresas.style.visibility = "hidden";
    sectionDepartamentos.style.visibility = "hidden";
    sectionSetores.style.visibility = "visible";
    criarEmpresas.style.visibility = "hidden";
    listarSuasEmpresas.style.visibility = "hidden";
    pesquisarEmpresas.style.visibility = "hidden";
    criarDepart.style.visibility = "hidden";
    departsEmpresa.style.visibility = "hidden";
    funcionarios.style.visibility = "hidden";
    contratos.style.visibility = "hidden";
    alteracoes.style.visibility = "hidden";
    disponiveis.style.visibility = "hidden";
    editarDepart.style.visibility = "hidden";
    excluirDepart.style.visibility = "hidden";
})

btnEmpresas.addEventListener('click', (event) =>{
    event.preventDefault()
    sectionEmpresas.style.visibility = "visible";
    sectionDepartamentos.style.visibility = "hidden";
    sectionSetores.style.visibility = "hidden";
    criarEmpresas.style.visibility = "visible";
    listarSuasEmpresas.style.visibility = "hidden";
    pesquisarEmpresas.style.visibility = "hidden";
    criarDepart.style.visibility = "hidden";
    departsEmpresa.style.visibility = "hidden";
    funcionarios.style.visibility = "hidden";
    contratos.style.visibility = "hidden";
    alteracoes.style.visibility = "hidden";
    disponiveis.style.visibility = "hidden";
    editarDepart.style.visibility = "hidden";
    excluirDepart.style.visibility = "hidden";
})

btnDepartamentos.addEventListener('click', (event) =>{
    event.preventDefault()
    sectionEmpresas.style.visibility = "hidden";
    sectionDepartamentos.style.visibility = "visible";
    sectionSetores.style.visibility = "hidden";
    criarEmpresas.style.visibility = "hidden";
    listarSuasEmpresas.style.visibility = "hidden";
    pesquisarEmpresas.style.visibility = "hidden";
    criarDepart.style.visibility = "visible";
    departsEmpresa.style.visibility = "hidden";
    funcionarios.style.visibility = "hidden";
    contratos.style.visibility = "hidden";
    alteracoes.style.visibility = "hidden";
    disponiveis.style.visibility = "hidden";
    editarDepart.style.visibility = "hidden";
    excluirDepart.style.visibility = "hidden";
})

const btnCriarEmpresa = document.querySelectorAll("#btns-empresa a")[0];
const btnSuasEmpresas = document.querySelectorAll("#btns-empresa a")[1];
const btnPesquisarEmpresas = document.querySelectorAll("#btns-empresa a")[2];

const criarEmpresas = document.querySelector("#empresas-criar");
const listarSuasEmpresas = document.querySelector("#suas-empresas");
const pesquisarEmpresas = document.querySelector("#pesquisar")

btnCriarEmpresa.addEventListener('click', (event) =>{
    event.preventDefault()
    criarEmpresas.style.visibility = "visible";
    listarSuasEmpresas.style.visibility = "hidden";
    pesquisarEmpresas.style.visibility = "hidden";
})

btnSuasEmpresas.addEventListener('click', (event) =>{
    event.preventDefault()
    criarEmpresas.style.visibility = "hidden";
    listarSuasEmpresas.style.visibility = "visible";
    pesquisarEmpresas.style.visibility = "hidden";
})

btnPesquisarEmpresas.addEventListener('click', (event) =>{
    event.preventDefault()
    criarEmpresas.style.visibility = "hidden";
    listarSuasEmpresas.style.visibility = "hidden";
    pesquisarEmpresas.style.visibility = "visible";
})

const btnCriarDepart = document.querySelectorAll("#btns-departamentos a")[0];
const btnDepartsEmpresa = document.querySelectorAll("#btns-departamentos a")[3];
const btnFuncionarios = document.querySelectorAll("#btns-departamentos a")[4];
const btnContratos = document.querySelectorAll("#btns-departamentos a")[5];
const btnAlteracoes = document.querySelectorAll("#btns-departamentos a")[6];
const btnDispniveis = document.querySelectorAll("#btns-departamentos a")[7];
const btnEditarDepart = document.querySelectorAll("#btns-departamentos a")[1];
const btnExcluirDepart = document.querySelectorAll("#btns-departamentos a")[2];

const criarDepart = document.querySelector("#criar-depart");
const departsEmpresa =  document.querySelector("#list-departs");
const funcionarios =  document.querySelector("#workers-of-department"); 
const contratos =  document.querySelector("#contratar-demitir");
const alteracoes = document.querySelector("#edith-worker-info");
const disponiveis =  document.querySelector("#available-workers");
const editarDepart = document.querySelector("#editar-departamento");
const excluirDepart = document.querySelector("#excluir-departamento");

btnCriarDepart.addEventListener('click', (event) =>{
    event.preventDefault();
    criarDepart.style.visibility = "visible";
    departsEmpresa.style.visibility = "hidden";
    funcionarios.style.visibility = "hidden";
    contratos.style.visibility = "hidden";
    alteracoes.style.visibility = "hidden";
    disponiveis.style.visibility = "hidden";
    editarDepart.style.visibility = "hidden";
    excluirDepart.style.visibility = "hidden";
})

btnDepartsEmpresa.addEventListener('click', (event) =>{
    event.preventDefault();
    criarDepart.style.visibility = "hidden";
    departsEmpresa.style.visibility = "visible";
    funcionarios.style.visibility = "hidden";
    contratos.style.visibility = "hidden";
    alteracoes.style.visibility = "hidden";
    disponiveis.style.visibility = "hidden";
    editarDepart.style.visibility = "hidden";
    excluirDepart.style.visibility = "hidden";
})

btnFuncionarios.addEventListener('click', (event) =>{
    event.preventDefault();
    criarDepart.style.visibility = "hidden";
    departsEmpresa.style.visibility = "hidden";
    funcionarios.style.visibility = "visible";
    contratos.style.visibility = "hidden";
    alteracoes.style.visibility = "hidden";
    disponiveis.style.visibility = "hidden";
    editarDepart.style.visibility = "hidden";
    excluirDepart.style.visibility = "hidden";
})

btnContratos.addEventListener('click', (event) =>{
    event.preventDefault();
    criarDepart.style.visibility = "hidden";
    departsEmpresa.style.visibility = "hidden";
    funcionarios.style.visibility = "hidden";
    contratos.style.visibility = "visible";
    alteracoes.style.visibility = "hidden";
    disponiveis.style.visibility = "hidden";
    editarDepart.style.visibility = "hidden";
    excluirDepart.style.visibility = "hidden";
})

btnAlteracoes.addEventListener('click', (event) =>{
    event.preventDefault();
    criarDepart.style.visibility = "hidden";
    departsEmpresa.style.visibility = "hidden";
    funcionarios.style.visibility = "hidden";
    contratos.style.visibility = "hidden";
    alteracoes.style.visibility = "visible";
    disponiveis.style.visibility = "hidden";
    editarDepart.style.visibility = "hidden";
    excluirDepart.style.visibility = "hidden";
})

btnDispniveis.addEventListener('click', (event) =>{
    event.preventDefault();
    criarDepart.style.visibility = "hidden";
    departsEmpresa.style.visibility = "hidden";
    funcionarios.style.visibility = "hidden";
    contratos.style.visibility = "hidden";
    alteracoes.style.visibility = "hidden";
    disponiveis.style.visibility = "visible";
    editarDepart.style.visibility = "hidden";
    excluirDepart.style.visibility = "hidden";
})

btnEditarDepart.addEventListener('click', (event) =>{
    event.preventDefault();
    criarDepart.style.visibility = "hidden";
    departsEmpresa.style.visibility = "hidden";
    funcionarios.style.visibility = "hidden";
    contratos.style.visibility = "hidden";
    alteracoes.style.visibility = "hidden";
    disponiveis.style.visibility = "hidden";
    editarDepart.style.visibility = "visible";
    excluirDepart.style.visibility = "hidden";
})

btnExcluirDepart.addEventListener('click', (event) =>{
    event.preventDefault();
    criarDepart.style.visibility = "hidden";
    departsEmpresa.style.visibility = "hidden";
    funcionarios.style.visibility = "hidden";
    contratos.style.visibility = "hidden";
    alteracoes.style.visibility = "hidden";
    disponiveis.style.visibility = "hidden";
    editarDepart.style.visibility = "hidden";
    excluirDepart.style.visibility = "visible";
})