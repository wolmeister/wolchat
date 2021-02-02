import fastify from 'fastify';
import * as WebSocket from 'ws';
import * as http from 'http';

const fastifyServer = fastify({
  serverFactory(handler) {
    const server = http.createServer((req, res) => {
      handler(req, res);
    });
    const wss = new WebSocket.Server({ server });

    wss.on('connection', () => {
      console.log('ws connected');
    });

    return server;
  },
});

fastifyServer.get('/health', (req, res) => {
  res.send({
    health: 'ok',
  });
});

fastifyServer.listen(8080, () => {
  console.log('server listening on port 8080');
});
