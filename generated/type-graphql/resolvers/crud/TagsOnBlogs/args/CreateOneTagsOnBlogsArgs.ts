import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { TagsOnBlogsCreateInput } from "../../../inputs/TagsOnBlogsCreateInput";

@TypeGraphQL.ArgsType()
export class CreateOneTagsOnBlogsArgs {
  @TypeGraphQL.Field(_type => TagsOnBlogsCreateInput, {
    nullable: false
  })
  data!: TagsOnBlogsCreateInput;
}
