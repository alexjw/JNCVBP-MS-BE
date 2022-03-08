import { Resolver, Query, Mutation, Args, Int, ResolveField, Parent } from "@nestjs/graphql";
import { TrainingsService } from "./trainings.service";
import { Training, TrainingModel } from "./entities/training.entity";
import { CreateTrainingInput } from "./dto/create-training.input";
import { UpdateTrainingInput } from "./dto/update-training.input";
import { VolunteersService } from "../volunteers/volunteers.service";
import { Volunteer, VolunteerModel } from "../volunteers/entities/volunteer.entity";

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

  @ResolveField(() => [Volunteer])
  volunteers(@Parent() training: TrainingModel): Promise<VolunteerModel[]> {
    return this.volunteerService.findMany(training.volunteers.map((volunteer) => volunteer._id));
  }
}
