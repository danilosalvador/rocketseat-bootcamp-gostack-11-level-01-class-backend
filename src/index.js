const express = require('express');
const { uuid } = require('uuidv4');

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

const projects = [];

app.get('/projects', (request, response) => {
  const { title } = request.query;

  const result = title 
    ? projects.filter(project => project.title.includes(title))
    : projects;

  return response.json(result);
});

app.post('/projects', (request, response) => {
  const { title, owner } = request.body;
  const project = { id:uuid(), title, owner };

  projects.push(project);

  return response.json(project);
});

app.put('/projects/:id', (request, response) => {
  const { id } = request.params;
  const { title, owner } = request.body;

  const projectIndex = projects.findIndex(project => project.id === id);

  if (projectIndex < 0) {
    return response.status(400).json({ error: 'Project not found.'});
  }

  const project = { id, title, owner };
  projects[projectIndex] = project;

  return response.json(project);
});

app.delete('/projects/:id', (request, response) => {
  const { id } = request.params;

  const projectIndex = projects.findIndex(p => p.id === id);

  if (projectIndex < 0) {
    return response.status(400).json({ error: 'Project not found.'})
  }

  projects.splice(projectIndex, 1);

  //É recomendado o status 204 qdo retornar vazio
  return response.status(204).send();
});


app.listen(3333, () => {
  console.log('🚀 Backend started!');
});