import Server from './classes/server';
import router  from './routes/router';
//import bodyParser from 'body-parser';
var bodyParser = require('body-parser');
//import cors from 'cors';
var cors = require('cors');


const  server = new Server();

//debemos configurar el body parser antes de las rutas
server.app.use( bodyParser.urlencoded({ extended: true }) );
server.app.use( bodyParser.json());

//configuración del cors
server.app.use( cors({ origin: true, credentials: true  }) );

//rutas de servicios
server.app.use('/', router);

server.start( () => {
    console.log(`Servidor corriendo en el puerto ${ server.port }`);
});

