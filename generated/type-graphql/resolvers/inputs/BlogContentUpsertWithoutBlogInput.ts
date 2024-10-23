import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { BlogContentCreateWithoutBlogInput } from "../inputs/BlogContentCreateWithoutBlogInput";
import { BlogContentUpdateWithoutBlogInput } from "../inputs/BlogContentUpdateWithoutBlogInput";
import { BlogContentWhereInput } from "../inputs/BlogContentWhereInput";

@TypeGraphQL.InputType("BlogContentUpsertWithoutBlogInput", {})
export class BlogContentUpsertWithoutBlogInput {
  @TypeGraphQL.Field(_type => BlogContentUpdateWithoutBlogInput, {
    nullable: false
  })
  update!: BlogContentUpdateWithoutBlogInput;

  @TypeGraphQL.Field(_type => BlogContentCreateWithoutBlogInput, {
    nullable: false
  })
  create!: BlogContentCreateWithoutBlogInput;

  @TypeGraphQL.Field(_type => BlogContentWhereInput, {
    nullable: true
  })
  where?: BlogContentWhereInput | undefined;
}
