
var altura = 0
var largura = 0
var vidas = 1
var tempo = 15
var criaCovidTempo = 1500

var nivel = window.location.search
nivel = nivel.replace('?', '')

if (nivel === 'normal')
    criaCovidTempo = 1500
else if (nivel === 'dificil')
    criaCovidTempo = 1000
else if (nivel === 'chucknorris')
    criaCovidTempo = 750

console.log(nivel + " " + criaCovidTempo)


function ajustaTamanhoPalcoJogo() {
    altura = window.innerHeight;
    largura = window.innerWidth;
    console.log(largura, altura);
}

ajustaTamanhoPalcoJogo()


var cronometro = setInterval(function () {
    tempo -= 1
    if (tempo < 0) {
        clearInterval(cronometro)
        clearInterval(criaCovid)
        window.location.href = "vitoria.html"
    } else {
        document.getElementById('cronometro').innerHTML = tempo
    }

}, 1000)

function posicaoRandoica() {

    //remover o covid caso ele exista

    if (document.getElementById('covid')) {
        document.getElementById('covid').remove()

        //console.log('elemento seleciondo foi: ' + vidas)
        if (vidas > 3) {
            window.location.href = "fim_de_jogo.html"
        } else {
            document.getElementById('v' + vidas).src = "imagens/coracao_vazio.png"
            vidas++;
        }

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
    covid.onclick = function () {
        this.remove()
    }

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