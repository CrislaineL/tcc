de acordo com este index:
<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8" />
  <meta name="viewport" content="width=device-width, initial-scale=1.0" />
  <link rel="stylesheet" href="./css/style1.css" />
  <link rel="icon" href="../web/images/icon.jpg" type="image/x-icon" />
  <title>Pet Gatô: o melhor petshop online, em todos os aspectos</title>
  <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.5.0/css/all.min.css" />
</head>
<body>
  <!-- Cabeçalho -->
  <header>
    <h1>𝓟𝓮𝓽 𝓖𝓪𝓽𝓸</h1>
    <li class="search-icon"></li>
    <button onclick="window.location.href='carrinho.html'">
      <img src="../web/images/adicionar-ao-carrinho.png" alt="Carrinho" />
    </button>
    <button onclick="window.location.href='login.html'">
      <img src="../web/images/pessoa.png" alt="Login" />
    </button>
  </header>

  <!-- Segundo cabeçalho -->
  <div class="Containerheader">
    <button onclick="window.location.href='consulta.html'">
      <img src="../web/images/veterinario.gif" alt="Consulta" width="40" height="40" />Consulta
    </button>
    <button onclick="window.location.href='adocao.html'">
      <img src="../web/images/salve-os-animais.gif" alt="Adoção" width="40" height="40" />Adoção
    </button>
    <button onclick="window.location.href='doacoes.html'">
      <img src="../web/images/doacao.gif" alt="Doações" width="40" height="40" />Doações
    </button>
    <button onclick="window.location.href='cadastrar.html'">
      <img src="../web/images/noticias.gif" alt="Cadastrar" width="40" height="40" />Cadastrar
    </button>
    <button onclick="window.location.href='cadastrar.html'">
      <img src="../web/img/blog.gif" alt="Cadastrar" width="40" height="40" />Blog
    </button>
  </div>

  <!-- Cards no começo da página -->
  <br /><br /><br /><br /><br />
  <div class="anuncios">
    <br /><br />
    <button onclick="window.location.href='doacoes.html'">
      <img src="../web/images/doacao.gif" alt="Doação" width="40" height="40" />
      <p style="color: black;">
        <b style="color: rgb(75, 197, 235);">Brinquedos que fazem a diferença!</b><br />
        Doe e ajude a levar felicidade para quem mais precisa.<br />
        <b style="color: rgb(75, 197, 235);">Doe agora -></b>
      </p>
    </button>
    <button onclick="window.location.href='consulta.html'">
      <img src="../web/images/veterinario.gif" alt="Acupuntura" width="40" height="40" />
      <p style="color: black;">
        <b style="color: rgb(75, 197, 235);">Consulta para pets:</b><br />
        amor e saúde em cada ponto!<br />
        <b style="color: rgb(75, 197, 235);">Agende Agora! -></b>
      </p>
      <br />
    </button>
    <button onclick="window.location.href='adocao.html'">
      <img src="../web/images/salve-os-animais.gif" alt="Blog" width="40" height="40" />
      <p style="color: black;">
        <b style="color: rgb(75, 197, 235);">Amor e cuidado!</b><br />
        Faça a vida de um animalzinho feliz hoje, Adote um pet!<br />
        <b style="color: rgb(75, 197, 235);">Adote Agora -></b>
      </p>
    </button>
  </div>

  <!-- Banner pequeno -->
  <div class="banner">
    <h5 class="banner-text">Frete fixo de R$10.00 reais para todo o Brasil</h5>
    <h5 class="banner-text active">Compras acima de R$100,00 ganham um brinde</h5>
  </div>

  <!-- Carousel de imagens -->
  <div class="carousel" aria-label="Galeria de imagens de Petshop">
    <br />
    <img src="racao.gif" alt="petgato" class="active" />
    <img src="petisco.gif" alt="petshop" />
    <img src="tosa.gif" alt="cachorro" />
    <button class="prev" aria-label="Imagem anterior">&#10094;</button>
    <button class="next" aria-label="Próxima imagem">&#10095;</button>
    <br /><br />
  </div>

  <!-- Container dos indicadores (bolinhas) -->
  <div class="carousel-indicators" aria-label="Indicadores do carousel">
    <!-- As bolinhas serão criadas dinamicamente pelo JavaScript -->
  </div>

  <!-- Cards de frete e de 3 vezes sem juros -->
  <div class="juros">
    <button onclick="window.location.href='confira.html'">
      <img src="../web/images/relogio.png" alt="Receba em algumas horas" width="40" height="40" />
      <p style="color: rgb(112, 109, 109);">
        <b>Receba em algumas horas!</b><br />
        Confira as regras ->
      </p>
    </button>
    <button onclick="window.location.href='confira.html'">
      <img src="../web/images/cartao.png" alt="Parcele em 3x sem juros" width="40" height="40" />
      <p style="color: rgb(112, 109, 109);">
        <b>Parcele em 3x sem juros!</b><br />
        Confira as regras ->
      </p>
    </button>
    <button onclick="window.location.href='confira.html'">
      <img src="../web/images/entrega-rapida.png" alt="Frete Grátis" width="40" height="40" />
      <p style="color: rgb(112, 109, 109);">
        <b>Frete Grátis!</b><br />
        Confira as regras ->
      </p>
    </button>
    <button onclick="window.location.href='confira.html'">
      <img src="../web/images/petshop.png" alt="Retire e troque seu pedido na loja" width="40" height="40" />
      <p style="color: rgb(112, 109, 109);">
        <b>Retire e troque seu pedido na loja!</b><br />
        Confira as regras ->
      </p>
    </button>
  </div>

  <br /><br /><br />
  <div class="text">
    <h1><b style="color:rgb(0, 17, 255)">Produtos Recomendados:</b></h1>
  </div>

  <!-- Produtos com wrapper e navegação -->
   <main class="mainContainer">
  <div class="produtos-wrapper">
    <div id="produtos-container">
      <!-- cards aqui -->
    </div>

    <!-- Modal de detalhes dos produtos recomendados -->
    <div id="detalhes" class="modal oculto" aria-hidden="true" role="dialog" aria-modal="true">
      <div class="janela">
        <button id="fecharModal" aria-label="Fechar modal" onclick="fecharModal()">X</button>
        <div id="conteudo"></div>
        <button id="adicionarCarrinho" data-id="" onclick="adicionarCarrinho()">Adicionar ao Carrinho</button>
      </div>
    </div>

    <div class="produtos-navigation" style="width: 80%; display: flex; justify-content: space-between; margin: 10px auto;">
      <button id="btn-prev">Anterior</button>
      <button id="btn-next">Próximo</button>
    </div>
  </div>
