require('dotenv').config();

const configDB = () => {
  return {
    username: process.env.DB_USER || '',
    password: process.env.DB_PASSWORD || '',
    database: process.env.DB_NAME || '',
    host: process.env.DB_HOST || '127.0.0.1',
    port: Number(process.env.DB_PORT) || 5432,
    dialect: 'postgres',
    logging: console.log,
    force: true,
    timezone: '+07:00',
  };
}

module.exports = configDB();
