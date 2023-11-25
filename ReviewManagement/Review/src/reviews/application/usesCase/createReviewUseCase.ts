import { validate } from "class-validator";
import { review } from "../../domain/entities/review";
import { IReviewRepository } from "../../domain/repositories/reviewRepository";
import { ValidatorCreateReview } from "../../domain/validations/reviews";


export class CreateReviewUseCase {
    constructor(readonly reviewRepository: IReviewRepository){}

    async run (
        message: string,
        userId: string,
    ): Promise<review | null | string | Error>{

        let data = new ValidatorCreateReview(message,userId);
        const validation = await validate(data)
        if(validation.length > 0){
            throw new Error(JSON.stringify(validation))
        }

        try{
            const createReview = await this.reviewRepository.createReview(
                message,
                userId
            );

            return createReview;
        }catch (error) {
            return null;
        }
    }
}