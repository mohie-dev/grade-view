import { Inject, Injectable, UnauthorizedException } from '@nestjs/common';
import { StudentResult, StudentResultDocument } from './schemas/student-result.schema';
import { LoginDto } from './dtos/login.dto';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import { CACHE_MANAGER } from '@nestjs/cache-manager';
import type { Cache } from 'cache-manager';
@Injectable()
export class AuthService {
    constructor(
        @InjectModel(StudentResult.name)
        private readonly studentResultModel: Model<StudentResultDocument>,
        @Inject(CACHE_MANAGER)
        private cacheManager: Cache,
    ) { }

    public async searchGrade(loginDto: LoginDto) {
        const { seatNumber, nationalId } = loginDto;

        const cacheKey = `result_${seatNumber}_${nationalId}`;
        const cachedResult = await this.cacheManager.get<StudentResultDocument>(cacheKey);

        if (cachedResult) {
            return cachedResult;
        }

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

        // Store in cache for 2 hours
        await this.cacheManager.set(cacheKey, studentResult, 7200000);

        return studentResult;
    }
}
