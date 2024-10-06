# Documentação README

# Projeto: Troca de Cores e Escolha de Imagem

# Descrição

Este projeto permite aos usuários alterarem a cor de fundo de uma página web utilizando botões com cores predefinidas, campos para escolha manual de cores ou geração de cores aleatórias. Além disso, é possível carregar uma imagem a partir do dispositivo do usuário para aplicá-la como plano de fundo da página. O projeto foi desenvolvido utilizando as tecnologias HTML, CSS e JavaScript, com base em um tutorial do YouTube.

# Funcionalidades

1. Troca de cores predefinidas: O usuário pode clicar em botões para mudar o fundo da página para vermelho, verde, azul ou amarelo.
2. Geração de cor aleatória: Há um botão que gera uma cor aleatória (em formato RGB) e a aplica ao fundo da página.
3. Entrada de cor personalizada: Um campo de texto permite que o usuário insira manualmente uma cor, seja pelo nome da cor (como "red") ou pelo código hexadecimal (como "#FF0000").
4. Seletor de cor: O projeto inclui um input de tipo "color", que permite que o usuário escolha uma cor diretamente do seletor de cores nativo do navegador.
5. Seleção de imagem: O usuário pode carregar uma imagem do seu dispositivo para usá-la como fundo da página. O arquivo é lido e exibido como plano de fundo assim que carregado.

# Estrutura do Projeto

- HTML: Define a estrutura da página, como os botões e campos de entrada para interação.
- CSS: Responsável pelo estilo da página, centralizando os elementos e ajustando o layout para ser responsivo e intuitivo.
- JavaScript: Contém a lógica de alteração de cores e manipulação de imagens de fundo. As principais funções incluem a troca de cor, a geração de cores aleatórias e o carregamento de imagens.

# Como Funciona

- Troca de Cor: Quando o usuário clica em um dos botões predefinidos (vermelho, verde, azul ou amarelo), o JavaScript captura o evento e aplica a cor selecionada ao fundo da página.
- Cor Aleatória: Um algoritmo gera três números aleatórios que representam as cores RGB e aplica esses valores como cor de fundo.
- Cor Personalizada: O usuário pode inserir um nome de cor ou código hexadecimal em um campo de texto e clicar em "Aplicar" para mudar o fundo da página para essa cor.
- Seletor de Cor: O usuário pode selecionar uma cor usando o seletor de cores do navegador. Ao escolher, a cor é imediatamente aplicada ao fundo.
- Escolha de Imagem: Ao carregar uma imagem através do input de arquivos, o JavaScript lê a imagem e a aplica como plano de fundo da página, substituindo a cor atual.

# Como Rodar o Projeto

1. Faça o clone deste repositório.
2. Abra o arquivo `index.html` em qualquer navegador.
3. Interaja com a página trocando as cores de fundo ou selecionando uma imagem como plano de fundo.

# Tecnologias Utilizadas

- HTML5: Usado para a estrutura da página.
- CSS3: Responsável pelo layout e design.
- JavaScript: Implementa a lógica interativa do projeto, manipulando o DOM para realizar mudanças de fundo e imagem em tempo real.

# Origem do Tutorial

O projeto foi inspirado e desenvolvido com base em um tutorial disponível no YouTube, cujo objetivo é ensinar a manipulação de cores e imagens através de JavaScript. Para mais informações sobre o tutorial, você pode acessar o vídeo [aqui](https://www.youtube.com/watch?v=hiBdpJSk4sY&t=3029s).

Autor: [Lídia Souza de Oliveira Pietrobon]