import { Module } from "@nestjs/common";
import { DatabaseModule } from "src/database/database.module";
import { feedbackProvider } from "src/providers/feedback.providers";
import { FeedbacksController } from "./feedbacks.controller";
import { FeedbacksService } from "./feedbacks.servise";

@Module({
    imports: [
        DatabaseModule
    ],
    controllers: [FeedbacksController],
    providers: [...feedbackProvider, FeedbacksService],
})

export class FeedbackModule { };