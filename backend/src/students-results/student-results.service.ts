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
  ) { }

  // This function will create multiple student results in the database.
  public async createMany(
    studentResults: Partial<StudentResult>[],
  ) {
    return this.studentResultModel.insertMany(
      studentResults,
    );
  }

  // This function will replace all the student results in the database.
  public async replaceAll(
    studentResults: Partial<StudentResult>[],
  ) {
    // This function will delete all the student results in the database.
    await this.studentResultModel.deleteMany({});

    // This function will insert all the student results in the database.
    return this.studentResultModel.insertMany(
      studentResults,
    );
  }

  public async getTop10Results() {
    const students = await this.studentResultModel.find({})
      .sort({
        'summary.gpa': -1,
      })
      .limit(10);

    return students.map((student) => ({
      id: student.id,
      name: student.fullName,
      gpa: student.summary.gpa,
    }));
  }
}