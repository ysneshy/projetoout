import { Requests } from "./api.js"
import { Toasts } from "./toasts.js";

export class Departamentos{
    static async criarDepartamento(){
        let nome = document.querySelectorAll("#criar-departamento input")[0];
        let descricao = document.querySelectorAll("#criar-departamento input")[1];
        let inputSelect = document.querySelector("#criar-departamento select");
        this.renderCompanies(inputSelect);
        let btnCriar = document.querySelector("#criar-departamento button");

        btnCriar.addEventListener('click', (event) =>{
            event.preventDefault()
            if(nome.value !== "" && descricao.value !== "" && inputSelect.value !== ""){
                let body = {
                    name: nome.value,
                    description: descricao.value, 
                    company_uuid: inputSelect.value
                }

                Requests.createDepartment(body);
                
                nome.value = "";
                descricao.value = "";
                inputSelect.value = ""

            } else {
                Toasts.create("Insira todas as informações para criar o departamento");
            }
            
        })
    }

    static async renderCompanies(where){
        let listOfCompanies = await Requests.getCompanies();
        
        listOfCompanies.forEach((elem) => {
            let option = document.createElement("option");
            option.text = elem.name;
            option.value = elem.uuid;

            where.append(option);
        });
    }

    static async listarDepartamentos(){
        const inputSelect = document.querySelector("#select-depart select");
        this.renderCompanies(inputSelect);
        const btnBuscar = document.querySelector("#select-depart button");
        const ulResult = document.querySelector("#result-departments")

        btnBuscar.addEventListener('click', async (event) =>{
            event.preventDefault()
            let departments = await Requests.getCompanyDepartments(inputSelect.value)

            if(departments.length > 0) {
                ulResult.innerHTML = "";
                departments.forEach((elem) =>{
                    const li = document.createElement('li');
                    const title = document.createElement("h5");
                    title.innerText = elem.name
                    const descricao = document.createElement("p");
                    descricao.innerText = `Descrição: ${elem.description}`;

                    li.append(title, descricao);
                    ulResult.append(li)
                })
            } else {
                ulResult.innerHTML = "";
                const li = document.createElement('li');
                const title = document.createElement("h5");
                title.innerText = "Nenhum departamento cadastrado"

                li.append(title);
                ulResult.append(li)
            }

        })
    }

    static async renderDepartments(where){
        let listOfDepartments = await Requests.getAllDepartments();
        
        listOfDepartments.forEach((elem) => {
            let option = document.createElement("option");
            option.text = elem.name;
            option.value = elem.uuid;

            where.append(option);
        });
    }

    static async renderWorkersFromDepartment(){
        const inputSelect = document.querySelector("#departs-of-company select");
        this.renderDepartments(inputSelect);
        const btnBuscar = document.querySelector("#departs-of-company button");
        const listHTML = document.querySelector("#department-workers")

        const workers = await Requests.getUsers();

        btnBuscar.addEventListener("click", (event) =>{
            event.preventDefault();

            if(inputSelect.value !== ""){
                const departmentWorkers = workers.filter((elem) =>{
                    return elem.department_uuid == inputSelect.value
                })

                if(departmentWorkers.length > 0) {
                    listHTML.innerHTML = "";
                    departmentWorkers.forEach((elem) =>{
                        const li = document.createElement('li');
                        const name = document.createElement("h5");
                        name.innerText = elem.username
                        const nivel = document.createElement("p");
                        nivel.innerText = `Senioridade: ${elem.professional_level}`;
                        const kindOfWork = document.createElement("p")
                        kindOfWork.innerText = `Tipo de trabalho: ${elem.kind_of_work}`
                        
                        li.append(name, nivel, kindOfWork);
                        listHTML.append(li)

                        inputSelect.value = ""
                    })
                } else {
                    listHTML.innerHTML = "";
                    const li = document.createElement('li');
                    const title = document.createElement("h5");
                    title.innerText = "Nenhum usuário cadastrado nesse departamento"
    
                    li.append(title);
                    listHTML.append(li)

                    inputSelect.value = ""
                }
            }
        })
    }

    static async renderUsers(where){
        let listOfUsers = await Requests.getUsers();
        
        listOfUsers.forEach((elem) => {
            if(elem.username !== "ADMIN"){
                let option = document.createElement("option");
                option.text = elem.username;
                option.value = elem.uuid;

                where.append(option);
            }
            
        });
    }

    static async contratar(){
        const inputSelectUsuario = document.querySelectorAll("#contratar select")[0];
        this.renderUsers(inputSelectUsuario);
        const inputSelectDepart = document.querySelectorAll("#contratar select")[1];
        this.renderDepartments(inputSelectDepart);
        const btnContratar = document.querySelector("#contratar button");

        btnContratar.addEventListener("click", (event) =>{
            event.preventDefault()
            
            if(inputSelectUsuario.value !== "" && inputSelectDepart.value !== ""){
                let body = {
                    user_uuid: inputSelectUsuario.value, 
                    department_uuid: inputSelectDepart.value
                }

                Requests.hireWorker(body);

                inputSelectDepart.value = "";
                inputSelectUsuario.value = "";
            } else {
                Toasts.create("Insira todas as informações para contratar.")
            }
        })
        
    }

