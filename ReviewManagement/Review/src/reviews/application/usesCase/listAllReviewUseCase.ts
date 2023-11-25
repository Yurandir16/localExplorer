import { review } from "../../domain/entities/review";
import { IReviewRepository } from "../../domain/repositories/reviewRepository";

export class ListAllReviewUseCase {
    constructor(readonly reviewRepository: IReviewRepository){}
    async getAllReviews(): Promise<review[]> {
        try{
            const reviews = await this.reviewRepository.listAllReviews();
            return reviews || [];
        } catch (error) {
            return []
        }
    }
}