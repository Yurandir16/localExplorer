import express from "express";
import { createReviewController,listReviewController } from "../dependencies";


export const reviewRoutes = express.Router();

reviewRoutes.post('/create', createReviewController.run.bind(createReviewController))

reviewRoutes.get('/list', listReviewController.listAllReviews.bind(listReviewController))