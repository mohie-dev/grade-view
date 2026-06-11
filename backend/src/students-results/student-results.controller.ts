import { Body, Controller, Get, Param, Post, Query } from '@nestjs/common';
import { LoginDto } from './dtos/login.dto';
import { AuthService } from './auth.service';

@Controller('students-results')
export class StudentResultsController {
  constructor(
    private readonly authService: AuthService,
  ) {}

  @Post('get-grade')
  public async getStudentResult(
    @Body() loginDto: LoginDto,
  ) {
    return this.authService.searchGrade(loginDto);
  }
}
