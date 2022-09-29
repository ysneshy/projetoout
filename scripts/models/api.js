import { Toasts } from "./toasts.js";
import { Render } from "./render.js";

export class Requests{
    static token = localStorage.getItem("@kenzieEmpresas:token");
    static userId = localStorage.getItem("@kenzieEmpresas:id_user"); 
    static basicHeader = {
        "Content-Type": "application/json"
    }

    static authHeader = {
        "Content-Type": "application/json", 
        "Authorization": `Bearer ${this.token}`
    }

    static async login(body){
        const response = await fetch(`http://localhost:6278/auth/login`, {
            method: "POST", 
            headers: this.basicHeader, 
            body: JSON.stringify(body)
        })
        .then(res => {
            if(res.ok){
                return res.json()
            } else {
                res.json().then((response) =>{
                    Toasts.create(response.error)
                }) 
            }
        })
        .then(res => {   
            this.token = res.token;
            this.userId = res.uuid;
            localStorage.setItem("@kenzieEmpresas:token", this.token);
            localStorage.setItem("@kenzieEmpresas:id_user", this.userId)
            if(res.is_admin){
                window.location.assign("pages/dashboardAdmin.html")
            } else {
                window.location.assign("pages/dashboard.html")
            }
        })
        .catch(err => console.log(err))

        return response
    }

    static async registerUser(body){
        const newUser = await fetch(`http://localhost:6278/auth/register/user`, {
            method: "POST",
            headers: this.basicHeader,
            body: JSON.stringify(body)
        })
        .then(res => {
            if(res.ok){
                Toasts.create("Usuário criado com sucesso!")
                return res.json()
            } else {
                res.json().then((response) =>{
                    Toasts.create(response.error)
                }) 
            }
        })
        .catch(err => console.log(err))
        
        return newUser;
    }

    static async getCompanies(){
        const response = await fetch(`http://localhost:6278/companies`, {
            method: "GET"
        })
        .then(res => {
            if(res.ok){
                return res.json()
            } else {
                res.json().then((response) =>{
                    Toasts.create(response.error)
                }) 
            }
        })
        .catch(err => console.log(err))
        
        return response;
    }

    static async getCompaniesBySection(section){
        const response = await fetch(`http://localhost:6278/companies/${section}`, {
            method: "GET"
        })
        .then(res => {
            if(res.ok){
                return res.json()
            } else {
                res.json().then((response) =>{
                    Toasts.create(response.error)
                }) 
            }
        })
        .catch(err => console.log(err))
        
        return response;
    }

    static async listCompaniesSections(){
        const response = await fetch(`http://localhost:6278/sectors`, {
            method: "GET", 
            headers: this.authHeader
        })
        .then(res => {
            if(res.ok){
                return res.json()
            } else {
                res.json().then((response) =>{
                    Toasts.create(response.error)
                }) 
            }
        })
        .catch(err => console.log(err))
        
        return response;
    }

    static async registerCompany(body){
        const response = await fetch(`http://localhost:6278/companies`, {
            method: "POST", 
            headers: this.authHeader, 
            body: JSON.stringify(body)
        })
        .then(res => {
            if(res.ok){
                Toasts.create("Empresa criada com sucesso!")
                return res.json()
            } else {
                res.json().then((response) =>{
                    Toasts.create(response.error)
                }) 
            }
        })
        .catch(err => console.log(err))
        
        return response;
    }

    static async getUsers(){
        const response  = await fetch(`http://localhost:6278/users`, {
            method: "GET", 
            headers: this.authHeader
        })
        .then(res => {
            if(res.ok){
                return res.json()
            } else {
                res.json().then((response) =>{
                    Toasts.create(response.error)
                }) 
            }
        })
        .catch(err => console.log(err))
        
        return response;
    }

    static async getCompanyDepartments(id){
        const response  = await fetch(`http://localhost:6278/departments/${id}`, {
            method: "GET", 
            headers: this.authHeader
        })
        .then(res => {
            if(res.ok){
                return res.json()
            } else {
                res.json().then((response) =>{
                    Toasts.create(response.error)
                }) 
            }
        })
        .catch(err => console.log(err))
        
        return response;
    }

    static async createDepartment(body){
        const newDepart = await fetch(`http://localhost:6278/departments`, {
            method: "POST", 
            headers: this.authHeader, 
            body: JSON.stringify(body)
        })
        .then(res => {
            if(res.ok){
                Toasts.create("Departamento criado com sucesso!")
                return res.json()
            } else {
                res.json().then((response) =>{
                    Toasts.create(response.error)
                }) 
            }
        })
        .catch(err => console.log(err))
        
        return newDepart;
    }
    
