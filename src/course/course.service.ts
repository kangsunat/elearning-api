import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Course } from './course.schema';
import { Model } from 'mongoose';
import { CreateCourseDto } from './course.dto';

@Injectable()
export class CourseService {
  constructor(@InjectModel(Course.name) private courseModel: Model<Course>) {}

  async create(create: CreateCourseDto): Promise<Course> {
    const res = new this.courseModel(create);
    return res.save();
  }

  async findAll(): Promise<Course[]> {
    return this.courseModel.find().exec();
  }

  async addLesson(courseId: string, lessonData: any) {
    return this.courseModel.findByIdAndUpdate(
      courseId,
      { $push: { lessons: lessonData } }, // Menggunakan operator $push MongoDB
      { new: true },
    );
  }
}
