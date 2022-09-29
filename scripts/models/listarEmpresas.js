import { Requests } from "./api.js";

export class ListaEmpresas{
    static async listarTodasEmpresas(){
        const list = await Requests.getCompanies();
        
        const listHTML = document.querySelector(".list-empresas");

        list.forEach((elem) => {
            let card = this.createCard(elem);
            listHTML.append(card)
        });

        this.listarSetores(list);
    }

    static createCard(elem){
        let li = document.createElement("li");
        li.classList.add("list-empresas__item");

        let title = document.createElement('h2');
        title.innerText = elem.name;
        let description = document.createElement('p');
        description.innerText = `Descrição: ${elem.description}`
        let openinghours = document.createElement('p');
        openinghours.innerText = `Abre as: ${elem.opening_hours}`
        let activity = document.createElement('p');
        activity.innerText = `Setor de atividade: ${elem.sectors.description}`

        li.append(title, description, openinghours, activity);

        return li;
    }

    static listarSetores(array){
        let result = [];
        array.forEach((elem) => {
            if(!result.includes(elem.sectors.description)){
                result.push(elem.sectors.description)
            }
        })
        
        const inputSelect = document.querySelector("#empresas-cadastradas");

        result.forEach((elem) =>{
            let option = document.createElement("option");
            option.textContent = elem;
            option.value = elem;

            inputSelect.appendChild(option);
        })
    }

    static async listarPorSetorSelecionado(){
        const inputSelect = document.querySelector("#empresas-cadastradas");
        const btnFilter = document.querySelector("#btn-empresas");

        btnFilter.addEventListener('click', async (event) =>{
            event.preventDefault();
            if(inputSelect.value !== ""){
                let filteredList = await Requests.getCompaniesBySection(inputSelect.value)

                const listHTML = document.querySelector(".list-empresas");
                
                listHTML.innerHTML = ""

                filteredList.forEach((elem) => {
                    let card = this.createCard(elem);
                    listHTML.append(card)
                });
            }
          
            inputSelect.value = "";
        })

    }
}