</main>


  <br /><br /><br />

  <!-- Botões de animais -->
  <section class="section-fundo">
    <!-- SVG que desenha o bloco ondulado (topo + base) -->
    <svg class="fundo-svg" viewBox="0 0 1440 400" preserveAspectRatio="none" aria-hidden="true">
      <path fill="#B4E3F1" d="M0,80 C150,0 350,0 600,80 C850,160 1050,160 1440,80 L1440,320 C1200,260 1000,260 800,320 C600,380 400,380 200,320 L0,320 Z"></path>
    </svg>
    <br />
    <div class="fundoparcial-content">
      <div class="pet">
        <h1><b style="font-size: 35px;">Todos os produtos:</b></h1>
      </div><br>
      <div class="animal">
        <button onclick="window.location.href='pets.html'">
          <img src="../web/images/pet-food.png" />Produtos para seus pets 
        </button>
      </div><br>
    </div>
  </section>

  <br /><br /><br /><br /><br /><br />

  <div class="cb">
    <h1><b style="font-size: 45px;">Cuidados Básicos:</b></h1><br />
  </div>
  <br /><br /><br />

  <div class="tosavet">
    <br />
    <div class="banho">
      <h2><b style="font-size: 50px;">Banho<br /> & Tosa</b><br /><br />
        Higiene e Conforto para o seu melhor amigo!
      </h2>
      <img src="../web/images/banho-tosa-pet-shop.jpg" alt="Banho e Tosa" />
    </div>
    <br />
    <div class="vet"><button onclick="window.location.href='consulta.html'">
      <h2><b style="font-size: 50px;">Veterinário</b><br /><br />
        A saúde de seu pet, a sua prioridade
      </h2>
      <img src="../web/images/veterinario.png" alt="Veterinário" /></button>
    </div>
  </div>
