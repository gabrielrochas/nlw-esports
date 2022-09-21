import express from 'express';
import cors from 'cors';
import axios from 'axios';

const app = express();

app.use(cors());

const options = {
  method: 'get',
  url: 'https://www.freetogame.com/api/games',
  headers: {},
};

app.get('/games', async (_request, response) => {
  const resp = await axios(options)
    .then(({ data }) => {
      return data;
    })
    .catch(function (error) {
      console.error(error);
    });
  return response.send(resp);
});

app.get('/games/:id/ads', (_request, response) => {
  // const gameId = request.params.id;

  const sample = [
    { id: 1, ad: 'teste 1' },
    { id: 2, ad: 'teste 2' },
    { id: 3, ad: 'teste 3' },
    { id: 4, ad: 'teste 4' },
    { id: 5, ad: 'teste 5' },
  ];

  return response.json(sample);
});

app.post('/ads', (_request, response) => {
  return response.status(201).json([]);
});

app.get('/ads/:id/discord', (_request, response) => {
  // const adsId = request.params.id;

  return response.send([]);
});

app.listen('3333');
