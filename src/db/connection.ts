import 'reflect-metadata';
import { createConnection } from 'typeorm';
import Cereals from 'src/entity/cereals.entity';

// DBの設定を.envから取得。
const dbInfo = process.env;
const host = dbInfo.POSTGRES_HOST;
const port = Number(dbInfo.POSTGRES_HOST);
const username = dbInfo.POSTGRES_USER;
const password = dbInfo.POSTGRES_PASSWORD;
const database = dbInfo.POSTGRES_DB;

/**
 * DBに接続する関数
 * @returns
 */
export default async function connection() {
  const connection = await createConnection({
    type: 'postgres',
    host,
    port,
    username,
    password,
    database,
    entities: [Cereals],
    synchronize: false,
    logging: true,
  });

  return connection;
}
