import { Requests } from "./api.js";
import { Toasts } from "./toasts.js";

export class Login{
    static logUser(){
        const email = document.querySelectorAll("#login input")[0];
        const senha = document.querySelectorAll("#login input")[1];
        const btnLogin = document.querySelector("#btn-login");

        btnLogin.addEventListener('click', (event) =>{
            event.preventDefault();
            if(email.value !== "" && senha.value !== ""){
                let body = {
                    email: email.value, 
                    password: senha.value
                }
                Requests.login(body)

                email.value = "";
                senha.value = "";
            }
            else {
                Toasts.create("Insira as credenciais para fazer o login.")
            }
        })

    }

    static logout(){
        const logoutBtn = document.querySelector(".btn-sair");
    
        logoutBtn.addEventListener("click", () =>{
            localStorage.removeItem("@kenzieEmpresas:token")
            localStorage.removeItem("@kenzieEmpresas:id_user")
            window.location.assign("../index.html")
        })
    }

    static redirect(){
        const token = localStorage.getItem("@kenzieEmpresas:token");
        if(!token){
            window.location.assign("../index.html")
        }
    }
}
