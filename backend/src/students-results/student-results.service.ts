import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';

import {
  StudentResult,
  StudentResultDocument,
} from './schemas/student-result.schema';

@Injectable()
export class StudentResultsService {
  constructor(
    @InjectModel(StudentResult.name)
    private readonly studentResultModel: Model<StudentResultDocument>,
  ) {}

  async createMany(
    studentResults: Partial<StudentResult>[],
  ) {
    return this.studentResultModel.insertMany(
      studentResults,
    );
  }

  async replaceAll(
    studentResults: Partial<StudentResult>[],
  ) {
    await this.studentResultModel.deleteMany({});

    return this.studentResultModel.insertMany(
      studentResults,
    );
  }
}