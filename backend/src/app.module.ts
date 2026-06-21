import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { ConfigModule } from '@nestjs/config';
import { dbConfig } from './config/db';
import { MongooseModule } from '@nestjs/mongoose';
import { StudentResultsModule } from './students-results/student-results.module';
import { UploadModule } from './upload/upload.module';
import { CacheModule } from '@nestjs/cache-manager';

@Module({
  imports: [
    CacheModule.register({
      isGlobal: true,
      ttl: 2 * 60 * 60 * 1000, // 2 hours in milliseconds
      max: 400
    }),
    ConfigModule.forRoot({
      isGlobal: true,
    }),
    MongooseModule.forRootAsync(dbConfig),
    StudentResultsModule,
    UploadModule,
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule { }
