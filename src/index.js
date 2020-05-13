const express = require('express');

const app = express();

/**
 * Métodos HTTP
 * 
 * GET: Buscar informações do backend
 * POST: Criar uma informação no backend
 * PUT: Alterar uma informação no backend (conjunto de informações)
 * PATCH: Alterar uma informação no backend (uma informação, algo específico)
 * DELETE: Excluir uma informação no backend
 */
app.get('/projects', (request, response) => {
  return response.json([
    'Projeto 1',
    'Projeto 2',
  ]);
});

app.post('/projects', (request, response) => {
  return response.json([
    'Projeto 1',
    'Projeto 2',
    'Projeto 3',
  ]);
});

app.put('/projects/:id', (request, response) => {
  return response.json([
    'Projeto 4',
    'Projeto 2',
    'Projeto 3',
  ]);
});

app.delete('/projects/:id', (request, reponse) => {
  return response.json([
    'Projeto 2',
    'Projeto 3'
  ]);
});


app.listen(3333, () => {
  console.log('🚀 Backend started!');
});