<br><br><br><br><br><br><br><br>
  <div class="video">
    <img src="../web/images/Frete grátis 1.gif" alt="Saúde Pet" />
  </div><br>
  <div class="petgato">
  <h2><b style="font-size: 15px; color: rgb(0, 17, 255);"><img src="../web/images/favorito.png" > Aqui no Pet Gatô, você encontra tudo o que o seu pet precisa.</b></h2><br><br><br>
  </div>
  <div class="carousel-promos">
    <!-- Seta Esquerda -->
    <button class="carousel-btn-prev" aria-label="Anterior">&lt;</button>
    
    <!-- Trilha dos Itens (seu .promos original, com conteúdo completado) -->
    <div class="promos">
      <div class="prim">
        <img src="../web/images/dois.png" alt="Promoções" /><br><br>
        <h2><b style="font-size: 20px;">Cuidadora de animais!</b></h2>
      </div>
      <div class="prim">
        <img src="../web/images/tres.png" alt="Promoções" /><br><br>
        <h2><b style="font-size: 20px;">Tudo que você precisa!</b></h2><br>
      </div>
      <div class="prim">
        <img src="../web/images/cinco.png" alt="Promoções" /><br><br>
        <center><h2><b style="font-size: 20px;">Vacinação do seu animal preferido!</b></h2><br>
      </center></div>
      <div class="prim">
        <img src="../web/images/seis.png" alt="Promoções" /><br><br>
        <h2><b style="font-size: 20px;">Promoções Imperdíveis</b></h2><br>
      </div>
      <div class="prim">
        <img src="../web/images/sete.png" alt="Promoções" /><br><br>
        <h2><b style="font-size: 20px;">Higiene Básica!</b></h2><br>
      </div>
      <div class="prim">
        <img src="../web/images/quatro.png" alt="Promoções" /><br><br>
        <h2><b style="font-size: 20px;">Cuidador de animais!</b></h2><br>
      </div>
    </div>

    
    <!-- Seta Direita -->
    <button class="carousel-btn-next" aria-label="Próximo">&gt;</button>
  </div>
  <br><br><br>


  <!-- Container dos indicadores (bolinhas) -->
  <div class="carousel-indicators" aria-label="Indicadores do carousel">
    <!-- As bolinhas serão criadas dinamicamente pelo JavaScript -->
  </div>
  <br><br><br><br><br><br><br><br><br><br><br>
  <div class="ôblog" >
 
<h1><b style="font-size: 45px; color: rgb(0, 17, 255);">Blog Pet Gatô:</b></h1>
  
  </div>

 
<!--  -->
<div class="blog">
    <br />
    
