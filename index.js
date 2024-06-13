import express from 'express';


const server = express();
server.get('/', (req, res) => {
    res.send('Hello World!')
  })


  server.get('/clients', (req, res) => {
    res.send('Hello World!')
  })

server.listen(5000, () => { 
    console.log('Servidor on na porta 5000')
});
