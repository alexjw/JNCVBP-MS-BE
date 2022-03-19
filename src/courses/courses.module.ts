import { Module } from "@nestjs/common";
import { CoursesService } from "./courses.service";
import { CoursesResolver } from "./courses.resolver";
import { MongooseModule } from "@nestjs/mongoose";
import { VolunteersModule } from "../volunteers/volunteers.module";
import { CourseSchema } from "./entities/course.entity";

@Module({
  imports: [MongooseModule.forFeature([{ name: "Course", schema: CourseSchema }]), VolunteersModule],
  providers: [CoursesResolver, CoursesService],
  exports: [CoursesService],
})
export class CoursesModule {}
