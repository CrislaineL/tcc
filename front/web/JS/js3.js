const dadosFront = "/assets/produtos.json";
let produtos = [];


fetch(dadosFront)
    .then(resp => resp.json())
    .then(dados => {
        produtos = dados;
        mostrarProdutos(dados);
    })
    .catch(error => {
        console.error('Erro ao carregar produtos:', error);
    });

// Função para exibir os produtos
function mostrarProdutos(produtos) {
    const container = document.getElementById('produtos-container');
    produtos.forEach((produto, index) => {
        const card = `
            <div class="card">
            <img src="${produto.imagem}" alt="${produto.nome}">
                <h2>${produto.nome}</h2>
                <p>R$ ${produto.preco.toFixed(2)}</p>
                <button class="botao1" onclick="mostrarDetalhes(${index})"><img src="favorito1.png" ></button>
                <button class="botao1" onclick="mostrarDetalhes(${index})"><img src="carrinho.png"></button>
                <button onclick="mostrarDetalhes(${index})">Detalhes</button>
            </div>
        `;
        container.innerHTML += card;
    });
}

// Função para mostrar os detalhes do produto no modal
function mostrarDetalhes(index) {
    const produto = produtos[index];
    const conteudo = document.getElementById('conteudo');
    const frete = (produto.preco * 0.1).toFixed(2);

    conteudo.innerHTML = `
        <img src="${produto.imagem}" alt="${produto.nome}">
        <h3>${produto.nome}</h3>
        <p>${produto.descricao}</p>
        <p>Preço: R$ ${produto.preco.toFixed(2)}</p>
        <p>Frete: R$ ${frete}</p>
    `;
    document.getElementById('detalhes').classList.remove('oculto');
    document.getElementById('adicionarCarrinho').setAttribute('data-id', produto.id);
}

// Função para fechar o modal
function fecharModal() {
    document.getElementById('detalhes').classList.add('oculto');
}

// Função para adicionar produto ao carrinho
function adicionarCarrinho() {
    const idProduto = document.getElementById('adicionarCarrinho').getAttribute('data-id');
    const produto = produtos.find(p => p.id == idProduto);

    let carrinho = JSON.parse(localStorage.getItem('carrinho')) || [];
    const produtoNoCarrinho = carrinho.find(p => p.id === produto.id);

    if (produtoNoCarrinho) {
        produtoNoCarrinho.quantidade += 1;
    } else {
        carrinho.push({ ...produto, quantidade: 1 });
    }

    localStorage.setItem('carrinho', JSON.stringify(carrinho));
    fecharModal();
}

const imgs = document.querySelectorAll('.carousel img');
const prevBtn = document.querySelector('.prev');
const nextBtn = document.querySelector('.next');
let index = 0;
let autoSlide;

function showImage(i) {
    index = (i + imgs.length) % imgs.length;
    imgs.forEach((img, idx) => {
        if (idx === index) {
            img.classList.add('active');
        } else {
            img.classList.remove('active');
        }
    });
}

function next() {
    showImage(index + 1);
}

function prev() {
    showImage(index - 1);
}

function resetAuto() {
    clearInterval(autoSlide);
    autoSlide = setInterval(next, 4000);
}

autoSlide = setInterval(next, 4000);
nextBtn.onclick = () => {
    next();
    resetAuto();
};
prevBtn.onclick = () => {
    prev();
    resetAuto();
};
const texts = document.querySelectorAll('.banner-text');
        let currentIndex = 0;
        function changeText() {
            // Remove a classe 'active' de todos os textos
            texts.forEach((text, index) => {
                text.classList.remove('active');
                text.style.color = '#f7f7f7ff'; // Reset color
            });
            // Muda a cor do texto ativo
            texts[currentIndex].classList.add('active');
            texts[currentIndex].style.color = getRandomColor();
            // Atualiza o índice para o próximo texto
            currentIndex = (currentIndex + 1) % texts.length;
        }
        function getRandomColor() {
            const letters = '0123456789ABCDEF';
            let color = '#';
            for (let i = 0; i < 6; i++) {
                color += letters[Math.floor(Math.random() * 16)];
            }
            return color;
        }
        // Inicia o carousel
        changeText(); // Mostra o primeiro texto
        setInterval(changeText, 3000);

const banner = document.querySelector(".banner");
const text = document.querySelectorAll(".banner-text");
let  = 0;

function showNextText() {
    texts[index].classList.add("active");             // mostra o texto atual

    // muda a cor da banner conforme o texto
    if(index === 0) banner.style.backgroundColor = "#81cbeef6";
    if(index === 1) banner.style.backgroundColor = "#0303fffb";
    if(index === 2) banner.style.backgroundColor = "#eeff00ff";

    index = (index + 1) % texts.length; // passa para o próximo
}

setInterval(showNextText, 3000); // troca a cada 3 segundos
