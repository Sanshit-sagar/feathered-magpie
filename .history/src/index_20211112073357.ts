import logger from './logger'
import app from './app'

const port = app.get('port');
const server = app.listen(port);

process.on('unhandledRejection', {
    
})