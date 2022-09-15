import express from 'express';

const app = express();

app.get('/ads', (_request, response) => {
  response.json([
    { id: 1, ad: 'teste 1' },
    { id: 2, ad: 'teste 2' },
    { id: 3, ad: 'teste 3' },
    { id: 4, ad: 'teste 4' },
    { id: 5, ad: 'teste 5' },
  ]);
});

app.listen('3333');
