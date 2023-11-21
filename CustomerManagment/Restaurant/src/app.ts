import express from "express";
import "dotenv/config";
import { Signale } from 'signale';
import { restaurantRoute } from "./restaurant/infraestructure/routers/restsurantRouter";

const app = express();
const signale = new Signale();

app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.use('/api/v1/restaurant', restaurantRoute);


const port = process.env.PORT;
app.listen(port, () => {
  signale.success(`Corriendo en el puerto ${port}`);
});
