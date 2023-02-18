function tocaSom (seletorAudio) {
    const elemento = document.querySelector(seletorAudio);

    //Se o elemento dar/aparecer DIFERENTE de NULO e for IGUAL a um AUDIO, ele vai dar PLAY
    if (elemento && elemento.localName === 'audio') {
        elemento.play();
    }

    // vai ser um elemento SE NÃO, caso n ocorra isso ele vai ocorrer outra coisa
    else {
        //alert('Elemento não encontrado') => um alerta de uma mesnagem de um elemento n encontrado, seu eu pedir para executar uma ação que n existe, null
        console.log('Elemento não encontrado ou seletor inválido');
    }

}

const listaDeTeclas = document.querySelectorAll('.tecla');

//para - defino uma variavel + coloco um limite (length é maximo + contador = contador + 1)
for (let contador = 0; contador < listaDeTeclas.length; contador++) {

    //dou um nome a uma referencia para a listad e teclas, quando apertado uma tecla no contador
    const tecla = listaDeTeclas[contador];
    //nome para começar pela 1°
    const instrumento = tecla.classList[1];
    //nome para dizer é para acopanhar a listade ID com o começo SOM_ com referencia ao classlist1 em diante
    const idAudio = `#som_${instrumento}`; //template string

    //quando clicado a tecla vai fazer esse barulho
    tecla.onclick = function () {
        tocaSom(idAudio);
    }

    //tecla quando apertada, mas teclas especificas
    tecla.onkeydown = function (evento) {

        //SE dada estrutura ocorrer = ser verdadeira = SE é igual ao if + um evento da tecla + ===IGUAL = a tecla q eu quero
        // O || serve para que eu n escreva a msm condição 2 vezes, if duas vezes - se a tecla do teclado por SPACE ou ENter vai executar esse msm condição If
        if (evento.code === 'Space' || evento.code === 'Enter') {
            tecla.classList.add('ativa');
        }

    }

    //tecla qunado soltada
    tecla.onkeyup = function () {
        tecla.classList.remove('ativa');
    }

}