<div class="petum">
  
      <div class="imn"> <img src="./img/blog1.jpg" alt="Banho e Tosa" /></div>
      <h2><b> Cuidados Essenciais para Filhotes</b>
      </h2><br>
    <p>A vacinação é fundamental para proteger o animal contra doenças graves, como cinomose e parvovirose. Já a vermifugação previne vermes intestinais que podem afetar...</p>
    <br><h3>21/09/2025 | 6min de leitura</h3>
    
    <button onclick="window.location.href='pet3.html'"><h4>Leia mais</h4> <img src="../web/img/seta.gif"/></b></button>
  </div>

    <div class="petum">
      <div class="imn"> <img src="../web/img/download.avif" alt="Banho e Tosa" /></div>
      <h2><b > O que fazer se o Seu Pet estiver vesgo</b>
      </h2><br><br>
    <p> Alteração nos nervos que controlam os músculos dos olhos, o que pode causar desalinhamento ocular. Isso pode vir a...</p>
    <br><h3>17/09/2025 | 5min de leitura</h3>
    <br>
    <button onclick="window.location.href='pet1.html'"><h4>Leia mais</h4> <img src="../web/img/seta.gif"/></b></button>
  </div>
  <div class="petum">
      <div class="imn"> <img src="./img/blog3.jpg" alt="Banho e Tosa" /></div>
      <h2><b > Como Proteger Seu Pet Durante o Verão</b>
      </h2><br><br>
    <p>O calor intenso pode prejudicar a saúde do seu pet. O asfalto quente pode queimar as patas dos animais e o calor excessivo pode levar à...</p>
    <br><h3>08/10/2025 | 4min de leitura</h3>
    
    <button onclick="window.location.href='pet2.html'"><h4>Leia mais</h4> <img src="../web/img/seta.gif"/></button>
  </div>
  
  </div>
<br><br><br><br><br><br><br><br><br><br>
<div class="desp">
  <h1><b style="font-size: 45px; color: rgb(0, 17, 255);">Animais Desaparecidos:</b></h1><br><br><br><br><br>
</div>
    <div class="promocao">
      <div class="prinm">
        <img src="../web/images/desaparecido1.png" alt="Promoções" /><br><br>
      </div>
      <div class="prinm">
        <img src="../web/images/desaparecido4.png" alt="Promoções" /><br><br>
      </div>
      <div class="prinm">
        <img src="../web/images/desaparecido5.png" alt="Promoções" /><br><br>
      </div>
      <div class="prinm">
        <img src="../web/images/desaparecido6.png" alt="Promoções" /><br><br>
      </div>
    </div>
    

    
  
<br><br><br><br><br><br>
<br><br><br><br><br><br>
<div class="bomba">
  <h1>Indicações de quem entende:🌍😺🐶</h1>
  

  <div class="container-carrossel">
    <button class="btn voltar">◀ </button>

    <div class="carrosselum">
      <div class="cardt">
        <img src="./images/viajar.jpg" alt="Produto 1">
        <h5 style="font-size: 16px;">Viajar com quem mais ama</h5>
        <p style="font-size: 12px;">Proporcionar uma viajem para o seu pet, agora é possivel!</p>
       <div class="vejamais">
        <a href="https://www.petworktravel.com.br/pt/" target="_blank">
  <button>
    <b style="color: blue;">Veja mais <img src="../web/img/seta.gif" alt="seta"/></b>
  </button>
</a>
</div>
      </div>
      <div class="cardt">
        <img src="./images/sitter.jpg" alt="Produto 1">
        <h5 style="font-size: 16px;">Pet Sitter!</h5>
        <p style="font-size: 12px;">serviço de babá de animais de estimação.</p>

        <div class="vejamais">
        <a href="https://www.doghero.com.br/" target="_blank">
  <button>
    <b style="color: blue;">Veja mais <img src="../web/img/seta.gif" alt="seta"/></b>
  </button>
</a>
</div>
      </div>
      <div class="cardt">
        <img src="./images/creche.jpg" alt="Produto 1">
        <h5 style="font-size: 16px;">Um lugar para socializar!</h5>
        <p style="font-size: 12px;">Um lugar onde seu pet pode ficar,durante seu trabalho.</p>
        
        <div class="vejamais">
        <a href="https://www.dogresort.com.br/" target="_blank">
  <button>
    <b style="color: blue;">Veja mais <img src="../web/img/seta.gif" alt="seta"/></b>
  </button>
