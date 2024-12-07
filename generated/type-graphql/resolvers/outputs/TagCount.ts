import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { TagCountBlogsArgs } from "./args/TagCountBlogsArgs";

@TypeGraphQL.ObjectType("TagCount", {})
export class TagCount {
  blogs!: number;

  @TypeGraphQL.Field(_type => TypeGraphQL.Int, {
    name: "blogs",
    nullable: false
  })
  getBlogs(@TypeGraphQL.Root() root: TagCount, @TypeGraphQL.Args() args: TagCountBlogsArgs): number {
    return root.blogs;
  }
}
