const { Routes } = require('express');

const routes = Routes();


routes.get('/');
routes.post('/');
routes.put('/:id');
routes.patch('/:id');
routes.delete('/:id');