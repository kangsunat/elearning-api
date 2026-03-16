import { Inject, Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Course } from './course.schema';
import { Model } from 'mongoose';
import { CreateCourseDto } from './course.dto';
import { CACHE_MANAGER } from '@nestjs/cache-manager';
import type { Cache } from 'cache-manager';

@Injectable()
export class CourseService {
  constructor(
    @InjectModel(Course.name) private courseModel: Model<Course>,
    @Inject(CACHE_MANAGER) private cacheManager: Cache,
  ) {}

  async create(create: CreateCourseDto): Promise<Course> {
    const newCourse = await this.courseModel.create(create);
    await this.cacheManager.clear();
    return newCourse;
  }

  async findAll(page: number = 1, limit: number = 10): Promise<any> {
    // 1. Buat Cache Key yang unik berdasarkan page dan limit
    const cacheKey = `courses_p${page}_l${limit}`;

    // 2. Cek Cache
    const cachedData = await this.cacheManager.get(cacheKey);
    if (cachedData) {
      console.log(`Mengambil dari Cache: ${cacheKey}`);
      return cachedData;
    }

    const skip = (page - 1) * limit;

    // 3. Ambil data dari MongoDB secara paralel
    const [data, total] = await Promise.all([
      this.courseModel
        .find()
        .sort({ createdAt: -1 })
        .skip(skip)
        .limit(limit)
        .exec(),
      this.courseModel.countDocuments().exec(),
    ]);

    const result = {
      data,
      meta: {
        total,
        page,
        limit,
        lastPage: Math.ceil(total / limit),
      },
    };

    // 4. Simpan ke Cache
    await this.cacheManager.set(cacheKey, result);

    return result;
  }

  async addLesson(courseId: string, lessonData: any) {
    return this.courseModel.findByIdAndUpdate(
      courseId,
      { $push: { lessons: lessonData } }, // Menggunakan operator $push MongoDB
      { new: true },
    );
  }
}
