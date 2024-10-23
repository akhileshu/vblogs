import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { TagsOnBlogsUpdateWithoutBlogInput } from "../inputs/TagsOnBlogsUpdateWithoutBlogInput";
import { TagsOnBlogsWhereUniqueInput } from "../inputs/TagsOnBlogsWhereUniqueInput";

@TypeGraphQL.InputType("TagsOnBlogsUpdateWithWhereUniqueWithoutBlogInput", {})
export class TagsOnBlogsUpdateWithWhereUniqueWithoutBlogInput {
  @TypeGraphQL.Field(_type => TagsOnBlogsWhereUniqueInput, {
    nullable: false
  })
  where!: TagsOnBlogsWhereUniqueInput;

  @TypeGraphQL.Field(_type => TagsOnBlogsUpdateWithoutBlogInput, {
    nullable: false
  })
  data!: TagsOnBlogsUpdateWithoutBlogInput;
}
