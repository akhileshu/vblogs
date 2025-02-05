import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { TagsOnBlogsWhereUniqueInput } from "../../../inputs/TagsOnBlogsWhereUniqueInput";

@TypeGraphQL.ArgsType()
export class DeleteOneTagsOnBlogsArgs {
  @TypeGraphQL.Field(_type => TagsOnBlogsWhereUniqueInput, {
    nullable: false
  })
  where!: TagsOnBlogsWhereUniqueInput;
}
