import { Type } from 'class-transformer';
import { IsArray, IsOptional, IsString, ValidateNested } from 'class-validator';

export class LessonDto {
  @IsString()
  title: string;

  @IsOptional()
  @IsString()
  videoUrl: string;
}

export class CreateCourseDto {
  @IsString()
  title: string;

  @IsString()
  description: string;

  @IsArray()
  @IsOptional()
  @ValidateNested({ each: true })
  @Type(() => LessonDto)
  lessons?: LessonDto[];
}
