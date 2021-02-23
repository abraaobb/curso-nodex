let palavras = ['teste', 'aula', 'etc', 'abraao', 'brito', 'brandao', 'nodejs', 'programacao', 'codigo', 'web'];

palavras.forEach(function (item, index) {
    console.log(item.toUpperCase().split("").join("-") + ' (' + index + ' letras)');
})