</a>
</div>
      </div>
      <div class="cardt">
        <img src="./images/spa.jpg" alt="Produto 1">
        <h5 style="font-size: 16px;">Relaxar é um privilegio!</h5>
        <p style="font-size: 12px;">Proporcione uma experiencia única para seu pet.</p>
        
        <div class="vejamais">
        <a href="https://daycarepet.com.br/pet-spa" target="_blank">
  <button>
    <b style="color: blue;">Veja mais <img src="../web/img/seta.gif" alt="seta"/></b>
  </button>
</a>
</div>
      </div>
      <div class="cardt">
        <img src="./images/bolsinha.jpg" alt="Produto 1">
        <h5 style="font-size: 16px;">Hospetagem de elite!</h5>
        <p style="font-size: 12px;">Hotel/Creche feito sob medida para seu companheiro.</p>
         
        <div class="vejamais">
        <a href="https://alfdogpetcreche.com.br/?gad_source=1&gad_campaignid=22605562734&gbraid=0AAAAA_N_39wBy_VWFi3drNWCBdbE0xsyL&gclid=Cj0KCQjwjL3HBhCgARIsAPUg7a68OBxpd7M9LsIHzy9hWk-RfsrNovDAHp7dDqHwNaugCEnF5_C9EiIaAri-EALw_wcB" target="_blank">
  <button>
    <b style="color: blue;">Veja mais <img src="../web/img/seta.gif" alt="seta"/></b>
  </button>
</a>
</div>
      </div>
      <div class="cardt">
        <img src="./images/lama.jpg" alt="Produto 1">
        <h5 style="font-size: 16px;">Conheça passeios para fazer com o seu pet!</h5>
        <p style="font-size: 12px;">Passear com o seu animalzinho é essencial, conheça alguns luga...</p>
     
 
        <div class="vejamais">
        <a href="https://passeios.petsturistas.com.br/" target="_blank">
  <button>
    <b style="color: blue;">Veja mais <img src="../web/img/seta.gif" alt="seta"/></b>
  </button>
</a>
</div> </div>
      </div>


    <button class="btn avancar">▶</button>
  </div>

</div>

<br><br><br><br><br><br>
  <footer class="footer">
  <div class="footer-content">
    <!-- Seção Sobre -->
    <div class="footer-section">
      <h3>Sobre o PetShop</h3>
      <p>Somos uma loja dedicada ao bem-estar dos seus pets. Oferecemos produtos de qualidade e serviços personalizados para cães, gatos e outros animais.</p>
      <div class="social-links">
        <a href="#" aria-label="Facebook"><i class="fab fa-facebook"></i></a>
        <a href="#" aria-label="Instagram"><i class="fab fa-instagram"></i></a>
        <a href="#" aria-label="WhatsApp"><i class="fab fa-whatsapp"></i></a>
      </div>
    </div>

    <!-- Seção Links Úteis -->
    <div class="footer-section">
      <h3>Links Úteis</h3>
      <ul>
        <li><a href="#">Produtos para Cães</a></li>
        <li><a href="#">Produtos para Gatos</a></li>
        <li><a href="#">Serviços de Banho e Tosa</a></li>
        <li><a href="#">Consultas Veterinárias</a></li>
        <li><a href="#">Política de Privacidade</a></li>
      </ul>
    </div>

    <!-- Seção Contato -->
    <div class="footer-section">
      <h3>Contato</h3>
      <p><i class="fas fa-map-marker-alt"></i> Rua das Flores, 123 - Centro, São Paulo - SP</p>
      <p><i class="fas fa-phone"></i> (11) 99999-9999</p>
      <p><i class="fas fa-envelope"></i> contato@petshop.com.br</p>
      <p><i class="fas fa-clock"></i> Seg-Sex: 9h às 18h | Sáb: 9h às 14h</p>
    </div>

    <!-- Seção Newsletter -->
    <div class="footer-section">
      <h3>Newsletter</h3>
      <p>Receba dicas e promoções exclusivas!</p>
      <form class="newsletter-form">
        <input type="email" placeholder="Seu e-mail" required>
        <button type="submit">Inscrever</button>
      </form>
    </div>
  </div>
  <!-- Direitos Autorais -->
  <div class="footer-bottom">
    <p>&copy; 2025 PetShop. Todos os direitos reservados. Desenvolvido com ❤️ para pets.</p>
  </div>
