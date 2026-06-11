import { Module } from '@nestjs/common';
import { MongooseModule } from '@nestjs/mongoose';
import {
  StudentResult,
  StudentResultSchema,
} from './schemas/student-result.schema';
import { StudentResultsService } from './student-results.service';

@Module({
  imports: [
    MongooseModule.forFeature([
      {
        name: StudentResult.name,
        schema: StudentResultSchema,
      },
    ]),
  ],
  providers: [StudentResultsService],
  exports: [StudentResultsService],
})
export class StudentResultsModule {}