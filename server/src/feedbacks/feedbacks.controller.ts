import { Body, Controller, Delete, Get, Param, Patch, Post } from "@nestjs/common";
import { Feedback } from "src/entity/feedback.entity";
import { DeleteResult } from "typeorm";
import { FeedbacksService } from "./feedbacks.servise";

@Controller()
export class FeedbacksController {
    constructor(private feedbacksService: FeedbacksService) { }

    @Get()
    getAllFeedbacks(): Promise<Feedback[]> {
        return this.feedbacksService.getFeedbacks();
    }

    @Post()
    create(@Body() feedback: Feedback) {
        return this.feedbacksService.addFeedback(feedback);
    }

    @Get(':id')
    getOneFeedback(@Param('id') id: string): Promise<Feedback> {
        return this.feedbacksService.findOne(id);
    }

    @Patch(':id')
    updateFeedback(
        @Param('id') id: string,
        @Body() feedback: Feedback)
        : Promise<Feedback> {
        return this.feedbacksService.update(id, feedback);
    }

    @Delete(':id')
    deleteFeedback(@Param('id') id: string): Promise<DeleteResult> {
        return this.feedbacksService.delete(id);
    }


}
