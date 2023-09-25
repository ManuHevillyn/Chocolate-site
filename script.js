/*Animação do menu-inco(aparecimento)*/
let navbar = document.querySelector('.navbar');

document.querySelector('#menu-icon').onclick = () => {
        navbar.classList.toggle('active');
        search.classList.remove('active');
}
/*Animação do menu-inco(desaparecimento)*/
window.onscroll = () => {
    navbar.classList.remove('active');
    search.classList.remove('active');
}

