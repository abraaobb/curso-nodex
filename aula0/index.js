let palavras = ['teste', 'aula', 'etc', 'abraao', 'brito', 'brandao', 'nodejs', 'programacao', 'codigo', 'web']

palavras.forEach(p => {
    let maiusculo = p.toUpperCase();
    let quantPalavras = maiusculo.length;
    let concatenado = []
    for (let i = 0; i < maiusculo.length; i++) {
        if (i != maiusculo.length - 1) {
            concatenado += maiusculo[i];
            concatenado += '-';
        } else {
            concatenado += maiusculo[i];
        }
    }
    concatenado += ' (' + quantPalavras + ' letras)';
    console.log(concatenado);
});