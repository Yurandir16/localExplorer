import express from "express";
import "dotenv/config";
import { Signale } from 'signale';

import { reviewRoutes } from "./reviews/infraestructure/routers/reviewRouter";
// 
const app = express();
const signale = new Signale();

app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use('/api/v1/reviews', reviewRoutes);



const port = process.env.PORT || 3001;
app.listen(port, () => {
  console.log(`Corriendo en el puerto ${port}`);
});


