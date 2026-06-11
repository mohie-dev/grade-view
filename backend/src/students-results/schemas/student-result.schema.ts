import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { HydratedDocument } from 'mongoose';

import { Subject, SubjectSchema } from './subject.schema';
import { Summary, SummarySchema } from './summary.schema';

export type StudentResultDocument =
  HydratedDocument<StudentResult>;

@Schema({
  timestamps: true,
})
export class StudentResult {
  @Prop({
    required: true,
    index: true,
  })
  seatNumber: string;

  @Prop({
    required: true,
  })
  universityNumber: string;

  @Prop({
    required: true,
  })
  fullName: string;

  @Prop({
    required: true,
  })
  nationalId: string;

  @Prop()
  department: string;

  @Prop()
  level: string;

  @Prop({
    type: [SubjectSchema],
    default: [],
  })
  subjects: Subject[];

  @Prop({
    type: SummarySchema,
  })
  summary: Summary;
}

export const StudentResultSchema =
  SchemaFactory.createForClass(StudentResult);

StudentResultSchema.index({
  seatNumber: 1,
  nationalId: 1,
});