import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { HydratedDocument } from 'mongoose';

export type CourseDocument = HydratedDocument<Course>;

@Schema()
export class Lesson {
  @Prop({ required: true })
  title: string;

  @Prop()
  videoUrl: string;

  @Prop()
  duration: number;
}

const LessonSchema = SchemaFactory.createForClass(Lesson);

@Schema({ timestamps: true })
export class Course {
  @Prop({ required: true })
  title: string;

  @Prop()
  description: string;

  @Prop({ default: 'draft', enum: ['draft', 'published', 'archived'] })
  status: string;

  // Kekuatan NoSQL: Lesson disimpan sebagai array objek di dalam Course
  @Prop({ type: [LessonSchema], default: [] })
  lessons: Lesson[];
}

export const CourseSchema = SchemaFactory.createForClass(Course);
