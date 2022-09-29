import { Requests } from "./api.js";
import { Toasts } from "./toasts.js";

export class CreateCompany{
    static async createNewCompany(){
        this.renderOptions()
   
        const nome = document.querySelectorAll("#criar-empresa input")[0];
        const horaDeAbertura = document.querySelectorAll("#criar-empresa input")[1];
        const descricao = document.querySelectorAll("#criar-empresa input")[2];
        const setor = document.querySelector("#render-options")
        const btnEnviar = document.querySelector("#criar-empresa button")
        
        btnEnviar.addEventListener("click", (event) =>{
            event.preventDefault()
            
            if(nome.value !== "" && horaDeAbertura.value !== "" && descricao.value !== "" && setor.value !== ""){
                let body = {
                    name: nome.value, 
                    opening_hours: horaDeAbertura.value, 
                    description: descricao.value, 
                    sector_uuid: setor.value
                }

                Requests.registerCompany(body);

            } else {
                Toasts.create("Insira todas as informações para criar a empresa.")
            }

            nome.value = "";
            horaDeAbertura.value = ""; 
            descricao.value = "";
            setor.value = "";
        })
    }

    static async renderOptions(){
        const listOfOptions = await Requests.listCompaniesSections();
        const inputSelect = document.querySelector("#render-options")
        
        listOfOptions.forEach((elem) =>{
            let option = document.createElement("option");
            option.text = elem.description;
            option.value = elem.uuid;
            inputSelect.append(option);
        })
    }
}