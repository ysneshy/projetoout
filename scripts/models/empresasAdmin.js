import { Requests } from "./api.js";

export class Render{
    static async renderCompanies(){
        const listOfCompanies = await Requests.getCompanies()
        const listHTML = document.querySelector("#list-suas-empresas");

        listOfCompanies.forEach(async (elem) =>{

            const id = elem.uuid
            const listOfDepartments = await Requests.getCompanyDepartments(id);
            
            const li = document.createElement("li");
            li.classList.add("lista__empresa")
            const title = document.createElement("h4");
            title.innerText = `${elem.name}`
            const depart = document.createElement("p")
            depart.innerText = "Departamentos: ";
            const ulDeparts = document.createElement("ul")
            
            if(listOfDepartments.length > 0) {
                listOfDepartments.forEach((elem) =>{
                    const li = document.createElement('li');
                    const title = document.createElement("h5");
                    title.innerText = elem.name

                    li.append(title);
                    ulDeparts.append(li)
                })
            } else {
                const li = document.createElement('li');
                const title = document.createElement("h5");
                title.innerText = "Nenhum departamento cadastrado"

                li.append(title);
                ulDeparts.append(li)
            }

            const openAt = document.createElement("p");
            openAt.innerText = `Abre as: ${elem.opening_hours}`
            const section = document.createElement("p");
            section.innerText = `Ramo da atividade: ${elem.sectors.description}`

            li.append(title, depart, ulDeparts, openAt, section);
            listHTML.append(li)
        })
    }
}