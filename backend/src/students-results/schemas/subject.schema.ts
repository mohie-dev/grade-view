import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';

@Schema({ _id: false })
export class Subject {
  @Prop({ required: true })
  name: string;

  @Prop()
  creditHours: number;

  @Prop()
  mark: number;

  @Prop()
  points: number;

  @Prop()
  grade: string;
}

export const SubjectSchema =
  SchemaFactory.createForClass(Subject);