import { Resolver, Query, Mutation, Args, Int, ResolveField, Parent } from "@nestjs/graphql";
import { CoursesService } from "./courses.service";
import { Course, CourseDetail, CourseModel } from "./entities/course.entity";
import { CreateCourseInput } from "./dto/create-course.input";
import { UpdateCourseInput } from "./dto/update-course.input";
import { VolunteersService } from "../volunteers/volunteers.service";
import { PaginatedCourses } from "./dto/paginated-courses";

@Resolver(() => Course)
export class CoursesResolver {
  constructor(private readonly service: CoursesService, private volunteerService: VolunteersService) {}

  @Mutation(() => Course)
  createCourse(@Args("createCourseInput") createCourseInput: CreateCourseInput) {
    return this.service.create(createCourseInput);
  }

  @Query(() => [Course], { name: "courses" })
  findAll() {
    return this.service.findAll();
  }

  @Query(() => PaginatedCourses, { name: "paginatedCourses" })
  findAllPaginated(
    @Args("limit", { defaultValue: 10 }) limit: number,
    @Args("offset", { defaultValue: 0 }) offset: number,
    @Args("sortField", { defaultValue: "id" }) sortField: string,
    @Args("sortOrder", { defaultValue: "desc" }) sortOrder: string,
    @Args("searchText", { defaultValue: "" }) searchText: string
  ) {
    return this.service.findPaginated(limit, offset, sortField, sortOrder, searchText);
  }

  @Query(() => [Course])
  coursesDisabled() {
    return this.service.findAll(true);
  }

  @Query(() => Course, { name: "course" })
  findOne(@Args("id") id: string) {
    return this.service.findOne(id);
  }

  @Mutation(() => Course)
  updateCourse(@Args("updateCourseInput") updateCourseInput: UpdateCourseInput) {
    return this.service.update(updateCourseInput.id, updateCourseInput);
  }

  @Mutation(() => Course)
  removeCourse(@Args("id") id: string) {
    return this.service.remove(id);
  }

  @Mutation(() => Course)
  restoreCourse(@Args("id") id: string) {
    return this.service.restore(id);
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
