const dadosFront = "/assets/produtos.json";
let produtos = [];

// Busca os dados dos produtos e exibe na página
fetch(dadosFront)
    .then(resp => resp.json())
    .then(dados => {
        produtos = dados;
        mostrarProdutos(dados);
        updateView(); // Atualiza a visualização após carregar os produtos
    })
    .catch(error => {
        console.error('Erro ao carregar produtos:', error);
    });

// Função para exibir os produtos no container
function mostrarProdutos(produtos) {
    const container = document.getElementById('produtos-container');
    container.innerHTML = ''; // Limpa o container antes de adicionar novos cards
    produtos.forEach((produto, index) => {
        const card = `
            <div class="card">
                <img src="${produto.imagem}" alt="${produto.nome}">
                <h2>${produto.nome}</h2>
                <p>R$ ${produto.preco.toFixed(2)}</p>
                <div class="button-group">
                    <button class="botao1" onclick="mostrarDetalhes(${index})">
                        <img src="../web/images/favorito.png" alt="Favorito">
                    </button>
                    <button class="botao1" onclick="mostrarDetalhes(${index})">
                        <img src="../web/images/adicionar-ao-carrinho.png" alt="Adicionar ao carrinho">
                    </button>
                    <button onclick="mostrarDetalhes(${index})">Detalhes</button>
                </div>
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

// Carousel - Seleciona imagens e botões
const imgs = document.querySelectorAll('.carousel img');
const prevBtn = document.querySelector('.prev');
const nextBtn = document.querySelector('.next');
const indicatorsContainer = document.querySelector('.carousel-indicators');

let index = 0; // índice da imagem central
let autoSlide; // autoplay

// Cria as bolinhas de acordo com a quantidade de imagens
imgs.forEach((_, i) => {
    const dot = document.createElement('div');
    dot.classList.add('dot');
    if (i === 0) dot.classList.add('active-dot'); // primeira bolinha ativa
    dot.addEventListener('click', () => {
        index = i;
        updateCarousel();
        resetAuto();
    });
    indicatorsContainer.appendChild(dot);
});

const dots = document.querySelectorAll('.dot');

// Atualiza classes das imagens e bolinhas
function updateCarousel() {
    imgs.forEach((img, i) => {
        img.classList.remove('active', 'left', 'right', 'hidden');

        if (i === index) {
            img.classList.add('active'); // central
        } else if (i === (index - 1 + imgs.length) % imgs.length) {
            img.classList.add('left'); // esquerda
        } else if (i === (index + 1) % imgs.length) {
            img.classList.add('right'); // direita
        } else {
            img.classList.add('hidden'); // fora do foco
        }
    });

    // Atualiza bolinhas
    dots.forEach((dot, i) => {
        dot.classList.toggle('active-dot', i === index);
    });
}

// Próxima imagem
function next() {
    index = (index + 1) % imgs.length;
    updateCarousel();
}

// Imagem anterior
function prev() {
    index = (index - 1 + imgs.length) % imgs.length;
    updateCarousel();
}

// Reinicia autoplay
function resetAuto() {
    clearInterval(autoSlide);
    autoSlide = setInterval(next, 4000);
}

// Eventos dos botões
nextBtn.addEventListener('click', () => {
    next();
    resetAuto();
});
prevBtn.addEventListener('click', () => {
    prev();
    resetAuto();
});

// Inicia autoplay
autoSlide = setInterval(next, 4000);

// Inicializa carousel
updateCarousel();

// Banner texto com mudança de cor
const texts = document.querySelectorAll('.banner-text');
let currentIndex = 0;

function changeText() {
    // Remove a classe 'active' de todos os textos e reseta cor
    texts.forEach((text) => {
        text.classList.remove('active');
        text.style.color = '#f7f7f7ff';
    });
    // Ativa o texto atual e muda a cor para uma cor aleatória
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

// Inicia o carousel de textos
changeText();
setInterval(changeText, 3000);

// Banner background color change
const banner = document.querySelector(".banner");
const bannerTexts = document.querySelectorAll(".banner-text");
let bannerIndex = 0;

function showNextText() {
    bannerTexts.forEach(text => text.classList.remove("active"));
    bannerTexts[bannerIndex].classList.add("active");

    // Muda a cor do banner conforme o texto ativo
    if (bannerIndex === 0) banner.style.backgroundColor = "#00a6f3f6";
    else if (bannerIndex === 1) banner.style.backgroundColor = "#0303fffb";
    else if (bannerIndex === 2) banner.style.backgroundColor = "#eeff00ff";

    bannerIndex = (bannerIndex + 1) % bannerTexts.length;
}

setInterval(showNextText, 3000);
const btnPrev = document.getElementById('btn-prev');
const btnNext = document.getElementById('btn-next');
const produtosContainer = document.getElementById('produtos-container');

let currentPage = 0;
const cardsPerPage = 4; // quantos cards mostrar por vez

function updateView() {
  const totalCards = produtosContainer.children.length;
  const totalPages = Math.ceil(totalCards / cardsPerPage);

  if (currentPage < 0) currentPage = 0;
  if (currentPage >= totalPages) currentPage = totalPages - 1;

  const card = produtosContainer.querySelector('.card');
  if (!card) return;

  const cardWidth = card.offsetWidth;
  const gap = 10; // deve ser igual ao gap do CSS em px

  // Calcula deslocamento horizontal: (largura do card + gap) * cardsPerPage * currentPage
  const offset = currentPage * (cardWidth + gap) * cardsPerPage;

  produtosContainer.style.transform = `translateX(-${offset}px)`;

  btnPrev.disabled = currentPage === 0;
  btnNext.disabled = currentPage === totalPages - 1;
}

btnPrev.addEventListener('click', () => {
  currentPage--;
  updateView();
});

btnNext.addEventListener('click', () => {
  currentPage++;
  updateView();
});

// Chame updateView após carregar os produtos
// Se produtos são carregados dinamicamente, chame updateView() após mostrarProdutos()
