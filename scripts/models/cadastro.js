import { Requests } from "./api.js";
import { Toasts } from "./toasts.js";

export class Register{
    static newUser(){
        const nome = document.querySelectorAll("#cadastro-section input")[0];
        const email = document.querySelectorAll("#cadastro-section input")[1];
        const senioridade = document.querySelectorAll("#cadastro-section select");
        const senha = document.querySelectorAll("#cadastro-section input")[2];
        const btnCadastrar = document.querySelector("#btn-cadastro");
        
        btnCadastrar.addEventListener('click', (event) =>{
            event.preventDefault()
            if(nome.value !== "" && email.value !== "" && senioridade.value !== "" && senha.value !== ""){
                let body = {
                    password: senha.value, 
                    email: email.value, 
                    professional_level: senioridade.value, 
                    username: nome.value
                }

                Requests.registerUser(body)

                senha.value = "";
                email.value = "";
                senioridade.value = "";
                nome.value = "";

            } else {
                Toasts.create("Insira todas as informações para realizar o cadastro.")
            }
        })
    }
}
