import expess from "express";
import multer from 'multer';
import { McontrollerCreate } from "../dependencies";
import { McontrollerGet } from "../dependencies";
import { McontrollerUpdate } from "../dependencies";
import { McontrollerPdf } from "../dependencies";
export const menuRoute = expess.Router();

const storage = multer.diskStorage({
    destination: (req, file, cb) => {
      cb(null, './src/assets/pdf');
    },
    filename: (req, file, cb) => {
      const ext = file.originalname.split('.').pop();
      console.log(file.originalname);
      cb(null, `${file.originalname}`);
    },
});

const upload = multer({ storage });

menuRoute.post("/create-menu/",upload.single('pdf'),McontrollerCreate.createRestaurant.bind(McontrollerCreate));
menuRoute.get("/view-menu/",McontrollerGet.getMenu.bind(McontrollerGet));
menuRoute.put("/update-menu/",upload.single('pdf'),McontrollerUpdate.updateMenu.bind(McontrollerUpdate));
menuRoute.get("/view-pdf",McontrollerPdf.getPdfMenu.bind(McontrollerPdf));