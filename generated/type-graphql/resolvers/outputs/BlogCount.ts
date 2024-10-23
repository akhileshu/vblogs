import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { BlogCountTagsArgs } from "./args/BlogCountTagsArgs";

@TypeGraphQL.ObjectType("BlogCount", {})
export class BlogCount {
  Tags!: number;

  @TypeGraphQL.Field(_type => TypeGraphQL.Int, {
    name: "Tags",
    nullable: false
  })
  getTags(@TypeGraphQL.Root() root: BlogCount, @TypeGraphQL.Args() args: BlogCountTagsArgs): number {
    return root.Tags;
  }
}
