import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { TagsOnBlogsUpdateInput } from "../../../inputs/TagsOnBlogsUpdateInput";
import { TagsOnBlogsWhereUniqueInput } from "../../../inputs/TagsOnBlogsWhereUniqueInput";

@TypeGraphQL.ArgsType()
export class UpdateOneTagsOnBlogsArgs {
  @TypeGraphQL.Field(_type => TagsOnBlogsUpdateInput, {
    nullable: false
  })
  data!: TagsOnBlogsUpdateInput;

  @TypeGraphQL.Field(_type => TagsOnBlogsWhereUniqueInput, {
    nullable: false
  })
  where!: TagsOnBlogsWhereUniqueInput;
}
