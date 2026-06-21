import {
  Body,
  Controller,
  Get,
  Param,
  Post,
  Query,
  UseInterceptors,
} from '@nestjs/common';
import { LoginDto } from './dtos/login.dto';
import { AuthService } from './auth.service';
import { StudentResultsService } from './student-results.service';
import { CacheInterceptor } from '@nestjs/cache-manager';

@Controller('students-results')
export class StudentResultsController {
  constructor(
    private readonly authService: AuthService,
    private readonly studentResultsService: StudentResultsService,
  ) {}

  @UseInterceptors(CacheInterceptor)
  @Post('get-grade')
  public async getStudentResult(
    @Body() loginDto: LoginDto,
  ) {
    return this.authService.searchGrade(loginDto);
  }

  @Get('get-top-10-results')
  public async getTop10Results() {
    return this.studentResultsService.getTop10Results();
  }
}
