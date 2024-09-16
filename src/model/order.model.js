import Sequelize from 'sequelize';
import { db } from '~/config/db.config';

export default db.define('order', {
    id: {
        type: Sequelize.INTEGER,
        autoIncrement: true,
        allowNull: false,
        primaryKey: true
    },
    payment: {
        type: Sequelize.JSON,
        allowNull: false
    },
    fraudCheck: {
        type: Sequelize.BOOLEAN,
        allowNull: false,
    },
    status: {
        type: Sequelize.STRING,
        allowNull: false,
    },
    item: {
        type: Sequelize.JSON,
        allowNull: false,
    },
    value: {
        type: Sequelize.FLOAT,
        allowNull: false,
    },
    billing: {
        type: Sequelize.JSON,
        allowNull: false,
    }
})
