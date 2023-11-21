import dotenv from "dotenv";
import { Pool } from "pg";
import { Signale } from "signale";

const signale = new Signale();
dotenv.config();

const config = {
    user: 'postgres',
    host: 'localhost',
    database: 'localexplorer',
    password: 'feisima54321',
    port: 5432, // Asegúrate de establecer el puerto correcto
    max: 10, // Número máximo de conexiones en el pool
    idleTimeoutMillis: 30000, // Tiempo máximo en milisegundos que una conexión puede estar inactiva antes de ser liberada
};

const pool = new Pool(config);

export async function query(sql: string, params?: any[]) {
    try {
        const client = await pool.connect();
        signale.success("Conexión exitosa a la BD");

        const result = await client.query(sql, params);
        client.release();
        return result;
    } catch (error) {
        console.log(process.env.DB_HOST); // debería imprimir el host de tu base de datos
        signale.error(error);
        return null;
    }
}
