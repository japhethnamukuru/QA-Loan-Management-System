import pg from 'pg';

const connectDatabase = () => {
  return new pg.Pool({
    user: 'postgres',
    password: '1234',
    database: 'lending',
    host: 'localhost',
  });
};

export { connectDatabase };
