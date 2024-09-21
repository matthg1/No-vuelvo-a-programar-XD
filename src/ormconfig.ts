export default () => ({
    type: 'postgres',
    host: process.env.DB_HOST,
    port: (process.env.DB_PORT, 10) || 5432,
    username: process.env.DB_USERNAME,
    password: process.env.DB_PASSWORD,
    database: process.env.DB_DATABASE,
    synchronize: true, // Solo para desarrollo, desactívalo en producción
    entities: ['dist/**/*.entity.js'],
    migrations: ['dist/migrations/*.js'],
  });
  