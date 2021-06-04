
var altura = 0
var largura = 0

function ajustaTamanhoPalcoJogo() {
    altura = window.innerHeight;
    largura = window.innerWidth;
    console.log(largura, altura);
}

ajustaTamanhoPalcoJogo()

function posicaoRandoica() {

    //remover o covid caso ele exista

    if (document.getElementById('covid')) {
        document.getElementById('covid').remove()
    }

    var posicaoX = Math.floor(Math.random() * largura) - 90
    var posicaoY = Math.floor(Math.random() * altura) - 90

    posicaoX = posicaoX < 0 ? 0 : posicaoX
    posicaoY = posicaoY < 0 ? 0 : posicaoY

    console.log(posicaoX, posicaoY)

    //criar o elemento html
    var covid = document.createElement('img')
    covid.src = './imagens/covid.png'
    covid.className = tamanhoAleatorio() + ' ' + ladoAleatorio()
    covid.style.left = posicaoX + 'px'
    covid.style.top = posicaoY + 'px'
    covid.style.position = 'absolute'
    covid.id = 'covid'

    document.body.appendChild(covid)

    console.log(ladoAleatorio())
}

function tamanhoAleatorio() {
    var classe = Math.floor(Math.random() * 3)

    switch (classe) {
        case 0:
            return 'covid1'
        case 1:
            return 'covid2'
        case 2:
            return 'covid3'
    }
}

function ladoAleatorio() {
    var classe = Math.floor(Math.random() * 2)

    switch (classe) {
        case 0:
            return 'ladoA'
        case 1:
            return 'ladoB'
    }
}