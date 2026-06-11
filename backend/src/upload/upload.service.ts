import { Injectable } from '@nestjs/common';
import { ExcelParserService } from './parsers/excel-parser.service';
import { StudentResultMapper } from './mapper/student-result.mapper';
import { StudentResultsService } from 'src/students-results/student-results.service';

@Injectable()
export class UploadService {
  constructor(
    private readonly excelParserService: ExcelParserService,
    private readonly studentResultsService: StudentResultsService,
  ) { }

  // This function will import the excel file.
  public async import(
    file: Express.Multer.File,
  ) {

    // This function will parse the excel file.
    const rows =
      await this.excelParserService.parse(file);

    // This function will map the raw student rows to StudentResult objects.
    const studentResults: any =
      rows.map((row) =>
        StudentResultMapper.map(row),
      );

    // This function will replace all the student results in the database if any exist.
    const inserted =
      await this.studentResultsService.replaceAll(
        studentResults,
      );

    return {
      count: studentResults.length,
      preview: inserted[0],
    };
  }
}