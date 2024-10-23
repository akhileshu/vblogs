import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { TagsOnBlogsCreateWithoutBlogInput } from "../inputs/TagsOnBlogsCreateWithoutBlogInput";
import { TagsOnBlogsUpdateWithoutBlogInput } from "../inputs/TagsOnBlogsUpdateWithoutBlogInput";
import { TagsOnBlogsWhereUniqueInput } from "../inputs/TagsOnBlogsWhereUniqueInput";

@TypeGraphQL.InputType("TagsOnBlogsUpsertWithWhereUniqueWithoutBlogInput", {})
export class TagsOnBlogsUpsertWithWhereUniqueWithoutBlogInput {
  @TypeGraphQL.Field(_type => TagsOnBlogsWhereUniqueInput, {
    nullable: false
  })
  where!: TagsOnBlogsWhereUniqueInput;

  @TypeGraphQL.Field(_type => TagsOnBlogsUpdateWithoutBlogInput, {
    nullable: false
  })
  update!: TagsOnBlogsUpdateWithoutBlogInput;

  @TypeGraphQL.Field(_type => TagsOnBlogsCreateWithoutBlogInput, {
    nullable: false
  })
  create!: TagsOnBlogsCreateWithoutBlogInput;
}
