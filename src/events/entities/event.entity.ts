import { ObjectType, Field } from "@nestjs/graphql";
import { Document, Schema } from "mongoose";
import { ObjectId } from "mongodb";
import { User } from "../../users/entities/user.entity";

/**
 * GraphQL type representing an event.
 *
 * @property {string} id - The ID of the event.
 *
 * @property {string} _id - The MongoDB ID of the event.
 *
 * @property {string} description - The description of the event.
 */
@ObjectType()
export class Event {
  @Field()
  id: string;

  @Field()
  _id: string;

  @Field()
  description: string;

  @Field(() => User, { nullable: true })
  created_by?: User;

  @Field({ nullable: true })
  createdAt: Date;
}

/**
 * Mongoose schema for the Event model.
 *
 * @property {string} description - The description of the event.
 *
 * @property {User} created_by - The user who created the event.
 *
 * @property {boolean} disabled - Whether the event is disabled or not.
 */
export const EventSchema = new Schema(
  {
    description: String,
    created_by: {
      _id: { type: Schema.Types.ObjectId, ref: "User" },
    },
    disabled: { type: Boolean, default: false },
  },
  { timestamps: true }
);

/**
 * Represents an event in the MongoDB database.
 * An event is like a part of a daily log, should be registered frequently.
 *
 * @property {ObjectId} _id - The ID of the event.
 *
 * @property {string} description - The description of the event.
 *
 * @property {User} created_by - The user who created the event.
 *
 * @property {boolean} disabled - Whether the event is disabled or not.
 */
export class EventModel extends Document {
  _id: ObjectId;

  description: string;

  created_by?: { _id: string };
  createdAt: Date;

  disabled: boolean;
}
