import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { VideoCreateInput } from "../../../inputs/VideoCreateInput";
import { VideoUpdateInput } from "../../../inputs/VideoUpdateInput";
import { VideoWhereUniqueInput } from "../../../inputs/VideoWhereUniqueInput";

@TypeGraphQL.ArgsType()
export class UpsertOneVideoArgs {
  @TypeGraphQL.Field(_type => VideoWhereUniqueInput, {
    nullable: false
  })
  where!: VideoWhereUniqueInput;

  @TypeGraphQL.Field(_type => VideoCreateInput, {
    nullable: false
  })
  create!: VideoCreateInput;

  @TypeGraphQL.Field(_type => VideoUpdateInput, {
    nullable: false
  })
  update!: VideoUpdateInput;
}
