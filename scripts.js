// Função para trocar a cor de fundo
function trocaCor(cor) {
    document.body.style.backgroundImage = 'none'; // Remove imagem de fundo
    document.body.style.backgroundColor = cor;    // Aplica cor de fundo com transição
}

// Função para gerar e aplicar uma cor aleatória
function corAleatoria() {
    const red = Math.floor(Math.random() * 255);
    const green = Math.floor(Math.random() * 255);
    const blue = Math.floor(Math.random() * 255);

    document.body.style.backgroundImage = 'none'; // Remove imagem de fundo
    document.body.style.backgroundColor = `rgb(${red}, ${green}, ${blue})`; // Aplica cor RGB aleatória com transição
}

// Função para aplicar a cor personalizada inserida pelo usuário
function aplicaCorPersonalizada() {
    const corInput = document.querySelector('.input-cor').value; // Captura o valor da cor inserida
    trocaCor(corInput); // Aplica a cor inserida com transição
}

// Função para escolher uma imagem e aplicá-la como fundo
function escolherImagem(imagem) {
    const reader = new FileReader(); // Cria um FileReader para ler o arquivo
    reader.onload = function(evento) {
        const urlImagem = evento.target.result; // Pega a URL da imagem carregada

        document.body.style.backgroundImage = `url('${urlImagem}')`; // Aplica a imagem de fundo com transição
    }
    reader.readAsDataURL(imagem); // Lê a imagem como uma URL base64
}
