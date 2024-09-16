import app from './app.js';
import { init } from './config/db.config.js';
import logger from './config/logger.js';

init();

app.listen(4003, ()=> logger.info('Servidor iniciado na porta 4003'))