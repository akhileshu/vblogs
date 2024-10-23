import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { VideoWhereInput } from "../../../inputs/VideoWhereInput";

@TypeGraphQL.ArgsType()
export class BlogVideoArgs {
  @TypeGraphQL.Field(_type => VideoWhereInput, {
    nullable: true
  })
  where?: VideoWhereInput | undefined;
}
