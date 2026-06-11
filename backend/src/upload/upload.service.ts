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

  async import(
    file: Express.Multer.File,
  ) {

    const rows =
      await this.excelParserService.parse(file);

    const studentResults: any =
      rows.map((row) =>
        StudentResultMapper.map(row),
      );

    const inserted =
      await this.studentResultsService.replaceAll(
        studentResults,

      );

    console.log(
      JSON.stringify(
        inserted[0],
        null,
        2,
      ),
    );

    return {
      count: studentResults.length,
      preview: studentResults[0],
    };
  }
}