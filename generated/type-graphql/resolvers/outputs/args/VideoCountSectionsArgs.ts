import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { VideoSectionWhereInput } from "../../inputs/VideoSectionWhereInput";

@TypeGraphQL.ArgsType()
export class VideoCountSectionsArgs {
  @TypeGraphQL.Field(_type => VideoSectionWhereInput, {
    nullable: true
  })
  where?: VideoSectionWhereInput | undefined;
}
