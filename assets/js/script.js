// menu

const menu = document.querySelector('.toggle-menu');

menu.onclick = () => {
    menu.classList.toggle('active');
};


// botao ver mais serviços

const botaoMaisServicos = document.getElementById('botao-mais-servicos');

const divServicos = document.getElementById('mais-servicos');

botaoMaisServicos.onclick = () => {
    divServicos.style.animationName = "div-show";
    
    if (divServicos.style.display == "none") {
        divServicos.style.display = "flex";
        botaoMaisServicos.innerHTML = "Ver menos";
    } else {
        divServicos.style.display = "none";
        botaoMaisServicos.innerHTML = "Veja mais serviços";
    };
};
