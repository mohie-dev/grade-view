import { Controller, Get, Param, Query } from '@nestjs/common';
import { StudentResultsService } from './student-results.service';

@Controller('students-results')
export class StudentResultsController {
  constructor(private studentResultsService: StudentResultsService) { }
}
