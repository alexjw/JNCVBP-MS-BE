import { Field, ObjectType } from "@nestjs/graphql";

@ObjectType()
class SubTypeCount {
  @Field()
  id: string;

  @Field()
  name: string;

  @Field()
  count: number;
}

@ObjectType()
class PossibleCausesCount {
  @Field()
  id: string;

  @Field()
  name: string;

  @Field()
  count: number;
}

@ObjectType()
class Detail {
  @Field({ nullable: true })
  id: string;

  @Field()
  name: string;

  @Field()
  count: number;
}

@ObjectType()
class DamageCount {
  @Field()
  id: string;

  @Field()
  count: number;
}

@ObjectType()
class Quantities1044Count {
  @Field()
  id: string;

  @Field()
  count: number;
}

@ObjectType()
class ResourcesUsedCount {
  @Field()
  id: string;

  @Field()
  count: number;
}

@ObjectType()
export class Report {
  @Field(() => Date, { nullable: true })
  date: Date;

  @Field(() => Date, { nullable: true })
  startDate: Date;

  @Field(() => Date, { nullable: true })
  endDate: Date;

  @Field(() => [Detail], { nullable: true })
  subTypeCount1040: Detail[];

  @Field(() => [Detail], { nullable: true })
  subTypeCount1041: Detail[];

  @Field(() => [Detail], { nullable: true })
  subTypeCount1043: Detail[];

  @Field({ nullable: true })
  count1040: Number;

  @Field({ nullable: true })
  count1041: Number;

  @Field({ nullable: true })
  count1043: Number;

  @Field(() => [Detail], { nullable: true })
  damageCount: Detail[];

  @Field(() => [Detail], { nullable: true })
  quantities1044Count1040: Detail[];

  @Field(() => [Detail], { nullable: true })
  quantities1044Count1041: Detail[];

  @Field(() => [Detail], { nullable: true })
  quantities1044Count1043: Detail[];

  @Field(() => [Detail], { nullable: true })
  possibleCausesCount: Detail[];

  @Field(() => [Detail], { nullable: true })
  resourcesUsedCount1040: Detail[];

  @Field(() => [Detail], { nullable: true })
  resourcesUsedCount1041: Detail[];

  @Field(() => [Detail], { nullable: true })
  damage1041Count: Detail[];

  @Field(() => [Detail], { nullable: true })
  involvedElementsCount: Detail[];

  @Field(() => [Detail], { nullable: true })
  magnitude1041Count: Detail[];

  @Field(() => [Detail], { nullable: true })
  rescueTypeCount: Detail[];
}
