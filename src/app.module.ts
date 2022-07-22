import { Module } from '@nestjs/common';
import { RouterModule } from '@nestjs/core';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { FeedbackModule } from './feedbacks/feedbacks.module';

@Module({
  imports: [
    FeedbackModule,
    RouterModule.register([{
      path: 'api/feedbacks',
      module: FeedbackModule
    }])
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule { }
