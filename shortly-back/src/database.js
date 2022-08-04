import pg from 'pg';
import dotenv from 'dotenv';

dotenv.config();
const { Pool } = pg;

const user = 'postgres';
const password = 'brandao92167';
const host = 'localhost';
const port = 5432;
const database = 'data_base_shorthly';

const connection = new Pool({
  user,
  password,
  host,
  port,
  database
});

export default connection;