import { Inject, Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Course } from './course.schema';
import { Model } from 'mongoose';
import { CreateCourseDto } from './course.dto';
import { CACHE_MANAGER } from '@nestjs/cache-manager';

@Injectable()
export class CourseService {
  constructor(
    @InjectModel(Course.name) private courseModel: Model<Course>,
    @Inject(CACHE_MANAGER) private cacheManager: Cache,
  ) {}

  async create(create: CreateCourseDto): Promise<Course> {
    const res = new this.courseModel(create);
    return res.save();
  }

  async findAll(page: number = 1, limit: number = 10): Promise<any> {
    const skip = (page - 1) * limit;
    // ambil data dan total hitung secara paralel untuk performa
    const [data, total] = await Promise.all([
      this.courseModel.find().skip(skip).limit(limit).exec(),
      this.courseModel.countDocuments().exec(),
    ]);

    return { data, total };
  }

  async addLesson(courseId: string, lessonData: any) {
    return this.courseModel.findByIdAndUpdate(
      courseId,
      { $push: { lessons: lessonData } }, // Menggunakan operator $push MongoDB
      { new: true },
    );
  }
}
