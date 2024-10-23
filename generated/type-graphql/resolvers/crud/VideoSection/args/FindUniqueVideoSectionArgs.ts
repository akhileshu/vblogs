import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { VideoSectionWhereUniqueInput } from "../../../inputs/VideoSectionWhereUniqueInput";

@TypeGraphQL.ArgsType()
export class FindUniqueVideoSectionArgs {
  @TypeGraphQL.Field(_type => VideoSectionWhereUniqueInput, {
    nullable: false
  })
  where!: VideoSectionWhereUniqueInput;
}