</footer>

<script>
document.addEventListener('DOMContentLoaded', function() {
  const carousel = document.querySelector('.carousel-promos');
  if (!carousel) return; // Sai se não encontrar o carousel
  
  const track = carousel.querySelector('.promos');
  const items = track.querySelectorAll('.prim');
  const prevBtn = carousel.querySelector('.carousel-btn-prev');
  const nextBtn = carousel.querySelector('.carousel-btn-next');

  if (items.length <= 1) return; // Não precisa se houver 1 ou menos itens

  let currentIndex = 0;
  let itemWidth = 0;
  let gap = 0;
  const totalItems = items.length;

  function calculateDimensions() {
    gap = parseFloat(getComputedStyle(track).gap) || 0; // Pega o gap em px
    itemWidth = items[0].offsetWidth + gap; // Largura total por item
  }

  function updateCarousel() {
    const offset = -currentIndex * itemWidth;
    track.style.transform = `translateX(${offset}px)`;
  }

  function moveNext() {
    currentIndex = (currentIndex + 1) % totalItems; // Rotativo: volta ao 0
    updateCarousel();
  }

  function movePrev() {
    currentIndex = (currentIndex - 1 + totalItems) % totalItems; // Rotativo: vai ao fim
    updateCarousel();
  }

  prevBtn.addEventListener('click', movePrev);
  nextBtn.addEventListener('click', moveNext);

  // Inicializa
  calculateDimensions();
  updateCarousel();

  // Recalcula em resize da janela
  window.addEventListener('resize', () => {
    calculateDimensions();
    updateCarousel();
  });

  // Opcional: Navegação com teclado (setas esquerda/direita)
  document.addEventListener('keydown', (e) => {
    if (document.activeElement === carousel || carousel.contains(document.activeElement)) { // Só se focado no carousel
      if (e.key === 'ArrowLeft') movePrev();
      if (e.key === 'ArrowRight') moveNext();
    }
  });
});
</script>

  <script src="./JS/js3.js"></script>
</body>
</html>

Concerte a parte de responsividade:



    /* responsividade */

@media (max-width: 768px) {
  body {
    width: 100%;
    display: flex;
  }
}

/* 🔹 QUANDO A TELA FOR PEQUENA, DIMINUI O TAMANHO DO TÍTULO */
@media (max-width: 200%) {
  header h1 {
    width: 50%;
    font-size: 30px;
  }
}
@media (max-width: 768px) {
  header {
    width: 121%;
    font-size: 30px;
    position: fixed;
    top: 0;left: -10%;
  }
}

/* 🔹 QUANDO A TELA FOR PEQUENA, DIMINUI O TAMANHO DAS IMAGENS */
@media (max-width: 768px) {
  header button img {
    width: 25px; /* diminui o tamanho das imagens */
  }
}

/* BARRA DE PESQUISA */
.search-icon {
  width: 60%;
}

/* 🔹 QUANDO A TELA FOR PEQUENA A BARRA SOME */
@media (max-width: 768px) {
  .search-icon {
    display: none; /* some completamente */
  }
}

/* Quando passar o mouse (somente em dispositivos que suportam hover), exibe a imagem */
@media (hover: hover) and (pointer: fine) {
  .Containerheader button:hover img {
    display: inline-block; /* mostra a imagem ao passar o mouse */
  }
}

/* Em telas pequenas (responsivo, tipo celular), as imagens continuam ocultas */
@media (max-width: 768px) {
  .Containerheader button img {
    display: none !important; /* garante que no mobile nunca aparece */
  }
}

@media (max-width: 768px) {
  .anuncios {
    display: none; /* some completamente */
  }
}  

