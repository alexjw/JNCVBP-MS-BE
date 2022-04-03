import { ObjectType, Field, Int, GraphQLTimestamp } from "@nestjs/graphql";
import { Volunteer } from "../../volunteers/entities/volunteer.entity";
import { Document, Schema } from "mongoose";
import { ObjectId } from "mongodb";

@ObjectType()
export class Guard {
  @Field()
  id: string;

  @Field(() => GraphQLTimestamp)
  start_time: number;

  @Field(() => GraphQLTimestamp)
  end_time: number;

  @Field(() => [Volunteer], { nullable: true })
  volunteers: Volunteer[];
}

export const GuardSchema = new Schema(
  {
    start_time: Date,
    end_time: Date,
    volunteers: [
      {
        _id: { type: Schema.Types.ObjectId, ref: "Volunteer" },
      },
    ],
  },
  { timestamps: true }
);

export class GuardModel extends Document {
  _id: ObjectId;
  start_time: number;
  end_time: number;
  volunteers: { _id: string }[];
}
