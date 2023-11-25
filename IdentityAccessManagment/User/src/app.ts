import express from "express";
import "dotenv/config";
import { Signale } from 'signale';
import { userRoutes } from "./user/infraestructure/routers/userRouter";
const app = express();
const signale = new Signale();

app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.use('/api/v1/users', userRoutes);


const port = process.env.PORT || 3001;
app.listen(port, () => {
  signale.success(`Corriendo en el puerto ${port}`);
});