@media (max-width: 768px) {
  .carousel {
    width: 90%; /* AJUSTA LARGURA NO MOBILE */
    height: 250px; /* ALTURA MENOR */
  }

  .carousel img {
    width: 90%; /* IMAGEM OCUPA MAIS ESPAÇO */
  }

  .prev,
  .next {
    font-size: 16px;
    padding: 8px;
  }
}

/* ANIMAÇÃO */
@keyframes fadeInDown {
  from {
    opacity: 0; /* INICIA COM OPACIDADE 0 */
    transform: translateY(-20px); /* INICIA 20PX ACIMA */
  }
  to {
    opacity: 1; /* FINALIZA COM OPACIDADE 1 */
    transform: translateY(0); /* FINALIZA NA POSIÇÃO ORIGINAL */
  }
}


/* 🔹 QUANDO A TELA FOR PEQUENA A BARRA SOME */
@media (max-width: 768px) {
  .animal img {
    display: none; /* some completamente */
  }

  .animal button {
    width: 100%;
    padding: 5px;
    border-radius: 25%;
  }

  .animal {
    position: relative;
    top: 0;
    left: -1%;
    width: 80%;
    gap: 2%;
    padding: 10px;
  }
}


@media (max-width: 768px) {
  .section-fundo {
    width: 40%;
    position: relative;
    top: 0;left: 0;
    
  }}

  
@media (max-width: 768px) {
  .section-fundo {
    width: 40%;
    position: relative;
    top: 0;left: 0;
    
  }}
  

@media (max-width: 768px) {
  .fundo-svg, .fundoparcial-content, .animal, .pet, .section-fundo  {
    display: none; /* some completamente */
  }}


  
  
/* responsividade */
@media (max-width: 768px) {
  .fundoparcial-content { padding: 20px 12px; }
  .animal button { min-width: 48%; height: 56px; border-radius: 12px; }
  .animal button img { display: inline-block; width: 28px; height: 28px; }
}


/* 🔹 QUANDO A TELA FOR PEQUENA A BARRA SOME */
@media (max-width: 768px) {
  .juros {
    display: none; 
  }
}


@media (max-width: 768px) {
  .produtos-navigation {
    gap: 10%;
  }
}

@media (max-width: 768px) {
  .cb {
    display: none; /* some completamente */

  }}

  
@media (max-width: 768px) {
  .tosavet {
    display: none; /* some completamente */

  }
.h2 {
    width: 0;
    font-size: 1px;
  }}
    .banho, .vet {
      width: 70%;
      height: 350px;
      background-color: var(--c6);
      display: flex;
      justify-content: space-around;
      border-radius: 25px;
      
      

       & img{
        width: 50%;
        border-radius: 70% 0 0 0 ; 
        position: relative;
        top: 0;left: 10%; 
      }
      & h2{
        font-size: 15px;
        color: rgb(233, 224, 142);
        position: relative;
        top: 25%;left: 5%;
      }
    }

    @media (max-width:900px) {
  .produtos-grid-dup { grid-template-columns: repeat(2, 1fr); }
  .conteudo-produto-dup { flex-direction:column; align-items:flex-start; }
}
@media (max-width:480px) {
  .produtos-grid-dup { grid-template-columns: 1fr; }
}

  
    @media (max-width: 768px) {
      .video {
        position: relative;
        top: -40vh;left: 0;
        width: 130%;
      }
      .video img {
        top: -400%;left: 0;
        width: 220%;
        height: 800%;
      }
    }

    
    @media (max-width: 768px) {
      .promos, .prim, .carousel-btn-next, .carousel-promos {
        display: none;
        width: 0;
      }
    }
    
@media (max-width: 768px) {
      .petgato {
        position: relative;
        top: -32vh;left: 0;
        width: 80%;
      }
    }
    
