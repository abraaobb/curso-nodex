// importar o exprees
const express = require(`express`);
// instanciando
const app = express();

// GET
app.get(`/`, (req,res)=>{
    res.send('Olá, mundox!');
});

// inicializando servidor na porta 3000
const port = 3000;
app.listen(port, function(){
    console.info(`servidor rodando na porta ${port}`)
});