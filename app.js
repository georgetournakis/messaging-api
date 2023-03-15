const express = require('express');
const app = express();
const http = require('http');
const server = http.createServer(app);
const { Server } = require("socket.io");
const io = new Server(server);
const cors = require('cors');

const PORT = 4000;

app.set('view engine', 'pug');
app.set('views','./views');
app.use(cors());

app.get('/', (req, res) => {
    res.send('GET request to the homepage');
});

io.on('connection', (socket) => {
    console.log('a user connected');
});

app.post('/', (req, res) => {
    res.send('POST request to the homepage');
});
server.listen(PORT, () => {
    console.log(`listening on *:${PORT}`);
});

