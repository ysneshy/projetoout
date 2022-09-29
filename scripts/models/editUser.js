import { Requests } from "./api.js";
import { Toasts } from "./toasts.js";

export class EditUserInfo{
    static async edit(){
        const nome = document.querySelectorAll("#edit-form input")[0];
        const email = document.querySelectorAll("#edit-form input")[1];
        const senha = document.querySelectorAll("#edit-form input")[2];
        const btnEditar = document.querySelector("#edit-form button");

        btnEditar.addEventListener("click", (event) =>{
            event.preventDefault();
            
            if(nome.value !== "" && email.value !== "" && senha.value !== ""){
                let body = {
                    username: nome.value, 
                    email: email.value, 
                    password: senha.value
                }

                Requests.editPersonalInfo(body); 

            } else if (nome.value !== "" && email.value !== "" && senha.value == "") {
                let body = {
                    username: nome.value, 
                    email: email.value, 
                }

                Requests.editPersonalInfo(body); 
            } else if (nome.value !== "" && email.value == "" && senha.value !== "") {
                let body = {
                    username: nome.value, 
                    password: senha.value
                }

                Requests.editPersonalInfo(body); 
            } else if (nome.value == "" && email.value !== "" && senha.value !== "") {
                let body = { 
                    email: email.value, 
                    password: senha.value
                }

                Requests.editPersonalInfo(body); 
            } else if (nome.value !== "" && email.value == "" && senha.value == "") {
                let body = {
                    username: nome.value, 
                }

                Requests.editPersonalInfo(body); 
            } else if (nome.value == "" && email.value !== "" && senha.value == "") {
                let body = {
                    email: email.value, 
                }

                Requests.editPersonalInfo(body); 
            } else if (nome.value == "" && email.value == "" && senha.value !== "") {
                let body = { 
                    password: senha.value
                }

                Requests.editPersonalInfo(body); 
            } else if (nome.value == "" && email.value == "" && senha.value == "") {
                Toasts.create("Insira pelo menos uma informação para alterar.");
            }

            nome.value = "";
            email.value = "";
            senha.value = "";

        })
    }
}