/* Responsividade para as setas (integra com suas media queries) */
@media (max-width: 768px) {
  .carousel-promos {
    width: 95%;
  }
  
  .prim {
    width: 45%; /* ~2 itens visíveis no mobile */
    min-width: 140px;
  }
  
  .carousel-btn-prev,
  .carousel-btn-next {
    width: 40px;
    height: 40px;
    font-size: 20px;
  }
}

/* Responsividade para Mobile */
@media (max-width: 768px) {
  .footer-content {
    flex-direction: column;
    align-items: center;
    text-align: center;
  }

  .footer-section {
    min-width: auto;
    margin: 15px 0;
  }

  .newsletter-form {
    flex-direction: column;
  }

  .newsletter-form input {
    border-radius: 4px;
    margin-bottom: 10px;
  }

  .newsletter-form button {
    border-radius: 4px;
  }
}


/* =====================================================
   AJUSTES DE RESPONSIVIDADE — PRESERVA LAYOUT DESKTOP
   ===================================================== */
@media (max-width: 768px) {

  header h1 {
    font-size: 22px;
  }

  .Containerheader {
    transform: scale(0.9);
    transform-origin: top center;
  }

  .anuncios,
  .juros,
  .animal,
  .section-fundo,
  .tosavet,
  #produtos-container,
  .blog {
    transform: scale(0.9);
    transform-origin: top center;
  }

  /* Ajuste para largura total da viewport */
  .carousel,
  .mainContainer,
  .mainContainer-dup,
  .banner {
    width: 100%;
    left: 0;
  }

  /* Corrige imagens grandes */
  img {
    max-width: 100%;
    height: auto;
  }

  /* Texto mais ajustado */
  h1, h2, h3, p, button {
    font-size: 90%;
  }

  /* Evita sobreposição */
  .petum,
  .banho,
  .vet {
    overflow: hidden;
  }

  /* Mantém botões clicáveis e legíveis */
  button {
    padding: 8px 12px;
  }
}

@media (max-width: 480px) {
  body {
    transform: scale(0.85);
    transform-origin: top center;
  }
}



@media (max-width: 768px) {
      .ôblog h1{
        width: 100%;
        position: relative;
        top: -35vh;left: 0;
        
      }
}  


@media (max-width: 768px) {
      .blog {
        width: 100%;
        position: relative;
        top: -20vh;left: 0;
        
      }
      .petum, .imn img {
        position: relative;
        top: -30vh;left: 0;
        width: 100%;
        height: 300px;
      }
      .petum p, .petum h3, .petum img {
      display: none;
      }
    
  .petum h2 {
    width: 80%;
    text-align: justify;
    font-size: 15px;
    font-family: 'Segoe UI', Tahoma, Geneva, Verdana, sans-serif;
    position: relative;
    top: 20px;left: 5%;
  }

.petum button {
    position: relative;
    top: -5px;left: -10px;
    background: transparent;
    border: none;
    font-size: 10px;

    h4 {
      font-size: 10px;
      position: relative;
      top: -50%;left: 50%;
    }
  }  
  }
@media (max-width: 768px) {
      .imn img {
        position: relative;
        top: -30vh;left: 0;
        width: 10,
        0%;
        height: 300px;
      }
    }

    
@media (max-width: 768px) {
      .desp{
        position: relative;
        top: -60vh;left: -45px;
        width: 70%;
        height: 300px;
        display: flex;
      }
      .promocao{
        position: relative;
        top: -80vh;left: 0;
        width: 100%;
        height: 200px;

      }
      .promocao img{
        position: relative;
        top: 0;left: -10px;
        width: 150vh;
        height: 300px;
      }
      
    }

    
  
@media (max-width: 768px) {
      .bomba {
        width: 100%;
        height: 800px;
        position: relative;
        top: -70vh;left: 0;
      }
    }
    
  
@media (max-width: 768px) {
      .carrosselum {
        width: 100%;
        height: 400px;
        position: relative;
        top: 0;left: 0;
      }
    }
  

@media (max-width: 768px) {
      .footer {
        position: relative;
        top: -70vh;left: 0;
      }
    }

