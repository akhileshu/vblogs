import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { VideoSectionCreateInput } from "../../../inputs/VideoSectionCreateInput";
import { VideoSectionUpdateInput } from "../../../inputs/VideoSectionUpdateInput";
import { VideoSectionWhereUniqueInput } from "../../../inputs/VideoSectionWhereUniqueInput";

@TypeGraphQL.ArgsType()
export class UpsertOneVideoSectionArgs {
  @TypeGraphQL.Field(_type => VideoSectionWhereUniqueInput, {
    nullable: false
  })
  where!: VideoSectionWhereUniqueInput;

  @TypeGraphQL.Field(_type => VideoSectionCreateInput, {
    nullable: false
  })
  create!: VideoSectionCreateInput;

  @TypeGraphQL.Field(_type => VideoSectionUpdateInput, {
    nullable: false
  })
  update!: VideoSectionUpdateInput;
}
