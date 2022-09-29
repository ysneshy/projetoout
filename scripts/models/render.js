import { Requests } from "./api.js";

export class Render{

    static ulCompany = document.querySelector("#infos-empresa");

    static ulDepartment = document.querySelector("#infos-depart");

    static ulUser = document.querySelector("#user-info")

    static companyInfos(resp){
        let li = document.createElement("li");

        let title = document.createElement("h3");
        title.innerText = resp.name;
        let descript = document.createElement("p");
        descript.innerText = `Descrição das atividades: ${resp.description}`;
        let openAt = document.createElement("p");
        openAt.innerText = `Abre as: ${resp.opening_hours}`; 
        let text = document.createElement("h3")
        text.innerText = "Departamentos:"
        let sectionDeparts = document.createElement("ul");

        let departments = resp.departments
        departments.forEach((elem) => {
            let item = document.createElement("li");

            let departName = document.createElement("h4");
            departName.innerText = elem.name;
            let departDescript = document.createElement("p");
            departDescript.innerText = `Atividades: ${elem.description}`;

            item.append(departName, departDescript);
            sectionDeparts.append(item);
        });

        li.append(title, descript, openAt, text, sectionDeparts)
        this.ulCompany.append(li);
    }

    static noCompanyInfos(){
        let li = document.createElement("li");
        let content = document.createElement("h3");
        content.innerText = `Você ainda nao faz parte de nenhuma empresa.`

        li.append(content);
        this.ulCompany.append(li)
    }

    static async departmentInfos(){
        const info = await Requests.getUserCoworkers();

        if(info.length > 0){
            let li = document.createElement("li");
            let title = document.createElement("h3");
            title.innerText = info[0].name;
            let descript = document.createElement("p");
            descript.innerText = `Descrição das atividades: ${info[0].description}`;
            let text = document.createElement('h3')
            text.innerText = "Funcionários:"
            let sectionWorkers = document.createElement("ul");

            let workers = info[0].users

            workers.forEach((elem) =>{
                let item = document.createElement("li");

                let workerName = document.createElement("h4");
                workerName.innerText = elem.username;
                let workerLevel = document.createElement("p");
                workerLevel.innerText = `Senioridade: ${elem.professional_level}`;
                let workerEmail = document.createElement("p");
                workerEmail.innerText = `Contato: ${elem.email}`;

                item.append(workerName, workerLevel, workerEmail);
                sectionWorkers.append(item);
            })

            li.append(title, descript, text, sectionWorkers);
            this.ulDepartment.append(li);

        } else {
            let li = document.createElement("li");
            let content = document.createElement("h3");
            content.innerText = `Você ainda nao faz parte de nenhuma empresa.`
    
            li.append(content);
            this.ulDepartment.append(li)
        }
    }

    static async userInfos(){
        const user = await Requests.getUserPersonalInfo();

        const li = document.createElement("li"); 

        const title = document.createElement("h3");
        title.innerText = user.username;
        const email = document.createElement("p");
        email.innerText = `Email: ${user.email}`
        const nivel = document.createElement("p");
        nivel.innerText = `Senioridade: ${user.professional_level}`
        li.append(title, email, nivel)

        this.ulUser.append(li);
    }
}