import {
  Controller,
  Get,
  Post,
  Body,
  Patch,
  Param,
  Delete,
} from '@nestjs/common';
import { CourseService } from './course.service';
import { CreateCourseDto, LessonDto } from './course.dto';

@Controller('course')
export class CourseController {
  constructor(private readonly courseService: CourseService) {}

  @Post()
  create(@Body() body: CreateCourseDto) {
    return this.courseService.create(body);
  }

  @Get()
  findAll() {
    return this.courseService.findAll();
  }

  // @Get(':id')
  // findOne(@Param('id') id: string) {
  //   return this.courseService.findOne(+id);
  // }

  @Patch(':id')
  update(@Param('id') id: string, @Body() body: LessonDto) {
    return this.courseService.addLesson(id, body);
  }

  // @Delete(':id')
  // remove(@Param('id') id: string) {
  //   return this.courseService.remove(+id);
  // }
}
