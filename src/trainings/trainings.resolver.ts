import { Resolver, Query, Mutation, Args, Int, ResolveField, Parent } from "@nestjs/graphql";
import { TrainingsService } from "./trainings.service";
import { Training, TrainingModel } from "./entities/training.entity";
import { CreateTrainingInput } from "./dto/create-training.input";
import { UpdateTrainingInput } from "./dto/update-training.input";
import { VolunteersService } from "../volunteers/volunteers.service";
import { Volunteer, VolunteerModel } from "../volunteers/entities/volunteer.entity";
import { PaginatedTrainings } from "./dto/paginated-trainings";

@Resolver(() => Training)
export class TrainingsResolver {
  constructor(private readonly trainingsService: TrainingsService, private volunteerService: VolunteersService) {}

  @Mutation(() => Training)
  createTraining(@Args("createTrainingInput") createTrainingInput: CreateTrainingInput) {
    return this.trainingsService.create(createTrainingInput);
  }

  @Query(() => [Training], { name: "trainings" })
  findAll() {
    return this.trainingsService.findAll();
  }

  @Query(() => PaginatedTrainings, { name: "paginatedTrainings" })
  findAllPaginated(
    @Args("limit", { defaultValue: 10 }) limit: number,
    @Args("offset", { defaultValue: 0 }) offset: number,
    @Args("sortField", { defaultValue: "id" }) sortField: string,
    @Args("sortOrder", { defaultValue: "desc" }) sortOrder: string,
    @Args("searchText", { defaultValue: "" }) searchText: string,
    @Args("disabled", { defaultValue: false }) disabled: boolean
  ) {
    return this.trainingsService.findPaginated(limit, offset, sortField, sortOrder, searchText, disabled);
  }

  @Query(() => [Training])
  trainingsDisabled() {
    return this.trainingsService.findAll(true);
  }

  @Query(() => Training, { name: "training" })
  findOne(@Args("id") id: string) {
    return this.trainingsService.findOne(id);
  }

  @Mutation(() => Training)
  updateTraining(@Args("updateTrainingInput") updateTrainingInput: UpdateTrainingInput) {
    return this.trainingsService.update(updateTrainingInput.id, updateTrainingInput);
  }

  @Mutation(() => Training)
  removeTraining(@Args("id") id: string) {
    return this.trainingsService.remove(id);
  }

  @Mutation(() => Training)
  restoreTraining(@Args("id") id: string) {
    return this.trainingsService.restore(id);
  }

  @ResolveField(() => [Volunteer])
  volunteers(@Parent() training: TrainingModel): Promise<VolunteerModel[]> {
    return this.volunteerService.findMany(training.volunteers.map((volunteer) => volunteer._id.toString()));
  }
}
