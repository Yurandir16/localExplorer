import { RestaurantControllerCreate } from "./controllers/controllerCreatreRestaurant";
import { RestaurantControllerGet } from "./controllers/controllerGetRestaurant";
import { RestaurantRepositoryr } from "./repositories/postgresRepository";
import { CreateRestaurantCase } from "../application/createRestaurantUseCase";
import { getRestaurantCase } from "../application/getrestaurantUseCase";

const createRestaurantRepository = new RestaurantRepositoryr()
const getRestaurantRepository = new RestaurantRepositoryr()

export const createRes = new CreateRestaurantCase(createRestaurantRepository);
export const getRes = new getRestaurantCase(getRestaurantRepository);

export const ResControllerCreate = new RestaurantControllerCreate(createRes);
export const ResControllerGet = new RestaurantControllerGet(getRes);