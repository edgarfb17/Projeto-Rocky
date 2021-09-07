const targetAnime = document.querySelectorAll('[data-anime]');
const targetNegative = document.querySelector('[data-negative]');
const animationClass = 'animate';

//função para animar as divs
//função para saber a distância entre o topo da página e o scroll do mouse
//se o elemento oculto ocupa 3/4 da tela a animação começa
function animeScroll() {
    const windowTop = window.pageYOffset + ((window.innerHeight * 3) / 4);
    targetAnime.forEach(element => {
        if((windowTop) > element.offsetTop) {
            element.classList.add(animationClass);
        }
    })
}

animeScroll();

//função para animar o header 
//se a distância do topo da página até o scroll é maior que 1 a animação começa
function negativeScroll() {
    if(window.pageYOffset != 0){
        targetNegative.classList.add(animationClass);
    }
    else{
        targetNegative.classList.remove(animationClass);
    }
}

if(targetAnime.length) {
    window.addEventListener('scroll', function() {
        negativeScroll();
        animeScroll();
    })
}