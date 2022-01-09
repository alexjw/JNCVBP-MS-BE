import { Resolver, Query, Mutation, Args, Int } from '@nestjs/graphql';
import { FireTypeService } from './fire-type.service';
import { FireType } from './entities/fire-type.entity';
import { CreateFireTypeInput } from './dto/create-fire-type.input';
import { UpdateFireTypeInput } from './dto/update-fire-type.input';

@Resolver(() => FireType)
export class FireTypeResolver {
  constructor(private readonly fireTypeService: FireTypeService) {}

  @Mutation(() => FireType)
  createFireType(@Args('createFireTypeInput') createFireTypeInput: CreateFireTypeInput) {
    return this.fireTypeService.create(createFireTypeInput);
  }

  @Query(() => [FireType], { name: 'fireType' })
  findAll() {
    return this.fireTypeService.findAll();
  }

  @Query(() => FireType, { name: 'fireType' })
  findOne(@Args('id') id: string) {
    return this.fireTypeService.findOne(id);
  }

  @Mutation(() => FireType)
  updateFireType(@Args('updateFireTypeInput') updateFireTypeInput: UpdateFireTypeInput) {
    return this.fireTypeService.update(updateFireTypeInput.id, updateFireTypeInput);
  }

  @Mutation(() => FireType)
  removeFireType(@Args('id') id: string) {
    return this.fireTypeService.remove(id);
  }
}
