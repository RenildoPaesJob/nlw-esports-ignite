import express from 'express';

const app = express()

app.get('/ads', (req, res) => {
  // return res.send('Acessou Ads!')
  return res.json([
    { id: 1, nome: 'Anúncio 1'},
    { id: 2, nome: 'Anúncio 2'},
    { id: 3, nome: 'Anúncio 3'},
    { id: 4, nome: 'Anúncio 4'},
  ])
})

app.listen(3333)