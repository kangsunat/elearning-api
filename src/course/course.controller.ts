import {
  Controller,
  Get,
  Post,
  Body,
  Patch,
  Param,
  Delete,
  Query,
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
  findAll(@Query('page') page: number = 1, @Query('limit') limit: number = 10) {
    return this.courseService.findAll(page, limit);
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