    static async demitir(){
        const inputSelect = document.querySelector("#demitir select");
        this.renderUsers(inputSelect);
        const btnDemitir = document.querySelector("#demitir button");

        btnDemitir.addEventListener("click", (event) =>{
            event.preventDefault();
            
            if(inputSelect.value !== ""){
                Requests.dismissWorker(inputSelect.value);
            } else {
                Toasts.create("Escolha o usuário para demitir.")
            }
        })
    }

    static async editarFuncionario(){
        const inputSelect = document.querySelectorAll("#editar select")[0];
        this.renderUsers(inputSelect);
        const modalidade = document.querySelectorAll("#editar select")[1];
        const senioridade = document.querySelectorAll("#editar select")[2];
        const btnEditar = document.querySelector("#editar button");

        btnEditar.addEventListener("click", (event) =>{
            event.preventDefault();
            if(modalidade.value !== "" && senioridade.value !== ""){
                const body = {
                    kind_of_work: modalidade.value,
                    professional_level: senioridade.value
                }

                Requests.editWorker(inputSelect.value, body);

                modalidade.value = "";
                senioridade.value = "";
            } else if (modalidade.value !== "" && senioridade.value == ""){
                const body = {
                    kind_of_work: modalidade.value
                }

                Requests.editWorker(inputSelect.value, body);

                modalidade.value = "";
            } else if (modalidade.value == "" && senioridade.value !== "") {
                const body = {
                    professional_level: senioridade.value
                }

                Requests.editWorker(inputSelect.value, body);

                senioridade.value = "";
            } else {
                Toasts.create("Insira pelo menos uma informação para editar.")
           
            }

            inputSelect.value = ""
        })
    }

    static async renderFuncionariosDisponiveis(){
        const listHTML = document.querySelector("#available-workers ul")
        const lisfOfUser = await Requests.getUsers();
        const availableUsers = lisfOfUser.filter((elem) =>{
            return elem.department_uuid == null;
        })

        availableUsers.forEach((elem) =>{
            if(elem.username !== "ADMIN"){
                const li = document.createElement('li');
                const name = document.createElement("h5");
                name.innerText = elem.username
                const nivel = document.createElement("p");
                nivel.innerText = `Senioridade: ${elem.professional_level}`;
                const kindOfWork = document.createElement("p")
                kindOfWork.innerText = `Tipo de trabalho: ${elem.kind_of_work}`
                        
            li.append(name, nivel, kindOfWork);
            listHTML.append(li)
            }
            
        })
    }

    static async deletarFuncionario(){
        const inputSelect = document.querySelector("#deletar select");
        this.renderUsers(inputSelect);
        const btnDeletar = document.querySelector("#deletar button");

        btnDeletar.addEventListener('click', async (event) =>{
            event.preventDefault();
            if(inputSelect.value !== ""){
                await Requests.deleteUser(inputSelect.value);
                inputSelect.value = "";
            } else {
                Toasts.create("Escolha o usuário para deletar.");
            }
        })
    }

    static async editarDepart(){
        const inputSelect = document.querySelector("#editar-depart select");
        this.renderDepartments(inputSelect);
        const newDescript = document.querySelector("#editar-depart input");
        const btnEditar = document.querySelector("#editar-depart button");

        btnEditar.addEventListener("click", (event) =>{
            event.preventDefault();
            if(inputSelect.value !== "" && newDescript.value !== ""){
                let body = {
                    description: newDescript.value
                }

                Requests.editDepartment(inputSelect.value, body);

                inputSelect.value = "";
                newDescript.value = "";

            } else if (inputSelect.value == "" && newDescript.value !== "") {
                Toasts.create("Escolha o departamento para editar.")
            } else if (inputSelect.value !== "" && newDescript.value == "") {
                Toasts.create("Insira a descrição para editar.")
            } else if (inputSelect.value == "" && newDescript.value == "") {
                Toasts.create("Insira as informações para editar")
            }
            
        })
    }

    static async excluirDepart(){
        const inputSelect = document.querySelector("#deletar-depart select");
        this.renderDepartments(inputSelect);
        const btnExcluir = document.querySelector("#deletar-depart button");
        
        btnExcluir.addEventListener("click", async (event) =>{
            event.preventDefault();
            if(inputSelect.value !== ""){
                await Requests.deleteDepartment(inputSelect.value);
            } else {
                Toasts.create("Escolha o departamento para deletar.");
            }

            inputSelect.value = "";
        })
    }
}