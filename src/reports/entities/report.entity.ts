import { Field, ObjectType } from "@nestjs/graphql";

/**
 * A GraphQL type representing a sub type count.
 *
 * The sub type count is used to count the number of each sub type situation in a report.
 * We use different types: 10.40, 10.41, 40.43, which every one has their own specifications.
 *
 * @property {string} id - The ID of the sub type.
 * @property {string} name - The name of the sub type.
 * @property {number} count - The count of the sub type.
 */
@ObjectType()
class SubTypeCount {
  @Field()
  id: string;

  @Field()
  name: string;

  @Field()
  count: number;
}

/**
 * A GraphQL type representing a possible cause count.
 *
 * The possible cause count is used to count the number of each possible cause in a report. Example: Electrical Failure x 2
 *
 * @property {string} id - The ID of the possible cause.
 * @property {string} name - The name of the possible cause.
 * @property {number} count - The count of the possible cause.
 */
@ObjectType()
class PossibleCausesCount {
  @Field()
  id: string;

  @Field()
  name: string;

  @Field()
  count: number;
}

/**
 * A GraphQL type representing a detail of a report for sub type 1040.
 *
 * A detail of a report for sub type 1040 is used to count the number of each sub type of situation 1040 in a report.
 * This reflects the units of estate affected, Example: (House: 1)
 *
 * @property {string} id - The ID of the sub type.
 * @property {string} name - The name of the sub type.
 * @property {number} count - The count of the sub type.
 */
@ObjectType()
class Detail1040 {
  @Field({ nullable: true })
  id: string;

  @Field()
  name: string;

  @Field()
  count: number;
}

/**
 * A GraphQL type representing a detail of a report for sub type 1041.
 *
 * A detail of a report for sub type 1041 is used to count the number of each sub type of situation 1041 in a report.
 * This reflects units related to vehicular accidents that were affected, Example: (Car Crash: 1)
 *
 * @property {string} id - The ID of the sub type.
 * @property {string} name - The name of the sub type.
 * @property {number} count - The count of the sub type.
 */
@ObjectType()
class Detail1041 {
  @Field({ nullable: true })
  id: string;

  @Field()
  name: string;

  @Field()
  count: number;
}

/**
 * A GraphQL type representing a detail of a report for sub type 1043.
 *
 * A detail of a report for sub type 1043 is used to count the number of each sub type of situation 1043 in a report.
 * This reflects units related to rescue among others, Example: (Animal Rescue: 1)
 *
 * @property {string} id - The ID of the sub type.
 * @property {string} name - The name of the sub type.
 * @property {number} count - The count of the sub type.
 */
@ObjectType()
class Detail1043 {
  @Field({ nullable: true })
  id: string;

  @Field()
  name: string;

  @Field()
  count: number;
}

/**
 * A GraphQL type representing a detail of a report for damage count.
 *
 * A detail of a report for damage count is used to count the number of each damage detail in a report.
 * Related to Intensity of the damage, Example: (Light: 1)
 *
 * @property {string} id - The ID of the damage count.
 * @property {number} count - The count of the damage count.
 */
@ObjectType()
class DamageCount {
  @Field()
  id: string;

  @Field()
  count: number;
}

@ObjectType()
/**
 * A GraphQL type representing a detail of a report for quantities 1044 count.
 *
 * A detail of a report for quantities 1044 count is used to count the number of each quantity detail in a report.
 * Related to Intensity of Human damage, Example: (dead: 1)
 *
 * @property {string} id - The ID of the quantity count.
 * @property {number} count - The count of the quantity count.
 */
@ObjectType()
class Quantities1044Count {
  @Field()
  id: string;

  @Field()
  count: number;
}

@ObjectType()
/**
 * A GraphQL type representing a detail of a report for resources used count.
 *
 * A detail of a report for resources used count is used to count the number of each resource used in a report.
 * Example: (Water: 1000 liters)
 *
 * @property {string} id - The ID of the resource used count.
 * @property {number} count - The count of the resource used count.
 */
class ResourcesUsedCount {
  @Field()
  id: string;

  @Field()
  count: number;
}

/**
 * A GraphQL type representing a report.
 *
 * A report is a summary of the services done between a range of dates.
 */
@ObjectType()
export class Report {
  @Field(() => Date, { nullable: true })
  date: Date;

  @Field(() => Date, { nullable: true })
  startDate: Date;

  @Field(() => Date, { nullable: true })
  endDate: Date;

  @Field(() => [Detail1040], { nullable: true })
  subTypeCount1040: Detail1040[];

  @Field(() => [Detail1041], { nullable: true })
  subTypeCount1041: Detail1041[];

  @Field(() => [Detail1043], { nullable: true })
  subTypeCount1043: Detail1043[];

  @Field({ nullable: true })
  count1040: Number;

  @Field({ nullable: true })
  count1041: Number;

  @Field({ nullable: true })
  count1043: Number;

  @Field(() => [Detail1040], { nullable: true })
  damageCount: Detail1040[];

  @Field(() => [Detail1040], { nullable: true })
  quantities1044Count1040: Detail1040[];

  @Field(() => [Detail1041], { nullable: true })
  quantities1044Count1041: Detail1041[];

  @Field(() => [Detail1043], { nullable: true })
  quantities1044Count1043: Detail1043[];

  @Field(() => [Detail1040], { nullable: true })
  possibleCausesCount: Detail1040[];

  @Field(() => [Detail1040], { nullable: true })
  resourcesUsedCount1040: Detail1040[];

  @Field(() => [Detail1041], { nullable: true })
  resourcesUsedCount1041: Detail1041[];

  @Field(() => [Detail1041], { nullable: true })
  damage1041Count: Detail1041[];

  @Field(() => [Detail1041], { nullable: true })
  involvedElementsCount: Detail1041[];

  @Field(() => [Detail1041], { nullable: true })
  magnitude1041Count: Detail1041[];

  @Field(() => [Detail1043], { nullable: true })
  rescueTypeCount: Detail1043[];
}
