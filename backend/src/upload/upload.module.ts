import { Module } from '@nestjs/common';
import { UploadController } from './upload.controller';
import { UploadService } from './upload.service';
import { ExcelParserService } from './parsers/excel-parser.service';
import { StudentResultsModule } from '../students-results/student-results.module';

@Module({
  imports: [
    StudentResultsModule,
  ],
  controllers: [
    UploadController
  ],
  providers: [
    UploadService,
    ExcelParserService,
  ],
})
export class UploadModule { }