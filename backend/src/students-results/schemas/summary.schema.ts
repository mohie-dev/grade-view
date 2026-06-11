import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';

@Schema({ _id: false })
export class Summary {
  @Prop()
  gpa: number;

  @Prop()
  overallGrade: string;

  @Prop()
  pointsSum: number;

  @Prop()
  assignedHours: number;

  @Prop()
  passedHours: number;
}

export const SummarySchema =
  SchemaFactory.createForClass(Summary);