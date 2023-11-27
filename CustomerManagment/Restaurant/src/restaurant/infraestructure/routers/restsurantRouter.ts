import express from "express";
import multer from "multer";
import { ResControllerCreate} from "../dependencies";
import { ResControllerGet } from "../dependencies";
import { ResControllerGetId } from "../dependencies";
import { ResControllerGetUser } from "../dependencies";
import { ResControllerInactive } from "../dependencies";
import { ResControllerUpdate } from "../dependencies";
import { ResControllerImage } from "../dependencies";
import { ResControllerLocation } from "../dependencies";
export const restaurantRoute = express.Router();

const storage = multer.diskStorage({
    destination: (req, file, cb) => {
      cb(null, './src/assets');
    },
    filename: (req, file, cb) => {
      const ext = file.originalname.split('.').pop();
      console.log(file.originalname);
      cb(null, `${file.originalname}`);
    },
});

const upload = multer({ storage });

restaurantRoute.post("/create-restaurant/" ,upload.single('image'),ResControllerCreate.createRestaurant.bind(ResControllerCreate));
restaurantRoute.get("/view-restaurants/", ResControllerGet.getRestaurant.bind(ResControllerGet))
restaurantRoute.get("/view-restaurant/:id", ResControllerGetId.getRestaurantId.bind(ResControllerGetId));
restaurantRoute.get("/view-retaurant-user/", ResControllerGetUser.getRestaurantUser.bind(ResControllerGetUser));
restaurantRoute.put("/inactive-restaurant/", ResControllerInactive.inactiveRestaurant.bind(ResControllerInactive));
restaurantRoute.put("/update-restaurant/", upload.single('image'),ResControllerUpdate.updateRestaurant.bind(ResControllerUpdate));
restaurantRoute.get("/view-image/",ResControllerImage.getImageRestaurant.bind(ResControllerImage));
restaurantRoute.get("/view-locationR/",ResControllerLocation.getRestaurantlocation.bind(ResControllerLocation));