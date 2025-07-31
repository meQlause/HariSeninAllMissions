import { Pool } from 'pg';

const pool = new Pool({
    host: 'localhost',
    user: 'admin',
    password: 'admin',
    database: 'educourse',
    port: 5432,
});

export default pool;
