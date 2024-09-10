// Script para manipular o comportamento da navegação e outras interações

// Destacar o item do menu ativo
document.querySelectorAll('nav ul li a').forEach(link => {
    link.addEventListener('click', function() {
        document.querySelector('nav ul li a.active').classList.remove('active');
        this.classList.add('active');
    });
});

// Exemplo de interação: Exibir um alerta ao clicar em um dos cards
document.querySelectorAll('.cards .card').forEach((card, index) => {
    card.addEventListener('click', function() {
        alert('Você clicou no card ' + (index + 1));
    });
});

// Exemplo de interação: Alterar a cor do texto do título ao passar o mouse
document.querySelector('.content .text h2').addEventListener('mouseover', function() {
    this.style.color = 'red';
});

document.querySelector('.content .text h2').addEventListener('mouseout', function() {
    this.style.color = 'black';
});
