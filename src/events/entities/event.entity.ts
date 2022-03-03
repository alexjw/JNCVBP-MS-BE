import { ObjectType, Field } from "@nestjs/graphql";
import { Volunteer } from "../../volunteers/entities/volunteer.entity";
import { Document, Schema } from "mongoose";

@ObjectType()
export class Event {
  @Field()
  id: string;

  @Field()
  _id: string;

  @Field()
  description: string;

  // This needs to be changed to User, when implemented
  @Field(() => Volunteer, { nullable: true })
  created_by?: Volunteer;
}

export const EventSchema = new Schema({
  description: String,
  created_by: {
    _id: { type: Schema.Types.ObjectId, ref: "Volunteer" },
  },
});

export class EventModel extends Document {
  _id: string;

  description: string;

  created_by?: { _id: string };
}
