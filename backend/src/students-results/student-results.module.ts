import { Module } from '@nestjs/common';
import { MongooseModule } from '@nestjs/mongoose';
import {
  StudentResult,
  StudentResultSchema,
} from './schemas/student-result.schema';
import { StudentResultsService } from './student-results.service';
import { StudentResultsController } from './student-results.controller';
import { AuthService } from './auth.service';

@Module({
  imports: [
    MongooseModule.forFeature([
      {
        name: StudentResult.name,
        schema: StudentResultSchema,
      },
    ]),
  ],
  controllers: [StudentResultsController],
  providers: [StudentResultsService, AuthService],
  exports: [StudentResultsService],
})
export class StudentResultsModule {}