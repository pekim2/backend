const express = require('express')

const app = express();
const routes = require('./routes')

app.use(express.json()); // Diz para o express que a resposta vai ser em JSON.

app.use(routes); // USA AS ROTAS FORNECIDADS PELO CONTROLER

app.listen(3344, () => console.log('Servidor ON - Rodando na porta 3344 !!'));