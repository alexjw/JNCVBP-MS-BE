import * as mongoose from 'mongoose'
import { Document } from 'mongoose';

export const VolunteerSchema = new mongoose.Schema({
  name: String
}, { timestamps: true });

export class Volunteer extends Document{

  _id: string;

  name: string;

}
