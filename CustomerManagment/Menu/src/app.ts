import express from "express";
import "dotenv/config";
import { Signale } from 'signale';
import { menuRoute } from "./menu/infraestructure/routers/menuRouters";

const app = express();
const signale = new Signale();

app.use(express.json());
app.use('/api/v1/Menu',menuRoute);

const port = process.env.PORT || 3001;
app.listen(port, () => {
  console.log(`Corriendo en el puerto ${port}`);
});
