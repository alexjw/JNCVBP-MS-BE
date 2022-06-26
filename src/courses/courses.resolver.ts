import { Resolver, Query, Mutation, Args, Int, ResolveField, Parent } from "@nestjs/graphql";
import { CoursesService } from "./courses.service";
import { Course, CourseDetail, CourseModel } from "./entities/course.entity";
import { CreateCourseInput } from "./dto/create-course.input";
import { UpdateCourseInput } from "./dto/update-course.input";
import { VolunteersService } from "../volunteers/volunteers.service";

@Resolver(() => Course)
export class CoursesResolver {
  constructor(private readonly coursesService: CoursesService, private volunteerService: VolunteersService) {}

  @Mutation(() => Course)
  createCourse(@Args("createCourseInput") createCourseInput: CreateCourseInput) {
    return this.coursesService.create(createCourseInput);
  }

  @Query(() => [Course], { name: "courses" })
  findAll() {
    return this.coursesService.findAll();
  }

  @Query(() => [Course])
  coursesDisabled() {
    return this.coursesService.findAll(true);
  }

  @Query(() => Course, { name: "course" })
  findOne(@Args("id") id: string) {
    return this.coursesService.findOne(id);
  }

  @Mutation(() => Course)
  updateCourse(@Args("updateCourseInput") updateCourseInput: UpdateCourseInput) {
    return this.coursesService.update(updateCourseInput.id, updateCourseInput);
  }

  @Mutation(() => Course)
  removeCourse(@Args("id") id: string) {
    return this.coursesService.remove(id);
  }

  @Mutation(() => Course)
  restoreCourse(@Args("id") id: string) {
    return this.coursesService.restore(id);
  }

  @ResolveField(() => [CourseDetail])
  details(@Parent() course: CourseModel) {
    return this.volunteerService
      .findMany(course.details.map((detail) => detail.volunteer._id.toString()))
      .then((res) => {
        const result = [];
        course.details.forEach((detail) => {
          const x = new CourseDetail();
          x.score = detail.score;
          // @ts-ignore
          x.volunteer = res.find((volunteer) => detail.volunteer._id.toString() === volunteer._id.toString());
          result.push(x);
        });
        return result;
      });
  }
}
