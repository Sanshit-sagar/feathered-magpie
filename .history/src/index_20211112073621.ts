import logger from './logger'
import app from './app'

const port = app.get('port');
const server = app.listen(port);

process.on('unhandledRejection', (reason, p) => 
    logger.error(`Unhandled rejection at Promise:`, p, reason); 
);

server.on('listening', () => 
    logger.info('Listening on http://%s:%d', app.get('host'), port)
);