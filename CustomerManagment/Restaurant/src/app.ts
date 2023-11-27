import express from "express";
import "dotenv/config";
import { Signale } from 'signale';
import { restaurantRoute } from "./restaurant/infraestructure/routers/restsurantRouter";

const app = express();
const signale = new Signale();

app.use(express.json());
app.use('/api/v1/Restaurant', restaurantRoute);

const port = process.env.PORT || 3002;
app.listen(port, () => {
  console.log(`Corriendo en el puerto ${port}`);
});

