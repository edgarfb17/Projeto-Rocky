const inputs = document.querySelectorAll(".input");
const msgs = document.querySelectorAll(".msgs");
const alertError = document.querySelector(".alert-error");
const alertOk = document.querySelector(".alert-ok");
const bntEnviar = document.querySelector("#bnt-enviar");

/*Função para validação do formulário*/ 
bntEnviar.addEventListener("click", () => {
    //funções para ver se existe algo dentro dos inputs
    //e exibir mensagens de erro logo a baixo aos inputs
    inputs.forEach(valorInput => {
        if(!valorInput.value){
            let msg = ""
            msgs.forEach(valorMsg => {
                let nameInput = valorInput.className.replace('input', '')
                if(valorMsg.className.match(nameInput)) {
                        msg = valorMsg
                    }
                }) 
                msg.classList.add("show")
            }

        else{
            let msg = ""
            msgs.forEach(valorMsg => {
                let nameInput = valorInput.className.replace('input', '')
                if(valorMsg.className.match(nameInput)){
                        msg = valorMsg
                    }
                }) 
                msg.classList.remove("show")
            }
        
        })
    //função para saber mostrar e remover mesagem de erro no final
        let val = true
        msgs.forEach(valorMsg => {
            if(valorMsg.className.match(/show/)) {
                    val = false
                    alertOk.classList.remove("show")
                    alertError.classList.add("show")
                    return
                }
            }) 
        if(val){
            console.log("true")
            alertError.classList.remove("show")
            alertOk.classList.add("show")
        }
    })