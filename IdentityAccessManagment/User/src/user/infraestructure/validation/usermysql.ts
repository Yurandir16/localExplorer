import { query } from "../../../database/connection";

export async function isEmailRegistered(email: string) {
  const checkEmailSql = "SELECT COUNT(*) as emailCount FROM users WHERE email = ?";

  try {
    const queryResult: any = await query(checkEmailSql, [email]);
    console.log("Resultado de la consulta:", queryResult);

    if (Array.isArray(queryResult) && queryResult.length > 0) {
      const emailResults = queryResult[0];

      if (emailResults.emailCount > 0) {
        throw new Error("El correo electrónico ya está registrado en la base de datos.");
      } else {
        // El correo electrónico no está registrado; continuar con el flujo normal
        // ... tu código aquí ...
      }
    } else {
      // La consulta no devolvió un resultado válido
      throw new Error("Error al consultar la base de datos: respuesta no válida");
    }
  } catch (error) {
    // Manejar errores de la consulta o cualquier otro error
    console.error("Error en la función isEmailRegistered:", error);
    throw error;
  }
}

