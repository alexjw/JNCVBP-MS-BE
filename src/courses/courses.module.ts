import { Module } from "@nestjs/common";
import { CoursesService } from "./courses.service";
import { CoursesResolver } from "./courses.resolver";
import { MongooseModule } from "@nestjs/mongoose";
import { VolunteersModule } from "../volunteers/volunteers.module";
import { CourseSchema } from "./entities/course.entity";

/**
 * CoursesModule is the main module for the Courses feature.
 *
 * This module imports the necessary dependencies for the Courses feature.
 *
 * It imports the mongoose module for their respective entity and the other needed Modules.
 * It provides their respective Resolver and Service.
 * It exports their respective Service.
 *
 * @module CoursesModule
 */
@Module({
  imports: [MongooseModule.forFeature([{ name: "Course", schema: CourseSchema }]), VolunteersModule],
  providers: [CoursesResolver, CoursesService],
  exports: [CoursesService],
})
export class CoursesModule {}
