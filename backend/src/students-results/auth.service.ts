import { Injectable, UnauthorizedException } from '@nestjs/common';
import { StudentResult, StudentResultDocument } from './schemas/student-result.schema';
import { LoginDto } from './dtos/login.dto';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';

@Injectable()
export class AuthService {
    constructor(

        @InjectModel(StudentResult.name)
        private readonly studentResultModel: Model<StudentResultDocument>,

    ) { }

    public async searchGrade(loginDto: LoginDto) {
        const { seatNumber, nationalId } = loginDto;

        // This function will find the student result by seat number and national id.
        const studentResult =
            await this.studentResultModel.findOne({
                seatNumber,
                nationalId,
            });

        // This function will check if the student result is found.
        if (!studentResult) {
            throw new UnauthorizedException('Student result not found');
        }

        return studentResult;
    }
}
