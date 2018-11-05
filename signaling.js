const WebSocketServer = require('ws').Server;
const port = 3001;
const wsServer = new WebSocketServer({ port: port });
console.log(`WebSocket server started on port ${port}`);

wsServer.on('connection', ws => {
  console.log('-- WebSocket connected --');
  ws.on('message', message => {
    for (const client of wsServer.clients) {
      if (ws === client) {
        console.log('- skip sender -');
      } else {
        client.send(message);
      }
    }
  });
});
