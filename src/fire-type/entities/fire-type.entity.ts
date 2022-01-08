import { ObjectType, Field, Int } from '@nestjs/graphql';
import { Document, Schema } from 'mongoose';

@ObjectType()
export class FireType {

  @Field()
  code: string;

  @Field()
  name: string;

  @Field()
  extra_detail1_label: string;

  @Field()
  extra_detail1_value: string;

  @Field()
  extra_detail2_label: string;

  @Field()
  extra_detail2_value: string;

  @Field()
  extra_detail3_label: string;

  @Field()
  extra_detail3_value: string;

}

export const FireTypeSchema = new Schema({
  code: String,
  name: String,
  extra_detail1_label: String,
  extra_detail1_value: String,
  extra_detail2_label: String,
  extra_detail2_value: String,
  extra_detail3_label: String,
  extra_detail3_value: String
}, { timestamps: true });

export class FireTypeModel extends Document {

  _id: string;

  code: string;
  name: string;
  extra_detail1_label: string;
  extra_detail1_value: string;
  extra_detail2_label: string;
  extra_detail2_value: string;
  extra_detail3_label: string;
  extra_detail3_value: string;

}
