import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import { Course, CourseDocument } from './schema/course.schema';

@Injectable()
export class CourseService {
  constructor(
    @InjectModel(Course.name) private courseModel: Model<CourseDocument>,
  ) {}

  async create(createCourseDto: any): Promise<Course> {
    const newCourse = new this.courseModel(createCourseDto);
    return newCourse.save();
  }

  async findAll(): Promise<Course[]> {
    return this.courseModel.find().exec();
  }

  // Menambah lesson ke dalam course yang sudah ada (Atomic Update)
  async addLesson(courseId: string, lessonData: any) {
    return this.courseModel.findByIdAndUpdate(
      courseId,
      { $push: { lessons: lessonData } }, // Menggunakan operator $push MongoDB
      { new: true },
    );
  }
}
