import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { BlogWhereInput } from "../../inputs/BlogWhereInput";

@TypeGraphQL.ArgsType()
export class TopicCountBlogsArgs {
  @TypeGraphQL.Field(_type => BlogWhereInput, {
    nullable: true
  })
  where?: BlogWhereInput | undefined;
}
