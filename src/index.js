const express = require('express');

const app = express();

app.use(express.json());

/**
 * Métodos HTTP
 * 
 * GET: Buscar informações do backend
 * POST: Criar uma informação no backend
 * PUT: Alterar uma informação no backend (conjunto de informações)
 * PATCH: Alterar uma informação no backend (uma informação, algo específico)
 * DELETE: Excluir uma informação no backend
 */

 /**
  * Tipos de parâmetros
  * 
  * Query Params: Filtros e paginação
  * Route Params: Identificar recursos (atualizar/excluir)
  * Request Body: Conteúdo na hora criar ou editar um recurso (JSON)
  */
app.get('/projects', (request, response) => {
  const { title } = request.query;

  console.log(title);

  return response.json([
    'Projeto 1',
    'Projeto 2',
  ]);
});

app.post('/projects', (request, response) => {

  const { title, owner } = request.body;

  console.log(title);
  console.log(owner);

  return response.json([
    'Projeto 1',
    'Projeto 2',
    'Projeto 3',
  ]);
});

app.put('/projects/:id', (request, response) => {
  const { id } = request.params;

  console.log(id);

  return response.json([
    'Projeto 4',
    'Projeto 2',
    'Projeto 3',
  ]);
});

app.delete('/projects/:id', (request, response) => {
  return response.json([
    'Projeto 2',
    'Projeto 3'
  ]);
});


app.listen(3333, () => {
  console.log('🚀 Backend started!');
});