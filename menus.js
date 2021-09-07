//menu hamburguer

    let show = true;

    const menuSection = document.querySelector(".menu-section");
    const menuToggle = menuSection.querySelector(".menu-toggle");

//função para exibir e esconder o menu hamburguer 
    menuToggle.addEventListener("click", () => {

        menuSection.classList.toggle("on", show)
        show = !show;
    }) 


//submenus
    
    let showServ = true;
    let showDif = true;
    
    const subMenuServ = document.querySelector(".submenu-serviços");
    const subMenuDif = document.querySelector(".submenu-diferenciais")
    const iconServ = document.querySelector("#icon-serv")
    const iconDif = document.querySelector("#icon-dif")

    //funções para exibir e esconder os submenus
    iconServ.addEventListener("click", () => {

        subMenuServ.classList.toggle("on", showServ)
        iconServ.classList.toggle("on", showServ)
        showServ = !showServ
        if(!showDif){
            subMenuDif.classList.toggle("on", showDif)
            iconDif.classList.toggle("on", showDif)
            showDif = !showDif
        }  
    })

    iconDif.addEventListener("click", () => {

        subMenuDif.classList.toggle("on", showDif)
        iconDif.classList.toggle("on", showDif)
        showDif = !showDif
        if(!showServ){
            subMenuServ.classList.toggle("on", showServ)
            iconServ.classList.toggle("on", showServ)
            showServ = !showServ
        }  
    })




