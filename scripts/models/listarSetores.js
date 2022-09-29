import { Requests } from "./api.js";

export class ListarSetores{
    static async renderSetores(){
        const setores = await Requests.listCompaniesSections();
        const listHTML = document.querySelector(".section-list");

        setores.forEach(elem => {
            const card = this.createCard(elem);
            listHTML.append(card)
        });
    }

    static createCard(elem){
        const li = document.createElement('li');
        const title = document.createElement('h3');
        title.innerText = elem.description;

        li.append(title);
        return li;
    }
}
