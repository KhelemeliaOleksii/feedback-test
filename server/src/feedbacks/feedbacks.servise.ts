import { Get, Inject, Injectable, NotFoundException } from "@nestjs/common";
import { Feedback } from "src/entity/feedback.entity";
import { DeleteResult, InsertResult, Repository } from "typeorm";

@Injectable()
export class FeedbacksService {
    constructor(@Inject('FEEDBACKS_REPOSITORY')
    private feedbacksRepository: Repository<Feedback>) { }

    async getFeedbacks(): Promise<Feedback[]> {
        return await this.feedbacksRepository.find();
    }

    async addFeedback(feedback: Feedback): Promise<InsertResult> {
        return await this.feedbacksRepository.insert(feedback);
    }

    async findOne(id: string): Promise<Feedback> {
        return await this.feedbacksRepository.findOne({
            where: { id },
        });
    }

    async update(id: string, feedback: Feedback): Promise<Feedback> {
        const feedbackToUpdate = await this.findOne(id);
        if (feedbackToUpdate === undefined) {
            throw new NotFoundException();
        }
        await this.feedbacksRepository.update(id, feedback);
        return this.findOne(id);
    }

    async delete(id: string): Promise<DeleteResult> {
        const feedbackToDelete = await this.findOne(id);
        if (feedbackToDelete === undefined) {
            throw new NotFoundException();
        }
        return await this.feedbacksRepository.delete(id);
    }
}