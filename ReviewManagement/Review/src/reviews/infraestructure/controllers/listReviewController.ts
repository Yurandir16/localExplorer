import { Request, Response } from "express";
import { ListAllReviewUseCase } from "../../application/usecase/listAllReviewUseCase";

export class ReviewsController {
    constructor(
        readonly listAllReviewUseCase: ListAllReviewUseCase,
    ){}

    async listAllReviews(req: Request, res: Response) {
        try{
            const reviews = await this.listAllReviewUseCase.getAllReviews();
            if (reviews && reviews.length > 0) {
                return res.status(200).json({
                  status: 'success',
                  data: reviews,
                  message: 'Lista de pagos obtenida exitosamente',
                });
              }
              return res.status(404).json({
                status: 'error',
                message: 'No se encontraron comentarios',
              });
            } catch (error) {   
              if (error instanceof Error) {
    
                  if (error.message.startsWith('[')) {
                    
                    return res.status(400).send({
                      status: "error",
                      message: "Validation failed",
                      errors: JSON.parse(error.message)
                    });
                  }
                }
                return res.status(500).send({
                  status: "error",
                  message: "An error occurred."
                });
          }
    }
}