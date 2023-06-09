import { Prop, Schema, SchemaFactory } from "@nestjs/mongoose";
@Schema()
export class Tag {
  @Prop()
  name: string;
}
export const TagSchema = SchemaFactory.createForClass(Tag);
