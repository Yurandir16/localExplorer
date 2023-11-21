import { Pool } from "pg";
import 'dotenv/config';

export const pool2 = new Pool({
  host: process.env.HOST2,
  user: process.env.USER2,
  password: process.env.PASSWORD2 +"",
  database: process.env.DATABASE2,
});

async function checkDatabaseConnection() {
  try {
    const client = await pool2.connect();
    console.log("Conexión a la base de datos establecida correctamente");
    client.release(); // Liberar el cliente después de la validación
  } catch (error) {
    console.error("Error al conectar a la base de datos:", error);
  }
}
 
checkDatabaseConnection();

