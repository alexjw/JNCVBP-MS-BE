import * as mongoose from 'mongoose'
import { Document } from 'mongoose';

export const DutySchema = new mongoose.Schema({
  name: String,
  description: String,
  isDeletable: Boolean
}, { timestamps: true });

export class Duty extends Document {

  _id: string;

  name: string;

  description: string;

  isDeletable: boolean;
}