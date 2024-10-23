import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { TagsOnBlogsCreateWithoutBlogInput } from "../inputs/TagsOnBlogsCreateWithoutBlogInput";
import { TagsOnBlogsWhereUniqueInput } from "../inputs/TagsOnBlogsWhereUniqueInput";

@TypeGraphQL.InputType("TagsOnBlogsCreateOrConnectWithoutBlogInput", {})
export class TagsOnBlogsCreateOrConnectWithoutBlogInput {
  @TypeGraphQL.Field(_type => TagsOnBlogsWhereUniqueInput, {
    nullable: false
  })
  where!: TagsOnBlogsWhereUniqueInput;

  @TypeGraphQL.Field(_type => TagsOnBlogsCreateWithoutBlogInput, {
    nullable: false
  })
  create!: TagsOnBlogsCreateWithoutBlogInput;
}
