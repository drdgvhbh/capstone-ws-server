import WebSocket from 'ws';

const wss = new WebSocket.Server({ port: 8080 });

const connections: WebSocket[] = [];

wss.on('connection', function connection(ws) {
  connections.push(ws);
  ws.on('message', function incoming(message) {
    console.log(message);
    for (const connection of connections) {
      connection.send(message);
    }
  });
});
