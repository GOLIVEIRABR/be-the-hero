const express = require('express'); //importa o módulo express
const cors = require('cors'); //módulo de segurança
const routes = require('./routes'); //se não colocar o caminho relativo ele vai achar que é um pacote em vez do arquivo 

const app = express(); //instancia a aplicação

app.use(cors());
app.use(express.json()); //Avisando que antes das requisições serem processadas o express deve transformar o corpo json em um objeto do javascript
app.use(routes); //utilizando a variável importada do routes.js

/**
 * Rota / Recurso
 */

 /**
  * Método HTTP:
  * 
  * GET: Buscar/listar uma informação do Back-end (chamada padrão do navegador)
  * POST: Criar uma informação no Back-end
  * PUT: Alterar uma informação no Back-end
  * DELETE: Deletar uma informação no Back-end
  */

  /**
   * Tipos de Parâmetros:
   * Query: Parâmetros nomeados enviados na rota após o "?" (Filtros, Paginação, )
   * Route Params: Parâmetros utilizados para identificar recursos
   * Request Body: Corpo da requisição, utilizado para criar ou alterar recursos
   */

   /**
    * Driver: SELECT * FROM users
    * Query Builder: table('users).select('*').where()
    */


/*definindo a rota raiz. Recebe uma função como parâmetro. O primeiro parâmetro é 
o tipo da requisição e o segundo parâmetro é o retorno da função. O que vem depois
da barra é o recurso, por exemplo /users, users é o recurso*/

app.listen(3333); //define a porta da aplicação

