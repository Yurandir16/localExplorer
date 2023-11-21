import express from "express";
import { ResControllerCreate} from "../dependencies";
export const restaurantRoute = express.Router();

restaurantRoute.post("/createRestaurant/" ,ResControllerCreate.createRestaurant.bind(ResControllerCreate));