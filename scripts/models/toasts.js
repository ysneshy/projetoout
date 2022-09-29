export class Toasts{
    static create(text){
        Toastify({
            text: text,
            duration: 3000,
            close: true,
            gravity: "bottom", 
            position: "left", 
            stopOnFocus: true, 
            style: {
              background: "#6bbd99",
            }
          }).showToast();       
    }
}