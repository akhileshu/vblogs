import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { VideoSectionWhereUniqueInput } from "../../../inputs/VideoSectionWhereUniqueInput";

@TypeGraphQL.ArgsType()
export class DeleteOneVideoSectionArgs {
  @TypeGraphQL.Field(_type => VideoSectionWhereUniqueInput, {
    nullable: false
  })
  where!: VideoSectionWhereUniqueInput;
}