    static async getAllDepartments(){
        const response = await fetch(`http://localhost:6278/departments`, {
            method: "GET", 
            headers: this.authHeader
        })
        .then(res => {
            if(res.ok){
                return res.json()
            } else {
                res.json().then((response) =>{
                    Toasts.create(response.error)
                }) 
            }
        })
        .catch(err => console.log(err))
        
        return response;
    }

    static async hireWorker(body){
        const newWorker = await fetch(`http://localhost:6278/departments/hire/`, {
            method: "PATCH", 
            headers: this.authHeader, 
            body: JSON.stringify(body)
        })
        .then(res => {
            if(res.ok){
                Toasts.create("Usuário contratado.")
                return res.json()
            } else {
                res.json().then((response) =>{
                    Toasts.create(response.error)
                }) 
            }
        })
        .catch(err => console.log(err))
        
        return newWorker;
    }

    static async dismissWorker(id){
        const response = await fetch(`http://localhost:6278/departments/dismiss/${id}`, {
            method: "PATCH", 
            headers: this.authHeader
        })
        .then(res => {
            if(res.ok){
                Toasts.create("Usuário demitido.")
                return res.json()
            } else {
                res.json().then((response) =>{
                    Toasts.create(response.error)
                }) 
            }
        })
        .catch(err => console.log(err))
        
        return response
    }

    static async editWorker(id, body){
        const editedWorker = await fetch(`http://localhost:6278/admin/update_user/${id}`, {
            method: "PATCH", 
            headers: this.authHeader, 
            body: JSON.stringify(body)
        })
        .then(res => {
            if(res.ok){
                Toasts.create("Informações editadas.")
                return res.json()
            } else {
                res.json().then((response) =>{
                    Toasts.create(response.error)
                }) 
            }
        })
        .catch(err => console.log(err))
        
        return editedWorker; 
    }

    static async getUserCompanyInfo(){
        const response = await fetch(`http://localhost:6278/users/departments`, {
            method: "GET", 
            headers: this.authHeader
        })
        .then(res => {
            if(res.ok){
                res.json().then((response) =>{
                    Render.companyInfos(response)
                })
            } else {
                res.json().then((response) =>{
                    Render.noCompanyInfos(response)
                }) 
            }
        })
        .catch(err => console.log(err))
        
        return response; 

    }

    static async getUserCoworkers(){
        const response = await fetch(`http://localhost:6278/users/departments/coworkers`, {
            method: "GET", 
            headers: this.authHeader
        })
        .then(res => {
            if(res.ok){
                return res.json()
            } else {
                res.json().then((response) =>{
                    Toasts.create(response.error)
                }) 
            }
        })
        .catch(err => console.log(err))
        
        return response; 
    }

    static async getUserPersonalInfo(){
        const response = await fetch(`http://localhost:6278/users/profile`, {
            method: "GET", 
            headers: this.authHeader
        })
        .then(res => {
            if(res.ok){
                return res.json()
            } else {
                res.json().then((response) =>{
                    Toasts.create(response.error)
                }) 
            }
        })
        .catch(err => console.log(err))
        
        return response;
    }

    static async editPersonalInfo(body){
        const editedInfo = await fetch(`http://localhost:6278/users`, {
            method: "PATCH", 
            headers: this.authHeader, 
            body: JSON.stringify(body)
        })
        .then(res => {
            if(res.ok){
                Toasts.create("Informações editadas com sucesso")
                return res.json()
            } else {
                res.json().then((response) =>{
                    Toasts.create(response.error)
                }) 
            }
        })
        .catch(err => console.log(err))
        
        return editedInfo; 
    }

    static async deleteUser(id){
        const response = await fetch(`http://localhost:6278/admin/delete_user/${id}`, {
            method: "DELETE", 
            headers: this.authHeader
        })
        .then(res => {
            if(res.ok){
                Toasts.create("Usuário deletado com sucesso.")
            } else {
                res.json().then((response) =>{
                    Toasts.create(response.error)
                }) 
            }
        })
        .catch(err => console.log(err))
        
        return response;
    }

    static async editDepartment(id, body){
        const editedDepartment = await fetch(`http://localhost:6278/departments/${id}`, {
            method: "PATCH", 
            headers: this.authHeader, 
            body: JSON.stringify(body)
        })
        .then(res => {
            if(res.ok){
                Toasts.create("Informações editadas com sucesso")
                return res.json()
            } else {
                res.json().then((response) =>{
                    Toasts.create(response.error)
                }) 
            }
        })
        .catch(err => console.log(err))
        
        return editedDepartment;

    }

    static async deleteDepartment(id){
        const response = await fetch(`http://localhost:6278/departments/${id}`, {
            method: "DELETE", 
            headers: this.authHeader
        })
        .then(res => {
            if(res.ok){
                Toasts.create("Departamento deletado com sucesso.")
            } else {
                res.json().then((response) =>{
                    Toasts.create(response.error)
                }) 
            }
        })
        .catch(err => console.log(err))
        
        return response;

    }
}


