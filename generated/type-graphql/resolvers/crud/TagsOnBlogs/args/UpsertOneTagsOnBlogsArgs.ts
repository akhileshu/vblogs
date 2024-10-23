import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { TagsOnBlogsCreateInput } from "../../../inputs/TagsOnBlogsCreateInput";
import { TagsOnBlogsUpdateInput } from "../../../inputs/TagsOnBlogsUpdateInput";
import { TagsOnBlogsWhereUniqueInput } from "../../../inputs/TagsOnBlogsWhereUniqueInput";

@TypeGraphQL.ArgsType()
export class UpsertOneTagsOnBlogsArgs {
  @TypeGraphQL.Field(_type => TagsOnBlogsWhereUniqueInput, {
    nullable: false
  })
  where!: TagsOnBlogsWhereUniqueInput;

  @TypeGraphQL.Field(_type => TagsOnBlogsCreateInput, {
    nullable: false
  })
  create!: TagsOnBlogsCreateInput;

  @TypeGraphQL.Field(_type => TagsOnBlogsUpdateInput, {
    nullable: false
  })
  update!: TagsOnBlogsUpdateInput;
}
