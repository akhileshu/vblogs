import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { VideoUpdateInput } from "../../../inputs/VideoUpdateInput";
import { VideoWhereUniqueInput } from "../../../inputs/VideoWhereUniqueInput";

@TypeGraphQL.ArgsType()
export class UpdateOneVideoArgs {
  @TypeGraphQL.Field(_type => VideoUpdateInput, {
    nullable: false
  })
  data!: VideoUpdateInput;

  @TypeGraphQL.Field(_type => VideoWhereUniqueInput, {
    nullable: false
  })
  where!: VideoWhereUniqueInput;
}
