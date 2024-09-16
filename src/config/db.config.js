import { Sequelize } from "sequelize";
import logger from "./logger";

export const db = new Sequelize('postgres://postgres:1234@127.0.0.1:5432/orderdb', { logging: msg => logger.db(msg)});

export const init = async () => {
    await db.sync().then((value) => {
        logger.info(`Sucesso na conexão com a database.`)
    }).catch((error) => {
        logger.error(`Erro ao se conectar a database, reason: ${error}`)
    });
}
export default {
    db,
    init
}