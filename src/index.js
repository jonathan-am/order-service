import app from './app.js';
import { init } from './config/db.config.js';
import logger from './config/logger.js';
// import { startRedis } from './config/redis.config.js';

// startRedis();
init();

app.listen(4005, ()=> logger.info('Servidor iniciado na porta 4005'))