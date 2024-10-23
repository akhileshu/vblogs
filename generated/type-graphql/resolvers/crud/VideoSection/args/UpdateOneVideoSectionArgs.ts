import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { VideoSectionUpdateInput } from "../../../inputs/VideoSectionUpdateInput";
import { VideoSectionWhereUniqueInput } from "../../../inputs/VideoSectionWhereUniqueInput";

@TypeGraphQL.ArgsType()
export class UpdateOneVideoSectionArgs {
  @TypeGraphQL.Field(_type => VideoSectionUpdateInput, {
    nullable: false
  })
  data!: VideoSectionUpdateInput;

  @TypeGraphQL.Field(_type => VideoSectionWhereUniqueInput, {
    nullable: false
  })
  where!: VideoSectionWhereUniqueInput;
}
