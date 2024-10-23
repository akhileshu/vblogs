import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { VideoSectionCreateInput } from "../../../inputs/VideoSectionCreateInput";

@TypeGraphQL.ArgsType()
export class CreateOneVideoSectionArgs {
  @TypeGraphQL.Field(_type => VideoSectionCreateInput, {
    nullable: false
  })
  data!: VideoSectionCreateInput;
}
