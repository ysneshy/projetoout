import { Requests } from "./api.js";
import { ListaEmpresas } from "./listarEmpresas.js";
import { Toasts } from "./toasts.js";

export class Pesquisar{
    static resultHMTL = document.querySelector(".result");

    static async porSecao(){
        this.listarSetores()

        const inputSelect = document.querySelector("#render-search-options");
        const btnEnviar = document.querySelector("#pesquisa-secao button");
        
        btnEnviar.addEventListener('click', async (event) =>{
            event.preventDefault();
            if(inputSelect.value !== ""){
                let filteredList = await Requests.getCompaniesBySection(inputSelect.value)
                
                this.resultHMTL.innerHTML = ""

                filteredList.forEach((elem) => {
                    let card = ListaEmpresas.createCard(elem)
                    this.resultHMTL.append(card)
                });

                inputSelect.value = ""
            }
        })
    }

    static async porNome(){
        const list = await Requests.getCompanies();
        const input = document.querySelector("#pesquisa-nome input");
        const btnPesquisar = document.querySelector("#pesquisa-nome button");

        btnPesquisar.addEventListener("click", (event) =>{
            event.preventDefault()
            let result = list.filter((elem) =>{
                return elem.name == input.value;
            }) 
            
            this.resultHMTL.innerHTML = ""

            result.forEach((elem) => {
               const card = ListaEmpresas.createCard(elem)
               this.resultHMTL.append(card)
            });

            input.value = ""
        })

    }

    static async listarSetores(){
        const list = await Requests.getCompanies()

        let result = [];
        list.forEach((elem) => {
            if(!result.includes(elem.sectors.description)){
                result.push(elem.sectors.description)
            }
        })

        const inputSelect = document.querySelector("#render-search-options");

        if(result.length > 0 ){
            result.forEach((elem) =>{
                let option = document.createElement("option");
                option.textContent = elem;
                option.value = elem;

                inputSelect.appendChild(option);
            })
        } else {
            Toasts.create("Empresa não encontrada.")
        }
        
    }
}
